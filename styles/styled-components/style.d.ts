import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      accent: string
      accent85: string
      lightgray: string
      midgray: string
    }
    font: {}
    breakpoints: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
  }
}
