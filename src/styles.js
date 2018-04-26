import styled from "styled-components";

export const Title = styled.h1`
  color: ${props => props.color || "white"};
  font-size: 40px;
  margin: 0;
`;

export const HeaderLink = styled.a`
         color: white;
         cursor: pointer;
         font-size: 20px;
         text-decoration: none;
         &::after {
           content: "";
           display: block;
           width: 0;
           height: 3px;
           background: #cddc39;
           transition: width 0.3s;
         }
         &:hover {
           color:  #cddc39;
           &::after {
             width: 100%;
           }
         }`;
