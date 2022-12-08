import PropTypes from "prop-types";
import styled from "styled-components";

const StyledBaseButton = styled.button`
  font-family: "Nunito Sans";
  font-style: normal;
  border-radius: 4px;
  border: 1px solid transparent;
  font-weight: 400;
  align-items: center;


  padding: 11.5px, 20px;
  font-size: 18px;
  line-height: 25px; */
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
    border: #7c8db0;
  }
`;

const StyledSecondaryButton = styled(StyledBaseButton)`
  color: #605dec;
  background: #f3f3f3;
  border: #605dec;
  :hover {
    background: #e9e8fc;
  }

  :disabled {
    color: #7c8db0;
    background: #f3f3f3;
    border: #7c8db0;
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

Button.PropTypes = {
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
