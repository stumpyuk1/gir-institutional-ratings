import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Blog</h1>
      <p className="mt-3 text-lg text-gray-600">
        Notes on ratings, methodology and the state of Britain’s institutions.
      </p>

      <div className="mt-10 space-y-8">
        {sorted.map((post) => (
          <article
            key={post.slug}
            className="border-b border-gray-200 pb-8 last:border-0"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <time dateTime={post.date}>
                {new Date(post.date + "T12:00:00").toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-2 py-0.5 text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="mt-2 text-xl font-semibold text-gray-900">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-[#0B1F3A] transition"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-gray-600 leading-relaxed">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-3 inline-block text-sm font-medium text-[#0B1F3A] hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
