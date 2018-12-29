import React from 'react';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';
import { Input, Icon } from 'antd';
import { doNameSearch } from '../actions/item';

/**
 * Name search input.
 *
 * @param {Object} props - React component properties.
 * @param {string} props.value - Current search value.
 * @param {func} props.onChange - Function to call when.
 * @returns {React.Element} - Rendered React element.
 */
const NameSearch = ({ value, onChange }) => (
  <Input
    placeholder="Name"
    value={value}
    prefix={
      <Icon
        type="search"
        style={{ color: value === '' ? 'rgba(0,0,0,.25)' : '#1890ff' }}
      />
    }
    suffix={
      value === '' ? null : (
        <Icon
          type="close"
          style={{ color: 'rgba(0,0,0,.25)' }}
          onClick={() => onChange('')}
        />
      )
    }
    onClick={
      e => e.stopPropagation() /* prevent toggling name column order on click */
    }
    onChange={e => onChange(e.target.value)}
  />
);

NameSearch.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
};

/**
 * Map Redux state to <NameSearch> properties.
 *
 * @param {Item[]} state - Redux state.
 * @returns {Object} Properties for <NameSearch> component.
 */
const mapStateToProps = state => ({
  value: state.nameSearch,
});

/**
 * Map Redux state to <NameSearch> properties.
 *
 * @param {Function} dispatch - Redux action dispatcher.
 * @returns {Object} Properties for <NameSearch> component.
 */
const mapDispatchToProps = dispatch => ({
  onChange: query => dispatch(doNameSearch(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NameSearch);
