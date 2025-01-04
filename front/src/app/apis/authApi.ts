import { AxiosResponse, AxiosError } from 'axios';
import globalAxios, {
  ResponseType,
  isAxiosError,
  IErrorResponse,
} from '@/libs/apiClient';
import { AuthResponseType, AuthUser } from '@/types/auth';

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

    const result: ResponseType = {
      code: 200,
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

    const result: ResponseType = {
      code: 200,
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

export const getUser = async () => {
  try {
    const { data }: AxiosResponse<AuthResponseType> =
      await globalAxios.post('/auth/user');

    const user = data.user;
    const result: ResponseType<AuthResponseType> = {
      code: 200,
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          created_at: user.created_at,
          updated_at: user.created_at,
        },
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

export const login = async (email: string, password: string) => {
  try {
    const { data }: AxiosResponse<AuthResponseType> = await globalAxios.post(
      '/auth/login',
      {
        email,
        password,
      }
    );

    const result: ResponseType = {
      code: 200,
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
