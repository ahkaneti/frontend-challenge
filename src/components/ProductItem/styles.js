import styled from 'styled-components/macro';

import { BACKGROUND_COLORS, TEXT_COLORS } from 'tokens/colors';

export const ProductItemWrapper = styled.div`
  button {
    background: ${BACKGROUND_COLORS.LIGHT};
    border-radius: 2px;
    font-size: 12px;
    height: 22px;
    width: 100%;
  }
  width: 124px;
  height: 225px;
  display: flex;
  flex-direction: column;
  /* margin: 20px 24px; */
  p {
    color: ${TEXT_COLORS.NOT_SELECTED};
  }
  justify-content: space-between;
`;

export const ProductImageWrapper = styled.div`
  height: 124px;
  top: 223px;
  width: 124px;
  border: 1.18px solid #f3f0fe;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

export const ProductImage = styled.div`
  width: 92px;
  height: 92px;
  background: #c4c4c4;
`;

export const ProductName = styled.p`
  font-size: 14px;
  color: black !important;
`;
