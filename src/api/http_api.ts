import axios, {AxiosInstance} from 'axios';
import {Params} from './CardAPI';

export interface RequestConfig {
  params?: Params;
}

export interface HttpAPI {
  get: <T>(url: string, options?: RequestConfig) => Promise<T>;
}

export class Http implements HttpAPI {
  private baseURL: string;
  private params: Params;
  private axiosInstance: AxiosInstance;

  public constructor(baseURL: string = '', params: Params) {
    this.baseURL = baseURL;
    this.params = params;
    this.axiosInstance = axios.create({baseURL, params});
  }

  public async get<T>(url: string, config?: RequestConfig) {
    const res = await this.axiosInstance.get<T>(url, config);
    return res.data;
  }
}
