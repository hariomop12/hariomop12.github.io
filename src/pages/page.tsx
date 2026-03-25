import fs from "fs";
import path from "path";
import Link from "next/link";

export default function Blog() {
  const files = fs.readdirSync(path.join(process.cwd(), "content"));

  return (
    <div className="max-w-2xl py-10 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Blog</h1>

      {files.map((file) => {
        const slug = file.replace(".mdx", "");

        return (
          <div key={slug} className="mb-4">
            <Link href={`/blog/${slug}`} className="text-blue-500">
              {slug}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
