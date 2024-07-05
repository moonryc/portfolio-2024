import React, { useCallback, useMemo } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useAdvancedToggle } from '../../../hooks/useAdvancedToggle';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import { Square } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

type ButtonProps = {
  value: string;
  onClick: ()=>void;
  isSelected?: boolean
  customIcon?: JSX.Element
}

const Button = ({value,isSelected = false, onClick, customIcon}:ButtonProps) => {
  const theme = useTheme();

  const [isHovered, { toggleOn: toggleHoverOn, toggleOff: toggleHoverOff }] =
    useAdvancedToggle(false);

  const icon = useMemo(() => {

    if(customIcon){
      return customIcon;
    }

    const iconColor = isHovered || isSelected ? 'primary' : 'secondary';
    return isSelected ? <GridViewSharpIcon color={iconColor} /> : <Square color={iconColor} />;
  }, [isHovered, isSelected]);

  const divider = useMemo(() => {
    const dividerColor =
      isHovered || isSelected ? theme.palette.primary.main : theme.palette.secondary.light;
    return <Box height={'3px'} width={'100%'} bgcolor={dividerColor} />;
  }, [isHovered, isSelected, theme.palette.primary.main, theme.palette.secondary.light]);

  return (
    <Box
      onClick={onClick}
      onMouseEnter={toggleHoverOn}
      onMouseLeave={toggleHoverOff}
      sx={{
        cursor: "pointer",
        background: theme.palette.secondary.light,
        py: '5px'
      }}>
      {divider}
      <Box display={'flex'} alignItems={'center'} pl={'1rem'}>
        {icon}
        <Typography pl={'1rem'} variant={'h6'} color={theme.palette.primary.main}>
          {value}
        </Typography>
      </Box>
      {divider}
    </Box>
  );
};

export default Button;
