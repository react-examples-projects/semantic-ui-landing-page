import { useState, useCallback } from "react";

export default function useText() {
  const [text, _setText] = useState(false);
  const setText = useCallback(
    (e) => {
      _setText(e.target.value);
    },
    []
  );
  return [text, setText];
}
