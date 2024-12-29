const ErrorTemplate: React.FC<{ message: string }> = ({ message }) => {
  return (
    <>
      <h2>{message}</h2>
    </>
  );
};

export default ErrorTemplate;
