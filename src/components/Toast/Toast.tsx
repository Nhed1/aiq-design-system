import React from 'react'
import { useTransition } from 'react-spring'

import styled from 'styled-components'

import { ToastContent } from './ToastContent'

export type Message = {
  id: string
  type: string
  title: string
  description: string
  fixed?: boolean
}

export interface Props {
  messages: Message[]
}

const Container = styled.div<Props>`
  display: ${({ messages }) =>
    messages && messages.length > 0 ? 'block' : 'none'};
  position: fixed;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`

export const Toast: React.FC<Props> = ({ messages }) => {
  const messagesWithTransitions = useTransition(messages, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
    key: (item: Message) => item.id
  })

  return (
    <Container
      messages={messages}
      style={{ zIndex: 9999999 }}
      data-testid='toast-container'
    >
      {messagesWithTransitions((props, item) => (
        <ToastContent message={item} {...props} />
      ))}
    </Container>
  )
}
