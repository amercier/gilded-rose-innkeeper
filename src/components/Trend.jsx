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
 * Get the trend key from a value.
 *
 * @param {number} value - A number.
 * @returns {string} One of: 'stable' (0), 'down' (<0) or 'up' (>0).
 */
function getTrend(value) {
  if (value === 0) {
    return 'stable';
  }
  return value < 0 ? 'down' : 'up';
}

/**
 * Display a price and an indicator about its trend.
 *
 * @param {Object} props - React component properties.
 * @param {number} props.value - Trend value.
 * @param {Object} props.style - Additional style.
 * @returns {React.Element} The rendered element.
 */
const Trend = ({ value, style }) => {
  const trend = getTrend(value);
  return (
    <Icon type={icons[trend]} style={{ ...style, color: colors[trend] }} />
  );
};

Trend.propTypes = {
  value: number.isRequired,
  style: object, // eslint-disable-line react/forbid-prop-types
};

Trend.defaultProps = {
  style: null,
};

export default Trend;
