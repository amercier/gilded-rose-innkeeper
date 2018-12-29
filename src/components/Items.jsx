import React from 'react';
import { string, number, arrayOf, shape } from 'prop-types';
import { connect } from 'react-redux';
import { Progress, Table, Tooltip } from 'antd';
import Highlighter from 'react-highlight-words';
import styled from 'styled-components';
import humanFormat from 'human-format';
import formatNumber from 'simple-format-number';
import { getVisibleItems } from '../selectors/item';
import NameSearch from './NameSearch';

const { Column } = Table;

const typeLabels = {
  STANDARD: 'Standard',
  CONJURED: 'Conjured',
  BACKSTAGE_PASS: 'Backstage pass',
  LEGENDARY: 'Legendary',
};

const typeColors = {
  STANDARD: '#000',
  CONJURED: '#52c41a',
  BACKSTAGE_PASS: '#1890ff',
  LEGENDARY: '#ff7a45',
};

const types = Object.keys(typeColors);

const progressWidth = 48;

const Info = styled.span`
  border-bottom: 1px dotted;
  cursor: help;
`;

const Highlight = styled.em`
  font-style: normal;
  background: #ffc069;
`;

/**
 * Render items in a table.
 *
 * TODO Add loading state.
 * TODO Refactor price to a separate <Price> component.
 * TODO Add pagination to Redux store.
 * TODO Implement onChange as per https://ant.design/components/table/#components-table-demo-ajax .
 * TODO Move sorting logic to Redux store and selectors.
 * TODO Move type filtering logic to Redux store and selectors.
 *
 * @param {Object} props - React component properties.
 * @property {Item[]} items - Items to render.
 * @property {string} nameSearch - Name search query.
 * @property {number} minQuality - Minimum quality (Default: `0`).
 * @property {number} maxQuality - Minimum quality (Default: `100`).
 * @returns {React.Element} The rendered element.
 */
const Items = ({ items, nameSearch, minQuality, maxQuality }) => (
  <Table dataSource={items} pagination={false} rowKey="id">
    <Column
      title={() => <NameSearch />}
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
      render={(sellIn, { type }) =>
        type === 'LEGENDARY' ? (
          <Tooltip
            title={formatNumber(sellIn, {
              fractionDigits: 0,
              symbols: { grouping: ' ' },
            })}
          >
            <Info>{humanFormat(sellIn, { decimals: 1, separator: '' })}</Info>
          </Tooltip>
        ) : (
          sellIn
        )
      }
      sorter={(a, b) => a.sellIn - b.sellIn}
    />
    <Column
      title="Quality"
      key="quality"
      dataIndex="quality"
      align="right"
      render={quality => (
        <Progress
          type="circle"
          percent={(100 * (quality - minQuality)) / maxQuality}
          format={() => quality}
          width={progressWidth}
        />
      )}
      sorter={(a, b) => a.quality - b.quality}
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
  nameSearch: string.isRequired,
  minQuality: number,
  maxQuality: number,
};

Items.defaultProps = {
  minQuality: 0,
  maxQuality: 100,
};

/**
 * Map Redux state to <Items> properties.
 *
 * @param {Item[]} state - Redux state.
 * @returns {Object} Properties for <Items> component.
 */
const mapStateToProps = state => ({
  items: getVisibleItems(state),
  nameSearch: state.nameSearch,
});

export default connect(mapStateToProps)(Items);
