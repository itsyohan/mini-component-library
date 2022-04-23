/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Container = styled.div`
  background-color: hsla(0, 0%, 50%, 0.15);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  height: var(--height);
  padding: var(--padding);
`

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 8px;
`

const Bar = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  height: var(--height);
  width: var(--width);
`

const ProgressBar = ({ value, size }) => {
  const containerStyle = {
     '--height': size === 'large' ? '24px' : size === 'medium' ? '12px' : '8px',
    '--padding': size === 'large' ? '4px 2px' : '0',
  }
  const radioStyle = {
    '--height': size === 'large' ? '16px' : size === 'medium' ? '12px' : '8px',
    '--width': value + '%',
  }
  return (
    <Container style={containerStyle}>
      <BarWrapper>
        <Bar style={radioStyle} value={value} />
      </BarWrapper>
      <VisuallyHidden>{value}</VisuallyHidden>
    </Container>
  );
};

export default ProgressBar;
