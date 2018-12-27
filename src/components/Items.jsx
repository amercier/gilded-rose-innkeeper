import React from 'react';
import { string, number, arrayOf, shape } from 'prop-types';
import { connect } from 'react-redux';
import { Progress, Table, Tooltip } from 'antd';
import styled from 'styled-components';
import humanFormat from 'human-format';
import formatNumber from 'simple-format-number';

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

const progressWidth = 48;

const Info = styled.span`
  border-bottom: 1px dotted;
  cursor: help;
`;

/**
 * Render items in a table.
 *
 * @param {Object} props - React component properties.
 * @property {Item[]} items - Items to render.
 * @property {number} minQuality - Minimum quality (Default: `0`).
 * @property {number} maxQuality - Minimum quality (Default: `100`).
 * @returns {React.Element} The rendered element.
 */
const Items = ({ items, minQuality, maxQuality }) => (
  <Table dataSource={items} pagination={false}>
    <Column title="Name" key="name" dataIndex="name" />
    <Column
      title="Sell in"
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
    />
    <Column
      title="Type"
      key="type"
      dataIndex="type"
      align="center"
      render={type => (
        <span style={{ color: typeColors[type] }}>{typeLabels[type]}</span>
      )}
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
  items: state,
});

export default connect(mapStateToProps)(Items);
