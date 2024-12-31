import { AxiosResponse, AxiosError } from 'axios';
import globalAxios, {
  ResponseType,
  isAxiosError,
  IErrorResponse,
} from '@/libs/apiClient';
import { AuthResponseType } from '@/types/auth';

export const signUp = async (email: string, password: string) => {
  try {
    const { data }: AxiosResponse<AuthResponseType> = await globalAxios.post(
      '/auth/register',
      {
        email,
        name: email,
        password,
      }
    );

    const result: ResponseType<AuthResponseType> = {
      code: 200,
      data: {
        user: data.user,
      },
    };
    return result;
  } catch (error) {
    const result: ResponseType = {
      code: 500,
      message: '',
    };
    if (isAxiosError(error)) {
      const axiosError = error as IErrorResponse;
      result.code = axiosError.response.status;
      result.message = axiosError.response.data.message;
    }

    return result;
  }
};

type Props = {
  token?: string;
};
export const validateToken = async ({ token }: Props) => {
  try {
    const { data }: AxiosResponse<AuthResponseType> = await globalAxios.post(
      '/auth/validate_token',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const result: ResponseType<AuthResponseType> = {
      code: 200,
      data: {
        user: data.user,
      },
    };
    return result;
  } catch (error) {
    const result: ResponseType = {
      code: 500,
      message: '',
    };
    if (isAxiosError(error)) {
      const axiosError = error as IErrorResponse;
      result.code = axiosError.response.status;
      result.message = axiosError.response.data.message;
    }

    return result;
  }
};
