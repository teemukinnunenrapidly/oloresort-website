import designSystem from './design-system.json';

// Type definitions for design system
export type DesignSystem = typeof designSystem;
export type Colors = typeof designSystem.colors;
export type Typography = typeof designSystem.typography;
export type Spacing = typeof designSystem.spacing;
export type Components = typeof designSystem.components;

// Export the design system
export const theme = designSystem;

// Helper functions to access design tokens
export const getColor = (path: string): string => {
  const keys = path.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = designSystem.colors;
  
  for (const key of keys) {
    value = value?.[key];
  }
  
  return value || '';
};

export const getFontSize = (size: keyof Typography['fontSize']): string => {
  return designSystem.typography.fontSize[size];
};

export const getSpacing = (size: keyof Spacing): string => {
  return designSystem.spacing[size];
};

export const getShadow = (size: keyof typeof designSystem.shadows): string => {
  return designSystem.shadows[size];
};

export const getRadius = (size: keyof typeof designSystem.borderRadius): string => {
  return designSystem.borderRadius[size];
};

// Component style helpers
export const getButtonStyle = (variant: 'primary' | 'secondary' | 'outline' = 'primary') => {
  return designSystem.components.button[variant];
};

export const getCardStyle = () => {
  return designSystem.components.card;
};

export const getInputStyle = () => {
  return designSystem.components.input;
};

// CSS Variables generator for use in globals.css
export const generateCSSVariables = (): string => {
  const vars: string[] = [];
  
  // Colors
  vars.push(`  --color-primary: ${designSystem.colors.primary.main};`);
  vars.push(`  --color-primary-light: ${designSystem.colors.primary.light};`);
  vars.push(`  --color-primary-dark: ${designSystem.colors.primary.dark};`);
  vars.push(`  --color-secondary: ${designSystem.colors.secondary.main};`);
  
  // Typography
  vars.push(`  --font-family-primary: ${designSystem.typography.fontFamily.primary};`);
  vars.push(`  --font-size-base: ${designSystem.typography.fontSize.base};`);
  
  // Spacing
  vars.push(`  --spacing-4: ${designSystem.spacing['4']};`);
  vars.push(`  --spacing-8: ${designSystem.spacing['8']};`);
  
  return vars.join('\n');
};

// Tailwind-compatible class generator
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// React hook for design system
export const useDesignSystem = () => {
  return {
    theme: designSystem,
    colors: designSystem.colors,
    typography: designSystem.typography,
    spacing: designSystem.spacing,
    components: designSystem.components,
    getColor,
    getFontSize,
    getSpacing,
    getShadow,
    getRadius,
    getButtonStyle,
    getCardStyle,
    getInputStyle,
  };
};

export default designSystem;

