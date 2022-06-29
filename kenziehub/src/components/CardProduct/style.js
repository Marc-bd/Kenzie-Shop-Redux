import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  margin: 0px 16px 16px 16px;
  height: 100vh;
  gap: 40px;
`;
export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 255px;
  height: 407px;
  border: 2px solid #808080;
  border-radius: 12px;

  .containerImgProduct {
    height: 200px;
    width: 251px;
    background: #ccc;
    border-radius: 8px 8px 0px 0px;
    img {
      height: 100%;
      width: 100%;
    }
  }

  .containerInfoProduct {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 150px;

    h3 {
      font-family: "Stick No Bills", sans-serif;
    }

    p {
      font-size: 13px;
      margin: 8px 6px;
      text-align: justify;
    }
  }
  button {
    width: 155px;
    font-size: 14px;
    margin-top: 3px;
    background-color: #ffff;
    color: #808080;
    border: 1px solid #808080;

    &:hover {
      background-color: #808080;
      color: #ffff;
      border: 1px solid #ffff;
    }
  }
`;
