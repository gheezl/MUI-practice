import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";
import { tokens } from "../../theme";

const Geo = () => {
    const themes = useTheme();
    const colors = tokens(themes.palette.mode)

    return (
        <Box margin="20px">
            <Header title="GEO CHART" subtitle="Simple geo chart" />
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
                <GeoChart />
            </Box>
        </Box>
    )
}

export default Geo;