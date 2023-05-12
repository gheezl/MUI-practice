import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeoChart from "../../components/GeoChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { DownloadOutlined, Email, PointOfSale, PersonAdd, Traffic } from "@mui/icons-material";

const DashBoard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box margin="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center" >
                <Header title="Dashboard" subtitle="Welcome to your Dashboard" />
            </Box>    
            <Box>
                <Button 
                    sx={{backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight: "bold", padding: "10px 20px"}}
                >
                    <DownloadOutlined />
                    Download Reports
                </Button>
            </Box>
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="12,361"
                        subtitle="Emails Sent"
                        progress="0.75"
                        increase="+14%"
                        icon={
                            <Email sx={{color: colors.greenAccent[600], fontSize: "26px"}} />
                        }                    
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default DashBoard;