/**
 * EXAMPLE: How to use the Design System
 * 
 * This file demonstrates different ways to use the design system in your components.
 * You can delete this file after understanding the usage patterns.
 */

import { useDesignSystem, getColor, getButtonStyle, theme } from './design-system';

// Example 1: Using the design system hook in a component
export function ExampleButton() {
  const { getButtonStyle } = useDesignSystem();
  const primaryButton = getButtonStyle('primary');

  return (
    <button
      style={{
        backgroundColor: primaryButton.background,
        color: primaryButton.color,
        padding: primaryButton.padding,
        borderRadius: primaryButton.borderRadius,
        fontSize: primaryButton.fontSize,
        fontWeight: primaryButton.fontWeight,
        transition: primaryButton.transition,
        border: 'none',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = primaryButton.hoverBackground;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = primaryButton.background;
      }}
    >
      Click Me
    </button>
  );
}

// Example 2: Using helper functions directly
export function ExampleCard() {
  return (
    <div
      style={{
        backgroundColor: theme.components.card.background,
        padding: theme.components.card.padding,
        borderRadius: theme.components.card.borderRadius,
        boxShadow: theme.components.card.shadow,
      }}
    >
      <h3 style={{ color: getColor('primary.main') }}>
        Card Title
      </h3>
      <p style={{ color: getColor('neutral.gray.600') }}>
        Card content goes here
      </p>
    </div>
  );
}

// Example 3: Using with Tailwind CSS classes
// Create a tailwind.config.js that references the design system:
export const tailwindExample = () => `
// In your component:
<button className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-light transition-all">
  Tailwind Button
</button>

// Make sure your tailwind.config.js extends with design system colors:
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '${theme.colors.primary.main}',
        light: '${theme.colors.primary.light}',
        dark: '${theme.colors.primary.dark}',
      }
    }
  }
}
`;

// Example 4: Accessing nested properties
export function ExampleWithNestedColors() {
  const { colors } = useDesignSystem();
  
  return (
    <div>
      <p style={{ color: colors.neutral.gray['700'] }}>Gray 700</p>
      <p style={{ color: colors.accent.purple }}>Purple Accent</p>
      <p style={{ color: colors.status.success }}>Success Status</p>
    </div>
  );
}

// Example 5: Creating reusable styled components
export const StyledComponents = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Button: ({ children, variant = 'primary', onClick }: any) => {
    const style = getButtonStyle(variant);
    const borderStyle = variant === 'outline' && 'border' in style ? style.border : 'none';
    
    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: style.background,
          color: style.color,
          padding: style.padding,
          borderRadius: style.borderRadius,
          fontSize: style.fontSize,
          fontWeight: style.fontWeight,
          transition: style.transition,
          border: borderStyle,
          cursor: 'pointer',
        }}
      >
        {children}
      </button>
    );
  },
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Card: ({ children }: any) => {
    const card = theme.components.card;
    return (
      <div
        style={{
          backgroundColor: card.background,
          padding: card.padding,
          borderRadius: card.borderRadius,
          boxShadow: card.shadow,
        }}
      >
        {children}
      </div>
    );
  },
};

// Example 6: Usage in your actual components
export function RealWorldExample() {
  const { colors, typography, spacing } = useDesignSystem();

  return (
    <div style={{ padding: spacing['8'] }}>
      <h1 
        style={{ 
          color: colors.primary.main,
          fontSize: typography.fontSize['4xl'],
          fontWeight: typography.fontWeight.bold,
          marginBottom: spacing['6'],
        }}
      >
        Welcome to OloResort
      </h1>
      
      <StyledComponents.Card>
        <h3 style={{ 
          fontSize: typography.fontSize['2xl'],
          marginBottom: spacing['4'],
        }}>
          Card Title
        </h3>
        <p style={{ 
          color: colors.neutral.gray['600'],
          lineHeight: typography.lineHeight.relaxed,
        }}>
          This is how you can use the design system in your components.
        </p>
      </StyledComponents.Card>

      <div style={{ marginTop: spacing['8'], display: 'flex', gap: spacing['4'] }}>
        <StyledComponents.Button variant="primary">
          Primary Button
        </StyledComponents.Button>
        <StyledComponents.Button variant="secondary">
          Secondary Button
        </StyledComponents.Button>
        <StyledComponents.Button variant="outline">
          Outline Button
        </StyledComponents.Button>
      </div>
    </div>
  );
}

/**
 * HOW TO UPDATE STYLES:
 * 
 * 1. Open lib/design-system.json
 * 2. Find the property you want to change (e.g., colors.primary.main)
 * 3. Update the value
 * 4. Save the file
 * 5. The changes will automatically apply to all components using the design system
 * 
 * Example changes:
 * - Change primary color: colors.primary.main = "#bd984b"
 * - Change button padding: components.button.primary.padding = "1.5rem 3rem"
 * - Change font size: typography.fontSize.base = "1.125rem"
 */

