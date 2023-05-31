import background from "../assets/home/background-home-desktop.jpg"
import mobilebackground from "../assets/home/background-home-mobile.jpg"
import { Button, Stack } from "@mui/material"

export default function Home() {

    const isMobile = window.matchMedia("(max-width: 768px)").matches

    return (<>
        <div style={{ maxWidth: "100%" }}>

            <Stack className="content" direction="row" spacing={5} display="flex" alignItems="center">
                <Stack className="desc" style={{ width: 470 }}>
                    <p style={{ zIndex: 1, textAlign: "left", color: "#9A9DB0" }}>SO YOU WANT TO TRAVEL TO </p>
                    <h1 style={{ zIndex: 1, color: "white", fontSize: 120, margin: 0 }}>SPACE </h1>
                    <p style={{ zIndex: 1, textAlign: "left", color: "#9A9DB0" }}>Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!</p>
                </Stack>

                <Button style={{ fontFamily: "Playfair, serif", fontSize: 50, width: 300, height: 300, color: "black", background: "white", borderRadius: "90%" }}>EXPLORE</Button>
            </Stack>
            {(isMobile === true) ? <img src={mobilebackground} alt="" style={{ width: 768, position: "fixed", left: 0, top: 0, zIndex: "-1" }} /> :
                <img src={background} alt="" style={{ width: 1600, position: "fixed", left: 0, top: 0, zIndex: "-1" }} />
            }

        </div >
    </>)
}