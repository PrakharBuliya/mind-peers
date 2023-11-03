import Box from '@mui/material/Box';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import InnerClock from '../../assets/inner-clock.svg';
import CrosssClock from '../../assets/cross-lines.svg';
import { Typography } from '@mui/material';

const ClockChart = () => {
  const data = [
    { name: 'Rest', value: 30, color: '#363636' },
    { name: 'Rest', value: 10, color: '#9f96ee' },
    { name: 'Rest', value: 30, color: '#363636' },
    { name: 'Rest', value: 30, color: '#9f96ee' },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 260,
      }}
    >
      <PieChart width={150} height={150}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          outerRadius={75}
          fill="#8884d8"
          strokeWidth={0}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>

      <Box sx={{ position: 'absolute', top: '51.5%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <img src={InnerClock} alt="" />
      </Box>

      <Box sx={{ position: 'absolute', top: '51.5%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <img src={CrosssClock} alt="" />
      </Box>

      <Typography variant="Body3" sx={{ position: 'absolute', top: 20 }}>
        Night
      </Typography>
      <Typography variant="Body3" sx={{ position: 'absolute', right: 30 }}>
        Morning
      </Typography>
      <Typography variant="Body3" sx={{ position: 'absolute', bottom: 20 }}>
        Afternoon
      </Typography>
      <Typography variant="Body3" sx={{ position: 'absolute', left: 30 }}>
        Evening
      </Typography>
    </Box>
  );
};

export default ClockChart;
