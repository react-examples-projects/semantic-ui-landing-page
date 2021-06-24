import { useState, useCallback } from "react";

export default function useToggler() {
  const [isActive, setActive] = useState(false);
  const toggle = useCallback(() => {
    setActive(!isActive);
  }, [isActive]);
  return [isActive, toggle];
}
