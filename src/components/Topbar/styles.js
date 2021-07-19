import styled from 'styled-components/macro';

import { BACKGROUND_COLORS, TEXT_COLORS } from 'tokens/colors';

export const TopbarWrapper = styled.div`
  height: 76.64px;
  position: relative;

  color: ${TEXT_COLORS.TOPBAR};
`;

export const TopbarHolder = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 76.64px;
  background: ${BACKGROUND_COLORS.LIGHT};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
`;

export const BagHolder = styled.div`
  position: absolute;
  cursor: pointer;
  background: ${BACKGROUND_COLORS.DARK};
  right: 7%;
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
  right: 7%;
  top: 117.52px;
  border-radius: 2px;
  border: 16px solid ${BACKGROUND_COLORS.LIGHT};
`;
