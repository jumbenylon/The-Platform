import styled from "styled-components";

const PrimaryButton = styled.button`
  width: ${(props) => props.w};
  background: ${(props) => props.bg || "#FFFFFF"};
  color: ${(props) => props.color || "#000000"};
  color: ${(props) => props.disabled && "#B4B0D1"};
  background: ${(props) => props.disabled && "#2C6DEA"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || "500"};
  font-family: ${(props) => props.fontFamily || "DM Sans"}, sans-serif;
  padding: ${(props) => props.p || "12px 16px"};
  transition: 0.3s ease;
  border-radius: 6px;
  border-color: #E0E0E0;
  // box-shadow: 0px 6px 20px 3px rgba(31, 100, 255, 0.3);

  @media (max-width: 600px) {
    width: ${(props) => props.smallW && props.smallW};
    font-size: ${(props) => props.smallSize || "14px"};
  }

  &:hover {
    color: ${(props) => props.hoverColor};
    background: ${(props) => props.hoverBg || "bg-transparent"};
    background: ${(props) => props.disabled && "#F5F4FA"};
    cursor: ${(props) => props.disabled && "not-allowed"};
  }

  &:focus {
    border-color: #E0E0E0;
    outline-color: #E0E0E0;
  }
`;

export default PrimaryButton;
