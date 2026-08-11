import { useParams, Link } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'
import { format } from 'date-fns'
import { getPostBySlug } from '../lib/blog'
import MDXComponents from '../components/blog/MDXComponents'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-bold text-4xl text-foreground/50 mb-4">404</h1>
          <p className="text-foreground/60 mb-6">This post doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-orange-300"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-[calc(100vh-80px)] py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-foreground/50 hover:text-primary mb-8 text-sm"
        >
          <ArrowLeft size={14} />
          Back to Blog
        </Link>

        <header className="mb-12">
          <h1 className="font-bold text-3xl md:text-5xl mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/50">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {format(post.date, 'MMMM d, yyyy')}
            </span>
            {post.tags && post.tags.length > 0 && (
              <span className="flex items-center gap-1.5">
                <Tag size={14} />
                {post.tags.join(', ')}
              </span>
            )}
          </div>

          {post.description && (
            <p className="mt-6 text-lg text-foreground/60 leading-relaxed border-l-2 border-primary/50 pl-4">
              {post.description}
            </p>
          )}
        </header>

        <article className="prose-custom">
          <MDXProvider components={MDXComponents}>
            <post.component />
          </MDXProvider>
        </article>

        <footer className="mt-16 pt-8 border-t border-border">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-orange-300"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
        </footer>
      </div>
    </section>
  )
}
