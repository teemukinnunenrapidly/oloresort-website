# OloResort Design System Documentation

## 📋 Overview

The OloResort design system uses DTCG (Design Tokens Community Group) format for managing all design tokens. This system provides:

- ✅ **DTCG Compliance**: Industry-standard token format
- 🔄 **Automated Generation**: CSS and TypeScript files auto-generated from tokens
- ♿ **Accessibility Built-in**: WCAG compliance tracking and a11y tokens
- 🎯 **Type Safety**: Full TypeScript support with Zod validation
- 🌓 **Multi-mode Support**: Light/dark themes and density modes
- 📱 **Responsive**: Breakpoint tokens for all screen sizes

## 📁 File Structure

```
lib/
├── design-tokens.json       # Main DTCG tokens file (SOURCE OF TRUTH)
├── design-tokens.ts         # TypeScript utilities and hooks
├── design-tokens.css        # Auto-generated CSS variables
├── design-tokens.types.ts   # Auto-generated TypeScript types
├── generate-tokens.ts       # Token generation script
├── design-system.json       # Legacy design system (deprecated)
└── design-system.ts         # Legacy utilities (deprecated)
```

## 🚀 Token Usage Priority

Follow this priority order when using design tokens:

### 1. **Utility Classes (Preferred)**
```tsx
// Best: Use generated utility classes
<div className="text-primary-base bg-background-content rounded-lg shadow-md p-4">
  <h1 className="text-heading-2">Title</h1>
</div>
```

### 2. **CSS Variables**
```css
/* Good: Use CSS custom properties */
.custom-component {
  color: var(--sem-color-text-heading);
  background: var(--sem-color-background-content);
  padding: var(--ref-spacing-4);
}
```

### 3. **TypeScript Helpers**
```tsx
// OK: Use TypeScript utilities
import { getSemanticColor, getSpacing } from '@/lib/design-tokens';

const styles = {
  color: getSemanticColor('text.heading'),
  padding: getSpacing('4'),
};
```

### 4. **Inline Styles (Avoid)**
```tsx
// Avoid: Only use for dynamic values
<div style={{ marginTop: `${dynamicValue}px` }}>
  Content
</div>
```

## 🔄 Token Generation

Run the following commands to generate CSS and TypeScript files:

```bash
# Generate tokens once
npm run tokens:generate

# Watch for changes
npm run tokens:watch
```

This will create:
- `design-tokens.css` - CSS custom properties
- `design-tokens.types.ts` - TypeScript type definitions

## 🎨 Design Tokens

### Token Structure

The design system follows DTCG format with three token levels:

1. **Reference Tokens** (`reference.*`): Raw design values
2. **Semantic Tokens** (`semantic.*`): Meaningful aliases
3. **Component Tokens** (`component.*`): Component-specific values

### Colors

The design system includes a comprehensive color palette:

- **Primary**: `#bd984b` (Gold) - Used for headings and primary actions
- **Backgrounds**:
  - Header: `#181212`
  - Content area: `#2E2828`
- **Text colors**:
  - Headings: `#bd984b`
  - Body text on dark: `#F8F5F0`
  - Body text on light: `#374151`
  - Header links: `#F8F5F0`
- **Accent colors**: Purple, Blue, Green, Orange
- **Neutral grays**: 50-900 scale
- **Status colors**: Success, Warning, Error, Info

### Typography

- **Font Family**: MuseoModerno (primary and secondary)
- **Font Sizes**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl
- **Font Weights**: light (300), normal (400), medium (500), semibold (600), bold (700)

### Spacing

Consistent spacing scale from 0 to 64 (0rem to 16rem)

### Components

Pre-configured styles for:
- Buttons (primary, secondary, outline)
- Cards
- Inputs
- Navigation
- Footer

## 🔧 How to Use

### Method 1: Using the React Hook (Recommended)

```tsx
import { useDesignSystem } from '@/lib/design-system';

function MyComponent() {
  const { colors, typography, getButtonStyle } = useDesignSystem();
  const primaryBtn = getButtonStyle('primary');

  return (
    <button style={{
      backgroundColor: primaryBtn.background,
      color: primaryBtn.color,
      padding: primaryBtn.padding,
      borderRadius: primaryBtn.borderRadius
    }}>
      Click Me
    </button>
  );
}
```

### Method 2: Using Helper Functions

```tsx
import { getColor, getFontSize, getSpacing } from '@/lib/design-system';

function MyComponent() {
  return (
    <div style={{
      color: getColor('primary.main'),
      fontSize: getFontSize('xl'),
      padding: getSpacing('8')
    }}>
      Content
    </div>
  );
}
```

