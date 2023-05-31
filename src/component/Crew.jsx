import background from "../assets/crew/background-crew-desktop.jpg"
import { Button, Stack } from "@mui/material"

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import people from "../assets/crew/image-douglas-hurley.png"
import data from "../starter-code/data.json"

export default function Crew() {

    const [activeStep, setActiveStep] = React.useState(0);
    const img = data["crew"][activeStep]["images"]["png"]
    const name = data["crew"][activeStep]["name"]
    const role = data["crew"][activeStep]["role"]
    const bio = data["crew"][activeStep]["bio"]

    return (<>
        <div style={{ maxWidth: "100%" }}>
            <p style={{ color: "white", textAlign: "left" }}>02 MEET YOUR CREW</p>
            <Stack className="content" direction="row" spacing={5} display="flex" alignItems="center">

                <Stack width="600px" display="flex" alignItems="left">
                    <p style={{ color: "white", fontSize: 30, textAlign: "left", margin: 0 }}>{role}</p>
                    <p style={{ color: "white", fontSize: 60, textAlign: "left", margin: 0 }}>{name}</p>
                    <p style={{ color: "white", textAlign: "left", height: 100 }}>{bio}</p>
                    <DotsMobileStepper />
                </Stack>
                <img src={people} alt="" style={{ maxWidth: 300 }} />
            </Stack>

            <img src={background} alt="" style={{ width: 1600, position: "fixed", left: 0, top: 0, zIndex: "-1" }} />
        </div >
    </>)

    function DotsMobileStepper() {
        const theme = useTheme();


        const handleNext = () => {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        };

        const handleBack = () => {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        };

        return (
            <MobileStepper
                variant="dots"
                steps={4}
                position="static"
                activeStep={activeStep}
                sx={{ maxWidth: 400, flexGrow: 1 }}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        );
    }

}

