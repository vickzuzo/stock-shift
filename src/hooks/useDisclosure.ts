import { useState } from "react";

export const useDisclosure = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const onOpen = () => {
    setState(true);
  };

  const onClose = () => {
    setState(false);
  };

  const toggle = () => {
    setState((prev) => !prev);
  };

  return { isOpen: state, onOpen, onClose, toggle };
};
