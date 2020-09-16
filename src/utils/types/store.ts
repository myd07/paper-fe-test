export interface IStore<I> {
  state: I;
  actions: any;
  mutations: any;
  getters: any;
}
