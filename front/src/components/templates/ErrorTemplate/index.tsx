import { FC } from 'react';

const ErrorTemplate: FC<{ message: string }> = ({ message }) => {
  return (
    <>
      <h2>{message}</h2>
    </>
  );
};

export default ErrorTemplate;
