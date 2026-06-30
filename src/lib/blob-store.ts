import { promises as fs } from "fs";
import path from "path";
import { get, put } from "@vercel/blob";

// Reviews and blog posts are admin/visitor-editable, so they live in
// persistent storage instead of static TS files. On Vercel the filesystem
// is read-only at runtime, so we use Vercel Blob there. Locally (no
// BLOB_READ_WRITE_TOKEN configured), we fall back to a JSON file under
// /data so `npm run dev` works without any extra setup.
function hasBlobToken(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

function localPath(key: string): string {
  return path.join(process.cwd(), "data", `${key}.json`);
}

export async function readStore<T>(key: string, fallback: T): Promise<T> {
  if (hasBlobToken()) {
    try {
      const result = await get(`${key}.json`, { access: "private" });
      if (!result || result.stream === null) return fallback;
      const text = await new Response(result.stream).text();
      return JSON.parse(text) as T;
    } catch (err) {
      console.error(`blob-store: readStore(${key}) failed, using fallback:`, err);
      return fallback;
    }
  }

  try {
    const raw = await fs.readFile(localPath(key), "utf-8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export async function writeStore<T>(key: string, data: T): Promise<void> {
  const json = JSON.stringify(data, null, 2);

  if (hasBlobToken()) {
    await put(`${key}.json`, json, {
      access: "private",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
    });
    return;
  }

  await fs.mkdir(path.dirname(localPath(key)), { recursive: true });
  await fs.writeFile(localPath(key), json, "utf-8");
}