### Method 3: Direct Import

```tsx
import theme from '@/lib/design-system';

function MyComponent() {
  return (
    <div style={{
      color: theme.colors.primary.main,
      fontSize: theme.typography.fontSize.xl
    }}>
      Content
    </div>
  );
}
```

### Method 4: Using CSS Variables

```css
.my-element {
  color: var(--color-primary);
  font-size: var(--font-size-base);
  padding: var(--spacing-8);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}
```

### Method 5: Using Utility Classes

```tsx
<button className="btn-primary">Primary Button</button>
<div className="card">Card Content</div>
```

## ✏️ How to Update Styles

### 1. **Update Colors**

Open `lib/design-system.json` and find the colors section:

```json
{
  "colors": {
    "primary": {
      "main": "#bd984b",    // Change this
      "light": "#d4b570",   // Change this
      "dark": "#9a7a3c"     // Change this
    }
  }
}
```

### 2. **Update Typography**

```json
{
  "typography": {
    "fontSize": {
      "base": "1rem",      // Change base font size
      "xl": "1.25rem"      // Change xl font size
    },
    "fontWeight": {
      "bold": "700"        // Change bold weight
    }
  }
}
```

### 3. **Update Component Styles**

```json
{
  "components": {
    "button": {
      "primary": {
        "background": "#bd984b",     // Button color
        "padding": "1rem 2rem",       // Button padding
        "borderRadius": "9999px"      // Button roundness
      }
    }
  }
}
```

### 4. **Update Spacing**

```json
{
  "spacing": {
    "4": "1rem",          // Change spacing-4
    "8": "2rem",          // Change spacing-8
    "12": "3rem"          // Change spacing-12
  }
}
```

## 🎯 Common Use Cases

### Update Color Scheme

1. Open `lib/design-system.json`
2. Find the `colors` section
3. Update values:
   - `colors.primary.main` - Main brand color (currently `#bd984b`)
   - `colors.background.header` - Header background (`#181212`)
   - `colors.background.content` - Content area background (`#2E2828`)
   - `colors.text.bodyLight` - Text on dark backgrounds (`#F8F5F0`)
   - `colors.text.heading` - Heading color (`#bd984b`)
4. Save the file
5. All components using these colors will update automatically

### Change Button Styles

1. Open `lib/design-system.json`
2. Find `components.button.primary`
3. Modify properties like `padding`, `borderRadius`, `fontSize`
4. Save the file

### Change Spacing Throughout Site

1. Open `lib/design-system.json`
2. Find `spacing` section
3. Update the values (e.g., change `"8": "2rem"` to `"8": "2.5rem"`)
4. All components using `spacing-8` will update

## 🚀 Benefits

1. **Single Source of Truth**: All design values in one file
2. **Easy Updates**: Change colors/fonts/spacing in one place
3. **Type Safety**: TypeScript types for all design tokens
4. **Consistency**: Ensures design consistency across the site
5. **Maintainability**: Easy to maintain and update over time
6. **Scalability**: Easy to add new tokens and components

## 📦 Available Design Tokens

### Colors
- `primary.main`, `primary.light`, `primary.dark`
- `secondary.main`, `secondary.light`, `secondary.dark`
- `background.header`, `background.content`, `background.contentDark`
- `text.heading`, `text.bodyLight`, `text.bodyDark`, `text.headerLink`
- `accent.purple`, `accent.blue`, `accent.green`, `accent.orange`
- `neutral.gray[50-900]`
- `status.success`, `status.warning`, `status.error`, `status.info`

### Typography
- Font families: `primary`, `secondary`, `mono`
- Font sizes: `xs` to `7xl`
- Font weights: `light` to `bold`
- Line heights: `tight`, `normal`, `relaxed`, `loose`

### Spacing
- Values: `0` to `64` (0rem to 16rem)

### Borders
- Border radius: `none`, `sm`, `base`, `md`, `lg`, `xl`, `2xl`, `3xl`, `full`

### Shadows
- Box shadows: `sm`, `base`, `md`, `lg`, `xl`, `2xl`, `inner`, `none`

### Transitions
- Durations: `fast` (150ms), `base` (200ms), `slow` (300ms), `slower` (500ms)
- Timing functions: `ease`, `easeIn`, `easeOut`, `easeInOut`, `linear`

## 🛠️ Development Workflow

1. **Make design changes**: Edit `lib/design-system.json`
2. **Test changes**: The site will hot-reload with new styles
3. **Verify**: Check that all components look correct
4. **Commit**: Commit the updated JSON file

## 📝 Examples

