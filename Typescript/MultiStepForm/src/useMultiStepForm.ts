import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    function next() {
        setCurrentStepIndex(i => {
            if(i >= steps.length - 1)   return i;   // Last Step
            return i + 1;
        })
    }

    function previous() {
        setCurrentStepIndex(i => {
            if(i <= 0)   return i;  // First Step
            return i - 1;
        })
    }

    function goTo(index: number) {
        setCurrentStepIndex(index);
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === (steps.length - 1),
        goTo,
        next,
        previous,
    }
}