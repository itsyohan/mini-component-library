import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  position: relative;
  padding-left: 30px;
  height: var(--height);
  border-bottom: var(--stroke) solid #000000;
  width: var(--width);
  color: hsla(0, 0%, 40%, 1);

  &:focus-within {
    outline: 2px solid hsla(218, 57%, 53%, 1);
    border-radius: 2px;
  }

  &:hover {
    color: hsla(0, 0%, 0%, 1);
  }

  input[type="text"] {
    color: inherit;
    border: none;
    padding: 0;
    height: 100%;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: ${p => p.size === 'large' ? 5 : 0}px;
`

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const style = {
    '--height': size === 'large' ? '36px' : '24px',
    '--width': width + 'px',
    '--stroke': size === 'large' ? '2px' : '1px',
  }

  return (
    <Wrapper style={style} size={size}>
      <IconWrapper size={size}><Icon id={icon}  /></IconWrapper>
      <input type="text" placeholder={placeholder} />
    </Wrapper>
  )
};

export default IconInput;
