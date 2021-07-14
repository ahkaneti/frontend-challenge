import styled from 'styled-components/macro';
import { TEXT_COLORS, BACKGROUND_COLORS } from 'tokens/colors';

export const CartWrapper = styled.div`
  height: inherit;
  background: white;
`;

export const TotalPrice = styled.p`
  position: absolute;
  left: 84.72%;
  bottom: 70.9%;
  background: #ffffff;
  border: 2px solid #1ea4ce;
  box-sizing: border-box;
  border-radius: 2px;
  height: 51.1px;
  width: 92px;
  font-size: 14px;
  color: ${TEXT_COLORS.NOT_SELECTED};
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ItemList = styled.div`
  height: inherit;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const Item = styled.div`
  width: 231px;
  position: relative;
  height: 41px;
`;

export const QuantityHandler = styled.div`
  display: flex;
  width: 74px;
  flex-direction: row;
  button {
    background: inherit;
    color: ${TEXT_COLORS.NOT_SELECTED};
  }
  p {
    color: white;
    background-color: ${BACKGROUND_COLORS.LIGHT};
  }
`;
