import background from "../assets/technology/background-technology-desktop.jpg"
import { Button, Stack, ButtonGroup, Box } from "@mui/material"

import { useState } from "react";

import data from "../starter-code/data.json"
import picture from "../assets/technology/image-space-capsule-landscape.jpg"

export default function Technology() {

    const [step, setStep] = useState(0)

    const img = data["technology"][step]["images"]["portrait"]
    const name = data["technology"][step]["name"]
    const description = data["technology"][step]["description"]

    const changeStep = input => e => {
        e.preventDefault();
        setStep(input)
    }

    return (<>
        <div style={{ maxWidth: "100%" }}>
            <Stack direction="row" spacing={3}>
                <GroupOrientation />
                <Stack direction="column" width="450px">
                    <p style={{ color: "white", textAlign: "left" }}>THE TERMINOLOGY...</p>
                    <p style={{ color: "white", fontSize: 50, margin: 0, textAlign: "left" }}>{name}</p>
                    <p style={{ color: "white", textAlign: "left", fontSize: 15, margin: 0 }}>{description}</p>
                </Stack>
                <img src={picture} alt="" style={{ width: 500 }} />
            </Stack>


            <img src={background} alt="" style={{ width: 1600, position: "fixed", left: 0, top: 0, zIndex: "-1" }} />
        </div >
    </>)

    function GroupOrientation() {
        return (
            <Stack
                sx={{
                    display: 'flex',
                    '& > *': {
                        m: 1,
                    },
                }}
                spacing={2}
                display="flex"
                alignItems="center"

            >
                <Button key="one" onClick={changeStep(0)} style={{ fontSize: 35, color: (step === 0) ? "black" : "white", background: (step === 0) ? "white" : "black", borderRadius: "90%", width: 90, height: 90 }}>1</Button>
                <Button key="two" onClick={changeStep(1)} style={{ fontSize: 35, color: (step === 1) ? "black" : "white", background: (step === 1) ? "white" : "black", borderRadius: "90%", width: 90, height: 90 }}>2</Button>
                <Button key="three" onClick={changeStep(2)} style={{ fontSize: 35, color: (step === 2) ? "black" : "white", background: (step === 2) ? "white" : "black", borderRadius: "90%", width: 90, height: 90 }}>3</Button>
            </Stack>
        );
    }
}