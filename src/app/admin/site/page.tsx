import { getSiteConfig } from "@/lib/site-config";
import AdminHeader from "../AdminHeader";
import AdminForm from "./AdminForm";

export default async function AdminSitePage() {
  const config = await getSiteConfig();

  return (
    <div className="min-h-screen bg-background px-6 py-12 text-foreground">
      <div className="mx-auto max-w-5xl">
        <AdminHeader active="/admin/site" />
        <AdminForm config={config} />
      </div>
    </div>
  );
}
