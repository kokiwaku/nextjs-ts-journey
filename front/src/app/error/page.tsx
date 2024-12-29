import { NextPage } from "next";
import ErrorTemplate from "@/components/templates/ErrorTemplate";

const ErrorPage: NextPage<{ message: string }> = ({ message }) => <ErrorTemplate message={ message } />;

export default ErrorPage;
