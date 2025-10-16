# Changelog - OloResort Design System

All notable changes to the OloResort Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-01-16

### 🚀 Major Release: DTCG Migration

This release migrates the entire design system to DTCG (Design Tokens Community Group) format, providing better standards compliance, automated generation, and enhanced developer experience.

### Added
- ✨ **DTCG Format**: Complete migration to industry-standard token format
- 🔄 **Automated Generation**: CSS and TypeScript files auto-generated from tokens
- ♿ **Accessibility Tokens**: 
  - Contrast ratio tracking and WCAG compliance levels
  - Focus management tokens
  - Touch target size requirements
  - Motion preferences and reduced motion support
- 🎨 **Extended Token Categories**:
  - States (hover, active, disabled, focus, loading)
  - Density modes (compact, normal, comfortable)
  - Color modes (light, dark)
  - Breakpoints for responsive design
  - Elevation and z-index management
  - Motion tokens (duration, easing)
  - Data visualization color palettes
- 📚 **Enhanced Documentation**:
  - Token usage priority guide
  - Do's and Don'ts section
  - Contribution guidelines
  - Token naming conventions
- 🛠️ **Developer Tools**:
  - `npm run tokens:generate` - Generate CSS and TS files
  - `npm run tokens:watch` - Watch mode for development
  - TypeScript types with Zod validation
  - Utility classes for all tokens

### Changed
- 📁 **File Structure**:
  - `design-tokens.json` is now the source of truth
  - `design-system.json` is deprecated (kept for backward compatibility)
  - Generated files: `design-tokens.css` and `design-tokens.types.ts`
- 🎨 **Color System**:
  - Added semantic color tokens
  - Improved dark mode support
  - Better contrast ratios for accessibility
- 📐 **Spacing System**:
  - Added density multipliers
  - More consistent spacing scale

### Deprecated
- ⚠️ `design-system.json` - Use `design-tokens.json` instead
- ⚠️ `design-system.ts` - Use `design-tokens.ts` instead
- ⚠️ Direct color values - Use token references

### Migration Guide

1. **Update imports**:
   ```tsx
   // Old
   import { getColor } from '@/lib/design-system';
   
   // New
   import { getSemanticColor } from '@/lib/design-tokens';
   ```

2. **Update token references**:
   ```css
   /* Old */
   color: var(--color-primary);
   
   /* New */
   color: var(--sem-color-primary-base);
   ```

3. **Use new utility classes**:
   ```tsx
   // Old
   <div style={{ color: '#bd984b' }}>
   
   // New
   <div className="text-primary-base">
   ```

## [1.1.0] - 2025-01-16

### Added
- 🎨 Custom color scheme for OloResort brand
  - Header background: `#181212`
  - Content background: `#2E2828`
  - Text on dark: `#F8F5F0`
  - Primary gold: `#bd984b`

### Changed
- Updated navigation component colors
- Updated footer component colors
- Improved text contrast on dark backgrounds

## [1.0.0] - 2025-01-15

### Added
- Initial design system implementation
- Basic color palette
- Typography scale
- Component styles
- JSON-based configuration
