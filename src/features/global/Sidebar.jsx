import { Box, Typography, useTheme } from '@mui/material';
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css'
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { 
    HomeOutlined, 
    PeopleOutlined,
    ContactsOutlined,
    ReceiptOutlined,
    PersonOutlined,
    CalendarTodayOutlined,
    HelpOutlined,
    BarChartOutlined,
    PieChartOutlined,
    TimelineOutlined,
    MenuOutlined,
    MapOutlined
} from '@mui/icons-material';
import { useState, Fragment } from 'react';

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard")

    return (
        <Box sxx={{
            "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important",
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important",
            },
        }} >
            <ProSidebar collapsed={isCollapsed}>
                <Menu>
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlined /> : null}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100]
                        }}
                    >
                        {!isCollapsed 
                            ? (
                                <Fragment>
                                    <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        marginLeft="15px"
                                    >
                                        <Typography>ADMINS</Typography>
                                    </Box>   
                                </Fragment>
                                
                            )
                            : null
                        }
                    </MenuItem>

                    {/* user */}
                    <Box>
                        <img 
                            alt='profile-user'
                            width="100px"
                            height="100px"
                            src={'../../assets/user.png'}
                            style={{ curser: "pointer", borderRadius: "50%"}}
                        />
                    </Box> 
                    <Box>
                        <Typography variant='h2' color={colors.grey[100]} fontWeight="bold" margin="10px 0 0 0">Jacob Rushlow</Typography>
                        <Typography variant='h5' color={colors.greenAccent[500]} >VP Fancy Admin</Typography>
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar;