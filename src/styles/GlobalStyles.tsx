import { CSSReset } from '@lib/styles/CSSReset'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  html {
    font-size: 16px;
    /* font-family: Arial, Helvetica, sans-serif; */
    font-family: "Source Sans Pro", sans-serif;
  }
  h1 {
    font-size: 3rem;
  }
`

export const GlobalStyles: React.FC = () => {
  return (
    <>
      <CSSReset />
      <Global />
    </>
  )
}

/*
font-family: "Roboto", sans-serif; }
font-family: "Open Sans", sans-serif;
font-family: "Poppins", sans-serif;
font-family: "Source Sans Pro", sans-serif;
*/
