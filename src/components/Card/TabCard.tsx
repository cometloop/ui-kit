import { Card as MUCard, CardContent, Typography, Box } from '@mui/material'
import React, {
  ReactElement,
  ReactNode,
  cloneElement,
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'

export interface TabCardProps {
  variant: 'tabs'
  tabs?: string[]
  children?: ReactElement<TabCardContentProps>[]
}

export interface TabCardContentProps {
  tabId: string
  ref?: any
  children?: ReactNode
}

export interface TabCardContentHandle {
  show: () => void
  hide: () => void
  onTabChange: (activeTabId: string) => void
}

export const TabCardContent: React.FC<TabCardContentProps> = forwardRef(
  ({ tabId }, forwardedRef) => {
    const [display, setDisplay] = useState<'none' | 'block'>('none')
    useImperativeHandle(
      forwardedRef,
      () => ({
        onTabChange: (activeTabeId: string) => {
          if (tabId === activeTabeId) {
            setDisplay('block')
          } else {
            setDisplay('none')
          }
        },
        show() {
          setDisplay('block')
        },
        hide: () => {
          setDisplay('none')
        }
      }),
      [setDisplay, tabId]
    )

    return (
      <Box ref={forwardedRef} sx={{ display }}>
        <Typography>Tab goes here: {tabId}</Typography>
      </Box>
    )
  }
)

export const TabCard: React.FC<TabCardProps> = (props) => {
  const { tabs, children } = props
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const elementsRef = useRef(
    children.map(() => createRef<TabCardContentHandle>())
  )

  useEffect(() => {
    elementsRef.current.forEach((x) => x.current.onTabChange(tabs[activeIndex]))
    // elementsRef.current[activeIndex]?.current.show()
  }, [activeIndex, tabs])

  return (
    <MUCard sx={{ maxWidth: 500 }}>
      <CardContent>
        <Box
          sx={{
            boxSizing: 'border-box',
            display: 'flex',
            mb: 2
          }}
        >
          {tabs.map((item, i) => {
            return (
              <Box
                onClick={() => setActiveIndex(i)}
                sx={{
                  cursor: 'pointer',
                  flex: 1,
                  p: 1.5,
                  bgcolor:
                    activeIndex === i
                      ? 'cards.tabCard.activeBgColor'
                      : 'cards.tabCard.bgColor',
                  borderRadius: 3,
                  '&:hover': {}
                }}
                key={i}
              >
                <Typography
                  sx={{
                    color:
                      activeIndex === i
                        ? 'cards.tabCard.activeColor'
                        : 'cards.tabCard.color',
                    textAlign: 'center'
                  }}
                  variant="subtitle1"
                >
                  {item}
                </Typography>
              </Box>
            )
          })}
        </Box>

        {React.Children.map(children, (element, idx) => {
          return cloneElement(element, { ref: elementsRef.current[idx] })
        })}
      </CardContent>
    </MUCard>
  )
}
