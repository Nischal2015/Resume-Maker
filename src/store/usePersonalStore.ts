import create from "zustand";

export interface UsePersonalStoreProps {
  fullname: string;
  headline: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postal: string;
  profile: string;
}

export interface UsePersonalFunctionProps extends UsePersonalStoreProps {
  setStore: (newState: Partial<UsePersonalStoreProps>) => void;
}

const useStore = create<UsePersonalFunctionProps>((set) => ({
  fullname: "",
  headline: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postal: "",
  profile: "",

  setStore: (newState: Partial<UsePersonalStoreProps>) =>
    set((state) => ({ ...state, ...newState })),
}));

export default useStore;
