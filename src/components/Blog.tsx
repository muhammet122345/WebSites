"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blog-posts";

export default function Blog({ posts }: { posts: BlogPost[] }) {
  return (
    <section id="blog" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Blog
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Rehberler ve
              <br />
              <span className="text-gradient">ipuçları.</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
          >
            Tümünü Gör
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-3xl border border-line bg-background-elevated"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
