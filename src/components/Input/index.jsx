import { useRef, useState } from "react";
//useRef will not re render on every change
export default () => {
  const [value, setValue] = useState(0);
  const ref = useRef();
  console.dir(ref.current);
  return (
    <>
      <input
        ref={ref}
        type="number"
        min="0"
        max="50"
        value={value}
        onChange={(event) => setValue(+event.currentTarget.value)}
      />
      <span>{ref.current && ref.current.validationMessage}</span>
    </>
  );
};
