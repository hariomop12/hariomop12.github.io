import { cn } from '../../lib/utils'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const headingStyles = {
  h1: 'font-display font-extrabold text-3xl md:text-4xl text-foreground mb-6 mt-12 first:mt-0',
  h2: 'font-display font-bold text-2xl md:text-3xl text-foreground mb-4 mt-10 pb-2 border-b border-border/50',
  h3: 'font-display font-bold text-xl md:text-2xl text-foreground mb-3 mt-8',
  h4: 'font-display font-semibold text-lg text-foreground mb-2 mt-6',
}

function Code({ children, className, ...props }) {
  const match = /language-(\w+)/.exec(className || '')
  const code = String(children).replace(/\n$/, '')

  if (match) {
    return (
      <div className="relative group my-6 rounded-xl overflow-hidden border border-border/30">
        <div className="absolute top-0 left-0 right-0 h-8 bg-[#1e1e2e] border-b border-white/5 flex items-center px-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-3 text-xs text-white/40 font-mono">{match[1]}</span>
        </div>
        <SyntaxHighlighter
          style={oneDark}
          language={match[1]}
          PreTag="div"
          customStyle={{
            margin: 0,
            padding: '3rem 1.5rem 1.5rem',
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
        'px-1.5 py-0.5 rounded-md bg-orange-500/10 text-orange-400 font-mono text-sm',
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
      className={cn('rounded-xl my-6 w-full', className)}
      {...props}
    />
  )
}

function Callout({ children, type = 'info', title }) {
  const styles = {
    info: 'border-orange-500/30 bg-orange-500/5',
    warning: 'border-yellow-500/30 bg-yellow-500/5',
    tip: 'border-green-500/30 bg-green-500/5',
  }

  const icons = {
    info: '💡',
    warning: '⚠️',
    tip: '✨',
  }

  return (
    <div className={cn('my-6 p-4 rounded-xl border', styles[type])}>
      <div className="flex items-center gap-2 mb-2 font-medium text-foreground">
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
      className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors"
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
    <blockquote className="border-l-4 border-orange-500/50 pl-4 my-4 italic text-foreground/60" {...props}>
      {children}
    </blockquote>
  ),
  code: Code,
  pre: Pre,
  img: Image,
  a: A,
  hr: () => <hr className="my-8 border-border/50" />,
  Callout,
}

export default components
