export interface PersistStore {
  onLoad: () => Promise<void> | void;
}