See complete usage examples in `lib/design-system-example.tsx`

## 🔍 Troubleshooting

**Q: Changes not appearing?**
- Make sure you saved `design-system.json`
- Check that components are using the design system (not hardcoded values)
- Restart the dev server if needed

**Q: TypeScript errors?**
- Make sure you're importing from `@/lib/design-system`
- Check that the JSON structure matches the TypeScript types

**Q: Want to add new tokens?**
- Add them to `design-tokens.json` (DTCG format)
- Run `npm run tokens:generate`
- Use the generated tokens in your components

## 🌟 New Token Categories

### States & Interactions
- **Hover/Active/Disabled**: Predefined state modifications
- **Focus Management**: Accessible focus indicators
- **Loading States**: Consistent loading patterns

### Layout & Responsive
- **Breakpoints**: Mobile-first responsive tokens
- **Elevation**: Consistent z-index layers
- **Density Modes**: Compact/Normal/Comfortable spacing

### Motion & Animation
- **Duration**: Consistent timing values
- **Easing**: Smooth animation curves
- **Reduced Motion**: Accessibility preferences

### Data Visualization
- **Chart Colors**: Categorical and sequential palettes
- **Accessibility**: Color-blind safe combinations

## ♿ Accessibility Tokens

### Contrast Ratios
```tsx
// Check contrast compliance
import tokens from '@/lib/design-tokens.json';
const contrastPairs = tokens.a11y.contrast.pairs;
console.log(contrastPairs.textLightOnDark.ratio); // 12.1
console.log(contrastPairs.textLightOnDark.passes); // "AAA"
```

### Focus Management
```css
/* Use focus tokens for consistent focus states */
.interactive-element:focus {
  outline-width: var(--a11y-focus-indicator-width);
  outline-color: var(--a11y-focus-indicator-color);
  outline-offset: var(--a11y-focus-indicator-offset);
}
```

### Touch Targets
```tsx
// Ensure minimum touch target sizes
import { getTokenValue } from '@/lib/design-tokens';
const minSize = getTokenValue('a11y.hitArea.minimum.size'); // 44px
const recSize = getTokenValue('a11y.hitArea.recommended.size'); // 48px
```

## 📚 Best Practices

1. **Always use design tokens** instead of hardcoded values
2. **Follow token hierarchy**: Reference → Semantic → Component
3. **Check accessibility**: Use a11y tokens for WCAG compliance
4. **Test all modes**: Light/dark themes and density modes
5. **Generate after changes**: Run `npm run tokens:generate`
6. **Use semantic naming** (e.g., `primary` instead of `blue`)

## ✅ Do's and ❌ Don'ts

### ✅ DO:
```tsx
// DO: Use semantic tokens
color: getSemanticColor('text.heading')

// DO: Use utility classes
<button className="bg-primary-base hover:bg-primary-hover">

// DO: Check accessibility
const ratio = tokens.a11y.contrast.pairs.primaryOnLight.ratio;

// DO: Use responsive tokens
@media (min-width: var(--ref-breakpoint-md)) { }
```

### ❌ DON'T:
```tsx
// DON'T: Use hardcoded values
color: '#bd984b'

// DON'T: Use reference tokens directly in components
background: getTokenValue('reference.color.brand.gold.500')

// DON'T: Mix token systems
color: theme.colors.primary.main // Old system

// DON'T: Skip accessibility checks
color: '#fff' // What's the contrast ratio?
```

## 🤝 Contributing to the Design System

### Adding New Tokens

1. **Plan the token structure**
   - Decide if it's reference, semantic, or component level
   - Ensure it follows DTCG format

2. **Update design-tokens.json**
   ```json
   {
     "newCategory": {
       "newToken": {
         "$value": "value",
         "$type": "dimension",
         "$description": "What this token is for"
       }
     }
   }
   ```

3. **Generate files**
   ```bash
   npm run tokens:generate
   ```

4. **Test the changes**
   - Check generated CSS variables
   - Verify TypeScript types
   - Test in components

5. **Document the addition**
   - Update this documentation
   - Add usage examples

### Token Naming Convention

- **Reference**: `reference.[category].[subcategory].[token]`
- **Semantic**: `semantic.[intent].[category].[variant]`
- **Component**: `component.[name].[part].[state]`

### Review Checklist

- [ ] Follows DTCG format
- [ ] Has proper $type annotation
- [ ] Includes $description where helpful
- [ ] Maintains consistency with existing tokens
- [ ] Passes accessibility requirements
- [ ] Generated files are committed
- [ ] Documentation is updated

---

For questions or issues, refer to the examples in `lib/design-system-example.tsx`

