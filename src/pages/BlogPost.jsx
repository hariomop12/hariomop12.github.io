import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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
          <h1 className="font-display font-bold text-4xl text-foreground/40 mb-4">404</h1>
          <p className="text-foreground/50 mb-6">This post doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-[calc(100vh-80px)] py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-foreground/40 hover:text-orange-400 transition-colors mb-8 text-sm"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>

          <header className="mb-12">
            <h1 className="font-display font-extrabold text-3xl md:text-5xl text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/40">
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
              <p className="mt-6 text-lg text-foreground/55 leading-relaxed border-l-2 border-orange-500/50 pl-4">
                {post.description}
              </p>
            )}
          </header>

          <article className="prose-custom">
            <MDXProvider components={MDXComponents}>
              <post.component />
            </MDXProvider>
          </article>

          <footer className="mt-16 pt-8 border-t border-border/50">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Blog
            </Link>
          </footer>
        </motion.div>
      </div>
    </section>
  )
}
