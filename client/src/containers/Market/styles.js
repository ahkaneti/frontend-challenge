import styled from 'styled-components/macro';
import { BACKGROUND_COLORS } from 'tokens/colors';
import { FONTS } from 'tokens/fonts';

export const Wrapper = styled.div`
  background-color: ${BACKGROUND_COLORS.DEFAULT};
  height: fit-content;
  width: 100vw;
  font-family: ${FONTS.PRIMARY};
`;

export const MarketWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 38.36px;
  height: fit-content;
  width: fit-content;
`;

export const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 104px;
  margin-right: 8px;
  width: 296px;
`;
