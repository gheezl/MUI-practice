import { Box, Typography, List, ListItem, ListItemText, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Header from "../../components/Header";
import { useState } from "react";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = () => {
        //nothing LOL
    }

    const handleEventClick = () => {
        //nothing again LOLOLOLOL
    }

    return (
        <Box margin="20px" >
            <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
            <Box display="flex" justifyContent="space-between" >
                <Box flex="1 1 20%" backgoundColor={colors.primary[400]} padding="15px" borderRadius="4px" >
                    <Typography variant="h5" >Events</Typography>
                    <List>
                        {
                            currentEvents.map(event => (
                                <ListItem
                                    key={event.id}
                                    sx={{backgroundColor: colors.greenAccent[500], margin: "10px 0"}}
                                >
                                    <ListItemText
                                        primary={event.title}
                                        secondary={
                                            <Typography>
                                                {formatDate(event.start, {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric"
                                                })}
                                            </Typography>
                                        }
                                    >
                                        
                                    </ListItemText>
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar 
                        height="75vh"
                        plugins={{
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                        }}
                        headerToolbar={{
                            left: "prev, next today",
                            center: "title",
                            right: "dayGridMonth, timeGridWeek, timeGridDay, listmonth"
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={events => setCurrentEvents(events)}
                        initialEvents={[
                            {id: "1234", title: "All-day event", date: "2022-09-14"},
                            {id: "4321", title: "Timed event", date: "2022-09-14"}
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Calendar;