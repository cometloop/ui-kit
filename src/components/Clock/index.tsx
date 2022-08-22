import { Box } from 'theme-ui'
import { DateTime } from 'luxon'
import { Text } from '@lib/components/Text'
import { useEffect, useState } from 'react'
import { Header } from '@lib/components/Header'

export const Clock: React.FC<any> = (props) => {
  const [now, setNow] = useState(DateTime.now())
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(DateTime.now)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Box>
      <Box>
        <Header>{now.toLocaleString(DateTime.DATE_HUGE)}</Header>
      </Box>
      <Header>{now.toLocaleString(DateTime.TIME_WITH_SECONDS)}</Header>
    </Box>
  )
}
