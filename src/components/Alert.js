import styled from "styled-components";
import PropTypes from "prop-types";

import { ReactComponent as CloseIcon } from "../assets/icons/alert.svg";

const StyledBaseAlert = styled.div`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  padding: 16px 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  fill: ${(props) => (props.color === "warning" ? "1513A0" : "F6F6FE")};
  color: ${(props) => {
    switch (props.color) {
      case "primary":
        return " #F6F6FE";
      case "warning":
        return "#1513A0";
      case "error":
        return "#FAFAFA";
    }
  }};
  background-color: ${(props) => {
    switch (props.color) {
      case "primary":
        return "#605DEC";
      case "warning":
        return "#FFD12F";
      case "error":
        return "#EB5757";
    }
  }};
`;


let StyledCloseButton = styled.button`
  // padding: 16px;
  background-color: transparent;
  border: none;
  padding-top: 5px;
  
`;

const Alert = ({ color, children, onClose }) => {
  return (
    <StyledBaseAlert color={color}>
      {" "}
      {children}
      <StyledCloseButton onClick={onClose}>
        <CloseIcon />{" "}
      </StyledCloseButton>{" "}
    </StyledBaseAlert>
  );
};


Alert.propTypes = {
  color: PropTypes.oneOf(["primary", "warning", "error"]),
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  color: "primary",
};


export default Alert;
