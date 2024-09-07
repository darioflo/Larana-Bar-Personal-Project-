import { create } from "zustand";

interface CheckboxState {
  inputChecked: string | null;
  inputCheckedID: string | null;
  setInputSelected: (name: string | null, id: string | null) => void;
}

const useCheckboxStore = create<CheckboxState>((set) => ({
  inputChecked: null,
  inputCheckedID: null,
  setInputSelected: (name: string | null , id: string | null ) =>
    set({ inputChecked: name, inputCheckedID: id }),
}));

export default useCheckboxStore;
