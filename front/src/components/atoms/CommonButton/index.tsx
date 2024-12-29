import styled from 'styled-components';

type StyleProps = {
  buttonStyle?: string;
};
let scButtonStyle: string | undefined = '';
const StyledButton = styled.button`
  background-color: ${() => {
    switch (scButtonStyle) {
      case 'delete':
        return 'salmon';
      case 'redirect':
        return 'turquoise';
      default:
        return 'lightskyblue';
    }
  }};

  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  transition: border-color 0.25s;
  cursor: pointer;

  &:hover {
    opacity: 0.3;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;
type FcProps = JSX.IntrinsicElements['button'] & StyleProps;
const CommonButton: React.FC<FcProps> = ({
  type = 'button',
  title,
  onClick,
  disabled,
  buttonStyle,
}) => {
  scButtonStyle = buttonStyle;
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {title}
    </StyledButton>
  );
};
export default CommonButton;
