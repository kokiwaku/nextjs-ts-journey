import { AxiosResponse, AxiosError } from 'axios';
import globalAxios, {
  ResponseType,
  isAxiosError,
  IErrorResponse,
} from '@/libs/apiClient';
import { TodoListResponseType } from '@/types/todo';

export const getTodoList = async () => {
  try {
    const { data }: AxiosResponse<TodoListResponseType> =
      await globalAxios.get('/todo');

    debugger;
    const result: ResponseType<TodoListResponseType> = {
      code: 200,
      data: {
        todoList: data.todoList,
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
