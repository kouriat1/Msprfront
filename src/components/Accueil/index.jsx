import React from "react";
import Header from "../Header";
import { Button, Stack } from '@chakra-ui/react'
const Accueil = () => {
    return (
        <div>
            <Header />
            <h1>Bienvenue dans la page d'accueil </h1>
            {/* <Stack direction='row' spacing={4} align='center'>
                <Button colorScheme='teal' variant='solid'>
                    Button
                </Button>

            </Stack> */}
        </div>
    );
};

export default Accueil;