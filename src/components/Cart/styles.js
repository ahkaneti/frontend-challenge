import styled from 'styled-components/macro';
import { TEXT_COLORS, BACKGROUND_COLORS } from 'tokens/colors';

export const CartWrapper = styled.div`
  height: inherit;
  background: white;
  flex: 1;
`;

export const TotalPrice = styled.p`
  position: absolute;
  right: 2%;
  top: 81.9%;
  flex: 1;
  justify-self: flex-end;
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
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0px; //Remove scrollbar space
    /* background: transparent; Optional: just make scrollbar invisible */
  }
`;

export const Item = styled.div`
  position: relative;
  height: 41px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${BACKGROUND_COLORS.BORDER};
  width: 280px;
  margin: 16.35px 16px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: black;
`;
export const ItemName = styled.p``;
export const ItemPrice = styled.p`
  color: ${TEXT_COLORS.NOT_SELECTED};

  font-weight: 600px;
`;

export const QuantityHandler = styled.div`
  display: flex;
  width: 74px;
  flex-direction: row;
  button {
    background: inherit;
    color: ${TEXT_COLORS.NOT_SELECTED};
    font-size: 16px;
  }
  p {
    color: white;
    background-color: ${BACKGROUND_COLORS.LIGHT};
    width: 32px;
    height: 32.7px;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;
