import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

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

if (import.meta.env.DEV) {
  mountStoreDevtool("Store", useStore);
}

export default useStore;
