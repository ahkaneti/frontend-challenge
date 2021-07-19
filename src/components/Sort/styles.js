import styled from 'styled-components/macro';
import { BACKGROUND_COLORS, TEXT_COLORS } from 'tokens/colors';
import { SIDEPANEL_BOX_PADDING } from 'tokens/dimensions';
import { FONT_SIZES } from 'tokens/fonts';

export const SortWrapper = styled.div`
  width: inherit;
  p {
    margin-bottom: 12px;
    color: ${TEXT_COLORS.COMPONENT};
    font-size: 13px;
  }
`;

export const SortList = styled.div`
  display: flex;
  flex-direction: column;
  background: ${BACKGROUND_COLORS.COMPONENT};
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  padding: ${SIDEPANEL_BOX_PADDING}px;
`;

export const SortValue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: ${SIDEPANEL_BOX_PADDING / 2}px;
  font-size: min(${FONT_SIZES.SIDEPANEL_BOX_OPTION}em, 16px);
  width: 100%;
  label {
    color: ${TEXT_COLORS.DEFAULT};
    margin-left: 12px;
  }
  i {
    color: ${BACKGROUND_COLORS.LIGHT};
    font-size: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
