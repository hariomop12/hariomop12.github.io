import { useState, useRef, useEffect } from 'react'
import { Palette, Check, Sun, Moon } from 'lucide-react'
import { themes } from '../lib/themes'
import { useTheme } from './ui/ThemeProvider'
import { cn } from '../lib/utils'

export default function ThemePicker() {
  const [open, setOpen] = useState(false)
  const { mode, toggleTheme, themeId, setThemeId } = useTheme()
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'w-9 h-9 rounded-md flex items-center justify-center text-foreground/60 hover:text-foreground',
          'border border-border hover:border-primary transition-colors',
          open && 'border-primary text-foreground'
        )}
        aria-label="Theme picker"
      >
        <Palette size={16} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-border bg-card shadow-xl z-50 overflow-hidden">
          <div className="p-3 border-b border-border">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Themes</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs text-foreground/60 hover:text-foreground hover:bg-secondary transition-colors"
              >
                {mode === 'dark' ? <Sun size={12} /> : <Moon size={12} />}
                {mode === 'dark' ? 'Light' : 'Dark'}
              </button>
            </div>
          </div>

          <div className="p-2 max-h-[400px] overflow-y-auto">
            <div className="space-y-0.5">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => {
                    setThemeId(theme.id)
                    setOpen(false)
                  }}
                  className={cn(
                    'w-full flex items-center gap-3 px-2 py-1.5 rounded-lg text-left transition-colors',
                    themeId === theme.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/70 hover:bg-secondary'
                  )}
                >
                  <div className="flex gap-1 flex-shrink-0">
                    {theme.swatch.map((color, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-full border border-border/50"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className="text-sm flex-1">{theme.name}</span>
                  {themeId === theme.id && <Check size={14} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
