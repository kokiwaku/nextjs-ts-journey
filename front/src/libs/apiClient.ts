import axios, { AxiosError, AxiosResponse } from 'axios';
import { BACK_API_ENDPOINT } from '@/constants/server';

// レスポンスの型
export type ResponseType<T = undefined> = {
  code: number;
  data?: T;
  message?: string;
};
export type GlobalAxiosResponse<T> = {
  content?: T;
};

export interface IErrorResponse {
  code: string;
  config: any;
  message: string;
  request: any;
  response: {
    config: any;
    data: {
      error: string;
      message: string;
      statusCode: string;
    };
    headers: any;
    request: any;
    status: number;
    statusText: string;
  };
}

const globalAxios = axios.create({
  baseURL: BACK_API_ENDPOINT,
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});

export default globalAxios;

/**
 * axiosでエラーが発生しているか判定
 * 型ガード：return がtrueの時、errorの型をAxiosErrorと推論できるように
 * @param data
 * @returns
 */
export const isAxiosError = (error: any): error is AxiosError =>
  !!error.isAxiosError;
