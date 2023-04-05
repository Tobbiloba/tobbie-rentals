import { Stepper, Step } from "@mui/material";
import { StepLabel } from "@mui/material";
const Steps = () => {
    const steps = [
        'Create an account or login',
        'Verify your identity',
        'Select any vehicle of your choice at rate',
        'Order the ride.'
    ];
    return (
        <div className="bg-slate-200 w-[100vw] flex flex-col items-center h-[50vh] justify-center">
            <h1 className="text-2xl font-bold text-slate-900 pb-12">How it works</h1>
            <Stepper activeStep={1} alternativeLabel>
                {steps.map((label) => {
                    return (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    )
                })}
            </Stepper>
        </div>
    )
}
export default Steps;