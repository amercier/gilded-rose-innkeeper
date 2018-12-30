import React from 'react';
import { number, func } from 'prop-types';
import { Slider } from 'antd';

/**
 * Create a `marks` object for Ant Design `<Slider>` component's `marks` property. Set a label for
 * `min` and `max` value, and set an empty React node for every other value.
 *
 * @example
 *
 * marksObject(0, 100, [10, 20, 30]);
 * // => {
 * //   0: '0',
 * //   10: <></>,
 * //   20: <></>,
 * //   30: <></>,
 * //   100: '100',
 * // }
 *
 * @param {number} min - Minimum value.
 * @param {number} max - Maximum value.
 * @param {number[]} marks - Un-labelled additional marks.
 * @returns {Object} An object compatible with `<Slider>` component's `marks` property.
 * @see Ant Design Slider API: https://ant.design/components/slider/
 */
function marksObject(min, max, marks) {
  return [min, ...marks, max].reduce(
    (acc, value) => ({
      ...acc,
      [value]: value === min || value === max ? `${value}` : <></>, // Display label only for min & max
    }),
    {},
  );
}

/**
 * Min/max range slider.
 *
 * @param {Object} props - React component properties.
 * @param {number} props.min - Minimum slider value.
 * @param {number} props.max - Maximum slider value.
 * @param {number[]} props.marks - Informational marks to display.
 * @param {number} props.rangeStart - Selected range start value.
 * @param {number} props.rangeEnd - Selected range end value.
 * @param {func} props.onChange - Function of the type:
 * `(rangeStart: number, rangeEnd: number) => *`, called when range changes.
 * @returns {React.Element} - Rendered React element.
 */
const MinMaxFilter = ({ min, max, marks, rangeStart, rangeEnd, onChange }) => {
  const actualRangeStart = rangeStart === null ? min : rangeStart;
  const actualRangeEnd = rangeEnd === null ? max : rangeEnd;
  return (
    <Slider
      range
      disabled={min === null || max === null}
      defaultValue={[actualRangeStart, actualRangeEnd]}
      marks={marksObject(min, max, marks)}
      {...{ min, max, onChange }}
    />
  );
};

MinMaxFilter.propTypes = {
  min: number,
  max: number,
  rangeStart: number,
  rangeEnd: number,
  onChange: func.isRequired,
};

MinMaxFilter.defaultProps = {
  min: null,
  max: null,
  rangeStart: null,
  rangeEnd: null,
};

export default MinMaxFilter;
