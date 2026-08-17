import{a as e,d as t,l as n,o as r,u as i}from"./index-BCY4lTW2.js";var a=e(`calendar`,[[`path`,{d:`M8 2v3`,key:`1ioesn`}],[`path`,{d:`M16 2v3`,key:`otl347`}],[`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,key:`h1oib`}],[`path`,{d:`M3 9h18`,key:`1pudct`}]]),o=t(n(),1),s={},c=o.createContext(s);function l(e){let t=o.useContext(c);return o.useMemo(function(){return typeof e==`function`?e(t):{...t,...e}},[t,e])}function u(e){let t;return t=e.disableParentContext?typeof e.components==`function`?e.components(s):e.components||s:l(e.components),o.createElement(c.Provider,{value:t},e.children)}var ee=i({default:()=>p,frontmatter:()=>te}),d=r(),te={title:`How i build production ready backend in node js`,date:`03-26-2026`,description:`A deep dive into building enterprise grade APIs with TypeScript, PostgreSQLm Prisma, and Docker.`,tags:[`Node.js`,`Backend`,`TypeScript`,`Docker`],published:!0};function f(e){let t={code:`code`,figure:`figure`,h2:`h2`,h3:`h3`,input:`input`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...l(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h2,{children:`The Why`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.p,{children:`Most Node.js tutorials stop at "Hello World." They don't show you how to handle real production concerns: database migrations, structured logging, graceful shutdowns, or environment parity between development and production.`}),`
`,(0,d.jsx)(t.p,{children:`This guide bridges that gap. By the end, you'll have a backend architecture that can survive a traffic spike, a database failure, and a 3 AM page from your monitoring system.`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.h2,{children:`Architecture Overview`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.p,{children:`Nginx/ALB → Node.js (TypeScript) API → PostgreSQL (Prisma) + Redis (Cache) + Winston/Pino (Logging)`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.h2,{children:`TypeScript Setup That Scales`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.p,{children:`Forget ts-node in production. We're building for compile-time safety and runtime performance.
Project Structure`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{children:`src/
├── config/          # Environment validation
├── db/              # Prisma schema & migrations
├── middleware/      # Auth, error handling, validation
├── modules/         # Domain-driven modules
│   ├── users/
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── users.repository.ts
│   │   └── users.routes.ts
│   └── posts/
├── utils/           # Logger, validators, helpers
├── types/           # Global TypeScript definitions
└── index.ts         # Application entry

tests/
├── integration/
└── unit/

docker/
├── Dockerfile
├── Dockerfile.dev
└── docker-compose.yml
`})}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.p,{children:`TypeScript Configuration`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`TypeScript`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`TypeScript`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// tsconfig.json`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`{`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  "compilerOptions": {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "target": "ES2022",`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "module": "NodeNext",`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "moduleResolution": "NodeNext",`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "lib": ["ES2022"],`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "outDir": "./dist",`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "rootDir": "./src",`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "strict": true,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "esModuleInterop": true,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "skipLibCheck": true,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "forceConsistentCasingInFileNames": true,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "resolveJsonModule": true,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "declaration": true,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "declarationMap": true,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "sourceMap": true,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "noUnusedLocals": true,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "noUnusedParameters": true,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "noImplicitReturns": true,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "noFallthroughCasesInSwitch": true,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "baseUrl": ".",`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "paths": {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      "@/*": ["src/*"],`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      "@config/*": ["src/config/*"],`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      "@modules/*": ["src/modules/*"]`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  },`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  "include": ["src/**/*"],`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  "exclude": ["node_modules", "dist", "tests"]`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`}`})})]})})}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.h2,{children:`Package Scripts`}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`TypeScript`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`TypeScript`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`{`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  "scripts": {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "dev": "tsx watch src/index.ts",`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "build": "tsc",`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "start": "node dist/index.js",`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "db:migrate": "prisma migrate dev",`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "db:deploy": "prisma migrate deploy",`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "db:generate": "prisma generate",`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "db:seed": "tsx src/db/seed.ts",`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "db:studio": "prisma studio",`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "lint": "eslint src --ext .ts",`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "test": "vitest",`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    "test:coverage": "vitest run --coverage"`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`}`})})]})})}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.p,{children:`Key decision: tsx for development (fast, no compilation step), tsc for production (optimized, type-safe builds).`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.h2,{children:`Step 2: Environment Configuration with Validation`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`TypeScript`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`TypeScript`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// src/config/env.ts`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { z } from 'zod';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`const envSchema = z.object({`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  PORT: z.string().transform(Number).default('3000'),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  DATABASE_URL: z.string().url(),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  REDIS_URL: z.string().url().optional(),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  JWT_SECRET: z.string().min(32),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  JWT_EXPIRES_IN: z.string().default('7d'),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'debug']).default('info'),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  RATE_LIMIT_WINDOW_MS: z.string().transform(Number).default('900000'),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  RATE_LIMIT_MAX_REQUESTS: z.string().transform(Number).default('100'),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`});`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`export type Env = z.infer<typeof envSchema>;`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`export const env = envSchema.parse(process.env);`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// Fail fast on invalid config`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`if (!env) {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  throw new Error('Invalid environment configuration');`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`}`})})]})})}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.p,{children:`Why this matters: Your app crashes immediately on startup if DATABASE_URL is missing, not 10 requests later when someone tries to log in.`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.h2,{children:`Step 3: PostgreSQL + Prisma ORM`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.p,{children:`Prisma gives us type-safe database access, automatic migrations, and excellent introspection tools.`}),`
`,(0,d.jsx)(t.h2,{children:`Schema Design`}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`TypeScript`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`TypeScript`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// prisma/schema.prisma`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`generator client {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  provider = "prisma-client-js"`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`}`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`datasource db {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  provider = "postgresql"`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  url      = env("DATABASE_URL")`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`}`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`model User {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  id        String   @id @default(cuid())`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  email     String   @unique`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  password  String   // hashed with bcrypt`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  name      String?`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  role      Role     @default(USER)`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  posts     Post[]`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  createdAt DateTime @default(now()) @map("created_at")`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  updatedAt DateTime @updatedAt @map("updated_at")`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  @@index([email])`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  @@map("users")`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`}`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`model Post {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  id          String    @id @default(cuid())`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  title       String`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  slug        String    @unique`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  content     String`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  published   Boolean   @default(false)`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  authorId    String    @map("author_id")`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  author      User      @relation(fields: [authorId], references: [id])`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  tags        Tag[]`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  viewCount   Int       @default(0) @map("view_count")`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  createdAt   DateTime  @default(now()) @map("created_at")`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  updatedAt   DateTime  @updatedAt @map("updated_at")`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  @@index([slug])`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  @@index([published, createdAt])`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  @@map("posts")`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`}`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`model Tag {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  id    String @id @default(cuid())`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  name  String @unique`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  posts Post[]`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`}`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`enum Role {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  USER`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  ADMIN`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  MODERATOR`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`}`})})]})})}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.h2,{children:`Database Client with Connection Pooling`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`TypeScript`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`TypeScript`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// src/db/client.ts`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { PrismaClient } from '@prisma/client';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { env } from '@/config/env.js';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`const globalForPrisma = globalThis as unknown as {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  prisma: PrismaClient | undefined;`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`};`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`export const prisma =`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  globalForPrisma.prisma ??`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  new PrismaClient({`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    log: env.NODE_ENV === 'development' `})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      ? ['query', 'error', 'warn'] `})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      : ['error'],`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`if (env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// Graceful shutdown`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`process.on('beforeExit', async () => {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  await prisma.$disconnect();`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`});`})})]})})}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.h2,{children:`Repository Pattern Keep your database logic isolated and testable:`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`TypeScript`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`TypeScript`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// src/modules/users/users.repository.ts`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { prisma } from '@/db/client.js';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import type { Prisma, User } from '@prisma/client';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`export class UserRepository {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  async findById(id: string): Promise<User | null> {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    return prisma.user.findUnique({ where: { id } });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  async findByEmail(email: string): Promise<User | null> {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    return prisma.user.findUnique({ where: { email } });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  async create(data: Prisma.UserCreateInput): Promise<User> {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    return prisma.user.create({ data });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  async update(id: string, data: Prisma.UserUpdateInput): Promise<User> {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    return prisma.user.update({ where: { id }, data });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  async delete(id: string): Promise<User> {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    return prisma.user.delete({ where: { id } });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  // Pagination with cursor-based pagination for performance`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  async findMany(params: {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    cursor?: string;`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    take?: number;`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    skip?: number;`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    where?: Prisma.UserWhereInput;`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  }): Promise<User[]> {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    const { cursor, take = 20, skip = 0, where } = params;`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    `})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    return prisma.user.findMany({`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      take,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      skip,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      cursor: cursor ? { id: cursor } : undefined,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      where,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      orderBy: { createdAt: 'desc' },`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`}`})})]})})}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.h3,{children:`Step 4: Structured Logging & Error Handling`}),`
`,(0,d.jsx)(t.p,{children:`Winston Logger Configuration`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`TypeScript`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`TypeScript`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// src/utils/logger.ts`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import winston from 'winston';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { env } from '@/config/env.js';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`const { combine, timestamp, json, errors, printf, colorize } = winston.format;`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// Custom format for development`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`const devFormat = printf(({ level, message, timestamp, stack, ...metadata }) => {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:"  let msg = `${timestamp} [${level}]: ${message}`;"})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  if (Object.keys(metadata).length > 0) {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:"    msg += ` ${JSON.stringify(metadata)}`;"})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  if (stack) {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:"    msg += `\\n${stack}`;"})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  return msg;`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`});`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`export const logger = winston.createLogger({`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  level: env.LOG_LEVEL,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  defaultMeta: { service: 'api' },`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  format: combine(`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    timestamp(),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    errors({ stack: true }),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    env.NODE_ENV === 'production' ? json() : combine(colorize(), devFormat)`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  ),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  transports: [`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    new winston.transports.Console(),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    // Add File transport for production`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    ...(env.NODE_ENV === 'production' `})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      ? [`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`          new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`          new winston.transports.File({ filename: 'logs/combined.log' }),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`        ]`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      : []),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  ],`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  // Don't exit on uncaught errors`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  exitOnError: false,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`});`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// Request context logger`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`export const createRequestLogger = (requestId: string) => {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  return logger.child({ requestId });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`};`})})]})})}),`
`,(0,d.jsx)(t.h3,{children:`Global Error Handling`}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`TypeScript`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`TypeScript`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// src/middleware/errorHandler.ts`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import type { Request, Response, NextFunction } from 'express';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { ZodError } from 'zod';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { Prisma } from '@prisma/client';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { logger } from '@/utils/logger.js';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`export class AppError extends Error {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  constructor(`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    public statusCode: number,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    public message: string,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    public isOperational = true,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    public code?: string`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  ) {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    super(message);`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    Object.setPrototypeOf(this, AppError.prototype);`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`}`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`export const errorHandler = (`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  err: Error,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  req: Request,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  res: Response,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  _next: NextFunction`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`) => {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  const requestId = req.headers['x-request-id'] as string || 'unknown';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  const log = logger.child({ requestId, path: req.path, method: req.method });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  // Handle known error types`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  if (err instanceof AppError) {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    log.warn({ err, statusCode: err.statusCode }, 'Operational error');`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    return res.status(err.statusCode).json({`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      success: false,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      error: {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`        message: err.message,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`        code: err.code,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      },`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  if (err instanceof ZodError) {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    log.warn({ errors: err.errors }, 'Validation error');`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    return res.status(400).json({`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      success: false,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      error: {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`        message: 'Validation failed',`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`        details: err.errors.map(e => ({`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`          path: e.path.join('.'),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`          message: e.message,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`        })),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      },`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  // Prisma errors`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  if (err instanceof Prisma.PrismaClientKnownRequestError) {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    log.error({ code: err.code, meta: err.meta }, 'Database error');`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    `})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    if (err.code === 'P2002') {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      return res.status(409).json({`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`        success: false,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`        error: { message: 'Resource already exists' },`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    `})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    if (err.code === 'P2025') {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      return res.status(404).json({`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`        success: false,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`        error: { message: 'Resource not found' },`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  // Unknown errors - don't leak details`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  log.error({ err }, 'Unexpected error');`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  `})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  return res.status(500).json({`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    success: false,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    error: {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      message: env.NODE_ENV === 'production' `})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`        ? 'Internal server error' `})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`        : err.message,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    },`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`};`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `})]})})}),`
`,(0,d.jsx)(t.h3,{children:`Step 5: Express App Setup`}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`TypeScript`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`TypeScript`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// src/app.ts`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import express from 'express';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import helmet from 'helmet';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import cors from 'cors';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import rateLimit from 'express-rate-limit';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import compression from 'compression';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { v4 as uuidv4 } from 'uuid';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { env } from '@/config/env.js';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { errorHandler } from '@/middleware/errorHandler.js';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { requestLogger } from '@/middleware/requestLogger.js';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { healthRouter } from '@/modules/health/health.routes.js';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { userRouter } from '@/modules/users/users.routes.js';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`const app = express();`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// Security middleware`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`app.use(helmet());`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`app.use(cors({`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  origin: env.NODE_ENV === 'production' `})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    ? ['https://yourdomain.com'] `})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    : '*',`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  credentials: true,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`}));`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// Rate limiting`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`app.use(rateLimit({`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  windowMs: env.RATE_LIMIT_WINDOW_MS,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  max: env.RATE_LIMIT_MAX_REQUESTS,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  standardHeaders: true,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  legacyHeaders: false,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  handler: (req, res) => {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    res.status(429).json({`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      success: false,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      error: { message: 'Too many requests, please try again later' },`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  },`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`}));`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// Request ID for tracing`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`app.use((req, res, next) => {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  req.id = req.headers['x-request-id'] as string || uuidv4();`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  res.setHeader('X-Request-Id', req.id);`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  next();`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`});`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// Body parsing & compression`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`app.use(express.json({ limit: '10mb' }));`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`app.use(express.urlencoded({ extended: true }));`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`app.use(compression());`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// Logging`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`app.use(requestLogger);`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// Health check (before auth)`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`app.use('/health', healthRouter);`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// API routes`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`app.use('/api/v1/users', userRouter);`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`app.use('/api/v1/posts', postRouter);`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// 404 handler`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`app.use((req, res) => {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  res.status(404).json({`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    success: false,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    error: { message: 'Route not found' },`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`});`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// Global error handler`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`app.use(errorHandler);`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`export { app };`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `})]})})}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`TypeScript`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`TypeScript`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// src/index.ts`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { app } from './app.js';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { env } from '@/config/env.js';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { logger } from '@/utils/logger.js';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { prisma } from '@/db/client.js';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`const server = app.listen(env.PORT, () => {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:"  logger.info(`Server running on port ${env.PORT} in ${env.NODE_ENV} mode`);"})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`});`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// Graceful shutdown`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`const gracefulShutdown = async (signal: string) => {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:"  logger.info(`${signal} received. Starting graceful shutdown...`);"})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  `})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  server.close(async () => {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    logger.info('HTTP server closed');`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    `})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    await prisma.$disconnect();`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    logger.info('Database connections closed');`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    `})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    process.exit(0);`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  // Force shutdown after 30s`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  setTimeout(() => {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    logger.error('Forced shutdown');`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    process.exit(1);`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  }, 30000);`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`};`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`process.on('SIGINT', () => gracefulShutdown('SIGINT'));`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// Handle uncaught exceptions`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`process.on('uncaughtException', (err) => {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  logger.fatal({ err }, 'Uncaught exception');`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  process.exit(1);`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`});`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`process.on('unhandledRejection', (reason) => {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  logger.fatal({ reason }, 'Unhandled rejection');`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  process.exit(1);`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`});`})})]})})}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.h3,{children:`Step 6: Docker Configuration`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.p,{children:`Multi-stage Dockerfile`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`Dockerfile`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`Dockerfile`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`# docker/Dockerfile`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`# Stage 1: Dependencies`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`FROM node:20-alpine AS deps`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`RUN apk add --no-cache libc6-compat openssl`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`WORKDIR /app`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`COPY package.json package-lock.json* ./`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`RUN npm ci --only=production`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`# Stage 2: Builder`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`FROM node:20-alpine AS builder`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`WORKDIR /app`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`COPY package.json package-lock.json* ./`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`RUN npm ci`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`COPY . .`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`RUN npm run db:generate`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`RUN npm run build`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`# Stage 3: Runner`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`FROM node:20-alpine AS runner`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`WORKDIR /app`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`ENV NODE_ENV=production`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`RUN addgroup --system --gid 1001 nodejs`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`RUN adduser --system --uid 1001 nodejs`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`# Copy only necessary files`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`COPY --from=deps /app/node_modules ./node_modules`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`COPY --from=builder /app/dist ./dist`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`COPY --from=builder /app/prisma ./prisma`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`COPY --from=builder /app/package.json ./package.json`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`# Generate Prisma client for production`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`RUN npx prisma generate`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`USER nodejs`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`EXPOSE 3000`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`ENV PORT=3000`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`CMD ["node", "dist/index.js"]`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:"```Dockerfile"})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`# docker-compose.yml`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`services:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  api:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    build:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      context: .`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      dockerfile: docker/Dockerfile.dev`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    ports:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - "3000:3000"`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    environment:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - NODE_ENV=development`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - DATABASE_URL=postgresql://postgres:postgres@db:5432/app?schema=public`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - REDIS_URL=redis://redis:6379`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - JWT_SECRET=dev-secret-change-in-production`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    volumes:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - .:/app`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - /app/node_modules`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    depends_on:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      db:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`        condition: service_healthy`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      redis:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`        condition: service_started`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    command: npm run dev`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  db:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    image: postgres:16-alpine`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    environment:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      POSTGRES_USER: postgres`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      POSTGRES_PASSWORD: postgres`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      POSTGRES_DB: app`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    ports:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - "5432:5432"`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    volumes:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - postgres_data:/var/lib/postgresql/data`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    healthcheck:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      test: ["CMD-SHELL", "pg_isready -U postgres"]`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      interval: 5s`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      timeout: 5s`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      retries: 5`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  redis:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    image: redis:7-alpine`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    ports:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - "6379:6379"`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    volumes:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - redis_data:/data`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  # Adminer for database management (dev only)`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  adminer:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    image: adminer`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    ports:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - "8080:8080"`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    depends_on:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - db`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`volumes:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  postgres_data:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  redis_data:`})})]})})}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.p,{children:`Production Docker Compose`}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`Dockerfile`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`Dockerfile`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`# docker-compose.prod.yml`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`version: '3.8'`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`services:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  api:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    build:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      context: .`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      dockerfile: docker/Dockerfile`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    environment:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - NODE_ENV=production`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:"      - DATABASE_URL=${DATABASE_URL}"})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:"      - REDIS_URL=${REDIS_URL}"})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:"      - JWT_SECRET=${JWT_SECRET}"})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - LOG_LEVEL=info`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    depends_on:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - db`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - redis`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    deploy:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      replicas: 2`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      restart_policy:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`        condition: on-failure`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    healthcheck:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:3000/health"]`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      interval: 30s`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      timeout: 10s`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      retries: 3`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  db:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    image: postgres:16-alpine`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    environment:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:"      POSTGRES_USER: ${DB_USER}"})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:"      POSTGRES_PASSWORD: ${DB_PASSWORD}"})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:"      POSTGRES_DB: ${DB_NAME}"})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    volumes:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - postgres_data:/var/lib/postgresql/data`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - ./backups:/backups`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    command: `})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - "postgres"`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - "-c"`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - "max_connections=200"`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - "-c"`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - "shared_buffers=2GB"`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    deploy:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      resources:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`        limits:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`          memory: 4G`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  redis:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    image: redis:7-alpine`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    command: redis-server --appendonly yes --maxmemory 512mb --maxmemory-policy allkeys-lru`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    volumes:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - redis_data:/data`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  nginx:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    image: nginx:alpine`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    ports:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - "80:80"`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - "443:443"`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    volumes:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - ./nginx/ssl:/etc/nginx/ssl:ro`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    depends_on:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      - api`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`volumes:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  postgres_data:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  redis_data:`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `})]})})}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.p,{children:`Step 7: Health Checks & Monitoring`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`TypeScript`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`TypeScript`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`// src/modules/health/health.controller.ts`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { prisma } from '@/db/client.js';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import { logger } from '@/utils/logger.js';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`import type { Request, Response } from 'express';`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`export const healthController = {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  async liveness(req: Request, res: Response) {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  },`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  async readiness(req: Request, res: Response) {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    const checks = {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      database: false,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      // redis: false, // Add if using Redis`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    };`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    try {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      // Database check`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:"      await prisma.$queryRaw`SELECT 1`;"})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      checks.database = true;`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    } catch (error) {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      logger.error({ error }, 'Database health check failed');`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    const isHealthy = Object.values(checks).every(Boolean);`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    res.status(isHealthy ? 200 : 503).json({`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      status: isHealthy ? 'ready' : 'not ready',`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      checks,`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      timestamp: new Date().toISOString(),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  },`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  async metrics(req: Request, res: Response) {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    // Basic metrics - replace with Prometheus in production`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    const metrics = {`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      uptime: process.uptime(),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      memory: process.memoryUsage(),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      cpu: process.cpuUsage(),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`      timestamp: Date.now(),`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    };`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    res.json(metrics);`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`  },`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`};`})})]})})}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.h2,{children:`Production Checklist`}),`
`,(0,d.jsx)(t.p,{children:`Before deploying:`}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsxs)(t.ul,{className:`contains-task-list`,children:[`
`,(0,d.jsxs)(t.li,{className:`task-list-item`,children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,(0,d.jsx)(t.strong,{children:`Security`}),(0,d.jsx)(`br`,{})]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Helmet`,(0,d.jsx)(`br`,{})]}),`
`,(0,d.jsxs)(t.li,{children:[`CORS`,(0,d.jsx)(`br`,{})]}),`
`,(0,d.jsxs)(t.li,{children:[`Rate limiting`,(0,d.jsx)(`br`,{})]}),`
`,(0,d.jsxs)(t.li,{children:[`Input validation`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{})]}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{className:`task-list-item`,children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,(0,d.jsx)(t.strong,{children:`Database`}),(0,d.jsx)(`br`,{})]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Migrations run automatically`,(0,d.jsx)(`br`,{})]}),`
`,(0,d.jsxs)(t.li,{children:[`Connection pooling configured`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{})]}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{className:`task-list-item`,children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,(0,d.jsx)(t.strong,{children:`Logging`}),(0,d.jsx)(`br`,{})]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Structured JSON logs`,(0,d.jsx)(`br`,{})]}),`
`,(0,d.jsxs)(t.li,{children:[`Correlation IDs`,(0,d.jsx)(`br`,{})]}),`
`,(0,d.jsxs)(t.li,{children:[`No sensitive data in logs`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{})]}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{className:`task-list-item`,children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,(0,d.jsx)(t.strong,{children:`Error Handling`}),(0,d.jsx)(`br`,{})]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Operational vs programming errors clearly distinguished`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{})]}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{className:`task-list-item`,children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,(0,d.jsx)(t.strong,{children:`Health Checks`}),(0,d.jsx)(`br`,{})]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Liveness probe configured`,(0,d.jsx)(`br`,{})]}),`
`,(0,d.jsxs)(t.li,{children:[`Readiness probe configured`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{})]}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{className:`task-list-item`,children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,(0,d.jsx)(t.strong,{children:`Graceful Shutdown`}),(0,d.jsx)(`br`,{})]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`30s timeout`,(0,d.jsx)(`br`,{})]}),`
`,(0,d.jsxs)(t.li,{children:[`Connections drained properly`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{})]}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{className:`task-list-item`,children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,(0,d.jsx)(t.strong,{children:`Environment`}),(0,d.jsx)(`br`,{})]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`All secrets stored in environment variables`,(0,d.jsx)(`br`,{})]}),`
`,(0,d.jsxs)(t.li,{children:[`Validation on startup`,(0,d.jsx)(`br`,{}),(0,d.jsx)(`br`,{})]}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{className:`task-list-item`,children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.input,{type:`checkbox`,disabled:!0}),` `,(0,d.jsx)(t.strong,{children:`Monitoring`}),(0,d.jsx)(`br`,{})]}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Metrics endpoint exposed`,(0,d.jsx)(`br`,{})]}),`
`,(0,d.jsx)(t.li,{children:`Alerting rules configured`}),`
`]}),`
`]}),`
`]}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(`div`,{className:`overflow-x-auto`,children:(0,d.jsxs)(`table`,{className:`w-full border border-gray-700 text-sm`,children:[(0,d.jsx)(`thead`,{className:`bg-gray-900`,children:(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`th`,{className:`border px-4 py-2`,children:`Feature`}),(0,d.jsx)(`th`,{className:`border px-4 py-2`,children:`Implementation`}),(0,d.jsx)(`th`,{className:`border px-4 py-2`,children:`Benefit`})]})}),(0,d.jsxs)(`tbody`,{children:[(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`border px-4 py-2 font-semibold`,children:`Type Safety`}),(0,d.jsx)(`td`,{className:`border px-4 py-2`,children:`TypeScript + Zod + Prisma`}),(0,d.jsx)(`td`,{className:`border px-4 py-2`,children:`Catch errors at compile time and runtime`})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`border px-4 py-2 font-semibold`,children:`Database`}),(0,d.jsx)(`td`,{className:`border px-4 py-2`,children:`PostgreSQL + Prisma`}),(0,d.jsx)(`td`,{className:`border px-4 py-2`,children:`ACID compliance, type-safe queries, easy migrations`})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`border px-4 py-2 font-semibold`,children:`Dev/Prod Parity`}),(0,d.jsx)(`td`,{className:`border px-4 py-2`,children:`Docker Compose`}),(0,d.jsx)(`td`,{className:`border px-4 py-2`,children:`Works on my machine → Works in production`})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`border px-4 py-2 font-semibold`,children:`Observability`}),(0,d.jsx)(`td`,{className:`border px-4 py-2`,children:`Winston + Request IDs`}),(0,d.jsx)(`td`,{className:`border px-4 py-2`,children:`Debug production issues in minutes, not hours`})]}),(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{className:`border px-4 py-2 font-semibold`,children:`Scalability`}),(0,d.jsx)(`td`,{className:`border px-4 py-2`,children:`Stateless design, connection pooling`}),(0,d.jsx)(`td`,{className:`border px-4 py-2`,children:`Horizontal scaling ready`})]})]})]})}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(`br`,{}),`
`,(0,d.jsx)(t.p,{children:`This backend architecture has been battle-tested in production environments handling millions of requests. The combination of TypeScript's type safety, Prisma's developer experience, and Docker's consistency creates a foundation you can build serious products on.`})]})}function p(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(f,{...e})}):f(e)}var ne=i({default:()=>ie,frontmatter:()=>re}),re={title:`From Curiosity to Go-Storm Why I Built My Own HTTP Load Tester`,date:`2026-08-12`,description:`It all started with a simple curiosity  how much load can I actually generate using Go's goroutines and channels? I started experimenting with it, and that small experiment slowly turned into Go-Storm, an HTTP load testing tool.`,tags:[`Go`,`Load Testing`,`Concurrency`,`Distributed Systems`],published:!0};function m(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,figure:`figure`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...l(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h2,{children:`1. It Started With Curiosity`}),`
`,(0,d.jsxs)(t.p,{children:[`Bas ek simple curiosity thi — `,(0,d.jsx)(t.strong,{children:`Go ki goroutines aur channels se actually kitna load generate kar sakte hain?`})]}),`
`,(0,d.jsx)(t.p,{children:`Mann tha ki server ko high load deke dekhun ki kya hota hai. Koi bada plan nahi, bas ek experiment.`}),`
`,(0,d.jsx)(t.h2,{children:`2. I Didn't Really Have a Big Plan`}),`
`,(0,d.jsx)(t.p,{children:`Honestly, mere paas starting mein koi bada product idea nahi tha.`}),`
`,(0,d.jsx)(t.p,{children:`Bas socha:`}),`
`,(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:`"Ek load tester bana ke dekhte hain."`})}),`
`,(0,d.jsx)(t.p,{children:`Kuch banaya, phir usme aur cheezein add karne ka mann hua, aur project dheere dheere bada hota gaya.`}),`
`,(0,d.jsx)(t.h2,{children:`3. The First Version Was Simple`}),`
`,(0,d.jsx)(t.p,{children:`Starting mein kaam bahut simple tha:`}),`
`,(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:`HTTP requests bhejo → multiple goroutines use karo → responses dekho`})}),`
`,(0,d.jsx)(t.p,{children:`Bas itna hi.`}),`
`,(0,d.jsx)(t.p,{children:`Lekin jab actual mein run kiya, tab concurrency ko practically samajhne ka alag hi maza aaya. 10 goroutines, phir 100, phir 1000 — har baar request rate badhta dekh ke maza aata tha. Par jald hi realization aaya ki concurrency badhana = load test nahi, bas raw speed hai.`}),`
`,(0,d.jsx)(t.h2,{children:`4. Then the Questions Started`}),`
`,(0,d.jsx)(t.p,{children:`Phir naye questions aane lage:`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Ek machine kitna load generate kar sakti hai?`}),`
`,(0,d.jsx)(t.li,{children:`Concurrency aur request rate mein difference kya hai?`}),`
`,(0,d.jsx)(t.li,{children:`Server load hone par latency kaise change hoti hai?`}),`
`,(0,d.jsx)(t.li,{children:`p95 aur p99 actually kya tell karte hain?`}),`
`,(0,d.jsx)(t.li,{children:`Agar worker fail ho jaye toh?`}),`
`,(0,d.jsx)(t.li,{children:`Agar test ko beech mein stop karna ho toh?`}),`
`]}),`
`,(0,d.jsx)(t.p,{children:`Aur har question ke saath project mein kuch naya add hota gaya.`}),`
`,(0,d.jsx)(t.h2,{children:`5. Go Became the Perfect Playground`}),`
`,(0,d.jsxs)(t.p,{children:[`Go ki `,(0,d.jsx)(t.strong,{children:`goroutines, channels, worker pools aur concurrency`}),` ko sirf padhne ke bajay, Go-Storm ke through practically use karne ka chance mila.`]}),`
`,(0,d.jsxs)(t.p,{children:[`Yahi project mere liye Go concurrency ko samajhne ka ek practical playground ban gaya. Pehli baar goroutine leak ka saamna kiya, phir use `,(0,d.jsx)(t.code,{children:`context`}),` cancellation se fix kiya — aise hi chhote-chhote real problems se samajh banayi.`]}),`
`,(0,d.jsx)(t.h2,{children:`6. From Request Generator to Load Testing Tool`}),`
`,(0,d.jsx)(t.p,{children:`Jo initially simple HTTP request generator tha, woh gradually proper load testing tool banne laga:`}),`
`,(0,d.jsx)(t.p,{children:`concurrency control → rate limiting → metrics → graceful shutdown → better reporting...`}),`
`,(0,d.jsx)(t.p,{children:`Har feature ke saath project thoda aur useful hota gaya. Ab ye sirf "requests bhejne" wala tool nahi — p50/p95/p99 percentiles, status code distribution, JSON reports sab hai.`}),`
`,(0,d.jsx)(t.h2,{children:`7. The Moment One Machine Wasn't Enough`}),`
`,(0,d.jsx)(t.p,{children:`Phir ek interesting problem saamne aayi:`}),`
`,(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:`"Agar mujhe aur zyada load generate karna hai toh?"`})}),`
`,(0,d.jsxs)(t.p,{children:[`Ek point ke baad problem server ki nahi, `,(0,d.jsx)(t.strong,{children:`meri machine ki`}),` hone lagti hai. Jitni bhi goroutines chalao, CPU, memory aur network bandwidth se bound ho jata hai.`]}),`
`,(0,d.jsx)(t.p,{children:`Aur yahin se distributed load testing ka idea aaya.`}),`
`,(0,d.jsx)(t.p,{children:`Ek baar maine 10,000 requests 2 agents ke saath chala kar dekha:`}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`text`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`text`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`Total Requests: 10000`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`Successful: 10000`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`Failed: 0`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`Success Rate: 100.00%`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`Avg Response: 11.48ms`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`p95 Response: 16.48ms`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`p99 Response: 20.40ms`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`Requests/sec: 313.98`})})]})})}),`
`,(0,d.jsx)(t.p,{children:`Aur per-agent breakdown se saaf dikhta tha ki kaunse machine ne kitna load handle kiya:`}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`text`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`text`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`AGENT BREAKDOWN`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`------------------------------------------------------------`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`Agent            Requests        Avg        p95    Success`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`agent-a              4998 11.48ms   16.52ms     100.0%`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`agent-b              5002 11.48ms   16.47ms     100.0%`})})]})})}),`
`,(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:`Ye story next blog mein.`})}),`
`,(0,d.jsx)(t.h2,{children:`8. What Go-Storm Looks Like Today`}),`
`,(0,d.jsx)(t.p,{children:`Aaj Go-Storm kaafi evolve ho chuka hai.`}),`
`,(0,d.jsxs)(t.p,{children:[`Ab ye sirf HTTP requests bhejne wala small experiment nahi hai. Isme load generation, concurrency control, rate limiting, performance metrics aur `,(0,d.jsx)(t.strong,{children:`distributed testing`}),` jaise concepts aa chuke hain — saath hi live Prometheus metrics aur Grafana dashboard bhi.`]}),`
`,(0,d.jsxs)(t.p,{children:[`Project link → `,(0,d.jsx)(t.a,{href:`https://github.com/hariomop12/go-storm`,children:`Go-Storm on GitHub`})]}),`
`,(0,d.jsx)(t.h2,{children:`9. Why I'm Still Building It`}),`
`,(0,d.jsx)(t.p,{children:`Main Go-Storm ko k6 ka replacement banane ke intention se nahi bana raha.`}),`
`,(0,d.jsx)(t.p,{children:`Main bas ye samajhna chahta hoon:`}),`
`,(0,d.jsxs)(t.blockquote,{children:[`
`,(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:`"Jab hum kisi system ko uski limit tak push karte hain, toh actually andar kya hota hai?"`})}),`
`]}),`
`,(0,d.jsx)(t.p,{children:`Aur Go-Storm mere liye us question ko explore karne ka ek way ban gaya.`}),`
`,(0,d.jsx)(t.h2,{children:`10. What's Next?`}),`
`,(0,d.jsx)(t.p,{children:`Next part mein baat karenge:`}),`
`,(0,d.jsxs)(t.blockquote,{children:[`
`,(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:`Why one machine isn't enough for load testing`})}),`
`]}),`
`,(0,d.jsx)(t.p,{children:`Aur yahin se Go-Storm ki distributed journey start hoti hai.`})]})}function ie(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(m,{...e})}):m(e)}var ae=i({default:()=>se,frontmatter:()=>oe}),oe={title:`Node.js Error Handling Patterns`,date:`2024-01-20`,description:`Master error handling in Node.js with async/await, custom error classes, and middleware patterns.`,tags:[`Node.js`,`Backend`,`JavaScript`],published:!0};function h(e){let t={blockquote:`blockquote`,code:`code`,figure:`figure`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,...l(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h2,{children:`Why Error Handling Matters`}),`
`,(0,d.jsx)(t.p,{children:`In production, errors are inevitable. What matters is how you handle them. Poor error handling leads to crashed servers, cryptic error messages, and hours of debugging.`}),`
`,(0,d.jsx)(t.h2,{children:`Async/Await Error Handling`}),`
`,(0,d.jsx)(t.p,{children:`The old callback pattern is dead. Embrace async/await but remember it requires proper handling:`}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`javascript`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`javascript`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`async`}),(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:` function`}),(0,d.jsx)(t.span,{style:{color:`#61AFEF`},children:` fetchUserData`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`(`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`,fontStyle:`italic`},children:`userId`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`) {`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`  try`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:` {`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`    const`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:` response`}),(0,d.jsx)(t.span,{style:{color:`#56B6C2`},children:` =`}),(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:` await`}),(0,d.jsx)(t.span,{style:{color:`#61AFEF`},children:` fetch`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`(`}),(0,d.jsx)(t.span,{style:{color:`#98C379`},children:"`/api/users/"}),(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:"${"}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`userId`}),(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`}`}),(0,d.jsx)(t.span,{style:{color:`#98C379`},children:"`"}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`);`})]}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`    `})}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`    if`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:` (`}),(0,d.jsx)(t.span,{style:{color:`#56B6C2`},children:`!`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`response`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`ok`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`) {`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`      throw`}),(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:` new`}),(0,d.jsx)(t.span,{style:{color:`#61AFEF`},children:` Error`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`(`}),(0,d.jsx)(t.span,{style:{color:`#98C379`},children:"`HTTP error! status: "}),(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:"${"}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`response`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`status`}),(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`}`}),(0,d.jsx)(t.span,{style:{color:`#98C379`},children:"`"}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`);`})]}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`    }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`    `})}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`    const`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:` data`}),(0,d.jsx)(t.span,{style:{color:`#56B6C2`},children:` =`}),(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:` await`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:` response`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#61AFEF`},children:`json`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`();`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`    return`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:` data`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`;`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`  } `}),(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`catch`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:` (`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`error`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`) {`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`    console`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#61AFEF`},children:`error`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`(`}),(0,d.jsx)(t.span,{style:{color:`#98C379`},children:`'Failed to fetch user:'`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`, `}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`error`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`message`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`);`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`    throw`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:` error`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`; `}),(0,d.jsx)(t.span,{style:{color:`#7F848E`,fontStyle:`italic`},children:`// Re-throw for upstream handling`})]}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`}`})})]})})}),`
`,(0,d.jsx)(t.h2,{children:`Custom Error Classes`}),`
`,(0,d.jsx)(t.p,{children:`Create meaningful error types:`}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`javascript`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`javascript`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`class`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:` AppError`}),(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:` extends`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:` Error`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:` {`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`  constructor`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`(`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`,fontStyle:`italic`},children:`message`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`, `}),(0,d.jsx)(t.span,{style:{color:`#E06C75`,fontStyle:`italic`},children:`statusCode`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`, `}),(0,d.jsx)(t.span,{style:{color:`#E06C75`,fontStyle:`italic`},children:`code`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`) {`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E5C07B`,fontStyle:`italic`},children:`    super`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`(`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`message`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`);`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`    this`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`statusCode`}),(0,d.jsx)(t.span,{style:{color:`#56B6C2`},children:` =`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:` statusCode`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`;`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`    this`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`code`}),(0,d.jsx)(t.span,{style:{color:`#56B6C2`},children:` =`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:` code`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`;`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`    this`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`isOperational`}),(0,d.jsx)(t.span,{style:{color:`#56B6C2`},children:` =`}),(0,d.jsx)(t.span,{style:{color:`#D19A66`},children:` true`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`;`})]}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`    `})}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`    Error`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#61AFEF`},children:`captureStackTrace`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`(`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`this`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`, `}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`this`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`constructor`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`);`})]}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`}`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`class`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:` NotFoundError`}),(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:` extends`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:` AppError`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:` {`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`  constructor`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`(`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`,fontStyle:`italic`},children:`resource`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`) {`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E5C07B`,fontStyle:`italic`},children:`    super`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`(`}),(0,d.jsx)(t.span,{style:{color:`#98C379`},children:"`"}),(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:"${"}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`resource`}),(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`}`}),(0,d.jsx)(t.span,{style:{color:`#98C379`},children:" not found`"}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`, `}),(0,d.jsx)(t.span,{style:{color:`#D19A66`},children:`404`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`, `}),(0,d.jsx)(t.span,{style:{color:`#98C379`},children:`'NOT_FOUND'`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`);`})]}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`}`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:` `}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`class`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:` ValidationError`}),(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:` extends`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:` AppError`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:` {`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`  constructor`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`(`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`,fontStyle:`italic`},children:`errors`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`) {`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E5C07B`,fontStyle:`italic`},children:`    super`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`(`}),(0,d.jsx)(t.span,{style:{color:`#98C379`},children:`'Validation failed'`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`, `}),(0,d.jsx)(t.span,{style:{color:`#D19A66`},children:`400`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`, `}),(0,d.jsx)(t.span,{style:{color:`#98C379`},children:`'VALIDATION_ERROR'`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`);`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`    this`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`errors`}),(0,d.jsx)(t.span,{style:{color:`#56B6C2`},children:` =`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:` errors`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`;`})]}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`}`})})]})})}),`
`,(0,d.jsxs)(t.blockquote,{children:[`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:`Important`}),`: Always set `,(0,d.jsx)(t.code,{children:`isOperational = true`}),` for expected errors. This helps distinguish them from unexpected bugs in error monitoring systems.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{children:`Express Error Middleware`}),`
`,(0,d.jsx)(t.p,{children:`The last middleware in Express handles all errors:`}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`javascript`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`javascript`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#7F848E`,fontStyle:`italic`},children:`// Must have 4 parameters`})}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`app`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#61AFEF`},children:`use`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`((`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`,fontStyle:`italic`},children:`err`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`, `}),(0,d.jsx)(t.span,{style:{color:`#E06C75`,fontStyle:`italic`},children:`req`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`, `}),(0,d.jsx)(t.span,{style:{color:`#E06C75`,fontStyle:`italic`},children:`res`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`, `}),(0,d.jsx)(t.span,{style:{color:`#E06C75`,fontStyle:`italic`},children:`next`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`) `}),(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`=>`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:` {`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`  err`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`statusCode`}),(0,d.jsx)(t.span,{style:{color:`#56B6C2`},children:` =`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:` err`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`statusCode`}),(0,d.jsx)(t.span,{style:{color:`#56B6C2`},children:` ||`}),(0,d.jsx)(t.span,{style:{color:`#D19A66`},children:` 500`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`;`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`  err`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`status`}),(0,d.jsx)(t.span,{style:{color:`#56B6C2`},children:` =`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:` err`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`status`}),(0,d.jsx)(t.span,{style:{color:`#56B6C2`},children:` ||`}),(0,d.jsx)(t.span,{style:{color:`#98C379`},children:` 'error'`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`;`})]}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`  `})}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`  if`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:` (`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`process`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`env`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`NODE_ENV`}),(0,d.jsx)(t.span,{style:{color:`#56B6C2`},children:` ===`}),(0,d.jsx)(t.span,{style:{color:`#98C379`},children:` 'development'`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`) {`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`    return`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:` res`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#61AFEF`},children:`status`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`(`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`err`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`statusCode`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`).`}),(0,d.jsx)(t.span,{style:{color:`#61AFEF`},children:`json`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`({`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`      status`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`: `}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`err`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`status`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`,`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`      error`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`: `}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`err`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`,`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`      message`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`: `}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`err`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`message`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`,`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`      stack`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`: `}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`err`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`stack`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`,`})]}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`    });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`  `})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#7F848E`,fontStyle:`italic`},children:`  // Production: don't leak error details`})}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`  if`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:` (`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`err`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`isOperational`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`) {`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#C678DD`},children:`    return`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:` res`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#61AFEF`},children:`status`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`(`}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`err`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`statusCode`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`).`}),(0,d.jsx)(t.span,{style:{color:`#61AFEF`},children:`json`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`({`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`      status`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`: `}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`err`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`status`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`,`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`      message`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`: `}),(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`err`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`message`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`,`})]}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`    });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`  }`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`  `})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#7F848E`,fontStyle:`italic`},children:`  // Programming or unknown errors`})}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`  console`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#61AFEF`},children:`error`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`(`}),(0,d.jsx)(t.span,{style:{color:`#98C379`},children:`'ERROR 💥'`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`, `}),(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`err`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`);`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E5C07B`},children:`  res`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`.`}),(0,d.jsx)(t.span,{style:{color:`#61AFEF`},children:`status`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`(`}),(0,d.jsx)(t.span,{style:{color:`#D19A66`},children:`500`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`).`}),(0,d.jsx)(t.span,{style:{color:`#61AFEF`},children:`json`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`({`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`    status`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`: `}),(0,d.jsx)(t.span,{style:{color:`#98C379`},children:`'error'`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`,`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#E06C75`},children:`    message`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`: `}),(0,d.jsx)(t.span,{style:{color:`#98C379`},children:`'Something went wrong'`}),(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`,`})]}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`  });`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#ABB2BF`},children:`});`})})]})})}),`
`,(0,d.jsx)(t.h2,{children:`The Golden Rules`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Never swallow errors silently`}),` - Always log or handle`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Be specific`}),` - Throw meaningful errors with context`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Centralize error handling`}),` - Don't scatter try/catch everywhere`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Distinguish operational vs programming errors`}),` - Only catch what you can handle`]}),`
`]})]})}function se(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}var ce=i({default:()=>v,frontmatter:()=>g}),g={title:`Why Your Load Test Results Might Be Wrong`,date:`2026-08-17`,description:`Load test ka result hamesha target server ki reality nahi batata kabhi kabhi load generator khud bottleneck ban chuka hota hai ess blog mein dekho kaise go storm CPU, GC, goroutines, FD usage aur actual RPS track karke misleading test results detect karta hai`,tags:[`#testing`,`#go`],published:!0};function _(e){let t={blockquote:`blockquote`,code:`code`,em:`em`,figure:`figure`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...l(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h2,{children:`(And How go-storm Detects It)`}),`
`,(0,d.jsx)(t.p,{children:`Socho tumne Friday evening ek load test chalaya.`}),`
`,(0,d.jsx)(t.p,{children:`Command simple tha:`}),`
`,(0,d.jsx)(t.p,{children:(0,d.jsx)(t.code,{children:`storm run -u https://api.example.com/orders -n 600000 -c 500 -r 10000`})}),`
`,(0,d.jsxs)(t.p,{children:[`Dashboard par result aaya: latency 2.8 seconds, error rate 12%, achieved throughput around 6,800 RPS. Team ka immediate conclusion hota hai: `,(0,d.jsx)(t.em,{children:`"API 10K RPS handle nahi kar pa rahi."`})]}),`
`,(0,d.jsx)(t.p,{children:`Lekin ek uncomfortable sawaal hai kya API sach mein slow thi? Ya load-generator machine hi pehle haar gayi thi?`}),`
`,(0,d.jsx)(t.p,{children:`Load testing mein target ko test karna obvious hai. Generator ko test karna often bhool jaate hain. Aur wahi chhota sa blind spot ek convincing-looking, but completely misleading performance report bana sakta hai.`}),`
`,(0,d.jsxs)(t.p,{children:[`go-storm ka focus sirf requests bhejna nahi hai. Iska focus yeh jaanna bhi hai ki jo load tumne `,(0,d.jsx)(t.strong,{children:`maanga`}),` tha, kya generator ne waqai woh load `,(0,d.jsx)(t.strong,{children:`produce`}),` kiya aur karte waqt uski health kaisi thi.`]}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(t.h2,{children:`1. The Problem galat results kaise milte hain`}),`
`,(0,d.jsx)(t.p,{children:`Ek load test number tab useful hota hai jab yeh teen baatein true hon`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsx)(t.li,{children:`Requested workload actually generate hua ho.`}),`
`,(0,d.jsx)(t.li,{children:`Measurement boundaries correct hon request start se response complete tak.`}),`
`,(0,d.jsx)(t.li,{children:`Generator khud bottleneck na ban gaya ho.`}),`
`]}),`
`,(0,d.jsx)(t.p,{children:`Teesra point sabse zyada ignore hota hai.`}),`
`,(0,d.jsxs)(t.p,{children:[`Tum `,(0,d.jsx)(t.strong,{children:`-r 10000`}),` specify karte ho. Iska matlab intent hai 10,000 requests per second. Lekin agar local machine CPU pe 98% par hai, GC baar-baar pause kar raha hai, sockets/FDs limit ke paas hain, ya workers scheduling ke liye fight kar rahe hain, to actual request stream irregular ho sakti hai.`]}),`
`,(0,d.jsx)(t.p,{children:`Result mein latency badh sakti hai. But us latency ka poora blame server ko dena galat hoga. Generator ke scheduling delays, client-side queues, connection creation pressure, aur resource starvation bhi observed numbers ko contaminate kar sakte hain.`}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`plain`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`plain`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`Requested workload                  What actually happened`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`10,000 RPS  ---------------->  generator hit 98% CPU`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                                       |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                                       v`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                                only 6,800 RPS emitted`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                                       |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                                       v`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                            server receives a different workload`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                                       |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                                       v`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                        report says "server is slow" (maybe wrong)`})})]})})}),`
`,(0,d.jsx)(t.p,{children:`Yahan important distinction hai:`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Target saturation:`}),` server/database/downstream dependency capacity ke beyond chala gaya`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Generator saturation:`}),` load bhejne wali machine requested traffic reliably create nahi kar pa rahi`]}),`
`]}),`
`,(0,d.jsx)(t.p,{children:`Pehle case mein test ka finding valuable hai. Doosre case mein finding incomplete hai, aur kabhi kabhi invalid bhi.`}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(t.h2,{children:`2. Real story machine saturated hai user ko pata nahi`}),`
`,(0,d.jsx)(t.p,{children:`Ek realistic incident dekho.`}),`
`,(0,d.jsx)(t.p,{children:`Tanu ko checkout API ko 8000 RPS par test karna tha. Laptop powerful tha, test local network se run ho raha tha aur initial runs perfectly normal lage. Jaise hi concurrency badhi, p99 latency 180 ms se seedha 2.4s ho gayi. Error rate bhi badhne laga.`}),`
`,(0,d.jsx)(t.p,{children:`Slack par message gaya: “Checkout service collapses after 8K RPS.”`}),`
`,(0,d.jsx)(t.p,{children:`Problem yeh thi ki Tanu ne sirf target ke graphs dekhe. Generator ke nahi.`}),`
`,(0,d.jsx)(t.p,{children:`Machine par kya ho raha tha?`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`CPU almost fully busy tha.`}),`
`,(0,d.jsx)(t.li,{children:`Runtime ka GC allocation pressure clean karne mein time le raha tha.`}),`
`,(0,d.jsx)(t.li,{children:`Hundreds of client connections aur file descriptors active the.`}),`
`,(0,d.jsx)(t.li,{children:`Requested 8,000 RPS ke badle generator 5,900 RPS hi achieve kar pa raha tha.`}),`
`]}),`
`,(0,d.jsx)(t.p,{children:`Server ko 8K RPS mila hi nahi. Team ne server capacity nahi, laptop capacity measure ki 😂🥲.`}),`
`,(0,d.jsx)(t.p,{children:`Yeh kisi beginner ki mistake nahi hai Mature teams mein bhi hota hai especially jab “the tool finished successfully” ko “the test is valid” maan liya jaata hai. Successful exit code correctness ka proof nahi hota.`}),`
`,(0,d.jsx)(t.p,{children:`go-storm ka health report is ambiguity ko visible banata hai final result ke saath generator ka verdict bhi aata hai healthy under pressure ya saturated`}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(t.h2,{children:`3. 7 bottlenecks generator kahaan ruk sakta hai`}),`
`,(0,d.jsx)(t.p,{children:`Load generator bottleneck ek single metric nahi hota Yeh usually multiple signals ka combination hota hai`}),`
`,(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:`Bottleneck`}),(0,d.jsx)(t.th,{children:`Kya hota hai`}),(0,d.jsx)(t.th,{children:`Result par effect`})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`CPU`}),(0,d.jsx)(t.td,{children:`Request creation, TLS, parsing, scheduling ke liye cores busy`}),(0,d.jsx)(t.td,{children:`Requested RPS miss, timing jitter`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`Memory`}),(0,d.jsx)(t.td,{children:`Heap/system memory growth`}),(0,d.jsx)(t.td,{children:`GC pressure, paging risk, instability`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`GC`}),(0,d.jsx)(t.td,{children:`Go runtime pause/collection pressure`}),(0,d.jsx)(t.td,{children:`Request scheduling aur response handling late`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`Goroutines`}),(0,d.jsx)(t.td,{children:`Excessive runnable/blocked goroutines`}),(0,d.jsx)(t.td,{children:`Scheduler contention, leak ka signal`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`Network`}),(0,d.jsx)(t.td,{children:`NIC bandwidth ephemeral ports DNS/TLS packet loss`}),(0,d.jsx)(t.td,{children:`Target ko intended traffic nahi milta`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`File descriptors`}),(0,d.jsx)(t.td,{children:`Open sockets ki OS limit`}),(0,d.jsx)(t.td,{children:`New connections fail mysterious client errors`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`Locks`}),(0,d.jsx)(t.td,{children:`Shared queues/counters/maps ke around contention`}),(0,d.jsx)(t.td,{children:`Throughput plateaus despite more concurrency`})]})]})]}),`
`,(0,d.jsx)(t.h3,{children:`CPU: sirf “machine busy” nahi`}),`
`,(0,d.jsx)(t.p,{children:`CPU 100% hone par har request drop nahi hoti More dangerous problem yeh hai ki request timings drift karte hain. Rate limiter ka intent steady flow ho sakta hai, but scheduler ko time hi nahi mil raha. Burst, gaps aur uneven arrival pattern server behaviour ko change kar dete hain.`}),`
`,(0,d.jsx)(t.h3,{children:`Memory aur GC silent feedback loop`}),`
`,(0,d.jsx)(t.p,{children:`High allocation rate se heap grow hota hai. Heap grow hota hai to GC ka kaam badhta hai. GC pressure badhta hai to workers ko less CPU time milta hai. Workers slow hue to queues grow ho sakti hain. Phir memory aur badh sakti hai. Yeh feedback loop gradually test ko unreliable bana deta hai.`}),`
`,(0,d.jsx)(t.h3,{children:`Goroutines cheap hain free nahi`}),`
`,(0,d.jsx)(t.p,{children:`Go goroutines lightweight hain lekin infinite nahi. Bahut zyada goroutines ka matlab more stacks, more scheduling work, aur often koi hidden lifecycle bug. A healthy worker pool test mein goroutine count concurrency se reasonably related rehna chahiye not wildly explode.`}),`
`,(0,d.jsx)(t.h3,{children:`Network aur locks important but context matters`}),`
`,(0,d.jsxs)(t.p,{children:[`Network saturation aur lock contention generator ke performance ko affect kar sakte hain Lekin current GoStorm health report inhe directly measure nahi karti Ye problems ka effect `,(0,d.jsx)(t.strong,{children:`RPS achievement`}),` aur `,(0,d.jsx)(t.strong,{children:`worker utilization`}),` ke through indirectly detect hota hai`]}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(t.h2,{children:`4. How gostorm detects it realtime monitoring architecture`}),`
`,(0,d.jsx)(t.p,{children:`gostorm test run ke saath ek lightweight background monitor start karta hai Local run mein default sampling interval one second hai monitor test ke end par cleanly stop hota hai aur final health report build hoti hai`}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`plain`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`plain`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                       +------------------------------+`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                       |          LOAD TEST           |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                       |                              |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                       |  Producer -> Workers ->       |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                       |              Collector       |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                       +--------------+---------------+`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                                      |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                    +-----------------+-----------------+`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                    |                 |                 |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                    v                 v                 v`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`          +-----------------+  +-----------------+  +----------------+`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`          | Runtime /       |  | Test Statistics |  |   OS Limits    |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`          | Process         |  |                 |  |                |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`          |                 |  | Target RPS      |  | Open FDs       |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`          |  * CPU          |  | vs Achieved RPS |  | Max FDs        |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`          |  * Heap         |  |                 |  |                |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`          |  * GC           |  | Worker Usage    |  |                |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`          |  * Goroutines   |  |                 |  |                |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`          |  * FDs          |  |                 |  |                |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`          +--------+--------+  +--------+--------+  +-------+--------+`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                   |                    |                  |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                   +------------------------------------------+`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                                      |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                                      v`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                        +---------------------------+`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                        |   THRESHOLD EVALUATOR     |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                        |                           |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                        |    OK / WARN / CRITICAL   |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                        +-------------+-------------+`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                                      |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                                      v`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                        +---------------------------+`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                        |  GENERATOR HEALTH REPORT  |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                        |                           |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                        |  Actionable bottleneck    |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                        |  & health information     |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                        +---------------------------+`})})]})})}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`CPU usage`}),` Linux mein process kitna CPU use kar raha hai, ye `,(0,d.jsx)(t.strong,{children:(0,d.jsx)(t.code,{children:`/proc/self/stat`})}),` se measure hota hai.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Memory growth rate`}),` Time ke saath memory kitni fast badh rahi hai, ye check karke excessive memory usage ka signal milta hai.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`GC pause`}),` Go ka Garbage Collector kitna time program ko pause kar raha hai, ye runtime ke GC data se measure hota hai.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Goroutine count`}),` Kitni goroutines chal rahi hain, ye runtime se count karke configured concurrency ke comparison mein check hota hai.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`File descriptor usage`}),` Linux mein kitne file descriptors use ho rahe hain, ye `,(0,d.jsx)(t.strong,{children:(0,d.jsx)(t.code,{children:`/proc/self/fd`})}),` aur OS ki maximum FD limit ke comparison se check hota hai.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`RPS achievement`}),` Actual RPS target RPS ke kitna close hai, ye check kiya jaata hai.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Worker utilization`}),` Workers available time ka kitna part requests handle karne mein busy rahe, iska estimate nikala jaata hai.`]}),`
`]}),`
`,(0,d.jsx)(t.p,{children:`Default policy deliberately simple aur explainable hai CPU 85% par warning 95% par critical FD usage 80% par warning aur 95% par critical; achieved RPS target ke 90% se neeche warning aur 70% ya neeche critical Thresholds library API se customize bhi kiye ja sakte hain`}),`
`,(0,d.jsxs)(t.p,{children:[`By default monitoring test ke end mein health verdict deta hai CLI mein `,(0,d.jsx)(t.strong,{children:`--saturation-kill`}),` flag bhi available hai; production workflow mein iska natural purpose critical saturation par automatic stop hona hai Agar us behaviour ko rely karna hai apne installed version mein verify karna important hai flag ka hona aur cancellation path ka actually enforce hona dono same baat nahi hain`]}),`
`,(0,d.jsx)(t.p,{children:`Idea punishment nahi honesty hai Agar generator incapable hai tool ko signal dena chahiye not silently pretend that requested test happened`}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(t.h2,{children:`5. Capacity estimation test se pehle machine ki limit pata karo`}),`
`,(0,d.jsxs)(t.p,{children:[`Best time to discover that one laptop cannot generate desired load is `,(0,d.jsx)(t.strong,{children:`before`}),` the production like test not after an incident review`]}),`
`,(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.code,{children:`--estimate`}),` go-storm ko ek short pre test benchmark chalane bolta hai It samples a small high concurrency workload and reports estimated maximum RPS average latency success rate CPU memory, goroutines, aur GC cycles observed during that check`]}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`bash`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`bash`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#61AFEF`},children:`storm`}),(0,d.jsx)(t.span,{style:{color:`#98C379`},children:` run`}),(0,d.jsx)(t.span,{style:{color:`#56B6C2`},children:` \\`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#D19A66`},children:`  -u`}),(0,d.jsx)(t.span,{style:{color:`#98C379`},children:` https://staging.example.com/checkout`}),(0,d.jsx)(t.span,{style:{color:`#56B6C2`},children:` \\`})]}),`
`,(0,d.jsxs)(t.span,{"data-line":``,children:[(0,d.jsx)(t.span,{style:{color:`#D19A66`},children:`  -n`}),(0,d.jsx)(t.span,{style:{color:`#D19A66`},children:` 300000`}),(0,d.jsx)(t.span,{style:{color:`#D19A66`},children:` -c`}),(0,d.jsx)(t.span,{style:{color:`#D19A66`},children:` 300`}),(0,d.jsx)(t.span,{style:{color:`#D19A66`},children:` -r`}),(0,d.jsx)(t.span,{style:{color:`#D19A66`},children:` 10000`}),(0,d.jsx)(t.span,{style:{color:`#56B6C2`},children:` \\`})]}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{style:{color:`#D19A66`},children:`  --estimate`})})]})})}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{children:`CAPACITY ESTIMATION REPORT

Quick Benchmark Results
  Sample Size:       200 requests
  Max RPS:           7,400
  Avg Latency:       41ms
  Success Rate:      100.0%

System at Load
  CPU:               88.2%
  Memory:            322.5 MB
  Goroutines:        307
  GC Cycles:         9

  Target: 10,000 RPS  ❌ NOT ACHIEVABLE
  (Your machine can handle ~7,400 RPS)

  Recommendation:
  • Use distributed mode: storm run-dist --agents 2
  • Or reduce target: storm run -n 6660
`})}),`
`,(0,d.jsx)(t.p,{children:`Is output ko exact universal hardware benchmark mat samjho Target latency, TLS, payload size, response body, network path aur test configuration capacity change kar dete hain. Treat it as a practical pre flight signal: “is setup par yeh target risky hai kya?”`}),`
`,(0,d.jsx)(t.figure,{"data-rehype-pretty-code-figure":``,children:(0,d.jsx)(t.pre,{tabIndex:`0`,"data-language":`plain`,"data-theme":`one-dark-pro`,children:(0,d.jsxs)(t.code,{"data-language":`plain`,"data-theme":`one-dark-pro`,style:{display:`grid`},children:[(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`Before test`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    +-- Capacity estimate healthy --> run single generator with confidence`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`    +-- Capacity estimate tight/not achievable`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                |`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                +-- lower target RPS`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                +-- tune concurrency / payload / connections`})}),`
`,(0,d.jsx)(t.span,{"data-line":``,children:(0,d.jsx)(t.span,{children:`                +-- distribute load across agents`})})]})})}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(t.h2,{children:`6. Live demo health report ko kaise read karein`}),`
`,(0,d.jsx)(t.p,{children:`Test ke end par normal result ke baad health report print hoti hai when saturation monitoring enabled hai (default enabled)`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{children:`GENERATOR HEALTH REPORT

Load
  Target RPS:       10,000
  Achieved RPS:     6,820  🔴 (68%)

System Resources
  CPU Usage:        97.1% 🔴
  Memory:           844.6 MB (Heap: 516.2 MB)
  Goroutines:       5,142
  GC Cycles:        136
  GC Total Pause:   642.5 ms
  File Descriptors: 3,804

Checks
  🔴 CPU:                  97.1%
  ⚠️  Memory Growth:        178 MB/min
  🔴 GC Pause:             642.5 ms
  ⚠️  Goroutines:           5142
  🔴 RPS Achievement:      6820 / 7000
  ⚠️  Worker Utilization:   96.7%

───────────────────────────────────────────────
  🔴 GENERATOR SATURATED
  Results may NOT be representative of target.
───────────────────────────────────────────────

Recommendations
  • Reduce target RPS or use distributed mode
  • Reduce concurrency to lower CPU pressure
  • High GC pressure — reduce allocation rate or concurrency
`})}),`
`,(0,d.jsxs)(t.p,{children:[`Iska message yeh nahi `,(0,d.jsx)(t.strong,{children:`“Server definitely healthy hai.”`}),` Iska message yeh hai `,(0,d.jsx)(t.strong,{children:`“Generator 10K RPS test ko trustworthy tareeke se execute nahi kar saka.”`}),` Server conclusion ke liye ab either target ko lower karo generator scale out karo ya test setup refine karo`]}),`
`,(0,d.jsxs)(t.p,{children:[`Healthy report ke case mein bhi humility zaroori hai `,(0,d.jsx)(t.strong,{children:`“Generator healthy”`}),` means generator side evidence says the workload was delivered without these detected pressure signals It does not magically prove every server side metric or every network hop is perfect`]}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(t.h2,{children:`7. vs k6/vegeta question feature ka nahi focus ka hai`}),`
`,(0,d.jsx)(t.p,{children:`k6 aur Vegeta dono mature aur useful load testing tools hain. Dono ka apna strong use case aur ecosystem hai. Generator ki health aur observability ko compare karte time ye bhi dekhna chahiye ki metrics, extensions, versions aur external monitoring integrations alag ho sakte hain. Teams in tools ke saath host level dashboards, container metrics, profiling aur cloud monitoring bhi use kar sakti hain`}),`
`,(0,d.jsxs)(t.p,{children:[`Go-Storm ka main difference iska `,(0,d.jsx)(t.strong,{children:`built in generator health report`}),` hai. Ye generator ki health ko test result ka important part banata hai. Requested vs achieved RPS, CPU, memory, GC, goroutines, FD usage aur worker utilization ko ek hi report mein combine karke Go-Storm batata hai ki test results `,(0,d.jsx)(t.strong,{children:`trustworthy hain, pressure mein hain, ya generator saturation ki wajah se results affect ho sakte hain`}),`.`]}),`
`,(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:`Question`}),(0,d.jsx)(t.th,{children:`Typical external observability workflow`}),(0,d.jsx)(t.th,{children:`go storm workflow`})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`Generator healthy tha?`}),(0,d.jsx)(t.td,{children:`Separate host dashboard/profile inspect karo`}),(0,d.jsx)(t.td,{children:`Post test health verdict dekho`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`Target RPS actually hit hua?`}),(0,d.jsx)(t.td,{children:`Test output aur system charts correlate karo`}),(0,d.jsx)(t.td,{children:`RP achievement signal report mein`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`Machine limit pehle pata chale`}),(0,d.jsx)(t.td,{children:`Manual benchmark/setup`}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:`--estimate`}),` pre-flight check`]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:`Critical pressure par kya?`}),(0,d.jsx)(t.td,{children:`Manual alert/runbook`}),(0,d.jsx)(t.td,{children:`Health verdict; automatic-stop behaviour should be verified for the installed version`})]})]})]}),`
`,(0,d.jsx)(t.p,{children:`Yeh k6/vegeta ko baddeclare karne ki baat nahi. It is an engineering stance  when the tool is itself part of the experiment tool health should be visible inside the experiment’s result.`}),`
`,(0,d.jsx)(t.hr,{}),`
`,(0,d.jsx)(t.h2,{children:`8. Whats next Health Report se Health Intelligence tak`}),`
`,(0,d.jsx)(t.p,{children:`Current health monitoring ek strong starting point hai lekin yahi final goal nahi hai Future mein Go Storm ko aur useful banane ke liye kuch improvements kiye ja sakte hain`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Network monitoring:`}),` Connection errors retransmits, network speed, port pressure aur DNS/TLS timing ko monitor karna`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Lock contention:`}),` High concurrency mein locks ki wajah se program slow ho raha hai ya nahi ye detect karna.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Time based health data:`}),` Har second ka health data save karna, taaki short spikes final average mein hide na ho jaayein.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Smart capacity planning:`}),` Target RPS, payload, latency aur CPU usage ko dekhkar suggest karna ki kitne load generators ki zarurat hai.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Distributed health:`}),` Agar multiple load generators use ho rahe hain, toh har machine ki health alag track karna. Isse ek weak machine poore test ke results ko affect nahi karegi.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Environment information:`}),` Go version, CPU count, FD limit aur network information save karna, taaki different test runs ko fairly compare kiya ja sake.`]}),`
`]}),`
`,(0,d.jsx)(t.h3,{children:`Final point`}),`
`,(0,d.jsxs)(t.p,{children:[`Load testing ka goal sirf ek bada graph dikhana nahi hai. Goal hai `,(0,d.jsx)(t.strong,{children:`trustworthy result dena`}),`.`]}),`
`,(0,d.jsx)(t.p,{children:`Agar test bolta hai:`}),`
`,(0,d.jsxs)(t.blockquote,{children:[`
`,(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:`"Your API fails at 10K RPS."`})}),`
`]}),`
`,(0,d.jsx)(t.p,{children:`toh ek important question aur poochna chahiye:`}),`
`,(0,d.jsxs)(t.blockquote,{children:[`
`,(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:`"Kya generator ne sach mein 10K RPS deliver kiya tha, aur kya generator khud healthy tha?"`})}),`
`]}),`
`,(0,d.jsx)(t.p,{children:(0,d.jsx)(t.strong,{children:`Go-Storm ka goal hai ki load testing ke time ye question ignore na ho.`})})]})}function v(e={}){let{wrapper:t}={...l(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(_,{...e})}):_(e)}var y=Object.assign({"/src/content/blogs/How-I-Built-a-Production-Ready-Backend-in-Node.js.mdx":ee,"/src/content/blogs/from-curiosity-to-go-storm-why-i-built-my-own-http-load-tester.mdx":ne,"/src/content/blogs/nodejs-error-handling.mdx":ae,"/src/content/blogs/why-your-load-test-results-might-be-wrong.mdx":ce});function b(){return Object.entries(y).map(([e,t])=>{let n=e.split(`/`).pop().replace(`.mdx`,``),r=t.default,i=t.frontmatter||{};return{slug:n,component:r,title:i.title||`Untitled`,date:i.date?new Date(i.date):new Date,description:i.description||``,tags:i.tags||[],published:i.published!==!1}}).filter(e=>e.published).sort((e,t)=>t.date-e.date)}function le(e){return b().find(t=>t.slug===e)}function ue(){let e=b(),t=new Set;return e.forEach(e=>{e.tags&&e.tags.forEach(e=>t.add(e))}),Array.from(t)}var de=365.2425,x=6048e5,fe=864e5,S=86400;S*7,S*de/12*3;var C=Symbol.for(`constructDateFrom`);function w(e,t){return typeof e==`function`?e(t):e&&typeof e==`object`&&C in e?e[C](t):e instanceof Date?new e.constructor(t):new Date(t)}function T(e,t){return w(t||e,e)}var pe={};function E(){return pe}function D(e,t){let n=E(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=T(e,t?.in),a=i.getDay(),o=(a<r?7:0)+a-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function O(e,t){return D(e,{...t,weekStartsOn:1})}function k(e,t){let n=T(e,t?.in),r=n.getFullYear(),i=w(n,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);let a=O(i),o=w(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);let s=O(o);return n.getTime()>=a.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function A(e){let t=T(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),e-+n}function j(e,...t){let n=w.bind(null,e||t.find(e=>typeof e==`object`));return t.map(n)}function M(e,t){let n=T(e,t?.in);return n.setHours(0,0,0,0),n}function N(e,t,n){let[r,i]=j(n?.in,e,t),a=M(r),o=M(i),s=+a-A(a),c=+o-A(o);return Math.round((s-c)/fe)}function P(e,t){let n=k(e,t),r=w(t?.in||e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),O(r)}function F(e){return e instanceof Date||typeof e==`object`&&Object.prototype.toString.call(e)===`[object Date]`}function I(e){return!(!F(e)&&typeof e!=`number`||isNaN(+T(e)))}function L(e,t){let n=T(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}var R={lessThanXSeconds:{one:`less than a second`,other:`less than {{count}} seconds`},xSeconds:{one:`1 second`,other:`{{count}} seconds`},halfAMinute:`half a minute`,lessThanXMinutes:{one:`less than a minute`,other:`less than {{count}} minutes`},xMinutes:{one:`1 minute`,other:`{{count}} minutes`},aboutXHours:{one:`about 1 hour`,other:`about {{count}} hours`},xHours:{one:`1 hour`,other:`{{count}} hours`},xDays:{one:`1 day`,other:`{{count}} days`},aboutXWeeks:{one:`about 1 week`,other:`about {{count}} weeks`},xWeeks:{one:`1 week`,other:`{{count}} weeks`},aboutXMonths:{one:`about 1 month`,other:`about {{count}} months`},xMonths:{one:`1 month`,other:`{{count}} months`},aboutXYears:{one:`about 1 year`,other:`about {{count}} years`},xYears:{one:`1 year`,other:`{{count}} years`},overXYears:{one:`over 1 year`,other:`over {{count}} years`},almostXYears:{one:`almost 1 year`,other:`almost {{count}} years`}},z=(e,t,n)=>{let r,i=R[e];return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?`in `+r:r+` ago`:r};function B(e){return(t={})=>{let n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var me={date:B({formats:{full:`EEEE, MMMM do, y`,long:`MMMM do, y`,medium:`MMM d, y`,short:`MM/dd/yyyy`},defaultWidth:`full`}),time:B({formats:{full:`h:mm:ss a zzzz`,long:`h:mm:ss a z`,medium:`h:mm:ss a`,short:`h:mm a`},defaultWidth:`full`}),dateTime:B({formats:{full:`{{date}} 'at' {{time}}`,long:`{{date}} 'at' {{time}}`,medium:`{{date}}, {{time}}`,short:`{{date}}, {{time}}`},defaultWidth:`full`})},he={lastWeek:`'last' eeee 'at' p`,yesterday:`'yesterday at' p`,today:`'today at' p`,tomorrow:`'tomorrow at' p`,nextWeek:`eeee 'at' p`,other:`P`},ge=(e,t,n,r)=>he[e];function V(e){return(t,n)=>{let r=n?.context?String(n.context):`standalone`,i;if(r===`formatting`&&e.formattingValues){let t=e.defaultFormattingWidth||e.defaultWidth,r=n?.width?String(n.width):t;i=e.formattingValues[r]||e.formattingValues[t]}else{let t=e.defaultWidth,r=n?.width?String(n.width):e.defaultWidth;i=e.values[r]||e.values[t]}let a=e.argumentCallback?e.argumentCallback(t):t;return i[a]}}var _e={ordinalNumber:(e,t)=>{let n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+`st`;case 2:return n+`nd`;case 3:return n+`rd`}return n+`th`},era:V({values:{narrow:[`B`,`A`],abbreviated:[`BC`,`AD`],wide:[`Before Christ`,`Anno Domini`]},defaultWidth:`wide`}),quarter:V({values:{narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1st quarter`,`2nd quarter`,`3rd quarter`,`4th quarter`]},defaultWidth:`wide`,argumentCallback:e=>e-1}),month:V({values:{narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],wide:[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]},defaultWidth:`wide`}),day:V({values:{narrow:[`S`,`M`,`T`,`W`,`T`,`F`,`S`],short:[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`],abbreviated:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],wide:[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`]},defaultWidth:`wide`}),dayPeriod:V({values:{narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`}},defaultWidth:`wide`,formattingValues:{narrow:{am:`a`,pm:`p`,midnight:`mi`,noon:`n`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},abbreviated:{am:`AM`,pm:`PM`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`},wide:{am:`a.m.`,pm:`p.m.`,midnight:`midnight`,noon:`noon`,morning:`in the morning`,afternoon:`in the afternoon`,evening:`in the evening`,night:`at night`}},defaultFormattingWidth:`wide`})};function H(e){return(t,n={})=>{let r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(i);if(!a)return null;let o=a[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?ye(s,e=>e.test(o)):ve(s,e=>e.test(o)),l;l=e.valueCallback?e.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;let u=t.slice(o.length);return{value:l,rest:u}}}function ve(e,t){for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function ye(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function be(e){return(t,n={})=>{let r=t.match(e.matchPattern);if(!r)return null;let i=r[0],a=t.match(e.parsePattern);if(!a)return null;let o=e.valueCallback?e.valueCallback(a[0]):a[0];o=n.valueCallback?n.valueCallback(o):o;let s=t.slice(i.length);return{value:o,rest:s}}}var xe={code:`en-US`,formatDistance:z,formatLong:me,formatRelative:ge,localize:_e,match:{ordinalNumber:be({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:H({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:`wide`,parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:`any`}),quarter:H({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:`wide`,parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:`any`,valueCallback:e=>e+1}),month:H({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:`wide`,parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:`any`}),day:H({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:`wide`,parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:`any`}),dayPeriod:H({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:`any`,parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:`any`})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function Se(e,t){let n=T(e,t?.in);return N(n,L(n))+1}function Ce(e,t){let n=T(e,t?.in),r=O(n)-+P(n);return Math.round(r/x)+1}function U(e,t){let n=T(e,t?.in),r=n.getFullYear(),i=E(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,o=w(t?.in||e,0);o.setFullYear(r+1,0,a),o.setHours(0,0,0,0);let s=D(o,t),c=w(t?.in||e,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);let l=D(c,t);return+n>=+s?r+1:+n>=+l?r:r-1}function we(e,t){let n=E(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=U(e,t),a=w(t?.in||e,0);return a.setFullYear(i,0,r),a.setHours(0,0,0,0),D(a,t)}function Te(e,t){let n=T(e,t?.in),r=D(n,t)-+we(n,t);return Math.round(r/x)+1}function W(e,t){return(e<0?`-`:``)+Math.abs(e).toString().padStart(t,`0`)}var G={y(e,t){let n=e.getFullYear(),r=n>0?n:1-n;return W(t===`yy`?r%100:r,t.length)},M(e,t){let n=e.getMonth();return t===`M`?String(n+1):W(n+1,2)},d(e,t){return W(e.getDate(),t.length)},a(e,t){let n=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.toUpperCase();case`aaa`:return n;case`aaaaa`:return n[0];default:return n===`am`?`a.m.`:`p.m.`}},h(e,t){return W(e.getHours()%12||12,t.length)},H(e,t){return W(e.getHours(),t.length)},m(e,t){return W(e.getMinutes(),t.length)},s(e,t){return W(e.getSeconds(),t.length)},S(e,t){let n=t.length,r=e.getMilliseconds();return W(Math.trunc(r*10**(n-3)),t.length)}},K={am:`am`,pm:`pm`,midnight:`midnight`,noon:`noon`,morning:`morning`,afternoon:`afternoon`,evening:`evening`,night:`night`},q={G:function(e,t,n){let r=+(e.getFullYear()>0);switch(t){case`G`:case`GG`:case`GGG`:return n.era(r,{width:`abbreviated`});case`GGGGG`:return n.era(r,{width:`narrow`});default:return n.era(r,{width:`wide`})}},y:function(e,t,n){if(t===`yo`){let t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:`year`})}return G.y(e,t)},Y:function(e,t,n,r){let i=U(e,r),a=i>0?i:1-i;return t===`YY`?W(a%100,2):t===`Yo`?n.ordinalNumber(a,{unit:`year`}):W(a,t.length)},R:function(e,t){return W(k(e),t.length)},u:function(e,t){return W(e.getFullYear(),t.length)},Q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`Q`:return String(r);case`QQ`:return W(r,2);case`Qo`:return n.ordinalNumber(r,{unit:`quarter`});case`QQQ`:return n.quarter(r,{width:`abbreviated`,context:`formatting`});case`QQQQQ`:return n.quarter(r,{width:`narrow`,context:`formatting`});default:return n.quarter(r,{width:`wide`,context:`formatting`})}},q:function(e,t,n){let r=Math.ceil((e.getMonth()+1)/3);switch(t){case`q`:return String(r);case`qq`:return W(r,2);case`qo`:return n.ordinalNumber(r,{unit:`quarter`});case`qqq`:return n.quarter(r,{width:`abbreviated`,context:`standalone`});case`qqqqq`:return n.quarter(r,{width:`narrow`,context:`standalone`});default:return n.quarter(r,{width:`wide`,context:`standalone`})}},M:function(e,t,n){let r=e.getMonth();switch(t){case`M`:case`MM`:return G.M(e,t);case`Mo`:return n.ordinalNumber(r+1,{unit:`month`});case`MMM`:return n.month(r,{width:`abbreviated`,context:`formatting`});case`MMMMM`:return n.month(r,{width:`narrow`,context:`formatting`});default:return n.month(r,{width:`wide`,context:`formatting`})}},L:function(e,t,n){let r=e.getMonth();switch(t){case`L`:return String(r+1);case`LL`:return W(r+1,2);case`Lo`:return n.ordinalNumber(r+1,{unit:`month`});case`LLL`:return n.month(r,{width:`abbreviated`,context:`standalone`});case`LLLLL`:return n.month(r,{width:`narrow`,context:`standalone`});default:return n.month(r,{width:`wide`,context:`standalone`})}},w:function(e,t,n,r){let i=Te(e,r);return t===`wo`?n.ordinalNumber(i,{unit:`week`}):W(i,t.length)},I:function(e,t,n){let r=Ce(e);return t===`Io`?n.ordinalNumber(r,{unit:`week`}):W(r,t.length)},d:function(e,t,n){return t===`do`?n.ordinalNumber(e.getDate(),{unit:`date`}):G.d(e,t)},D:function(e,t,n){let r=Se(e);return t===`Do`?n.ordinalNumber(r,{unit:`dayOfYear`}):W(r,t.length)},E:function(e,t,n){let r=e.getDay();switch(t){case`E`:case`EE`:case`EEE`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`EEEEE`:return n.day(r,{width:`narrow`,context:`formatting`});case`EEEEEE`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},e:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`e`:return String(a);case`ee`:return W(a,2);case`eo`:return n.ordinalNumber(a,{unit:`day`});case`eee`:return n.day(i,{width:`abbreviated`,context:`formatting`});case`eeeee`:return n.day(i,{width:`narrow`,context:`formatting`});case`eeeeee`:return n.day(i,{width:`short`,context:`formatting`});default:return n.day(i,{width:`wide`,context:`formatting`})}},c:function(e,t,n,r){let i=e.getDay(),a=(i-r.weekStartsOn+8)%7||7;switch(t){case`c`:return String(a);case`cc`:return W(a,t.length);case`co`:return n.ordinalNumber(a,{unit:`day`});case`ccc`:return n.day(i,{width:`abbreviated`,context:`standalone`});case`ccccc`:return n.day(i,{width:`narrow`,context:`standalone`});case`cccccc`:return n.day(i,{width:`short`,context:`standalone`});default:return n.day(i,{width:`wide`,context:`standalone`})}},i:function(e,t,n){let r=e.getDay(),i=r===0?7:r;switch(t){case`i`:return String(i);case`ii`:return W(i,t.length);case`io`:return n.ordinalNumber(i,{unit:`day`});case`iii`:return n.day(r,{width:`abbreviated`,context:`formatting`});case`iiiii`:return n.day(r,{width:`narrow`,context:`formatting`});case`iiiiii`:return n.day(r,{width:`short`,context:`formatting`});default:return n.day(r,{width:`wide`,context:`formatting`})}},a:function(e,t,n){let r=e.getHours()/12>=1?`pm`:`am`;switch(t){case`a`:case`aa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`});case`aaa`:return n.dayPeriod(r,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`aaaaa`:return n.dayPeriod(r,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(r,{width:`wide`,context:`formatting`})}},b:function(e,t,n){let r=e.getHours(),i;switch(i=r===12?K.noon:r===0?K.midnight:r/12>=1?`pm`:`am`,t){case`b`:case`bb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`bbb`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`}).toLowerCase();case`bbbbb`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},B:function(e,t,n){let r=e.getHours(),i;switch(i=r>=17?K.evening:r>=12?K.afternoon:r>=4?K.morning:K.night,t){case`B`:case`BB`:case`BBB`:return n.dayPeriod(i,{width:`abbreviated`,context:`formatting`});case`BBBBB`:return n.dayPeriod(i,{width:`narrow`,context:`formatting`});default:return n.dayPeriod(i,{width:`wide`,context:`formatting`})}},h:function(e,t,n){if(t===`ho`){let t=e.getHours()%12;return t===0&&(t=12),n.ordinalNumber(t,{unit:`hour`})}return G.h(e,t)},H:function(e,t,n){return t===`Ho`?n.ordinalNumber(e.getHours(),{unit:`hour`}):G.H(e,t)},K:function(e,t,n){let r=e.getHours()%12;return t===`Ko`?n.ordinalNumber(r,{unit:`hour`}):W(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t===`ko`?n.ordinalNumber(r,{unit:`hour`}):W(r,t.length)},m:function(e,t,n){return t===`mo`?n.ordinalNumber(e.getMinutes(),{unit:`minute`}):G.m(e,t)},s:function(e,t,n){return t===`so`?n.ordinalNumber(e.getSeconds(),{unit:`second`}):G.s(e,t)},S:function(e,t){return G.S(e,t)},X:function(e,t,n){let r=e.getTimezoneOffset();if(r===0)return`Z`;switch(t){case`X`:return Y(r);case`XXXX`:case`XX`:return X(r);default:return X(r,`:`)}},x:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`x`:return Y(r);case`xxxx`:case`xx`:return X(r);default:return X(r,`:`)}},O:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`O`:case`OO`:case`OOO`:return`GMT`+J(r,`:`);default:return`GMT`+X(r,`:`)}},z:function(e,t,n){let r=e.getTimezoneOffset();switch(t){case`z`:case`zz`:case`zzz`:return`GMT`+J(r,`:`);default:return`GMT`+X(r,`:`)}},t:function(e,t,n){return W(Math.trunc(e/1e3),t.length)},T:function(e,t,n){return W(+e,t.length)}};function J(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=Math.trunc(r/60),a=r%60;return a===0?n+String(i):n+String(i)+t+W(a,2)}function Y(e,t){return e%60==0?(e>0?`-`:`+`)+W(Math.abs(e)/60,2):X(e,t)}function X(e,t=``){let n=e>0?`-`:`+`,r=Math.abs(e),i=W(Math.trunc(r/60),2),a=W(r%60,2);return n+i+t+a}var Z=(e,t)=>{switch(e){case`P`:return t.date({width:`short`});case`PP`:return t.date({width:`medium`});case`PPP`:return t.date({width:`long`});default:return t.date({width:`full`})}},Q=(e,t)=>{switch(e){case`p`:return t.time({width:`short`});case`pp`:return t.time({width:`medium`});case`ppp`:return t.time({width:`long`});default:return t.time({width:`full`})}},Ee={p:Q,P:(e,t)=>{let n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return Z(e,t);let a;switch(r){case`P`:a=t.dateTime({width:`short`});break;case`PP`:a=t.dateTime({width:`medium`});break;case`PPP`:a=t.dateTime({width:`long`});break;default:a=t.dateTime({width:`full`})}return a.replace(`{{date}}`,Z(r,t)).replace(`{{time}}`,Q(i,t))}},De=/^D+$/,Oe=/^Y+$/,ke=[`D`,`DD`,`YY`,`YYYY`];function Ae(e){return De.test(e)}function $(e){return Oe.test(e)}function je(e,t,n){let r=Me(e,t,n);if(console.warn(r),ke.includes(e))throw RangeError(r)}function Me(e,t,n){let r=e[0]===`Y`?`years`:`days of the month`;return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}var Ne=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Pe=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Fe=/^'([^]*?)'?$/,Ie=/''/g,Le=/[a-zA-Z]/;function Re(e,t,n){let r=E(),i=n?.locale??r.locale??xe,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=T(e,n?.in);if(!I(s))throw RangeError(`Invalid time value`);let c=t.match(Pe).map(e=>{let t=e[0];if(t===`p`||t===`P`){let n=Ee[t];return n(e,i.formatLong)}return e}).join(``).match(Ne).map(e=>{if(e===`''`)return{isToken:!1,value:`'`};let t=e[0];if(t===`'`)return{isToken:!1,value:ze(e)};if(q[t])return{isToken:!0,value:e};if(t.match(Le))throw RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});i.localize.preprocessor&&(c=i.localize.preprocessor(s,c));let l={firstWeekContainsDate:a,weekStartsOn:o,locale:i};return c.map(r=>{if(!r.isToken)return r.value;let a=r.value;(!n?.useAdditionalWeekYearTokens&&$(a)||!n?.useAdditionalDayOfYearTokens&&Ae(a))&&je(a,t,String(e));let o=q[a[0]];return o(s,a,i.localize,l)}).join(``)}function ze(e){let t=e.match(Fe);return t?t[1].replace(Ie,`'`):e}export{u as a,le as i,b as n,a as o,ue as r,Re as t};