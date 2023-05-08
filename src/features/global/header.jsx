import {Box, IconButton, useTheme, InputBase} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { PersonOutline, NotificationsOutlined, DarkModeOutlined, LightModeOutlined, Search, SettingsOutlined } from "@mui/icons-material";

const Header = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return(
        <Box display="flex" justifyContent="space-between" padding={2}>
            <Box display="flex" backgroundColor={colors.primary[400]} >
                <InputBase sx={{marginLeft: 2, flex: 1}} placeholder="search" />
                <IconButton type="button" sx={{padding: 1}} >
                    <Search />
                </IconButton>
            </Box>
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (<DarkModeOutlined />) : (<LightModeOutlined />)}
                </IconButton>
                <IconButton>
                    <NotificationsOutlined />
                </IconButton>
                <IconButton>
                    <SettingsOutlined />
                </IconButton>
                <IconButton>
                    <PersonOutline />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Header;