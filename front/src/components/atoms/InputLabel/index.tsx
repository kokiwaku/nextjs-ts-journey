import styled from 'styled-components';

const StyledLabel = styled.label``;

type Props = JSX.IntrinsicElements['label'];
const InputLabel: React.FC<Props> = ({ htmlFor }) => {
  return <StyledLabel htmlFor={htmlFor}>{htmlFor}</StyledLabel>;
};

export default InputLabel;
