import { useState } from "react";
import  {Select}  from "./components/select/Select"
import { options } from './data/index';
import { SelectOption } from "./types";

const App = () => {
  const[value1,setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])

  return (
    <>
         <Select
        multiple
        options={options}
        value={value1}
        onChange={o => setValue1(o)}
      />
      <Select options={options} value={value2} onChange={o => setValue2(o)}/>
    </>
  )
}
export default App