import { Select } from "./select"
import { useState } from 'react';

const options = [
  { label: 'First', value: 1},
  { label: 'Second', value: 2},
  { label: 'Third', value: 3},
  { label: 'Fourth', value: 4},
  { label: 'Fifth', value: 5},
];

function App() {
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);

  return (
    <div className="App">
      <Select options={options} value={value} onChange={opt => setValue(opt)}/>
    </div>
  )
}

export default App
