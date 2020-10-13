// eslint-disable-next-line no-undef
export interface TokenStore {
  // eslint-disable-next-line no-undef
  getToken(): string;
}
export const tokenStore: TokenStore = {
  getToken(): string {
    return "blabla";
  },
};
