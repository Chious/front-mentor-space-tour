import background from "../assets/home/background-home-desktop.jpg"
import { Button, Stack } from "@mui/material"

export default function Home() {

    return (<>
        <div style={{ maxWidth: "100%" }}>

            <Stack className="content" direction="row" spacing={5} display="flex" alignItems="center">
                <div className="desc" style={{ width: 470 }}>
                    <p style={{ zIndex: 1, color: "white", textAlign: "left" }}>SO YOU WANT TO TRAVEL TO </p>
                    <p style={{ zIndex: 1, color: "white", fontSize: 120, margin: 0 }}>SPACE </p>
                    <p style={{ zIndex: 1, color: "white", textAlign: "left" }}>Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!</p>
                </div>

                <Button style={{ fontSize: 50, width: 300, height: 300, color: "black", background: "white", borderRadius: "90%" }}>EXPLORE</Button>
            </Stack>

            <img src={background} alt="" style={{ width: 1600, position: "fixed", left: 0, top: 0, zIndex: "-1" }} />
        </div >
    </>)
}