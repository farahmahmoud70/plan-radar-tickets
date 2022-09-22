import { useCallback, useState } from "react";
import useEventListener from "./useEventListener";
import UseIsomorphicLayoutEffect from "./useIsoMorphicLayoutEffect";

const UseElementSize = () => {
  // Mutable values like 'ref.current' aren't valid dependencies
  // because mutating them doesn't re-render the component.
  // Instead, we use a state as a ref to be reactive.
  const [ref, setRef] = useState(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  // Prevent too many rendering using useCallback
  const handleSize = useCallback(() => {
    setSize({
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0,
    });

  }, [ref?.offsetHeight, ref?.offsetWidth]);

  useEventListener("resize", handleSize);

  UseIsomorphicLayoutEffect(() => {
    handleSize();
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  return [setRef, size, ref];
};

export default UseElementSize;
