import { Box } from '@lib/components/Box'
import styled from 'styled-components'
import { LayoutProps, SpaceProps } from 'styled-system'

export interface LinkProps extends SpaceProps, LayoutProps {
  url: string
  label?: string
  target?: string
  onClick?: (url: string, target?: string) => void
}

export const Link: React.FC<LinkProps> = ({ url, label, target, onClick }) => {
  return (
    <StyledLink
      href={url}
      target={target}
      onClick={() => {
        onClick && onClick(url, target)
      }}
    >
      {label || url}
    </StyledLink>
  )
}

const StyledLink = styled.a`
  color: ${(p) => p.theme.colors.blue};
  text-decoration: none;
`
