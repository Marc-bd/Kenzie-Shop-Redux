import styled from "styled-components";

export const StyledHeader = styled.div`
  font-family: "Stick No Bills", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  align-content: center;
  padding: 10px;

  h1,
  div {
    // margin: 0 2rem;
  }

  h1 {
    margin-bottom: 8px;
    font-size: 1.5rem;
  }

  div {
    display: flex;

    align-content: center;
    gap: 11px;

    h2 {
      display: flex;
      align-items: center;
      align-content: center;
      font-size: 1rem;
      font-weight: 700;
      gap: 5px;
      cursor: pointer;
    }

    button {
      font-family: "Stick No Bills", sans-serif;
      background: none;
      color: #000;
      font-size: 1rem;
      font-weight: 700;
      gap: 5px;
    }
  }
`;
