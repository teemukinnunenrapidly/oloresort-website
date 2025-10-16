#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load tokens
const tokensPath = path.join(__dirname, 'design-tokens.json');
const tokens = JSON.parse(fs.readFileSync(tokensPath, 'utf-8'));

// Helper to resolve token references
function resolveTokenValue(value: any, tokenData = tokens): string {
  if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
    const refPath = value.slice(1, -1).split('.');
    let resolved: any = tokenData;
    
    for (const key of refPath) {
      resolved = resolved?.[key];
    }
    
    if (resolved && typeof resolved === 'object' && '$value' in resolved) {
      return resolveTokenValue(resolved.$value, tokenData);
    }
  }
  
  return value;
}

// Generate CSS custom properties
function generateCSS(): string {
  const cssLines: string[] = [
    '/* Auto-generated from design-tokens.json */',
    '/* DO NOT EDIT MANUALLY */',
    '',
    ':root {'
  ];
  
  function processTokenGroup(group: any, prefix: string[] = []) {
    for (const [key, value] of Object.entries(group)) {
      if (value && typeof value === 'object') {
        if ('$value' in value) {
          const varName = `--${prefix.concat(key).join('-')}`;
          const resolvedValue = resolveTokenValue(value.$value);
          cssLines.push(`  ${varName}: ${resolvedValue};`);
        } else {
          processTokenGroup(value, prefix.concat(key));
        }
      }
    }
  }
  
  // Process reference tokens
  processTokenGroup(tokens.reference, ['ref']);
  
  // Process semantic tokens
  processTokenGroup(tokens.semantic, ['sem']);
  
  // Process component tokens
  processTokenGroup(tokens.component, ['comp']);
  
  cssLines.push('}');
  cssLines.push('');
  
  // Add utility classes
  cssLines.push('/* Utility Classes */');
  
  // Color utilities
  for (const [colorKey, colorGroup] of Object.entries(tokens.semantic.color)) {
    if (typeof colorGroup === 'object' && !('$value' in colorGroup)) {
      for (const [variant, value] of Object.entries(colorGroup)) {
        if (value && typeof value === 'object' && '$value' in value) {
          const className = `.text-${colorKey}-${variant}`;
          const colorValue = resolveTokenValue(value.$value);
          cssLines.push(`${className} { color: ${colorValue}; }`);
          
          const bgClassName = `.bg-${colorKey}-${variant}`;
          cssLines.push(`${bgClassName} { background-color: ${colorValue}; }`);
        }
      }
    }
  }
  
  // Spacing utilities
  for (const [key, value] of Object.entries(tokens.reference.spacing)) {
    if (value && typeof value === 'object' && '$value' in value) {
      const spacingValue = resolveTokenValue(value.$value);
      cssLines.push(`.p-${key} { padding: ${spacingValue}; }`);
      cssLines.push(`.m-${key} { margin: ${spacingValue}; }`);
      cssLines.push(`.px-${key} { padding-left: ${spacingValue}; padding-right: ${spacingValue}; }`);
      cssLines.push(`.py-${key} { padding-top: ${spacingValue}; padding-bottom: ${spacingValue}; }`);
      cssLines.push(`.mx-${key} { margin-left: ${spacingValue}; margin-right: ${spacingValue}; }`);
      cssLines.push(`.my-${key} { margin-top: ${spacingValue}; margin-bottom: ${spacingValue}; }`);
    }
  }
  
  // Border radius utilities
  for (const [key, value] of Object.entries(tokens.reference.radius)) {
    if (value && typeof value === 'object' && '$value' in value) {
      const radiusValue = resolveTokenValue(value.$value);
      cssLines.push(`.rounded-${key} { border-radius: ${radiusValue}; }`);
    }
  }
  
  // Shadow utilities
  for (const [key, value] of Object.entries(tokens.reference.shadow)) {
    if (value && typeof value === 'object' && '$value' in value) {
      const shadowValue = resolveTokenValue(value.$value);
      cssLines.push(`.shadow-${key} { box-shadow: ${shadowValue}; }`);
    }
  }
  
  return cssLines.join('\n');
}

// Generate TypeScript types
function generateTypes(): string {
  const typeLines: string[] = [
    '/* Auto-generated from design-tokens.json */',
    '/* DO NOT EDIT MANUALLY */',
    '',
    'export interface DesignTokens {'
  ];
  
  function generateTypeForGroup(group: any, indent = '  '): string[] {
    const lines: string[] = [];
    
    for (const [key, value] of Object.entries(group)) {
      if (value && typeof value === 'object') {
        if ('$value' in value) {
          lines.push(`${indent}${key}: string;`);
        } else {
          lines.push(`${indent}${key}: {`);
          lines.push(...generateTypeForGroup(value, indent + '  '));
          lines.push(`${indent}};`);
        }
      }
    }
    
    return lines;
  }
  
  typeLines.push('  reference: {');
  typeLines.push(...generateTypeForGroup(tokens.reference, '    '));
  typeLines.push('  };');
  
  typeLines.push('  semantic: {');
  typeLines.push(...generateTypeForGroup(tokens.semantic, '    '));
  typeLines.push('  };');
  
  typeLines.push('  component: {');
  typeLines.push(...generateTypeForGroup(tokens.component, '    '));
  typeLines.push('  };');
  
  typeLines.push('}');
  typeLines.push('');
  
  // Add token path types
  typeLines.push('export type ColorToken = keyof DesignTokens["semantic"]["color"];');
  typeLines.push('export type SpacingToken = keyof DesignTokens["reference"]["spacing"];');
  typeLines.push('export type FontToken = keyof DesignTokens["reference"]["font"];');
  typeLines.push('export type ComponentToken = keyof DesignTokens["component"];');
  
  return typeLines.join('\n');
}

// Main generation function
async function generate() {
  try {
    // Generate CSS
    const css = generateCSS();
    const cssPath = path.join(__dirname, 'design-tokens.css');
    fs.writeFileSync(cssPath, css);
    console.log(`✅ Generated ${cssPath}`);
    
    // Generate TypeScript types
    const types = generateTypes();
    const typesPath = path.join(__dirname, 'design-tokens.types.ts');
    fs.writeFileSync(typesPath, types);
    console.log(`✅ Generated ${typesPath}`);
    
    console.log('✨ Token generation complete!');
  } catch (error) {
    console.error('❌ Error generating tokens:', error);
    process.exit(1);
  }
}

// Run the generation
generate();

export { generate };
