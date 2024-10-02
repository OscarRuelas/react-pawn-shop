// DarkModeToggle.jsx
import React, { useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline, Switch, Box } from '@mui/material';

const DarkModeToggle = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Función para cambiar entre modo oscuro y claro
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  // Crear el tema
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#121212' : '#f5f5f5', // Fondo de la página
        paper: darkMode ? '#1e1e1e' : '#ffffff', // Fondo de los componentes como Cards
      },
    },
    components: {
        MuiCard: {
          styleOverrides: {
            root: {
              boxShadow: 'none', // Eliminar sombras en modo oscuro
            },
          },
        },
      },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: 2 }}>
        {/* Switch para alternar entre temas */}
        <Switch checked={darkMode} onChange={handleThemeChange} />
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default DarkModeToggle;
