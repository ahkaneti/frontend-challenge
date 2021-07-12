import styled from 'styled-components/macro';

import { BACKGROUND_COLORS, TEXT_COLORS } from 'tokens/colors';

export const TopbarHolder = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 76.64px;
  background: ${BACKGROUND_COLORS.LIGHT};
  align-items: center;
  justify-content: center;
  color: ${TEXT_COLORS.TOPBAR};
  position: relative;
`;

export const BagHolder = styled.div`
  position: absolute;
  background: ${BACKGROUND_COLORS.DARK};
  left: 84%;
  width: 130px;
  height: 76.64px;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`;
