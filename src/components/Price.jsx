import React from 'react';
import { number } from 'prop-types';
import { Tooltip } from 'antd';
import styled from 'styled-components';
import humanFormat from 'human-format';
import formatNumber from 'simple-format-number';

const Info = styled.span`
  border-bottom: 1px dotted;
  cursor: help;
`;

/**
 * Display a price and an indicator about its trend.
 *
 * @param {Object} props - React component properties.
 * @param {number} props.value - Price value.
 * @returns {React.Element} The rendered element.
 */
const Price = ({ value }) => {
  if (value < 1000) {
    return value;
  }

  return (
    <Tooltip
      title={formatNumber(value, {
        fractionDigits: 0,
        symbols: { grouping: ' ' },
      })}
    >
      <Info>{humanFormat(value, { decimals: 1, separator: '' })}</Info>
    </Tooltip>
  );
};

Price.propTypes = {
  value: number.isRequired,
};

export default Price;
