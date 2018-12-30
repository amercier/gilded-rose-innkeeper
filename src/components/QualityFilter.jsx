import { connect } from 'react-redux';
import { doQualityFilter } from '../actions/item';
import MinMaxFilter from './MinMaxFilter';

/**
 * Map Redux state to <QualityFilter> properties.
 *
 * @param {Item[]} state - Redux state.
 * @returns {Object} Properties for <QualityFilter> component.
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
 * Map Redux state to <QualityFilter> properties.
 *
 * @param {Function} dispatch - Redux action dispatcher.
 * @returns {Object} Properties for <QualityFilter> component.
 */
const mapDispatchToProps = dispatch => ({
  onChange: range => dispatch(doQualityFilter(...range)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MinMaxFilter);
