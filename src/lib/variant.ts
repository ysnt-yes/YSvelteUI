import type { SvelteHTMLElements } from 'svelte/elements';

export type DesignSystemColor = 'accent' | 'surface' | 'success' | 'warning' | 'error' | 'transparent' | 'custom';
export type DesignSystemAlign = 'left' | 'right' | 'center';
export type DesignSystemVariant = 'solid' | 'outline' | 'glass';

export interface BaseVisuals {
  variant?: DesignSystemVariant;
  color?: DesignSystemColor;
  customColor?: string;
	fullWidth?: boolean;
}

export interface ButtonVisuals extends BaseVisuals {
  align?: DesignSystemAlign;
  active?: boolean;
}

export interface CardVisuals extends BaseVisuals {
  elevation?: 'none' | 'low' | 'high';
}

export type InputVisuals = BaseVisuals

export interface DesignSystemAttributes {
  button: ButtonVisuals;
  a: ButtonVisuals;
  div: CardVisuals;
	input: InputVisuals;
}

export type VariantProps<T extends keyof SvelteHTMLElements> =
    (T extends keyof DesignSystemAttributes ? DesignSystemAttributes[T] : Record<string, never>) &
    SvelteHTMLElements[T];