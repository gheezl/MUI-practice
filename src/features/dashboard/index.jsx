import { Box } from "@mui/material";
import Header from "../../components/Header";

const DashBoard = () => {
    return(
        <Box margin="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center" >
                <Header title="Dashboard" subtitle="Welcome to your Dashboard" />
            </Box>    
        </Box>
    )
}

export default DashBoard;