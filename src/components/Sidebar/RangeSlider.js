import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Container } from '@nextui-org/react';
import { useRouter } from 'next/router';

const { createSliderWithTooltip } = Slider;
// const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const RangeSlider = ({ setSelectedPrice, selectedPrice }) => {
  const router = useRouter();

  return (
    <Container css={{ padding: '0 30px' }}>
      <Range
        // range
        // marks={{
        //   0: `€ 0`,
        //   10000: `€10000`,
        // }}
        min={1}
        max={10000}
        defaultValue={[1, 10000]}
        tipFormatter={(value) => `$${value}`}
        tipProps={{
          placement: 'bottom',
          visible: false,
        }}
        trackStyle={[{ backgroundColor: '#D9D9D9' }]}
        handleStyle={[
          {
            backgroundColor: '#D9D9D9',
            width: '24px',
            height: '24px',
            marginTop: '-10px',
            border: 'none',
          },
        ]}
        railStyle={{ backgroundColor: '#F5A524' }}
        value={selectedPrice}
        onChange={(...params) => {
          if (params[0].length === 0) {
            const queryCopy = {
              ...router.query,
            };
            delete queryCopy['price'];
            router.replace(
              {
                query: queryCopy,
              },
              undefined,
              { shallow: true }
            );
            delete router.query['price'];
          } else {
            router.replace(
              {
                query: { ...router.query, price: params.join(',') },
              },
              undefined,
              { shallow: true }
            );
          }
          setSelectedPrice(...params);
        }}
      />
    </Container>
  );
};

export default RangeSlider;
