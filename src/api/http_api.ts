import axios, {AxiosInstance} from 'axios';

export interface Params {
  [key: string]: string | number | boolean | undefined;
}

export interface RequestConfig {
  params?: Params;
}

export interface HttpAPI {
  get: <T>(url: string, options?: RequestConfig) => Promise<T>;
  addParams: (params: Params) => void;
  cleanAPI: () => void;
}

export class Http implements HttpAPI {
  private baseURL: string;
  private params: Params;

  private axiosInstance!: AxiosInstance;

  public constructor(baseURL: string = '', config: RequestConfig = {}) {
    this.baseURL = baseURL;
    this.params = config.params || {};
    this.setAxiosInstance();
  }

  public async get<T>(url: string, config?: RequestConfig) {
    const res = await this.axiosInstance.get<T>(url, config);

    return res.data;
  }

  public addParams: (params: Params) => void = (params) => {
    this.params = {...this.params, ...params};

    this.setAxiosInstance();
  };

  public cleanAPI: () => void = () => {
    this.baseURL = '';
    this.params = {};
  };

  private setAxiosInstance: () => void = () => {
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      params: this.params,
    });
  };
}
