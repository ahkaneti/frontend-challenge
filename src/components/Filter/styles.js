import styled, { keyframes } from 'styled-components/macro';
import { BACKGROUND_COLORS, TEXT_COLORS } from 'tokens/colors';
import { SIDEPANEL_BOX_PADDING } from 'tokens/dimensions';
import { FONT_SIZES } from 'tokens/fonts';

export const FilterWrapper = styled.div`
  height: 274px;
  p {
    margin-bottom: 12px;
    color: ${TEXT_COLORS.COMPONENT};
    font-size: 13px;
  }
  margin-top: 24px;
`;

export const FilterBox = styled.div`
  height: 200px;
  overflow-x: hidden;
  background: ${BACKGROUND_COLORS.COMPONENT};
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  input {
    height: 48px !important;
    margin: ${SIDEPANEL_BOX_PADDING / 2}px;
    border: 2px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 2px;
    padding-left: 16px;
    font-family: 'Inter';
  }
  padding: ${SIDEPANEL_BOX_PADDING}px;
`;

const spin = keyframes`
0%{transform: rotate(0deg);}
100% {transform:rotate(360deg);}
`;
export const FilterList = styled.div`
  height: 142px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  i {
    margin: auto;
    height: 50px;
    /* width: 50px; */
    font-size: 50px;
    animation: ${spin} 2000ms infinite;
  }
`;

export const FilterValue = styled.div`
  display: flex;
  padding: ${SIDEPANEL_BOX_PADDING / 2}px;
  margin-top: 1px;
  font-size: min(${FONT_SIZES.SIDEPANEL_BOX_OPTION}em, 16px);
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: none;
    margin-left: 0;
    font-size: 18px;
    height: 13px;
    color: white;
    width: 13px;
    margin-right: 8px;
    box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
    border-radius: 2px;
    ${({ selected }) =>
      selected &&
      `
      color: ${BACKGROUND_COLORS.LIGHT};
    `}
  }
`;
