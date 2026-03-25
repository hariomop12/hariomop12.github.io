import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [
        [rehypePrettyCode, {
          theme: 'one-dark-pro',
          keepBackground: false,
        }],
      ],
    }),
    react(),
  ],
  base: './',
})
