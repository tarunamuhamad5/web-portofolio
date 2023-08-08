import {Card, CardContent, styled, Typography,} from "@mui/material";
import React from "react";

const CardCoWorker = ({Word}) => {
    const CardWords = styled(Card)(({theme}) => ({
        height: "auto",
        width: "68%",
        margin: "2%",
        [theme.breakpoints.down("md")]: {
            width: "95%",
        },
    }));

    const NameCoworker = styled(Typography)(({theme}) => ({
        fontSize: "35px",
        fontWeight: "bold",
    }));

    const WordCoworker = styled(Typography)(({theme}) => ({
        fontSize: "18px",

        color: "#7E7676",
    }));
    return (
        <div align="center">
            <CardWords align="center">
                <CardContent>
                    <NameCoworker variant={"h2"} align="center">
                        {Word.name}
                    </NameCoworker>
                    <WordCoworker variant={"body2"} mt={"1rem"}>
                        {Word.message}
                    </WordCoworker>
                </CardContent>
            </CardWords>
        </div>
    );
};

export default CardCoWorker;
