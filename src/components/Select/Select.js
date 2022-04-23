import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  background-color: hsla(0, 0%, 50%, 0.15);
  border-radius: 8px;
  color: hsla(0, 0%, 40%, 1);
`

const SelectWrapper = styled.select`
  background-color: transparent;
  color: hsla(0, 0%, 40%, 1);
  padding: 12px 0;
  padding-left: 16px;
  border: none;
  appearance: none;
  padding-right: 20px;

  &:hover {
    color: black;
  }
`

const IconWrapper = styled.span`
  position: absolute;
  top: 10px;
  right: 0;
`

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <IconWrapper><Icon id="chevron-down" size={16} strokeWidth={3} /></IconWrapper>
    </Wrapper>
  );
};

export default Select;
