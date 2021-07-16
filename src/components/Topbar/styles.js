import styled from 'styled-components/macro';

import { BACKGROUND_COLORS, TEXT_COLORS } from 'tokens/colors';

export const TopbarWrapper = styled.div`
  height: 76.64px;
  position: relative;
`;

export const TopbarHolder = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 76.64px;
  background: ${BACKGROUND_COLORS.LIGHT};
  align-items: center;
  justify-content: center;
  color: ${TEXT_COLORS.TOPBAR};
  position: fixed;
  top: 0px;
  z-index: 999;
`;

export const BagHolder = styled.div`
  position: absolute;
  cursor: pointer;
  background: ${BACKGROUND_COLORS.DARK};
  left: 84%;
  width: 130px;
  height: 76.64px;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`;
export const CartHolder = styled.div`
  position: fixed;
  width: 296px;
  height: 338.25px;
  left: 1040px;
  top: 117.52px;
  border-radius: 2px;
  border: 16px solid ${BACKGROUND_COLORS.LIGHT};
`;
