import React from 'react';
import { string, number, arrayOf, shape } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { getVisibleItems } from '../selectors/item';
import { typeColors, typeLabels } from './config';

const ChartContainerOuter = styled.div`
  margin-top: 4rem;
  width: 100%;
  height: 0;
  padding-top: ${100 / (3 / 2)}%;
  position: relative;
`;

const ChartContainerInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

/**
 * Items chart.
 *
 * @param {Object} props - React component properties.
 * @property {Item[]} items - Items to render.
 * @returns {React.Element} The rendered element.
 */
const ItemsChart = ({ items }) => {
  /* eslint-disable no-param-reassign, fp/no-mutating-methods */
  const itemsData = items.reduce((data, { type, name, sellIn, quality }) => {
    if (type === 'LEGENDARY') {
      return data;
    }
    if (!data[type]) {
      data[type] = {
        name: typeLabels[type] || 'Unknown',
        data: [],
        fill: typeColors[type] || typeColors.STANDARD,
      };
    }
    data[type].data.push({ x: quality, y: sellIn, name });
    return data;
  }, {});
  /* eslint-enable no-param-reassign, fp/no-mutating-methods */

  return (
    <ChartContainerOuter>
      <ChartContainerInner>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart minWidth={100} minHeight={75}>
            <YAxis type="number" dataKey="x" name="Quality" unit="%" />
            <XAxis type="number" dataKey="y" name="Price" unit="$" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            {Object.entries(itemsData).map(([type, props]) => (
              <Scatter key={type} {...props} />
            ))}
          </ScatterChart>
        </ResponsiveContainer>
      </ChartContainerInner>
    </ChartContainerOuter>
  );
};

export { ItemsChart };

ItemsChart.propTypes = {
  items: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
      sellIn: number.isRequired,
      quality: number.isRequired,
      type: string.isRequired,
    }).isRequired,
  ).isRequired,
};

/**
 * Map Redux state to <ItemsChart> properties.
 *
 * @param {Item[]} state - Redux state.
 * @returns {Object} Properties for <ItemsChart> component.
 */
const mapStateToProps = state => ({
  items: getVisibleItems(state),
});

export default connect(mapStateToProps)(ItemsChart);
