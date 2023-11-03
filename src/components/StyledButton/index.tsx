import { Button } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const StyledButton = ({ children }: Props) => {
  return (
    <Button
      sx={{
        px: 1,
        py: 1.2,
        background: '#363636',
        border: '1px solid #393939',
        boxShadow: '0px 2px 24px 0px rgba(0, 0, 0, 0.10)',
        backdropFilter: 'blur(17px)',
        borderRadius: 2,
        color: '#E1E1E1',
        fontWeight: 500,
        fontSize: '12px',

        '&:hover': {
          background: '#363636',
          border: '1px solid #393939',
          boxShadow: '0px 2px 24px 0px rgba(0, 0, 0, 0.10)',
          backdropFilter: 'blur(17px)',
        },
      }}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
