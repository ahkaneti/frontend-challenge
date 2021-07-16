import React, { useState } from 'react';
import 'App.css';
import 'remixicon/fonts/remixicon.css';

import { Topbar } from 'components/Topbar';
import { Sort } from 'components/Sort';
import { Filter } from 'components/Filter';
import { Products } from 'components/Products';

import { Wrapper, SidePanel, MarketWrapper, Footer } from './styles';

const Market = () => {
  const [sortVal, setSortVal] = useState(0);
  return (
    <Wrapper>
      <Topbar />
      <MarketWrapper>
        <SidePanel>
          <Sort setSortVal={setSortVal} />
          <Filter filterName={'Brands'} />
          <Filter filterName={'Tags'} />
        </SidePanel>
        <Products sortVal={sortVal} />
      </MarketWrapper>
      <Footer>
        <p>©2019 Market</p>
        <p>•</p>
        <p>Privacy Policy</p>
      </Footer>
    </Wrapper>
  );
};

export default Market;
