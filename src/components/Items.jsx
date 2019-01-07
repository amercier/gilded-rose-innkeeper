import React from 'react';
import { bool, string, number, arrayOf, shape } from 'prop-types';
import { connect } from 'react-redux';
import { Progress, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import styled from 'styled-components';
import { getVisibleItems } from '../selectors/item';
import ConnectedNameSearch from './NameSearch';
import ConnectedQualityFilter from './QualityFilter';
import Price from './Price';
import Trend from './Trend';
import { typeColors, typeLabels } from './config';

const { Column } = Table;

const sellInFilters = [[0, 2], [2, 5], [5, 10], [10, 20], [20, +Infinity]];

const types = Object.keys(typeColors);

const progressWidth = 48;

const Highlight = styled.em`
  font-style: normal;
  background: #ffc069;
`;

// TODO Reuse Ant Design dropdown styles
const FilterContainer = styled.div`
  width: 20rem;
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

/**
 * Render items in a table.
 *
 * TODO Add pagination to Redux store.
 * TODO Implement onChange as per https://ant.design/components/table/#components-table-demo-ajax .
 * TODO Move sorting logic to Redux store and selectors.
 * TODO Move sellIn filtering logic to Redux store and selectors.
 * TODO Move type filtering logic to Redux store and selectors.
 *
 * @param {Object} props - React component properties.
 * @property {Item[]} items - Items to render.
 * @property {boolean} loading - Whether items are being loaded.
 * @property {string} nameSearch - Name search query.
 * @property {number} qualityMin - Minimum quality (Default: `0`).
 * @property {number} qualityMax - Minimum quality (Default: `100`).
 * @returns {React.Element} The rendered element.
 */
const Items = ({
  items,
  loading,
  emptyText,
  nameSearch,
  qualityMin,
  qualityMax,
}) => (
  <Table
    dataSource={items}
    loading={loading}
    locale={{ emptyText }}
    pagination={false}
    rowKey="id"
  >
    <Column
      title={<ConnectedNameSearch />}
      key="name"
      dataIndex="name"
      render={text => (
        <Highlighter
          searchWords={[nameSearch]}
          textToHighlight={text}
          highlightTag={({ children }) => <Highlight>{children}</Highlight>}
          autoEscape
        />
      )}
      sorter={(a, b) => a.name.localeCompare(b.name)}
    />
    <Column
      title="Price"
      key="sellIn"
      dataIndex="sellIn"
      align="right"
      render={(sellIn, { sellInTrend }) => (
        <>
          <Price value={sellIn} />
          <Trend value={sellInTrend} style={{ marginLeft: '0.5rem' }} />
        </>
      )}
      sorter={(a, b) => a.sellIn - b.sellIn}
      filters={sellInFilters.map(([min, max]) => ({
        value: `${min}:${max}`,
        text: max === +Infinity ? `Higher than ${min}` : `${min} to ${max}`,
      }))}
      onFilter={(value, { sellIn }) => {
        const [min, max] = value.split(':');
        return sellIn >= min && sellIn <= max;
      }}
    />
    <Column
      title="Quality"
      key="quality"
      dataIndex="quality"
      align="right"
      render={(quality, { qualityTrend }) => (
        <>
          <Progress
            type="circle"
            percent={(100 * (quality - qualityMin)) / qualityMax}
            format={() => quality}
            width={progressWidth}
          />
          <Trend value={qualityTrend} style={{ marginLeft: '0.5rem' }} />
        </>
      )}
      sorter={(a, b) => a.quality - b.quality}
      filterDropdown={() => (
        <FilterContainer>
          <ConnectedQualityFilter />
        </FilterContainer>
      )}
    />
    <Column
      title="Type"
      key="type"
      dataIndex="type"
      align="center"
      render={type => (
        <span style={{ color: typeColors[type] }}>{typeLabels[type]}</span>
      )}
      sorter={(a, b) => types.indexOf(a.type) - types.indexOf(b.type)}
      filters={Object.entries(typeLabels).map(([value, text]) => ({
        value,
        text,
      }))}
      onFilter={(value, { type }) => type === value}
    />
  </Table>
);

Items.propTypes = {
  items: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
      sellIn: number.isRequired,
      quality: number.isRequired,
      type: string.isRequired,
    }).isRequired,
  ).isRequired,
  loading: bool.isRequired,
  emptyText: string.isRequired,
  nameSearch: string.isRequired,
  qualityMin: number.isRequired,
  qualityMax: number.isRequired,
};

/**
 * Map Redux state to <Items> properties.
 *
 * @param {Item[]} state - Redux state.
 * @returns {Object} Properties for <Items> component.
 */
const mapStateToProps = state => ({
  items: getVisibleItems(state),
  loading: state.fetchingItems && !state.fetchedItemsOnce,
  emptyText: state.fetchItemsError
    ? 'An error occurred while retrieving the items list.'
    : 'No items for sale.',
  nameSearch: state.nameSearch,
  qualityMin: state.qualityMin,
  qualityMax: state.qualityMax,
});

export default connect(mapStateToProps)(Items);
