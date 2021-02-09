export class Injector {
  private map: Map<string, Object> = new Map();

  public get = <T>(key: string) => this.map.get(key) as T;

  public set = <T>(key: string, value: Object) => {
    this.map.set(key, value);
  };
}

export const injector = new Injector();
