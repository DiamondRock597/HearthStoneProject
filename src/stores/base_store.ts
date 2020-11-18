export interface BaseStore {
  dispose: () => Promise<void> | void;
}
