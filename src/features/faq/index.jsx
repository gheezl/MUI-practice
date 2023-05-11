import {Box, Typography, useTheme} from "@mui/material";
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material";

import Header from "../../components/Header";
import { ExpandMore } from "@mui/icons-material";
import { tokens } from "../../theme";
import { useState } from "react";

const Faq = () => {
    const [questions, setQuestions] = useState([
        {title: "An Important Question", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},
        {title: "Another Important Question", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},
        {title: "A Third Important Question", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},
        {title: "The Final Important Question", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."},
    ])
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box margin="20px" >
            <Header title="FAQ" subtitle="Frequently asked questions" />
            {
                questions.map(question => (
                    <Accordion defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMore />} >
                            <Typography color={colors.greenAccent[500]} variant="h5">{question.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {question.details}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
            
        </Box>
    )
}

export default Faq;