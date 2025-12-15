# Portfolio Project Structure

## Overview
This is a professional portfolio website for Iyyanar S, a Front-End Developer with 2.5+ years of experience.

## Technology Stack
- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Google Fonts** - Inter & Outfit typography

## Folder Structure

```
Portfolio/
│
├── public/                          # Static assets
│   └── vite.svg
│
├── src/
│   ├── components/
│   │   ├── common/                  # Reusable components
│   │   │   ├── Navbar.jsx          # Responsive navigation with smooth scroll
│   │   │   └── Footer.jsx          # Footer with links and social media
│   │   │
│   │   └── sections/                # Page sections
│   │       ├── Hero.jsx            # Landing section with CTA
│   │       ├── About.jsx           # Professional summary & education
│   │       ├── Experience.jsx      # Work history timeline
│   │       ├── Skills.jsx          # Categorized skills display
│   │       ├── Projects.jsx        # Featured projects showcase
│   │       └── Contact.jsx         # Contact form & information
│   │
│   ├── data/
│   │   └── portfolioData.js        # All portfolio content (centralized)
│   │
│   ├── assets/                      # Images and media files
│   │   └── images/
│   │
│   ├── App.jsx                      # Main application component
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Global styles & Tailwind directives
│
├── index.html                       # HTML template with SEO meta tags
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── vite.config.js                  # Vite configuration
├── package.json                     # Dependencies and scripts
├── .gitignore                      # Git ignore rules
└── README.md                        # Project documentation

```

## Component Details

### Common Components

#### Navbar.jsx
- Sticky navigation with glass morphism effect on scroll
- Smooth scroll to sections
- Mobile-responsive hamburger menu
- Animated hover states

#### Footer.jsx
- Quick links to all sections
- Contact information
- Social media links
- Copyright notice with animated heart

### Section Components

#### Hero.jsx
- Eye-catching landing section
- Animated background elements
- Call-to-action buttons
- Tech stack pills
- Scroll indicator

#### About.jsx
- Professional summary
- Highlight cards (experience, stack, collaboration, code quality)
- Education information
- Animated card entrance

#### Experience.jsx
- Timeline-style work history
- Company details with icons
- Expandable responsibilities list
- Hover animations

#### Skills.jsx
- Categorized skill display:
  - Languages
  - Frameworks & Libraries
  - Tools & Technologies
  - UI/UX Design
  - Soft Skills
- Color-coded categories
- Interactive skill tags

#### Projects.jsx
- Grid layout for projects
- Technology tags
- Key highlights for each project
- Hover effects and animations

#### Contact.jsx
- Contact information cards
- Functional contact form (mailto integration)
- Form validation
- Success feedback

## Data Structure

All portfolio content is centralized in `src/data/portfolioData.js`:

- `personalInfo` - Name, title, contact details
- `summary` - Professional summary
- `workExperience` - Array of job experiences
- `skills` - Categorized skills object
- `education` - Educational background
- `certificates` - Certifications
- `languages` - Spoken languages
- `projects` - Featured projects array

## Design Features

### Color Scheme
- Primary: Blue (#0ea5e9)
- Background: Dark slate (#0f172a - #1e293b)
- Accent: Cyan gradients
- Text: Light gray to white

### Typography
- Headings: Outfit (Google Font)
- Body: Inter (Google Font)
- Weights: 300-900

### Animations
- Fade in
- Slide up/down
- Scale in
- Float (infinite)
- Hover transitions

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## Key Features

1. **Fully Responsive** - Works on all devices
2. **Smooth Scrolling** - Seamless navigation
3. **Dark Theme** - Modern, eye-friendly design
4. **Animations** - Subtle, professional animations
5. **SEO Optimized** - Proper meta tags and structure
6. **Performance** - Fast loading with Vite
7. **Accessible** - Semantic HTML and ARIA labels
8. **Maintainable** - Clean code structure

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Customization Guide

To customize this portfolio:

1. **Update Personal Info**: Edit `src/data/portfolioData.js`
2. **Change Colors**: Modify `tailwind.config.js`
3. **Add Images**: Place in `src/assets/images/`
4. **Update Meta Tags**: Edit `index.html`
5. **Modify Sections**: Edit components in `src/components/sections/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimizations

- Lazy loading for images
- Code splitting with Vite
- Optimized animations
- Minimal dependencies
- Tree-shaking enabled

---

**Built with ❤️ by Iyyanar S**
