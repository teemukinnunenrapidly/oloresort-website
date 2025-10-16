import { z } from 'zod';
import tokens from './design-tokens.json';

// DTCG Token Types
const TokenValueSchema = z.object({
  $value: z.union([z.string(), z.number()]),
  $type: z.string().optional(),
});

const TokenGroupSchema: z.ZodType<any> = z.lazy(() =>
  z.union([
    TokenValueSchema,
    z.record(z.union([TokenValueSchema, TokenGroupSchema])),
  ])
);

// Type-safe token access
export type DesignTokens = typeof tokens;
export type TokenPath = string;

// Helper to access nested token values
export function getTokenValue(path: string): any {
  const keys = path.split('.');
  let current: any = tokens;
  
  for (const key of keys) {
    if (!current[key]) {
      console.warn(`Token not found: ${path}`);
      return undefined;
    }
    current = current[key];
  }
  
  // If it's a token object with $value
  if (current && typeof current === 'object' && '$value' in current) {
    const value = current.$value;
    
    // Resolve references
    if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
      const refPath = value.slice(1, -1);
      return getTokenValue(refPath);
    }
    
    return value;
  }
  
  return current;
}

// Type-safe token getters
export const getColor = (path: string) => getTokenValue(`semantic.color.${path}`) as string;
export const getSpacing = (path: string) => getTokenValue(`reference.spacing.${path}`) as string;
export const getFont = (path: string) => getTokenValue(`reference.font.${path}`) as string;
export const getRadius = (path: string) => getTokenValue(`reference.radius.${path}`) as string;
export const getShadow = (path: string) => getTokenValue(`reference.shadow.${path}`) as string;

// Component-specific getters
export const getComponentToken = (component: string, path: string) => 
  getTokenValue(`component.${component}.${path}`);

// Semantic token getters
export const getSemanticColor = (path: string) => getTokenValue(`semantic.color.${path}`) as string;
export const getSemanticTypography = (path: string) => getTokenValue(`semantic.typography.${path}`);
export const getSemanticSpacing = (path: string) => getTokenValue(`semantic.spacing.${path}`) as string;

// Export raw tokens
export { tokens };

// CSS Variable generator
export function generateCSSVariables(prefix = 'olo'): string {
  const cssVars: string[] = [];
  
  function processTokens(obj: any, path: string[] = []) {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = [...path, key];
      
      if (value && typeof value === 'object') {
        if ('$value' in value) {
          const varName = `--${prefix}-${currentPath.join('-')}`;
          const resolvedValue = getTokenValue(currentPath.join('.'));
          cssVars.push(`  ${varName}: ${resolvedValue};`);
        } else {
          processTokens(value, currentPath);
        }
      }
    }
  }
  
  processTokens(tokens.reference, ['reference']);
  processTokens(tokens.semantic, ['semantic']);
  
  return `:root {\n${cssVars.join('\n')}\n}`;
}

// React hook for design tokens
export function useDesignTokens() {
  return {
    tokens,
    getColor,
    getSpacing,
    getFont,
    getRadius,
    getShadow,
    getComponentToken,
    getSemanticColor,
    getSemanticTypography,
    getSemanticSpacing,
    getTokenValue,
  };
}

// Utility class generator
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Token validation
export function validateTokens() {
  try {
    TokenGroupSchema.parse(tokens);
    console.log('✅ All design tokens are valid');
    return true;
  } catch (error) {
    console.error('❌ Token validation failed:', error);
    return false;
  }
}

// Export default
export default tokens;
