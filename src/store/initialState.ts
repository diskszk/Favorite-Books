export type Count = {
  value: number;
};
export type RootStore = {
  count: Count;
};

export const initialState: RootStore = {
  count: {
    value: 0,
  },
};
