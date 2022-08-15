import React from 'react'
import { motion } from 'framer-motion'
import { Box } from 'theme-ui'
import { useTheme } from '@lib/themes/interfaces'

export interface ProgressBarProps {
  height: number
  duration: number
  show: boolean
}

const defaultProps: ProgressBarProps = {
  height: 3,
  duration: 1,
  show: true
}

export const ProgressBar: React.FC<Partial<ProgressBarProps>> = (
  partialProps
) => {
  const props = { ...defaultProps, ...partialProps }
  const { show, duration, height } = props

  const { theme } = useTheme()

  return (
    <Box
      css={{
        height
      }}
    >
      {show && (
        <Box
          sx={{
            overflow: 'hidden',
            backgroundColor: theme.colors.progressBarColor,
            position: 'relative',
            width: '100%',
            height
          }}
        >
          <motion.div
            animate={{ x: '100%' }}
            transition={{ duration, repeat: Infinity }}
          >
            <Box
              sx={{
                overflow: 'hidden',
                position: 'absolute',
                top: 0,
                left: 0,
                width: `${15}%`,
                height,
                backgroundColor: theme.colors.progressOverlayColor
              }}
            />
          </motion.div>
        </Box>
      )}
    </Box>
  )
}
