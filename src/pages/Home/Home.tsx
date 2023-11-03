import {
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import GoBackIcon from '../../assets/go-back.svg';
import ArrowDownIcon from '../../assets/arrow-down.svg';
import StyledButton from '@/components/StyledButton';
import ClockChart from '@/components/ClockChart';
import TimeIcon from '../../assets/time.svg';

const data = [
  {
    icon: '',
    name: 'Games',
    forYou: 'Explore',
    globally: 'Memory Games',
  },
  {
    icon: '',
    name: 'Tools',
    forYou: 'Affirmation',
    globally: 'Thought Games',
  },
  {
    icon: '',
    name: 'Lessons',
    forYou: 'wqeqw',
    globally: 'qweqwe',
  },
  {
    icon: '',
    name: 'Clubs',
    forYou: 'asda',
    globally: 'wqeqw',
  },
];

const Home = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: 375, borderRadius: 5, background: '#212121' }}>
        <Box sx={{ pt: 3.5, pb: 2, px: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src={GoBackIcon} alt="" />

          <Typography variant="h1">Flow Zone</Typography>

          <Box> </Box>
        </Box>

        <Box sx={{ py: 2, px: 2.5 }}>
          <Box
            sx={{
              borderRadius: 4,
              border: '1px solid #393939',
              background:
                'radial-gradient(89.43% 91.06% at 12.64% 12.94%, rgba(44, 44, 46, 0.30) 0%, rgba(57, 57, 57, 0.30) 0.01%, rgba(140, 140, 140, 0.12) 100%)',
              boxShadow: '0px 2px 24px 0px rgba(0, 0, 0, 0.10)',
              backdropFilter: 'blur(17px)',
              display: 'flex',
              justifyContent: 'space-between',
              gap: 1,
              px: 2,
              py: 1.5,
            }}
          >
            <Typography variant="h4">About Flow Zone</Typography>

            <img src={ArrowDownIcon} alt="" />
          </Box>

          <Box mt={3} display="flex" justifyContent="space-between" alignItems="center" gap={1}>
            <Typography variant="h4">About Flow Zone</Typography>

            <StyledButton>Weekly</StyledButton>
          </Box>

          <ClockChart />

          <Box display="flex" alignItems="center" gap={2} mt={3.25}>
            <Box
              flex={1}
              sx={{
                border: '1px solid #393939',
                borderRadius: 2,
                background:
                  'radial-gradient(89.43% 91.06% at 12.64% 12.94%, rgba(44, 44, 46, 0.30) 0%, rgba(57, 57, 57, 0.30) 0.01%, rgba(140, 140, 140, 0.12) 100%)',
                p: 2,
                boxShadow: '0px 2px 24px 0px rgba(0, 0, 0, 0.10)',
                backdropFilter: 'blur(17px)',
              }}
            >
              <Box display="flex" mb={1.5}>
                <Typography variant="Body1SemiBold">My Flow Peaks</Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={0.75}>
                <img src={TimeIcon} alt="" />

                <Typography variant="Body1">02PM - 08PM</Typography>
              </Box>
            </Box>

            <Box
              flex={1}
              sx={{
                border: '1px solid #393939',
                borderRadius: 2,
                background:
                  'radial-gradient(89.43% 91.06% at 12.64% 12.94%, rgba(44, 44, 46, 0.30) 0%, rgba(57, 57, 57, 0.30) 0.01%, rgba(140, 140, 140, 0.12) 100%)',
                p: 2,
                boxShadow: '0px 2px 24px 0px rgba(0, 0, 0, 0.10)',
                backdropFilter: 'blur(17px)',
              }}
            >
              <Box display="flex" mb={1.5}>
                <Typography variant="Body1SemiBold">My Flow Peaks</Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={0.75}>
                <img src={TimeIcon} alt="" />

                <Typography variant="Body1">02PM - 08PM</Typography>
              </Box>
            </Box>
          </Box>

          <Box mb={2} mt={3}>
            <Typography variant="h4">My Thriving Toolkit</Typography>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow
                  sx={{
                    th: {
                      border: '1px solid #393939',
                      borderTop: 0,
                      '&:first-child': { borderLeft: 0 },
                      '&:last-child': { borderRight: 0 },
                    },
                  }}
                >
                  <TableCell></TableCell>
                  <TableCell align="center">
                    <Typography variant="Body3">For You</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="Body3">Globally</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ 'tr:last-child': { 'th, td': { borderBottom: 0 } } }}>
                {data?.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      'td, th': {
                        border: '1px solid #393939',
                        borderTop: 0,
                        '&:first-child': { borderLeft: 0 },
                        '&:last-child': { borderRight: 0 },
                      },
                      'td:hover': {
                        color: '#00B3CC',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                      },
                    }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      <Typography variant="Body3">{row.name}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="Body1SemiBold">{row.forYou}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="Body1SemiBold">{row.globally}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
