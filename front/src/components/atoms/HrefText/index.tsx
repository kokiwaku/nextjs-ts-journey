'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const StyledP = styled.p`
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    opacity: 0.3;
  }
`;

type Props = {
  text: string;
  href: string;
};
const HrefText: React.FC<Props> = ({ text, href }) => {
  const router = useRouter();
  return <StyledP onClick={() => router.push(href)}>{text}</StyledP>;
};

export default HrefText;
