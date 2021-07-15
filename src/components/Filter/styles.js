import styled, { keyframes } from 'styled-components/macro';
import { BACKGROUND_COLORS, TEXT_COLORS } from 'tokens/colors';

import { SIDEPANEL_WIDTH } from 'tokens/dimensions';

export const FilterWrapper = styled.div`
  height: 274px;
  width: ${SIDEPANEL_WIDTH}px;
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
  /* justify-content: center; */
  flex-direction: column;
  input {
    width: 248px;
    height: 48px !important;
    margin: 24px;
    border: 2px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 2px;
    padding-left: 16px;
    font-family: 'inter';
  }
  padding-bottom: 24px;
`;

const spin = keyframes`
0%{transform: rotate(0deg);}
100% {transform:rotate(360deg);}
`;
export const CompanyList = styled.div`
  height: 142px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  i {
    margin: auto;
    height: 50px;
    width: 50px;
    font-size: 50px;
    animation: ${spin} 2000ms infinite;
  }
`;

export const Company = styled.div`
  display: flex;
  margin-bottom: 18px;
  margin-left: 24px;
  margin-top: 1px;
  i {
    animation: none;
    margin-left: 0;
    color: ${BACKGROUND_COLORS.COMPONENT};
    font-size: 22px;
    height: 22px;
    width: 22px;
    margin-right: 8px;
    box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
    border-radius: 2px;
    ${({ selected }) =>
      selected &&
      `
    color: ${BACKGROUND_COLORS.LIGHT};
    box-shadow: 0px 0px 0px;
    `}
  }
`;
