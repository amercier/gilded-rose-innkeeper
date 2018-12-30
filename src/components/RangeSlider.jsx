import React from 'react';
import { Slider } from 'antd';

/**
 * Extension of Ant Design <Slider range> component that supports setting range start of end to
 * `null`, which means the actual range start will be set to `min`, and the end to `max`.
 *
 * @param {Object} prop - React component properties.
 * @returns {React.Element} The rendered element.
 */
const RangeSlider = ({ start, end, min, max, ...props }) => (
  <Slider
    {...props}
    range
    value={[start === null ? min : start, end === null ? max : end]}
  />
);

export default RangeSlider;
