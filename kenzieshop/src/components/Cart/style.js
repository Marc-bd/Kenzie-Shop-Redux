import styled from "styled-components";

export const StyledContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const StyledCart = styled.div`
  border: 1px solid #bbbb;
  border-radius: 9px;
  height: 50%;
  margin-right: 16px;

  .headerCart {
    border-bottom: 1px solid #ccc;
  }

  .containerList {
    overflow: auto;
    height: 90%;

    overflow-x: auto;

    ::-webkit-scrollbar {
      width: 1px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  h2 {
    border-bottom: 1px solid #cccc;
  }

  ul {
    overflow: auto;
    .emptyCart {
      display: flex;
      height: 389px;

      flex-direction: column;

      justify-content: center;
    }
  }

  li {
    display: flex;
    align-content: center;
    align-items: center;
    margin: 10px 0px;
    justify-content: space-around;

    img {
      width: 100px;
    }

    h3,
    h4 {
      font-family: "Stick No Bills", sans-serif;
      font-size: 15px;
    }

    button {
      width: 63px;
      height: 31px;
      font-size: 14px;
      background-color: #ffff;
      color: #808080;
      border: 1px solid #808080;

      &:hover {
        background-color: #808080;
        color: #ffff;
        border: 1px solid #ffff;
      }
    }
  }
`;

export const StyledCartInfo = styled.div`
  font-family: "Stick No Bills", sans-serif;
  border: 1px solid #ccc;
  border-radius: 11px;
  margin-right: 15px;
  height: 101px;
  background: #cccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 11px;
  button {
    width: 250px;
    height: 31px;
    font-size: 14px;
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
