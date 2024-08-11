import React, { PropsWithChildren } from 'react';
import { Box, useTheme } from '@mui/material';

type ContentBoxProps = {
  inverse?: boolean
  padding?: string;
}

const ContentBox = ({padding = "1rem",inverse, children}:PropsWithChildren<ContentBoxProps>) => {
  const theme = useTheme();

  const bgColor = inverse ? theme.palette.primary.main: theme.palette.secondary.light
  const borderColor = inverse ? theme.palette.secondary.light : theme.palette.primary.main

  const border = `3px solid ${borderColor}`;


  //FYI: to future me, the rows require the padding to be 10px so that they render, otherwise it will just messe it up
  const cellStyle = {
    padding: '10px',
    border,
    maxWidth: "2px"
  };

  const centerCell = {
    ...cellStyle,
    width: "100%",
    padding
  }

  return (
    <Box boxShadow={"5px 5px 10px black"}>
    <table style={{ borderCollapse: 'collapse', backgroundColor: bgColor, width: "100%" }}>
      <tbody>
      <tr>
        <td style={cellStyle}></td>
        <td style={cellStyle}></td>
        <td style={cellStyle}></td>
      </tr>
      <tr>
        <td style={cellStyle}></td>
        <td style={centerCell}>{children}</td>
        <td style={cellStyle}></td>
      </tr>
      <tr>
        <td style={cellStyle}></td>
        <td style={cellStyle}></td>
        <td style={cellStyle}></td>
      </tr>
      </tbody>
    </table>
    </Box>
  );
};

export default ContentBox;
