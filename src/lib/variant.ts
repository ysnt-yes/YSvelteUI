import type { SvelteHTMLElements } from 'svelte/elements';

export type DesignSystemColor = 'accent' | 'surface' | 'success' | 'warning' | 'error' | 'transparent' | 'custom';
export type DesignSystemAlign = 'left' | 'right' | 'center';
export type DesignSystemVariant = 'solid' | 'outline' | 'glass';

export interface BaseVisuals {
  variant?: DesignSystemVariant;
  color?: DesignSystemColor;
  customColor?: string;
}

export interface ButtonVisuals extends BaseVisuals {
  
  align?: DesignSystemAlign;
  fullWidth?: boolean;
  active?: boolean;
}

export interface CardVisuals extends BaseVisuals {
  elevation?: 'none' | 'low' | 'high';
  fullWidth?: boolean;
}

export interface DesignSystemAttributes {
  button: ButtonVisuals;
  a: ButtonVisuals;
  div: CardVisuals;
}

export type VariantProps<T extends keyof SvelteHTMLElements> =
    (T extends keyof DesignSystemAttributes ? DesignSystemAttributes[T] : Record<string, never>) &
    SvelteHTMLElements[T];