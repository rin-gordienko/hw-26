import PropTypes from "prop-types";
import styled from "styled-components";

const StyledBaseButton = styled.button`
  font-family: "Nunito Sans";
  font-style: normal;
  border-radius: 4px;
  border: 1px solid transparent;
  font-weight: 400;
  align-items: center;
  margin: 25px;

  padding: ${(props) => {
    switch (props.size) {
      case "large":
        return "20px 11.5px";
      case "medium":
        return "20px 13px";
      case "small":
        return "16px 9px";
    }
  }};
  font-size: ${(props) => (props.size === "large" ? "18px" : "16px")};
  line-height: ${(props) => (props.size === "large" ? "25px" : "22px")};
`;

const StyledPrimaryButton = styled(StyledBaseButton)`
  color: #fafafa;
  background: #605dec;

  :hover {
    background: #1513a0;
  }

  :disabled {
    color: #7c8db0;
    background: rgba(203, 212, 230, 0.3);
    border: 1px solid #7c8db0;
  }
`;

const StyledSecondaryButton = styled(StyledBaseButton)`
  color: #605dec;
  background: #f3f3f3;
  border: 1px solid #605dec;
  :hover {
    background: #e9e8fc;
  }

  :disabled {
    color: rgba(203, 212, 230, 0.3);
    background: #f3f3f3;
    border: 1px solid #7c8db0;
  }
`;

const Button = ({ color, size, disabled, children, onClick }) => {
  const buttonProps = {
    color,
    size,
    disabled,
    children,
    onClick,
  };

  if (color === "secondary") {
    return (
      <StyledSecondaryButton {...buttonProps}>{children}</StyledSecondaryButton>
    );
  }
  return <StyledPrimaryButton {...buttonProps}>{children}</StyledPrimaryButton>;
};

Button.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: "primary",
  size: "medium",
  disabled: false,
};
export default Button;
