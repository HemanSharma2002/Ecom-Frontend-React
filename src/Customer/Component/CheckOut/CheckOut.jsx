import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useLocation} from "react-router-dom"
import { OrderSummary } from './CheckOutComponents/OrderSummary';
import { DeleveryAddressForm } from './CheckOutComponents/DeleveryAddressForm';

const steps = ['Login', 'Delevery Address', 'Order Sumary','Payment'];

export default function CheckOut() {
  const [activeStep, setActiveStep] = React.useState(0);
  const location=useLocation();
  const querySearch=new URLSearchParams(location.search)
  const step=querySearch.get("step")
//   console.log(typeof(step))
//   if(step!=null){
//     var x=Number(step)
//     console.log(typeof(x))
//     setActiveStep(x)
//   }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };



  return (
    <div className=' m-10'>
        <Box sx={{ width: '100%' }}>
      <Stepper activeStep={Number(step)}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
    {step==1&&<div>Login</div>}
    {step==2&&<div><DeleveryAddressForm/></div>}
    {step==3&&<div><OrderSummary/></div>}
    {step==4&&<div>Payment</div>}
    </div>
  );
}