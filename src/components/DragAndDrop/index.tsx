import { Box } from '@lib/components/Box'
import { Text } from '@lib/components/Text'
import { ListItem, ListItemProps } from '@lib/components/ListItem'
import { useState, Children, ReactNode, DragEventHandler } from 'react'
import { Flex } from '@lib/components/Flex'

export type Bucket = 'pending' | 'paid'

const listItems: any[] = [
  {
    item: 'item-1',
    label: 'Item 1',
    hideAvatar: true,
    bucket: 'pending'
  },
  {
    item: 'item-2',
    label: 'Item 2',
    hideAvatar: true,
    bucket: 'paid'
  }
]

export interface DragAndDropProp {}

export const DragAndDrop: React.FC<DragAndDropProp> = (props) => {
  const [isOver, setIsOver] = useState(false)

  const onDrop = (e: React.DragEvent<any>) => {
    e.stopPropagation()
    e.preventDefault()
    const data = e.dataTransfer.getData('text')

    console.log('did drop', JSON.parse(data))
    return false
  }

  const onDragLeave = (e: any) => setIsOver(false)
  const onDragOver = (e: any) => {
    e.preventDefault()
    setIsOver(true)
    return false
  }

  return (
    <Flex>
      <Box width={[1 / 2]} p="1rem">
        <Text>Drag and drop goes here!</Text>
        {listItems
          .filter((x) => x.bucket === 'pending')
          .map((x, i) => {
            return (
              <DraggableBox item={x} key={i}>
                <Box p={'3rem'} border="solid 1px #ddd">
                  <Text>{x.label}</Text>
                </Box>
              </DraggableBox>
            )
          })}
      </Box>
      <Box
        onDrop={onDrop as any}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        bg={isOver ? 'yellow' : 'white'}
        width={[1 / 2]}
        p="1rem"
      >
        <Text>Drop zone!</Text>
        {listItems
          .filter((x) => x.bucket === 'paid')
          .map((x, i) => {
            return (
              <DraggableBox item={x} key={i}>
                <Box p={'3rem'} border="solid 1px #ddd">
                  <Text>{x.label}</Text>
                </Box>
              </DraggableBox>
            )
          })}
      </Box>
    </Flex>
  )
}

interface DraggableBoxProps {
  draggable?: boolean
  item?: any
  children?: ReactNode
}

export const DraggableBox: React.FC<DraggableBoxProps> = (props) => {
  const [isDragging, setIsDragging] = useState(false)

  const { children, draggable, item } = props

  const onDragStart = (e: React.DragEvent<any>, item: any) => {
    setIsDragging(true)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text', JSON.stringify(item))
  }
  const onDragEnd = () => {
    setIsDragging(false)
  }

  return (
    <Box
      onDragStart={(e) => onDragStart(e, item)}
      onDragEnd={onDragEnd}
      __css={{
        cursor: 'move',
        opacity: isDragging ? 0.4 : 1,
        backgroundColor: isDragging ? '#efefef' : 'transparent'
      }}
      draggable={draggable === undefined ? true : draggable}
    >
      {children}
    </Box>
  )
}
