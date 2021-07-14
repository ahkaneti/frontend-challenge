import styled from 'styled-components/macro';
import { BACKGROUND_COLORS, TEXT_COLORS } from 'tokens/colors';

export const SortWrapper = styled.div`
  height: 214px;
  width: inherit;
  p {
    margin-bottom: 12px;
    color: ${TEXT_COLORS.COMPONENT};
    font-size: 13px;
  }
`;

export const SortList = styled.form`
  display: flex;
  flex-direction: column;
  background: ${BACKGROUND_COLORS.COMPONENT};
  justify-content: center;
  height: 184px;
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
`;

export const SortValue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 24px;
  margin-left: 24px;
  :last-child {
    margin-bottom: 26px;
  }
  label {
    color: ${TEXT_COLORS.DEFAULT};
    margin-left: 12px;
  }
  i {
    color: ${BACKGROUND_COLORS.LIGHT};
    font-size: 20px;
    cursor: pointer;
  }
`;
