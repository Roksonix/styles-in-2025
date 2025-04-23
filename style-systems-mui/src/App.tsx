import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';
import { Box, Typography, Button } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to React + MUI
        </Typography>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default App;
