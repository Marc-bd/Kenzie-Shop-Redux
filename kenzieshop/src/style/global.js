import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{  
   
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    
}

ul, li, ol {
    list-style: none
}

h1,h2,h3,h4,h5, button, span {
    font-family: "Stick No Bills", sans-serif;
}


button{
    font-family: "Stick No Bills", sans-serif;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 6.6875rem;
    height: 2.5rem;
   
    background-color: #808080;
    color: #ffffff;
   
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    border-radius: 8px;
    border: none;
}




`;
