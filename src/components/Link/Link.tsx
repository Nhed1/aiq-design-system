import React from 'react'
import { Link as LinkRouterDom } from 'react-router-dom'

import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps
} from 'styled-system'

export interface Props
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    FontSizeProps,
    FontWeightProps {
  variant?: 'internal' | 'external'
  href: string
  children?: any
  color?: string
}

export interface StyledProps
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    FontSizeProps,
    FontWeightProps {
  to?: string
  href?: string
  children?: any
  color?: string
}

const styledLink = css`
  ${color}
  ${space}
  ${layout}
  ${fontSize}
  ${fontWeight}

  text-decoration: none; 

  &:hover{
    cursor: pointer;
  }
`

const InternalStyled = styled(LinkRouterDom)<StyledProps>`
  ${styledLink}
`
const ExternalStyled = styled.a<StyledProps>`
  ${styledLink}
`

export const Link: React.FC<Props> = ({
  variant = 'external',
  href,
  children,
  ...props
}) => {
  if (variant === 'internal') {
    return (
      <InternalStyled data-testid='link-internal' to={href} {...props}>
        {children}
      </InternalStyled>
    )
  }
  return (
    <ExternalStyled data-testid='link-external' href={href} {...props}>
      {children}
    </ExternalStyled>
  )
}

Link.propTypes = {
  variant: PropTypes.oneOf(['internal', 'external']),
  href: PropTypes.string.isRequired,
  children: PropTypes.any
}
