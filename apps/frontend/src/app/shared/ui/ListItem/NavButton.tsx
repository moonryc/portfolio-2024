import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Square } from '@mui/icons-material';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import { useAdvancedToggle } from '../../../hooks/useAdvancedToggle';

type ListItemProps = {
  value: string;
  href: string;
};

const NavButton = ({ value, href }: ListItemProps) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();

  const isSelected = href === location.pathname;

  const [isHovered, { toggleOn: toggleHoverOn, toggleOff: toggleHoverOff }] =
    useAdvancedToggle(false);

  const icon = useMemo(() => {
    const iconColor = isHovered || isSelected ? 'primary' : 'secondary';
    return isSelected ? <GridViewSharpIcon color={iconColor} /> : <Square color={iconColor} />;
  }, [isHovered, isSelected]);

  const divider = useMemo(() => {
    const dividerColor =
      isHovered || isSelected ? theme.palette.primary.main : theme.palette.secondary.light;
    return <Box height={'3px'} width={'100%'} bgcolor={dividerColor} />;
  }, [isHovered, isSelected]);

  const handleOnClick = useCallback(() => {
    if (!href) return;
    navigate(href);
  }, [href, navigate]);

  return (
    <Box
      onClick={handleOnClick}
      onMouseEnter={toggleHoverOn}
      onMouseLeave={toggleHoverOff}
      sx={{
        background: theme.palette.secondary.light,
        py: '5px'
      }}>
      {divider}
      <Box display={'flex'} alignItems={'center'} pl={'1rem'}>
        {icon}
        <Typography pl={'1rem'} variant={'h6'}>
          {value}
        </Typography>
      </Box>
      {divider}
    </Box>
  );
};

export default NavButton;
