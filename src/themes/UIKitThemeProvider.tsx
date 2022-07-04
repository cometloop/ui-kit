import { GlobalStyles } from '@lib/styles/GlobalStyles'
import { Theme, Themes, UIKitTheme } from '@lib/themes/interfaces'
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@lib/themes/lightTheme'

import '@fontsource/open-sans'
import '@fontsource/poppins'
import '@fontsource/source-sans-pro'
import '@fontsource/roboto'

interface Props {
  theme?: UIKitTheme
  children: ReactNode
}

interface IUIKitThemeContext {
  theme: UIKitTheme
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

export const useUIKitTheme = () => {
  const context = useContext(UIKitThemeContext)
  if (context === undefined) {
    throw new Error('Cannot use UIKitTheme outside of the provider')
  }
  return context
}
