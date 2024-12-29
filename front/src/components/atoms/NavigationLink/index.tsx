import Link from 'next/link';
import styled from 'styled-components';
import CommonButton from '../CommonButton';

type Props = {
  title: string;
  linkPath: string;
};
const NavigationLink: React.FC<Props> = ({ title, linkPath }) => {
  return (
    <>
      <Link href={linkPath}>
        <CommonButton title={title} buttonStyle="redirect" />
      </Link>
    </>
  );
};
export default NavigationLink;
