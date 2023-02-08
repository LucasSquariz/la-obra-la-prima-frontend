import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";

const Header = () => {
    return (
        <Box flexWrap={"wrap"}>
            <Container disableGutters={true} sx={{ width: "100%" }}>
                <AppBar>
                    <Toolbar>
                        <Container
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                            <Container>
                                <Typography>
                                    La Obra la Prima
                                </Typography>
                            </Container>
                            <Container sx={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                                <Container>
                                    <NextLink href={"/"}>
                                        Login
                                    </NextLink>
                                </Container>
                                <Container>
                                    <NextLink href={"/"}>
                                        Cadastro
                                    </NextLink>
                                </Container>
                            </Container>
                        </Container>
                    </Toolbar>
                </AppBar>
            </Container>
        </Box>
    )
}

export default Header;