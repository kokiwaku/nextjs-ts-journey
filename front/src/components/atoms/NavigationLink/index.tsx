import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: lightskyblue;
  color: black;
`;
type Props = {
  title: string;
  linkPath: string;
};
const NavigationLink: React.FC<Props> = ({ title, linkPath }) => {
  return (
    <>
      <Link href={linkPath}>
        <StyledButton>{title}</StyledButton>
      </Link>
    </>
  );
};
export default NavigationLink;
