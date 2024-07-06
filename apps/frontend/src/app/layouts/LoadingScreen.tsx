import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Box, Stack, Typography, useTheme } from '@mui/material';


const LoadingScreen = () => {

  const theme = useTheme()

  const loaderStyle = {
    position: 'relative',
    width: '200px',
    height: '200px',
  };

  const circleBaseStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    border: '10px solid transparent',
    borderTopColor: '#3498db',
    borderRadius: '50%',
  };

  const circles = [
    { size: '100%', color: theme.palette.secondary.main, animation: 'spin 1.5s linear infinite' },
    { size: '80%', color: theme.palette.secondary.light, animation: 'spinReverse 2s linear infinite', top: '10%', left: '10%' },
    { size: '60%', color: theme.palette.secondary.main, animation: 'spin 1s linear infinite', top: '20%', left: '20%' },
    { size: '40%', color: theme.palette.secondary.light, animation: 'spinReverse 1.5s linear infinite', top: '30%', left: '30%' },
    { size: '20%', color: theme.palette.secondary.main, animation: 'spin 2s linear infinite', top: '40%', left: '40%' },
  ];

  const keyframes = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
        }
    `;

  return (
    <Stack style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: theme.palette.primary.main,
    }} gap={6}>
      <style>{keyframes}</style>
      <Box sx={loaderStyle}>
        {circles.map((circle, index) => (
          <Box
            key={index}
            sx={{
              ...circleBaseStyle,
              width: circle.size,
              height: circle.size,
              borderTopColor: circle.color,
              animation: circle.animation,
              top: circle.top || 0,
              left: circle.left || 0,
            }}
          ></Box>
        ))}
      </Box>
      <Typography variant={"h1"} color={theme.palette.secondary.main}>
      <TypeAnimation
        cursor={false}
        sequence={['Welcome']}
        speed={{ type: 'keyStrokeDelayInMs', value: 200 }}
        repeat={0}
      />
      </Typography>
    </Stack>
  );
};

export default LoadingScreen;
