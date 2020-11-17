import axios, {AxiosInstance} from 'axios';

interface Params {
  [key: string]: string | number | boolean | undefined;
}

export interface RequestConfig {
  params?: Params;
}

export interface HttpAPI {
  get: <T>(url: string, options?: RequestConfig) => Promise<T>;
  addParams: (params: Params) => void;
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
    console.log({params: this.params});

    const res = await this.axiosInstance.get<T>(url, config);
    console.log({res});

    return res.data;
  }

  public addParams = (params: Params) => {
    this.params = {...this.params, ...params};
    this.setAxiosInstance();
  };

  private setAxiosInstance = () => {
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      params: this.params,
    });
  };
}
