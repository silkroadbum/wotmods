export type NewsType = {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  date: string;
};

export type StatusType = 'loading' | 'loaded' | 'error';
