import styled from "styled-components";

export const DesktopHeaderStyle = styled.header`
  z-index: 999999999;
  @media (max-width: 1000px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  position: sticky;
  background: ${(props) => props.bg};
  top: 0;
  box-shadow: ${(props) =>
    props.isScrolled && "0px 4px 16px rgba(0, 0, 0, 0.05)"};
`;