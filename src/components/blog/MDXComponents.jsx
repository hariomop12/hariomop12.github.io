import { cn } from '../../lib/utils'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const headingStyles = {
  h1: 'font-display font-bold text-3xl md:text-4xl text-foreground mb-6 mt-12 first:mt-0',
  h2: 'font-display font-bold text-2xl md:text-3xl text-foreground mb-4 mt-10 pb-2 border-b border-border',
  h3: 'font-display font-bold text-xl md:text-2xl text-foreground mb-3 mt-8',
  h4: 'font-display font-semibold text-lg text-foreground mb-2 mt-6',
}

function Code({ children, className, ...props }) {
  const match = /language-(\w+)/.exec(className || '')
  const code = String(children).replace(/\n$/, '')

  if (match) {
    return (
      <div className="my-6 rounded-lg overflow-hidden border border-border">
        <div className="flex items-center justify-between px-4 py-2 bg-[#1e1e2e] border-b border-white/5">
          <span className="text-xs text-white/40 font-mono">{match[1]}</span>
        </div>
        <SyntaxHighlighter
          style={oneDark}
          language={match[1]}
          PreTag="div"
          customStyle={{
            margin: 0,
            padding: '1.25rem 1.5rem',
            background: '#1e1e2e',
            fontSize: '0.875rem',
            lineHeight: '1.7',
          }}
          {...props}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    )
  }

  return (
    <code
      className={cn(
        'px-1.5 py-0.5 rounded-md bg-secondary text-primary font-mono text-sm',
        className
      )}
      {...props}
    >
      {children}
    </code>
  )
}

function Pre({ children, ...props }) {
  return <pre {...props}>{children}</pre>
}

function Image({ src, alt, className, ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={cn('rounded-lg my-6 w-full', className)}
      {...props}
    />
  )
}

function Callout({ children, type = 'info', title }) {
  const styles = {
    info: 'border-primary/30 bg-secondary/60',
    warning: 'border-yellow-500/40 bg-yellow-500/10',
    tip: 'border-green-500/40 bg-green-500/10',
  }

  const icons = {
    info: '💡',
    warning: '⚠️',
    tip: '✨',
  }

  return (
    <div className={cn('my-6 p-4 rounded-lg border', styles[type])}>
      <div className="flex items-center gap-2 mb-2 font-medium">
        <span>{icons[type]}</span>
        {title && <span>{title}</span>}
      </div>
      <div className="text-foreground/70">{children}</div>
    </div>
  )
}

function A({ href, children, ...props }) {
  const isExternal = href?.startsWith('http')
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="text-primary hover:text-orange-300 underline underline-offset-2 transition-colors"
      {...props}
    >
      {children}
    </a>
  )
}

const components = {
  h1: ({ children, ...props }) => <h1 className={headingStyles.h1} {...props}>{children}</h1>,
  h2: ({ children, ...props }) => <h2 className={headingStyles.h2} {...props}>{children}</h2>,
  h3: ({ children, ...props }) => <h3 className={headingStyles.h3} {...props}>{children}</h3>,
  h4: ({ children, ...props }) => <h4 className={headingStyles.h4} {...props}>{children}</h4>,
  p: ({ children, ...props }) => <p className="text-foreground/70 leading-relaxed mb-4" {...props}>{children}</p>,
  ul: ({ children, ...props }) => <ul className="list-disc list-inside text-foreground/70 mb-4 space-y-1" {...props}>{children}</ul>,
  ol: ({ children, ...props }) => <ol className="list-decimal list-inside text-foreground/70 mb-4 space-y-1" {...props}>{children}</ol>,
  li: ({ children, ...props }) => <li className="text-foreground/70" {...props}>{children}</li>,
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-4 border-primary/50 pl-4 my-4 italic text-foreground/60" {...props}>
      {children}
    </blockquote>
  ),
  code: Code,
  pre: Pre,
  img: Image,
  a: A,
  hr: () => <hr className="my-8 border-border" />,
  Callout,
}

export default components
