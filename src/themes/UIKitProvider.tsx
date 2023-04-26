import { PaletteMode } from '@mui/material'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState
} from 'react'

interface IUIKitContext {
  mode: PaletteMode
  toggleMode: () => void
}
interface UIKitContextProps {
  mode?: PaletteMode
  children: ReactNode
}

const UIKitContext = createContext<IUIKitContext>({
  mode: 'light',
  toggleMode: () => {}
})

export const UIKitProvider: React.FC<UIKitContextProps> = ({
  mode: initialMode,
  children
}) => {
  const [mode, setMode] = useState(initialMode || 'light')

  const toggleMode = useCallback(() => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }, [mode])

  return (
    <UIKitContext.Provider value={{ mode, toggleMode }}>
      {children}
    </UIKitContext.Provider>
  )
}

export const useUIKit = (): IUIKitContext => {
  const context = useContext(UIKitContext)
  return context
}
