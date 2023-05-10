import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({title, subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
            <Box marginBottom="30px">
                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" marginBottom="5px" >{title}</Typography>
                <Typography variant="h5" color={colors.greenAccent[400]} >{subtitle}</Typography>
            </Box>
        )
}

export default Header;