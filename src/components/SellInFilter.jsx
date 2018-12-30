import { connect } from 'react-redux';
import { doSellInFilter } from '../actions/item';
import MinMaxFilter from './MinMaxFilter';

/**
 * Map Redux state to <SellInFilter> properties.
 *
 * @param {Item[]} state - Redux state.
 * @returns {Object} Properties for <SellInFilter> component.
 */
const mapStateToProps = state => ({
  marks: state.items.reduce(
    (acc, { sellIn }) => (sellIn in acc ? acc : [...acc, sellIn]),
    [],
  ),
  min: state.sellInMin,
  max: state.sellInMax,
  rangeStart: state.sellInRangeStart,
  rangeEnd: state.sellInRangeEnd,
});

/**
 * Map Redux state to <SellInFilter> properties.
 *
 * @param {Function} dispatch - Redux action dispatcher.
 * @returns {Object} Properties for <SellInFilter> component.
 */
const mapDispatchToProps = dispatch => ({
  onChange: range => dispatch(doSellInFilter(...range)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MinMaxFilter);
