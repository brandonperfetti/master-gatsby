import styled from 'styled-components';

export const HomePageGrid = styled.div`
  display: grid;
  gap: 20px;
  /* --columns: 2; */
  grid-template-columns: repeat(2, minmax(auto, 1fr));
`;
