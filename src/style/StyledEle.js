import { styled } from "styled-components";

export const MainContainer = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  @media (max-width: 970px) {
    display: block;
  }
`;
export const InnerContainer = styled.div`
  width: 100%;

  @media (max-width: 970px) {
    height: 100%;
    overflow: hidden;
    position: absolute;
    z-index: 1;
  }
`;
export const OutletPages = styled.div`
  height: calc(100% - 65px);
  overflow: hidden;
  margin: 15px;
  background-color: rgb(25, 28, 36);
`;
