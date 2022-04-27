import {Child,} from "./Child";

export const Parent = () => {
  return (
    <div>
      <h2>I am Parents</h2>
      <Child color="red" onClick={()=>alert("clicked!")} />
    </div>
  );
};
