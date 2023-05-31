import background from "../assets/technology/background-technology-desktop.jpg"
import { Button, Stack, Typography } from "@mui/material"

import { useState } from "react";

import data from "../starter-code/data.json"

import picture1 from "../assets/technology/image-launch-vehicle-portrait.jpg"
import picture2 from "../assets/technology/image-spaceport-portrait.jpg"
import picture3 from "../assets/technology/image-space-capsule-portrait.jpg"

export default function Technology() {

    const [step, setStep] = useState(0)
    const pictures = [picture1, picture2, picture3]
    const img = pictures[step]
    const name = data["technology"][step]["name"]
    const description = data["technology"][step]["description"]

    const changeStep = input => e => {
        e.preventDefault();
        setStep(input)
    }

    return (<>
        <div style={{ maxWidth: "100%", marginTop: 80 }}>
            <Typography textAlign="left" fontSize="25px" color="white" ><span style={{ color: "gray" }}>03</span> SPACE LUNCH 101</Typography>

            <Stack direction="row" spacing={3}>
                <GroupOrientation />
                <Stack direction="column" width="450px">
                    <p style={{ color: "#9A9DB0", textAlign: "left" }}>THE TERMINOLOGY...</p>
                    <h1 style={{ color: "white", fontSize: 50, margin: 0, textAlign: "left" }}>{name}</h1>
                    <p style={{ color: "#9A9DB0", textAlign: "left", fontSize: 15, margin: 0 }}>{description}</p>
                </Stack>
                <img src={img} alt="" style={{ width: 500 }} />
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