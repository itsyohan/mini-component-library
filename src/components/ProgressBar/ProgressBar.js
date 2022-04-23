/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Container = styled.div`
  width: 370px;
  background-color: hsla(0, 0%, 50%, 0.15);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  position: relative;
  height: var(--height);
`

const RadioValue = styled.div`
  position: absolute;
  background-color ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  top: var(--top);
  left: var(--left);
  height: var(--height);
  width: var(--width);
`

const ProgressBar = ({ value, size }) => {
  const containerStyle = {
     '--height': size === 'large' ? '24px' : size === 'medium' ? '12px' : '8px'
  }
  const radioStyle = {
    '--top': size === 'large' ? '4px' : '0px',
    '--left': size === 'large' ? '1px' : '0px',
    '--height': size === 'large' ? '16px' : size === 'medium' ? '12px' : '8px',
    '--width': value + '%'
  }
  return (
    <Container style={containerStyle}>
      <RadioValue style={radioStyle} value={value} />
    </Container>
  );
};

export default ProgressBar;
