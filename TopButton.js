import { Button } from "react-bootstrap";
import styled from "styled-components";
import { useState, useEffect } from "react";

export default function TopButton() {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
        <StyledTopBtn onClick={scrollToTop} id="topBtn" title="Go to top">
          TOP
        </StyledTopBtn>
      <StyledLmsBtn href="https://www.hrdpuroom.net/" target="_blank">LMS</StyledLmsBtn>
    </>
  );
}

const StyledTopBtn = styled(Button)`
  & {
    width: 55px;
    height: 55px;
    position: fixed;
    bottom: 30px;
    right: 20px;
    z-index: 99;
    border: none;
    outline: none;
    background-color: #ffbd29;
    color: white;
    cursor: pointer;
    border-radius: 50%;
    font-size: 15px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background-color: #fbbc2e;
    transform: translateY(-5px);
  }
`;

const StyledLmsBtn = styled.a`
  width: 55px;
  height: 55px;
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: #ffbd29;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  text-align: center;
  line-height: 55px;
  text-decoration: none;

  &:hover {
    background-color: #fbbc2e;
    transform: translateY(-5px);
    color: white;
  }
`;
