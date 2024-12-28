import { FC } from "react";
import Header from "@/components/common/Header";

const ErrorTemplate: FC<{message: string}> = ({ message }) => {
  return (
    <>
      <Header title="Error" />
      <h2>{ message }</h2>
    </>
  );
}

export default ErrorTemplate;