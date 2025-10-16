# OloResort Design System Documentation

## 📋 Overview

The OloResort design system is a centralized JSON-based system for managing all design tokens, styles, and component configurations. This ensures consistency across the entire website and makes it easy to update the design in one place.

## 📁 File Structure

```
lib/
├── design-system.json      # Main design system configuration (EDIT THIS)
├── design-system.ts         # TypeScript utilities and hooks
└── design-system-example.tsx # Usage examples
```

## 🎨 Design Tokens

### Colors

The design system includes a comprehensive color palette:

- **Primary**: `#bd984b` (Gold)
- **Secondary**: `#1e3a8a` (Blue)
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

### Change Primary Brand Color

1. Open `lib/design-system.json`
2. Find `colors.primary.main`
3. Change the hex value (e.g., from `#bd984b` to `#ff6b35`)
4. Save the file
5. All components using the primary color will update automatically

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
- Add them to `design-system.json`
- Update TypeScript types in `design-system.ts` if needed
- Use them in your components

## 📚 Best Practices

1. **Always use design tokens** instead of hardcoded values
2. **Keep the JSON organized** with clear naming
3. **Document custom additions** in this file
4. **Test changes** across different pages
5. **Use semantic naming** (e.g., `primary` instead of `blue`)

---

For questions or issues, refer to the examples in `lib/design-system-example.tsx`

