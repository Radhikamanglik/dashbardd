import { styled } from "styled-components";

export const Navbox = styled.div`
  width: 100%;
  background: #000000;
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding: 1rem 1rem;
  ${
    "" /* position: -webkit-sticky;
  position:sticky;
  top: 0; */
  }
  z-index:11111;
  box-shadow: 20px 19px 34px -15px rgba(0, 0, 0, 0.5);
`;

export const Leftbox = styled.div`
  width: calc(70% - 550px);
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  gap: 40px;
`;
export const LogoBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;
export const Rightbox = styled.div`
  color: white;
  width: 550px;
  @media (max-width: 992px) {
    width: 400px;
  }
  ul {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    list-style-type: none;
    align-items: center;
    justify-content: space-evenly;

    li {
      display: flex;
      align-items: center;
      flex: 1 1 auto;
      position: relative;
    }
  }
`;

export const Flexcenter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Inputarea = styled.input`
  width: 60%;
  background: #191c24;
  color: #606486;
  border: 1px solid #2c2e33;
  padding: 5px 20px 5px 20px;
  border-radius: 5px;
  outline: none;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  color: white;
  align-items: flex-start;
  background: linear-gradient(
    180deg,
    rgb(31, 151, 252) 0%,
    rgb(240, 76, 113) 100%
  );
  background-color: rgba(255, 255, 255, 1);
  display: inline-flex;
  gap: 10px;
  padding: 5px 15px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  font-family: "Sailec-Medium", Helvetica;
  width: fit-content;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const Badge = styled.span`
  position: absolute;
  height: 5px;
  width: 5px;
  z-index: 11;
  padding: 4px;
  border-radius: 10px;
  background-color: #00d25b;
  left: 12px;
`;
export const SearchIcon = styled.img`
  height: 18px;
  width: 18px;
  top: 12px;
`;
