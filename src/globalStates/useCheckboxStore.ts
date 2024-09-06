import { create } from "zustand";

interface CheckboxState {
  inputChecked: string | null;
  inputCheckedID: string | null;
  setInputSelected: (name: string, id: string) => void;
}

const useCheckboxStore = create<CheckboxState>((set) => ({
  inputChecked: null,
  inputCheckedID: null,
  setInputSelected: (name: string, id: string) =>
    set({ inputChecked: name, inputCheckedID: id }),
}));

export default useCheckboxStore;
