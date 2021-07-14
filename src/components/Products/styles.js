import styled from 'styled-components/macro';

import { BACKGROUND_COLORS, TEXT_COLORS } from 'tokens/colors';

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    color: ${TEXT_COLORS.COMPONENT};
    font-size: 20px;
  }
  border-radius: 2px;
  margin-left: 16px;
`;

export const ItemTypeFilter = styled.div`
  margin-top: 16px;
  width: 129px;
  height: 30px;
`;

export const ItemTypeFilterButton = styled.button`
  background: ${BACKGROUND_COLORS.UNSELECTED};
  padding: 6px 16px;
  width: 60px;
  height: 30px;
  color: ${TEXT_COLORS.NOT_SELECTED};
  border-radius: 2px;
  :first-child {
    margin-right: 8px;
  }
  font-size: 13px;
  transition: 500ms;
  border: 0;
  ${({ selected }) =>
    selected &&
    `background: ${BACKGROUND_COLORS.LIGHT};
  
  color: ${TEXT_COLORS.SELECTED};`}
`;

export const ProductGrid = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  background: ${BACKGROUND_COLORS.COMPONENT};
  width: 588px;
  height: 1008px;
  gap: 22px 24px;
  padding-left: 20px;
  padding-top: 20px;
`;
