import { AxiosResponse, AxiosError } from 'axios';
import globalAxios, {
  ResponseType,
  isAxiosError,
  IErrorResponse,
} from '@/libs/apiClient';
import { TodoResponseType, TodoListResponseType } from '@/types/todo';
import { todo } from 'node:test';

export const getTodoList = async () => {
  try {
    const { data }: AxiosResponse<TodoListResponseType> =
      await globalAxios.get('/todo');

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

export const getTodoDetail = async (todoId: number) => {
  try {
    const { data }: AxiosResponse<TodoResponseType> = await globalAxios.get(
      `/todo/${todoId}`
    );

    const result: ResponseType<TodoResponseType> = {
      code: 200,
      data: {
        todo: data.todo,
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

export const addTodo = async (content: string) => {
  try {
    const { data }: AxiosResponse = await globalAxios.post('/todo', {
      content,
    });

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

export const deleteTodo = async (todoId: number) => {
  try {
    const { data }: AxiosResponse = await globalAxios.delete(`/todo/${todoId}`);

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
