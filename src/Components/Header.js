import React from 'react'
import { AppBar, Container, Toolbar, Typography, Select, MenuItem, ThemeProvider } from "@material-ui/core"
import { makeStyles, createTheme } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles((theme) => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
}));

const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#fff",
        },
        type: 'dark',
    },
});

const Header = () => {
    const classes = useStyles();
    const navnav = useNavigate();
    const { currency, setCurrency } = CryptoState();
    console.log(currency)

    const gotoHome = () => {
        navnav("/")
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Typography
                            onClick={gotoHome}
                            variant="h6"
                            className={classes.title}
                        >
                            Crypto Hunter
                        </Typography>
                        <Select variant="outlined"
                            style={
                                {
                                    width: 100,
                                    height: 40,
                                    marginRight: 15,
                                }
                            }
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}>
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"INR"}>INR</MenuItem>

                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header
