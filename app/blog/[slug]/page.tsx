import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Link
        href="/blog"
        className="text-sm font-medium text-gray-500 hover:text-gray-800"
      >
        ← Blog
      </Link>

      <header className="mt-6">
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
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-lg text-gray-600">{post.excerpt}</p>
      </header>

      <div className="mt-10 space-y-5">
        {post.body.map((para, i) => (
          <p key={i} className="text-gray-700 leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      <div className="mt-12 border-t border-gray-200 pt-6 flex flex-wrap gap-4 text-sm">
        <Link href="/blog" className="font-medium text-gray-600 hover:text-gray-900">
          ← All posts
        </Link>
        <Link href="/" className="font-medium text-gray-600 hover:text-gray-900">
          Dashboard
        </Link>
      </div>
    </div>
  );
}
