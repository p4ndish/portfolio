# AGENTS.md - Portfolio App

> AI coding agent guide for this Next.js portfolio website project.
> This file is written in English as the project uses English in all code comments and documentation.

---

## Project Overview

This is a **personal portfolio website** built with Next.js for Dagim Tesfaye, a Software Engineer and Security Engineer. The website showcases professional experience, projects, skills, and achievements.

**Live Deployment:** Configured for Vercel deployment with Speed Insights enabled.

### Key Features

- **Homepage** with hero section, about me, educational background, work experience, skills, projects showcase, and achievements
- **Resume Page** with embedded PDF viewer and download capability
- **Dark/Light Theme Toggle** with system preference detection
- **Project Modals** with video demonstrations
- **Responsive Design** for mobile, tablet, and desktop
- **Loading States** with skeleton loaders and page transitions
- **Social Links Bar** fixed at bottom with quick access to professional profiles

---

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 15.3.1 |
| React | React | 19.0.0 |
| Styling | Tailwind CSS | 4.x |
| UI Components | shadcn/ui | - |
| Icons | Lucide React + React Icons | - |
| Themes | next-themes | 0.4.6 |
| Font | Inter (Google Fonts) | - |
| Analytics | Vercel Speed Insights | 1.2.0 |

---

## Project Structure

```
portfolio-app/
├── app/                          # Next.js App Router
│   ├── layout.js                 # Root layout with ThemeProvider
│   ├── page.js                   # Homepage
│   ├── globals.css               # Global styles, CSS variables
│   ├── resume/
│   │   ├── page.js               # Resume viewer page
│   │   └── loading.js            # Resume page loading state
│   └── favicon.ico
├── components/
│   ├── homepage/                 # Page-specific components
│   │   ├── HeroSection.js        # Hero/intro section
│   │   ├── mainSection.js        # Education, experience, projects
│   │   ├── WorkExperience.js     # Work experience list
│   │   ├── Skills.js             # Technical skills display
│   │   └── Achievements.js       # Awards/achievements section
│   ├── ui/                       # Reusable UI components (shadcn)
│   │   ├── avatar.jsx
│   │   ├── badge.jsx
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── loading.jsx           # LoadingSpinner, PageLoader
│   │   ├── skeleton.jsx
│   │   ├── sociallink.jsx        # Social links bar + theme toggle
│   │   └── video.jsx             # Video player with lazy loading
│   └── theme-provider.jsx        # Dark/light theme provider
├── lib/
│   └── utils.js                  # cn() utility for class merging
├── public/                       # Static assets
│   ├── images/                   # Company logos, project thumbnails
│   │   ├── projects/             # Project screenshot images
│   │   └── [various logos].png
│   ├── videos/                   # Project demo videos
│   └── Dagim-Tesfaye-Revised.pdf # Resume PDF
├── components.json               # shadcn/ui configuration
├── next.config.mjs               # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.mjs            # PostCSS configuration
└── jsconfig.json                 # JavaScript path aliases
```

---

## Build and Development Commands

```bash
# Install dependencies
npm install

# Development server (with Turbopack)
npm run dev
# → http://localhost:3000

# Production build
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

### Development Notes

- The dev server runs with **Turbopack** (`--turbopack` flag in package.json)
- Allowed dev origins include `192.168.1.3` for network testing
- Images are configured to allow remote patterns from `a2sv.org` and any HTTPS host

---

## Code Style Guidelines

### File Naming

- **Components**: PascalCase (`HeroSection.js`, `SocialLinksBar.jsx`)
- **Utilities**: camelCase (`utils.js`)
- **Pages**: lowercase (`page.js`, `layout.js`)

### Component Structure

```javascript
"use client"  // For client components (at top if needed)

import { cn } from "@/lib/utils"  // Always use cn() for class merging
import { Component } from "@/components/ui/component"

export default function ComponentName({ props }) {
  // Component logic
  return (
    <div className={cn("base-classes", className)}>
      {/* Content */}
    </div>
  )
}
```

### Styling Conventions

1. **Use `cn()` utility** for all className merging:
   ```javascript
   className={cn("base-classes", className)}
   ```

2. **Tailwind Patterns**:
   - Use `bg-gray-800/70` for semi-transparent backgrounds
   - Use `max-w-3xl` for content width constraints
   - Use `rounded-lg` for border radius
   - Use `shadow-md` for elevation

3. **Theme Variables** (defined in `globals.css`):
   - `--background`, `--foreground` - Base colors
   - `--primary`, `--secondary` - Brand colors
   - `--muted`, `--accent` - Supporting colors
   - `--card`, `--popover` - Component backgrounds

4. **Dark Mode Support**:
   - Use `dark:` prefix for dark mode styles
   - Example: `className="text-gray-700 dark:text-white"`

### Component Types

| Type | Location | Extension | Directive |
|------|----------|-----------|-----------|
| Server Components | `app/` | `.js` | None |
| Client Components | `components/` | `.jsx` | `"use client"` |
| UI Components | `components/ui/` | `.jsx` | `"use client"` (if interactive) |

---

## UI Components (shadcn/ui)

Components are built using **class-variance-authority (CVA)** for variant management.

### Available Components

- **Button** - Primary, secondary, outline, ghost, link variants
- **Card** - Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- **Badge** - Default, secondary, destructive, outline variants
- **Avatar** - Avatar, AvatarImage, AvatarFallback
- **Skeleton** - Loading placeholder
- **Video** - Custom video player with lazy loading, play/pause overlay

### Using Components

```jsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

<Button variant="outline" size="sm">
  Click Me
