export type NewsType = {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  imgUrlSmall: string;
  date: string;
};

export enum LoadingStatus {
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}
