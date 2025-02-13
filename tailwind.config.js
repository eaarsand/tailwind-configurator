/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [],
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
    animation: false,
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
    backgroundColor: false,
    backgroundImage: false,
    backgroundOpacity: false,
    blur: false,
    brightness: false,
    borderColor: false,
    borderOpacity: false, 
    borderSpacing: false,
    boxShadow: false,
    boxShadowColor: false,
    caretColor: false,
    accentColor: false,
    contrast: false,
    container: false,
    divideColor: false,
    divideOpacity: false,
    divideWidth: false,
    fill: false,
    fontFamily: false,
    fontSize: {
      xs: '0.75rem',
      sm: '0.9rem',
      lg: '1.15rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    gradientColorStops: false,
    hue: false,
    invert: false,
    keyframes: false,
    placeholderColor: false,
    placeholderOpacity: false,
    outlineColor: false,
    ringColor: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
    ringOpacity: false,
    ringWidth: false,
    saturate: false,
    scale: false,
    scrollMargin: false,
    scrollPadding: false,
    skew: false,
    stroke: false,
    strokeWidth: false,
    textColor: false,
    textDecorationColor: false,
    textDecorationThickness: false,
    textUnderlineOffset: false,
    textIndent: false,
    textOpacity: false,
    translate: false,
    transitionDelay: false,
    transitionDuration: false,
    transitionProperty: false,
    transitionTimingFunction: false,
    willChange: false,
  },
  
  variants: {
    accessibility: [],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: [],
    backgroundAttachment: [],
    backgroundClip: [],
    backgroundColor: [],
    backgroundImage: ['responsive'],
    gradientColorStops: [],
    backgroundOpacity: ['responsive'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: [],
    borderColor: [],
    borderOpacity: [],
    borderRadius: [],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: [],
    boxSizing: ['responsive'],
    container: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    divideColor: [],
    divideOpacity: [],
    divideStyle: [],
    divideWidth: [],
    fill: [],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    clear: [],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontVariantNumeric: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: [],
    height: ['responsive'],
    inset: [],
    justifyContent: ['responsive'],
    justifyItems: ['responsive'],
    justifySelf: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: [],
    listStyleType: [],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover'],
    order: [],
    outline: [],
    overflow: ['responsive'],
    overscrollBehavior: [],
    padding: ['responsive'],
    placeContent: [],
    placeItems: [],
    placeSelf: [],
    placeholderColor: [],
    placeholderOpacity: [],
    pointerEvents: [],
    position: ['responsive'],
    resize: [],
    space: [],
    stroke: [],
    strokeWidth: [],
    tableLayout: [],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover'],
    textOpacity: ['responsive', 'hover'],
    textDecoration: ['responsive', 'hover'],
    textTransform: ['responsive'],
    userSelect: [],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
    gap: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridAutoColumns: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnStart: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridTemplateRows: ['responsive'],
    gridAutoRows: ['responsive'],
    gridRow: ['responsive'],
    gridRowStart: ['responsive'],
    gridRowEnd: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    scale: [],
    rotate: [],
    translate: [],
    skew: [],
    transitionProperty: [],
    transitionTimingFunction: [],
    transitionDuration: [],
    transitionDelay: [],
    animation: []
  },
  
  plugins: [],
}
