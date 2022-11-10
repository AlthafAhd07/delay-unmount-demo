import { useState } from "react";

import Delay, { useDelayUnmount } from "delay-unmount";

import YourComponent from "./YourComponent";
import CustomHookComponent from "./CustomHook";

function App() {
  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);

  const show = useDelayUnmount(check2, 1000);

  return (
    <div className="App">
      <button onClick={() => setCheck((old) => !old)}>Toggle Mount</button>

      <button onClick={() => setCheck2((old) => !old)}>
        Toggle Mount Custom Hook
      </button>

      <Delay
        component={YourComponent}
        dependancy={check}
        delay="1000"
        mount="mount"
        unmount="unmount"
      />
      {show && <CustomHookComponent show={show} visible={check2} />}
    </div>
  );
}

export default App;
