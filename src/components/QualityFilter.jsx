import React from 'react';
import { number, func } from 'prop-types';
import { connect } from 'react-redux';
import { Slider } from 'antd';
import { doQualityFilter } from '../actions/item';

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
 * Quality min/max filter slider.
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
const QualitySearch = ({ min, max, marks, rangeStart, rangeEnd, onChange }) => (
  <Slider
    range
    defaultValue={[rangeStart, rangeEnd]}
    marks={marksObject(min, max, marks)}
    {...{ min, max, onChange }}
  />
);

QualitySearch.propTypes = {
  min: number.isRequired,
  max: number.isRequired,
  rangeStart: number.isRequired,
  rangeEnd: number.isRequired,
  onChange: func.isRequired,
};

/**
 * Map Redux state to <QualitySearch> properties.
 *
 * @param {Item[]} state - Redux state.
 * @returns {Object} Properties for <QualitySearch> component.
 */
const mapStateToProps = state => ({
  marks: state.items.reduce(
    (acc, { quality }) => (quality in acc ? acc : [...acc, quality]),
    [],
  ),
  min: state.qualityMin,
  max: state.qualityMax,
  rangeStart: state.qualityRangeStart,
  rangeEnd: state.qualityRangeEnd,
});

/**
 * Map Redux state to <QualitySearch> properties.
 *
 * @param {Function} dispatch - Redux action dispatcher.
 * @returns {Object} Properties for <QualitySearch> component.
 */
const mapDispatchToProps = dispatch => ({
  onChange: range => dispatch(doQualityFilter(...range)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QualitySearch);
