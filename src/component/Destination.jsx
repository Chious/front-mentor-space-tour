import { useState } from "react"
import background from "../assets/destination/background-destination-desktop.jpg"
import { Button, Stack, Box, Toolbar, AppBar, Divider } from "@mui/material"

import data from "../starter-code/data.json"
import picture from "../assets/destination/image-europa.png"

export default function Destination() {

    const [plant, Setplant] = useState(0)

    const img = data["destinations"][plant]["images"]["png"]
    const name = data["destinations"][plant]["name"]
    const description = data["destinations"][plant]["description"]
    const distance = data["destinations"][plant]["distance"]
    const travel = data["destinations"][plant]["travel"]

    const setup = input => e => {
        e.preventDefault();
        Setplant(input)
        console.log(input)
    }

    function ButtonAppBar() {
        return (<>
            <Box sx={{ flexGrow: 1 }} width="600px">
                <AppBar position="relative">
                    <Toolbar>
                        <Button color="inherit" onClick={setup(0)}>MOON</Button>
                        <Button color="inherit" onClick={setup(1)}>MARS</Button>
                        <Button color="inherit" onClick={setup(2)}>EUROPA</Button>
                        <Button color="inherit" onClick={setup(3)}>TITAN</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
        );
    }

    return (<>
        <div style={{ maxWidth: "100%" }}>
            <p style={{ zIndex: 1, color: "white", textAlign: "left" }}>01 PICK YOUR DESTINATION</p>
            <Stack className="content" direction="row" spacing={5} display="flex" alignItems="center">
                <img src={picture} alt="" />
                <Stack direction="column" spacing={3}>
                    <ButtonAppBar />
                    <p style={{ color: "white", fontSize: 100, margin: 0, textAlign: "left" }}>{name}</p>
                    <p style={{ color: "white", margin: 0, textAlign: "left", width: 600 }}>{description}</p>
                    <Divider />
                    <Stack direction="row" width="600px">
                        <div style={{ width: 272 }}>
                            <p style={{ color: "white", textAlign: "left" }}>AVG DISTANCE</p>
                            <p style={{ color: "white", fontSize: 50, margin: 0, textAlign: "left" }}>{distance}</p>
                        </div>

                        <div style={{ paddingLeft: 70 }}>
                            <p style={{ color: "white", textAlign: "left" }}>EST. TRAVEL TIME</p>
                            <p style={{ color: "white", fontSize: 50, margin: 0, textAlign: "left" }}>{travel}</p>
                        </div>
                    </Stack>
                </Stack>
            </Stack>

            <img src={background} alt="" style={{ width: 1600, position: "fixed", left: 0, top: 0, zIndex: "-1" }} />
        </div >
    </>)
}