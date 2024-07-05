import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Square } from '@mui/icons-material';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import { useAdvancedToggle } from '../../../hooks/useAdvancedToggle';
import Button from './Button';

type ListItemProps = {
  value: string;
  href: string;
};

const NavButton = ({ value, href }: ListItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isSelected = href === location.pathname;

  const handleOnClick = useCallback(() => {
    if (!href) return;
    navigate(href);
  }, [href, navigate]);

  return (
    <Button value={value} onClick={handleOnClick} isSelected={isSelected}/>
  );
};

export default NavButton;