</Button>
```

---

## Data Structure

### Work Experience

Stored as an array of objects in `mainSection.js`:

```javascript
{
  company: "Company Name",
  role: "Job Title",
  period: "2024/01 - Present",
  description: "Job description",
  logo: "/images/logo.png",  // or external URL
  skills: ["Skill1", "Skill2"]
}
```

### Projects

```javascript
{
  title: "Project Name",
  subtitle: "Short description",
  description: "Full description",
  thumbnailSrc: "/images/projects/image.png",
  videoSrc: "/videos/demo.mp4",
  technologies: ["Tech1", "Tech2"],
  link: "https://example.com"  // or "#" if not available
}
```

### Skills

```javascript
{
  name: "JavaScript",
  category: "frontend"  // frontend, backend, mobile, tools
}
```

---

## Assets Management

### Images

- **Location**: `public/images/`
- **Company logos**: `public/images/[company]-logo.png`
- **Project thumbnails**: `public/images/projects/[project-name].png`
- **Supported formats**: PNG, SVG (for external logos)

### Videos

- **Location**: `public/videos/`
- **Formats**: MP4, MOV
- **Usage**: Lazy-loaded with intersection observer in custom Video component

### Resume PDF

- **Location**: `public/Dagim-Tesfaye-Revised.pdf`
- **Referenced in**: `app/resume/page.js`

---

## Theme System

### Configuration

- **Provider**: `next-themes` with custom ThemeProvider wrapper
- **Default Theme**: Dark mode (`defaultTheme="dark"`)
- **Attribute**: `class` (adds `.dark` class to html element)
- **System Preference**: Enabled

### CSS Variables

Two sets of CSS variables exist in `globals.css`:

1. **Modern OKLCH format** (lines 1-113) - Primary theme system
2. **Legacy HSL format** (lines 128-199) - Fallback/legacy support

### Adding Theme-Aware Styles

```css
.my-component {
  background: var(--background);
  color: var(--foreground);
}

/* Or with Tailwind */
className="bg-background text-foreground"
```

---

## Testing Instructions

### Manual Testing Checklist

- [ ] Homepage loads without errors
- [ ] Theme toggle switches between dark/light modes
- [ ] All project cards display with thumbnails
- [ ] Clicking project opens modal with video
- [ ] Resume page loads PDF correctly
- [ ] Download button works on resume page
- [ ] Social links open in new tabs
- [ ] Page loader appears on initial load
- [ ] Responsive design works on mobile/tablet/desktop

### No Automated Tests

This project does not have Jest, Cypress, or Playwright configured. All testing is manual.

---

## Deployment

### Vercel Deployment

1. Connect GitHub repository to Vercel
2. Build command: `next build`
3. Output directory: `.next`

### Environment Variables

None currently required. The project uses static data and does not connect to external APIs.

### Pre-Deployment Checklist

- [ ] `npm run build` completes without errors
- [ ] All images load correctly
- [ ] Videos play in project modals
- [ ] PDF download works
- [ ] Theme toggle functions correctly

---

## Security Considerations

1. **External Links**: All external links use `target="_blank"` with `rel="noopener noreferrer"`
2. **Image Domains**: Remote image patterns restricted to known domains in `next.config.mjs`
3. **PDF Viewer**: Uses iframe with sandboxed context
4. **No User Input**: The site is static with no forms or user data collection

---

## Common Tasks

### Adding a New Project

1. Add project image to `public/images/projects/`
2. Add demo video to `public/videos/` (optional)
3. Edit `components/homepage/mainSection.js`
4. Add entry to `projectsData` array

### Adding Work Experience

1. Add company logo to `public/images/`
2. Edit `components/homepage/mainSection.js`
3. Add entry to `workExperiences` array

### Adding a New Skill

1. Edit `components/homepage/Skills.js`
2. Add entry to `skillsData` array with appropriate category

### Adding a New UI Component

1. Use shadcn CLI if available: `npx shadcn add [component]`
2. Or create manually in `components/ui/`
3. Follow existing component patterns with CVA and `cn()` utility

---

## Dependencies to Know

| Package | Purpose |
|---------|---------|
| `next-themes` | Dark/light mode switching |
| `class-variance-authority` | Component variant management |
| `tailwind-merge` | Tailwind class deduplication |
| `clsx` | Conditional class joining |
| `lucide-react` | Icon library |
| `react-icons` | Additional icon sets (Fa, Si) |
| `@radix-ui/react-*` | Headless UI primitives |
| `@vercel/speed-insights` | Performance monitoring |

---

## Troubleshooting

### Hydration Mismatch Errors

If you see hydration warnings, ensure client components:
1. Use `"use client"` directive
2. Handle mounting state properly:
   ```javascript
   const [mounted, setMounted] = useState(false)
   useEffect(() => setMounted(true), [])
   if (!mounted) return null
   ```

### Images Not Loading

- Check `next.config.mjs` for allowed remote patterns
- Verify image exists in `public/` directory
- Use correct path: `/images/filename.png` (leading slash)

### Videos Not Playing

- Ensure video format is MP4 or MOV
- Check that file exists in `public/videos/`
- Verify CORS headers if using external videos

---

## Notes for AI Agents

1. **Always use `cn()`** for className concatenation
2. **Prefer client components** for interactive elements
3. **Keep data in components** - no external API calls
4. **Use existing UI components** before creating new ones
5. **Maintain responsive design** - test at mobile, tablet, desktop breakpoints
6. **Follow existing naming conventions** - PascalCase for components
7. **Add loading states** for async operations
8. **Preserve theme compatibility** - use CSS variables, not hardcoded colors
