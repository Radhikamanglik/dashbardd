import { styled } from "styled-components";

export const Sidebox = styled.div`
  background: #000000;
  width: 80px;
  display: flex;
  flex-direction: column;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  @media (max-width: 970px) {
    display: none !important;
  }
`;

export const Contentbox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Iconbox = styled.div`
  border: 5px solid transparent;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #0f1015;
    cursor: pointer;
    border-left: 5px solid #0090e7;
  }
`;

export const Roundbox = styled.div`
  background: #2a2d3a;

  border-radius: 2rem;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Fullsidebox = styled.div`
  width: 361px;
  background: #000000;
  display: flex;
  flex-direction: column;
  transition: "width 0.8s ease";
  @media (max-width: 970px) {
    position: absolute;
    z-index: 35;
    height: 100vh;
    background: #191c24 !important;
  }
`;

export const Fullcontentbox = styled.div`
  width: 10%;
  height: 60px;
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: flex-start;
  color: #656e93;
`;
export const Fullcontentboxhover = styled.div`
  color: #656e93;
  width: 100%;
  height: 50px;
  display: flex;
  padding: 0 1.2rem;
  align-items: center;
  justify-content: flex-start;
  border: 5px solid transparent;
  &:hover {
    background: #0f1015;
    cursor: pointer;
    border-left: 5px solid #0090e7;
    color: white;
  }
`;

export const Value = styled.div`
  font-size: 1rem;

  font-weight: 300;
  padding: 0 10px;
`;

export const Fulliconbox = styled.div`
  border: 1px solid white;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Cross = styled.div`
  display: none;
  cursor: pointer;
  width: 35px;
  @media (max-width: 970px) {
    display: block;
  }
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1.2);
  }
`;
