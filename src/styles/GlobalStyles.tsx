import { CSSReset } from '@lib/styles/CSSReset'
import { colors } from '@lib/themes/colors'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  html {
    font-size: 16px;
    font-family: "arial", sans-serif;
  }
  h1 {
    font-size: 3rem;
  }
  a {
    color: ${colors.blue};
    text-decoration: none;
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
