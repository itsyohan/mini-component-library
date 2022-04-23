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

const Bar = styled.div`
  position: absolute;
  background-color ${COLORS.primary};
  border-radius: var(--border-radius);
  top: var(--top);
  height: var(--height);
  width: var(--width);
`

const ProgressBar = ({ value, size }) => {
  const containerStyle = {
     '--height': size === 'large' ? '24px' : size === 'medium' ? '12px' : '8px'
  }
  const radioStyle = {
    '--top': size === 'large' ? '4px' : '0px',
    '--height': size === 'large' ? '16px' : size === 'medium' ? '12px' : '8px',
    '--width': value + '%',
    '--border-radius': value > 98 ? '4px' : '4px 0px 0px 4px'
  }
  return (
    <Container style={containerStyle}>
      <Bar style={radioStyle} value={value} />
      <VisuallyHidden>{value}</VisuallyHidden>
    </Container>
  );
};

export default ProgressBar;
