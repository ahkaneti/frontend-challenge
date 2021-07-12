import styled from 'styled-components/macro';
import { BACKGROUND_COLORS } from 'tokens/colors';

export const SortWrapper = styled.div`
  height: 10%;
  width: 20%;
`;

export const SortValues = styled.form`
  display: flex;
  flex-direction: column;
  left: 104px;
  top: 115px;
  background: ${BACKGROUND_COLORS.COMPONENT};
`;
