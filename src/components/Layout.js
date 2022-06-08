import { ThemeProvider } from "@mui/material";
import theme from "../styles/theme";
import { AppBar } from "@mui/material";
import styled from "@emotion/styled";

function Layout({ children }) {
  return (
    <>
      <AppBarStyled>NAVBAR</AppBarStyled>
      <main>{children}</main>
    </>
  );
}

export default Layout;

const AppBarStyled = styled(AppBar)`
  padding: 20px;
`;
