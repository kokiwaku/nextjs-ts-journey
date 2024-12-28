import { FC } from "react";
import ClientComponent from "@/components/auth/login/client-component";

const LoginTemplate: FC = () => {
  return (
    <>
      <h1>Login</h1>
      <ClientComponent />
    </>
  );
}

export default LoginTemplate;