import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: false,
  presets: [],
  eject: true,

  outdir: 'styled-system',

  hash: true,
  watch: true,

  include: ['./src/**/*.{ts,tsx,css}'],

  theme: {
    breakpoints: {
      min: '320px',
      tab: '768px',
      pc: '1080px',
    },
    semanticTokens: {
      colors: {
        saturation: { value: '30%' },
        main: {
          DEFAULT: { value: 'hsl(120, {colors.saturation}, 50%)' },
          thin: { value: 'hsl(120, {colors.saturation}, 80%)' },
        },
        brown: { value: 'hsl(30, {colors.saturation}, 35%)' },
        base: { value: 'hsl(30, {colors.saturation}, 75%)' },
        accent: { value: 'hsl(0, {colors.saturation}, 50%)' },
        text: { value: '#333' },
        saturday: { value: 'hsl(210, {colors.saturation}, 35%)' },
        sunday: { value: 'hsl(340, {colors.saturation}, 35%)' },
        bonus: { value: 'hsl(0, {colors.saturation}, 50%)' },
      },
      spacing: {
        menuBtnTopPos: { value: '.375rem' },
        row: {
          section: { DEFAULT: { value: '5rem' }, tab: { value: '5rem' } },
          body: {
            DEFAULT: { value: '.5rem' },
            object: { value: '.75rem' },
            article: { value: '1rem' },
          },
          blog: {
            body: { value: '1rem' },
            object: { value: '1.5rem' },
          },
        },
        inner: {
          x: { value: '.5rem' },
        },
      },
      shadows: {
        card: { value: '1px 2px 2px rgba(0, 0, 0, .1), 1px 2px 4px rgba(0, 0, 0, .5)' },
        btn: { value: '1px 2px 2px rgba(0, 0, 0, .1), 1px 2px 4px rgba(0, 0, 0, .5)' },
      },
      assets: {
        bgPatternImg: { value: 'url(/images/leaf-pattern.png)' },
      },
    },
  },

  utilities: {
    extend: {
      width: { shorthand: 'w' },
      height: { shorthand: 'h' },
      maxWidth: { shorthand: 'maxW' },
      minWidth: { shorthand: 'minW' },
      maxHeight: { shorthand: 'maxH' },
      minHeight: { shorthand: 'minH' },

      margin: { shorthand: 'mg' },
      marginInline: { shorthand: 'mx' },
      marginBlock: { shorthand: 'my' },
      marginTop: { shorthand: 'mt' },
      marginRight: { shorthand: 'mr' },
      marginLeft: { shorthand: 'ml' },
      marginBottom: { shorthand: 'mb' },

      padding: { shorthand: 'pd' },
      paddingInline: { shorthand: 'px' },
      paddingBlock: { shorthand: 'py' },
      paddingTop: { shorthand: 'pt' },
      paddingRight: { shorthand: 'pr' },
      paddingLeft: { shorthand: 'pl' },
      paddingBottom: { shorthand: 'pb' },

      border: { shorthand: 'bo' },
      borderInline: { shorthand: 'bx' },
      borderBlock: { shorthand: 'by' },
      borderTop: { shorthand: 'bt' },
      borderRight: { shorthand: 'br' },
      borderBottom: { shorthand: 'bb' },
      borderLeft: { shorthand: 'bl' },
      borderRadius: { shorthand: 'radius' },

      display: { shorthand: 'd' },
      position: { shorthand: 'pos' },

      background: { shorthand: 'bg' },
      backgroundColor: { shorthand: 'bgColor' },
      backgroundImage: { shorthand: 'bgImage' },
      backgroundPosition: { shorthand: 'bgPos' },
      backgroundRepeat: { shorthand: 'bgRepeat' },
      backgroundSize: { shorthand: 'bgSize' },
      backgroundClip: { shorthand: 'bgClip' },
      backgroundAttachment: { shorthand: 'bgAttachment' },
      backgroundBlendMode: { shorthand: 'bgBlendMode' },

      maskPosition: { shorthand: 'maskPos' },
      objectPosition: { shorthand: 'objectPos' },
    },
  },
});
