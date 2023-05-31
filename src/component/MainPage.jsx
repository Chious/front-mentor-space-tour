import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import { useState } from 'react';
import Home from './Home';
import Destination from './Destination';
import Crew from './Crew';
import Technology from './Technology';

export default function MainPage() {
    const [step, Setstep] = useState(1)

    const changeStep = input => e => {
        e.preventDefault();
        Setstep(input)
    }

    function ButtonAppBar() {
        return (<>
            <Box sx={{ flexGrow: 1 }} width="600px" position="fixed" top="50px" left="1000px">
                <AppBar position="relative">
                    <Toolbar>
                        <Button color="inherit" onClick={changeStep(1)}>01 HOME</Button>
                        <Button color="inherit" onClick={changeStep(2)}>02 DESTINATION</Button>
                        <Button color="inherit" onClick={changeStep(3)}>03 CREW</Button>
                        <Button color="inherit" onClick={changeStep(4)}>04 TECHNOLOGY</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
        );
    }

    switch (step) {
        case 1:
            return (<>
                <Home />
                <ButtonAppBar />
            </>)

        case 2:
            return (<>
                <ButtonAppBar />
                <Destination />
            </>)

        case 3:
            return (<>
                <ButtonAppBar />
                <Crew />
            </>)

        case 4:
            return (<>
                <ButtonAppBar />
                <Technology />
            </>)
    }
}