import styled from 'styled-components/macro';
import { BACKGROUND_COLORS, TEXT_COLORS } from 'tokens/colors';
import { FONTS } from 'tokens/fonts';
import { SIDEPANEL_WIDTH } from 'tokens/dimensions';

export const Wrapper = styled.div`
  background-color: ${BACKGROUND_COLORS.DEFAULT};
  height: fit-content;
  width: 100%;
  font-family: ${FONTS.PRIMARY};
  position: relative;
`;

export const MarketWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 7.22vw;
  margin-top: 38.36px;
  padding-bottom: 136px;
  justify-content: flex-start;
`;

export const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  width: ${SIDEPANEL_WIDTH}vw;
  min-width: 155px;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 2.7%;
  left: 39.64%;
  width: 212px;
  height: 23px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  p {
    color: ${TEXT_COLORS.NOT_SELECTED};
    font-size: 13px;
  }
  margin: 0 auto;
`;
