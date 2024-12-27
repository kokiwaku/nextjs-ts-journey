import Header from "../../components/common/Header";

const error: React.FC<{message: string}> = ({ message }) => {
  return (
    <>
      <Header title="Error" />
      <h2>{ message }</h2>
    </>
  );
};

export default error;
