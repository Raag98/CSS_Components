import { useMultiStepForm } from "./useMultiStepForm";
import "./App.css";
import { UserForm } from "./UserForm";
import { AddressForm } from './AddressForm';
import { AccountForm } from './AccountForm';
import { FormEvent, useState } from "react";

type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA : FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}

function App() {

  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return {...prev, ...fields};
    });
  }

  const { steps, currentStepIndex, step, previous, next, isFirstStep, isLastStep } = useMultiStepForm([
    <UserForm {...data} updateField={updateFields} />,
    <AddressForm {...data} updateField={updateFields} />,
    <AccountForm {...data} updateField={updateFields} />
  ]);

  function handleSubmit(e : FormEvent) {
    e.preventDefault();
    
    if(!isLastStep)
      return next();    

    alert("Account Created successfully!");
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="steps">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div className="btn-div">
          {!isFirstStep && (
            <button type="button" onClick={previous}>
              Back
            </button>
          )}
          <button type="submit">
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
