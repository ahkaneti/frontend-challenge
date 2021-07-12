import React from 'react';

import { TopbarHolder, BagHolder } from './styles';

export const Topbar = props => {
  return (
    <TopbarHolder>
      <h1>market</h1>
      <BagHolder>
        <i className="ri-shopping-bag-line" />
        <p>₺{props.balance}</p>
      </BagHolder>
    </TopbarHolder>
  );
};
