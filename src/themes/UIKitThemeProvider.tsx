import { CSSReset } from '@lib/styles/CSSReset'
import { GlobalStyles } from '@lib/styles/GlobalStyles'
import { lightTheme, Theme, Themes } from '@lib/themes'
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import '@fontsource/open-sans'
import '@fontsource/poppins'
import '@fontsource/source-sans-pro'
import '@fontsource/roboto'

interface Props {
  theme?: DefaultTheme
  children: ReactNode
}

interface IUIKitThemeContext {
  theme: DefaultTheme
  setTheme: (theme: Theme) => void
}

const UIKitThemeContext =
  createContext<IUIKitThemeContext | undefined>(undefined)

export const UIKitThemeProvider: React.FC<Props> = (props) => {
  const [theme, changeTheme] = useState(lightTheme)
  const setTheme = (theme: Theme) => {
    changeTheme(Themes[theme])
  }

  useEffect(() => {
    changeTheme(props.theme)
  }, [props.theme])

  return (
    <UIKitThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      <GlobalStyles />
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </UIKitThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(UIKitThemeContext)
  if (context === undefined) {
    throw new Error('Cannot use UIKitTheme outside of the provider')
  }
  return context
}
