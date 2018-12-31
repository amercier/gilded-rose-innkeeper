import React from 'react';
import { number, object } from 'prop-types';
import { Icon } from 'antd';

const colors = {
  up: '#52c41a',
  down: '#f5222d',
  stable: '#bfbfbf',
};

const icons = {
  up: 'caret-up',
  down: 'caret-down',
  stable: 'minus',
};

/**
 * Display a price and an indicator about its trend.
 *
 * @param {Object} props - React component properties.
 * @param {number} props.value - Trend value.
 * @param {Object} props.style - Additional style.
 * @returns {React.Element} The rendered element.
 */
const Trend = ({ value, style }) => {
  const trend = value === 0 ? 'stable' : value < 0 ? 'down' : 'up';
  return (
    <Icon type={icons[trend]} style={{ ...style, color: colors[trend] }} />
  );
};

Trend.propTypes = {
  value: number.isRequired,
  style: object,
};

Trend.defaultProps = {
  style: null,
};

export default Trend;
