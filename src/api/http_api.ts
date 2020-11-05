import axios, {AxiosInstance} from 'axios';

export interface RequestConfig {
  params?: {[key: string]: string | number | undefined};
}

export interface HttpAPI {
  get: <T>(url: string, options?: RequestConfig) => Promise<T>;
}

export class Http implements HttpAPI {
  private baseURL: string;

  private axiosInstance: AxiosInstance;

  public constructor(baseURL: string = '', config: RequestConfig = {}) {
    this.baseURL = baseURL;
    this.axiosInstance = axios.create({baseURL, ...config});
  }

  public async get<T>(url: string, config?: RequestConfig) {
    const res = await this.axiosInstance.get<T>(url, config);
    console.log(res);

    return res.data;
  }
}
