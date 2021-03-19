export type Count = {
  value: number;
};

export type LoadingStatus = {
  isLoading: boolean;
};
export type ErrorStatus = {
  isError: boolean;
  message: string;
  status: number;
  isModalOpen: boolean;
};
export type Message = {
  message: string;
  isModalOpen: boolean;
};
