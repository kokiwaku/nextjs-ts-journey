import { FC } from "react";
import Link from "next/link";

type Props = {
  title: string,
  linkPath: string,
};
const NavigationLink:FC<Props> = ({ title, linkPath }) => {
  return (
    <>
      <Link href={linkPath}>
        { title }
      </Link>
    </>
  );
}
export default NavigationLink;
