import { Box } from '@lib/components/Box'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion/dist/framer-motion'

export interface ProgressBarProps {
  height: number
  duration: number
  overlayColor: string
  overlayWidth: number
  barColor: string
  show: boolean
  animate: boolean
}

const defaultProps: ProgressBarProps = {
  height: 3,
  duration: 1,
  overlayWidth: 100,
  overlayColor: '#42a5f5',
  barColor: '#bbdefb',
  show: true,
  animate: true
}

export const ProgressBar: React.FC<Partial<ProgressBarProps>> = (
  partialProps
) => {
  const props = { ...defaultProps, ...partialProps }
  const {
    show,
    animate,
    barColor,
    overlayColor,
    overlayWidth,
    duration,
    height
  } = props

  const [fill, setFill] = useState(10)
  const screenWidth = '100%'

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     const nextFill = fill + 10
  //     setFill(nextFill <= 100 ? nextFill : 0)
  //   }, duration)
  //   return () => {
  //     clearInterval(id)
  //   }
  // }, [show, fill, screenWidth, duration, animate])

  return (
    <>
      {show && (
        <Box
          __css={{
            overflow: 'hidden',
            backgroundColor: barColor,
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
              __css={{
                overflow: 'hidden',
                position: 'absolute',
                top: 0,
                left: 0,
                width: `${fill}%`,
                height,
                backgroundColor: overlayColor
              }}
            />
          </motion.div>
        </Box>
      )}
    </>
  )
}
