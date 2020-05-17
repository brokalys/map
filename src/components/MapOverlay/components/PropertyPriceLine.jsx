import React, { useContext, useMemo } from 'react';
import Skeleton from 'react-loading-skeleton';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { gql } from '@apollo/client';
import { ResponsiveLine } from '@nivo/line';

import MapContext from 'context/MapContext';
import useDebouncedQuery from 'hooks/use-debounced-query';
import styles from './PropertyPriceLine.module.css';

const moment = extendMoment(Moment);
const range = moment().range(moment().utc().startOf('day').subtract(30, 'days'), new Date());
const dates = Array.from(range.by('day', { excludeEnd: true }));

const GET_MEDIAN_PRICE = (dates) => gql`
  query(
    $type: String!
    $region: [String!]!
  ) {
    ${dates.map((date, id) => `
      row_${id}: properties(
        filter: {
          type: { eq: $type }
          published_at: {
            gte: "${date.toISOString()}"
            lte: "${date.clone().endOf('day').toISOString()}"
          }
          region: { in: $region }
        }
      ) {
        summary {
          price {
            median
          }
        }
      }
    `)}
  }
`;

function transformResponse(data) {
  if (!data) {
    return [];
  }

  return dates.map((date, index) => {
    if (!data) {
      return {};
    }

    return {
      x: date.format('YYYY-MM-DD'),
      y: data[`row_${index}`].summary.price.median,
    };
  });
}

function PropertyPriceLine({ type }) {
  const map = useContext(MapContext);
  const { loading, data: custom } = useDebouncedQuery(GET_MEDIAN_PRICE(dates), {
    variables: {
      type,
      region: [map.region],
    },
  }, 2000);

  const data = useMemo(() => [{
    id: 'test',
    data: transformResponse(custom),
  }], [custom]);

  if (loading) {
    return (
      <div className={styles.container}>
        <Skeleton height="100%" />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <ResponsiveLine
        data={data}
        margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
        xScale={{
            type: 'time',
            format: '%Y-%m-%d',
            precision: 'day',
        }}
        xFormat="time:%Y-%m-%d"
        yScale={{
            type: 'linear',
            stacked: false,
            legend: 'mediānā cena m2'
        }}
        yFormat={value =>
            `${Number(value).toLocaleString('lv-LV', {
                minimumFractionDigits: 2,
            })} EUR/m2`
        }
        colors={["#543193"]}
        axisLeft={{ enable: false, tickSize: 0 }}
        axisBottom={false}
        enableGridX={false}
        enableGridY={false}
        enablePoints={false}
        curve="natural"
        useMesh={false}
        enableSlices="x"
      />
    </div>
  );
}

export default PropertyPriceLine;