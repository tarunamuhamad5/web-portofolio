"use client";
import { Typography, Box, styled, Container } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function Experience() {
    const ContainerContent = styled(Container)(({ theme }) => ({
        textAlign: "center",
        [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    }));

    const Position = styled(Typography)(({ theme }) => ({
        fontSize: "x-large",
        color: "black",
        fontWeight: "bold",
        [theme.breakpoints.down("md")]: {
            fontSize: "large",
        },
    }));

    const CompanyName = styled(Typography)(({ theme }) => ({
        fontSize: "large",
        color: "black",
        fontWeight: "bold",

        [theme.breakpoints.down("md")]: {
            fontSize: "medium",
        },
    }));
    const CompanyYear = styled(Typography)(({ theme }) => ({
        fontSize: "large",
        color: "gray",
        fontWeight: "light",

        [theme.breakpoints.down("md")]: {
            fontSize: "medium",
        },
    }));
    const JobDescription = styled(Typography)(({ theme }) => ({
        fontSize: "medium",
        color: "textSecondary",
        fontWeight: "light",

        [theme.breakpoints.down("md")]: {
            fontSize: "small",
        },
    }));

    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "80px",
        color: "black",
        fontWeight: "bold",

        [theme.breakpoints.down("lg")]: {
            fontSize: "80px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "60px",
        },
    }));

    return (
        <Box
            minHeight={"90vh"}
            sx={{
                backgroundColor: "#F9F9F9",
                alignContent: "center",
            }}
        >
            <ContainerContent>
                <Title variant="h2">My Journey</Title>
                <Timeline
                    position="right"
                    sx={{
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }}
                >
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Position variant="h1">
                                Senior Associate Data Scientist
                            </Position>
                            <CompanyName variant="h2">
                                PT Mitra Solusi Telematika (TMT Group)
                            </CompanyName>
                            <CompanyYear variant="h4">
                                2024 April - Now
                            </CompanyYear>
                            <JobDescription variant="body2"></JobDescription>
                            <br />
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Position variant="h1">
                                Associates Data Scientist
                            </Position>
                            <CompanyName variant="h2">
                                PT Cakra Radha Mustika (Kalbe Group)
                            </CompanyName>
                            <CompanyYear variant="h4">
                                2024 Jan - 2024 April
                            </CompanyYear>
                            <JobDescription variant="body2">
                                <ul>
                                    <li>
                                        Developed and implemented a Fraud
                                        Detection Algorithm using XGBoost as the
                                        base model, achieving an accuracy within
                                        the range of ±85% for precise
                                        identification of fraudulent activities.
                                    </li>
                                    <li>
                                        Initiated a thorough analysis of channel
                                        campaigns, enhancing engagement and cost
                                        efficiency, identify 20% potential
                                        wasted campaign operational cost.
                                    </li>
                                    <li>
                                        Designed and deployed an API for
                                        upstream data from on-premises databases
                                        to Moengage, implemented for marketing
                                        automation application.
                                    </li>
                                </ul>
                            </JobDescription>
                            <br />
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Position variant="h1">
                                Junior Data Scientist
                            </Position>
                            <CompanyName variant="h2">
                                Moladin Finance
                            </CompanyName>
                            <CompanyYear variant="h4">
                                2023 Nov - 2024 Jan
                            </CompanyYear>
                            <JobDescription variant="body2">
                                <ul>
                                    <li>
                                        Analyzed the Decision Tree model's
                                        current performance and OJK's SLIK data
                                        to identify weaknesses. Proposed
                                        recommendations led to a significant
                                        improvement, reducing loss from 7.58% to
                                        4.45%.
                                    </li>
                                    <li>
                                        Automating the necessary data updates
                                        required by other divisions, thereby
                                        eliminating the manual tasks that
                                        currently take a total of 3 hours each
                                        day. Including Logging activities and
                                        send failed notification.
                                    </li>
                                </ul>
                            </JobDescription>
                            <br />
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Position variant="h1">
                                Data Scientist Intern
                            </Position>
                            <CompanyName variant="h2">
                                PT Paragon Technology and Innovation
                            </CompanyName>
                            <CompanyYear variant="h4">
                                2022 Jun - 2022 Dec
                            </CompanyYear>
                            <JobDescription variant="body2">
                                <ul>
                                    <li>
                                        Extract, Load, and Transform data from
                                        database using SQL
                                    </li>
                                    <li>
                                        Ensuring data integrity to faithfully
                                        reflect the actual on-field conditions.
                                    </li>
                                    <li>
                                        Deep analyst data using python to gain
                                        business insight and communicate to the
                                        team.
                                    </li>
                                    <li>
                                        Extrapolate sell-out data for each
                                        region and product using ARIMA
                                        Algorithm.
                                    </li>
                                </ul>
                            </JobDescription>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </ContainerContent>
        </Box>
    );
}
