import {useCallback, useState} from 'react';

const useBooleanState = (
  initialValue: boolean,
): any => {
  const [state, setState] = useState(initialValue);

  const setFalse = useCallback((): void => {
    setState(false);
  }, [setState]);

  const setTrue = useCallback((): void => {
    setState(true);
  }, [setState]);

  const toggleState = useCallback((): void => {
    setState(!state);
  }, [state, setState]);

  return [state, toggleState, setTrue, setFalse];
};

export default useBooleanState;
