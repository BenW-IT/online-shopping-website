/*
<<  Group 1-32  >>
Jeremy Giddings 103925859
Benjamin Williams 103619739
James Cockram 103999949
*/
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';


import {
    Typography,
  } from "@mui/material";
  import { useContext } from "react";
import { CartContext } from "../context/cart.jsx";
import {  toast } from "react-toastify";

const notifyCartEmpty = () =>     //toast pop up of attempted checkout with no items in cart
toast.error(`Nothing in cart!`, {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
  style: {
    backgroundColor: "#000",
    color: "#fff",
  },
});


function Copyright() {          //footer copyright
  return (
    
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Simple Trade
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Billing address', 'Payment details', 'Review your order'];

function getStepContent(step) {  //return page depending on which step
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { clearCart, getCartTotal } = useContext(CartContext);

  const handleNext = () => {
    if (getCartTotal() !==0)
    {
    setActiveStep(activeStep + 1);       //move to next page
    }
    else {
        notifyCartEmpty();      //toast popup if try to checkout with 0 items
    }
    if (activeStep===2) {
        clearCart()            //clear cart on successful checkout
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);      //go back one page
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5}}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button 
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1, backgroundColor: "black" }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}