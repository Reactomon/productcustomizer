import styled from "styled-components";

const StyledModalBase = styled.div` 
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  text-align: center;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.8); /* Black w/ opacity */
`;

const StyledModalBaseContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  height: auto;
  padding: 40px;
  padding-bottom: 60px;
  border: 1px solid #888;
  width: 50%;
  border-radius: 19px;
`;

const StyledCrossButton = styled.span`
  color: #aaaaaa;
  font-size: 30px;
  top: 103px;
  right: 353px;
  position: absolute;
  font-weight: bold;
  &:hover, &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export {
  StyledModalBaseContent,
  StyledModalBase,
  StyledCrossButton
};

