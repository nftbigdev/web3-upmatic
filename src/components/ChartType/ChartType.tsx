import { Box } from '@chakra-ui/react';
import React from 'react';

// const useStyles = makeStyles(({ palette }) => ({
//   chartType: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 20,
//     padding: '0 8px',
//     borderRadius: 10,
//     cursor: 'pointer',
//     '& span': {
//       color: palette.text.primary,
//     },
//   },
// }));

interface ChartTypeProps {
  typeTexts: string[];
  chartTypes: number[];
  chartType: number;
  setChartType: (chartType: number) => void;
}

const ChartType: React.FC<ChartTypeProps> = ({
  typeTexts,
  chartTypes,
  chartType,
  setChartType,
}) => {
  // const classes = useStyles();
  // const { palette } = useTheme();

  return (
    <Box display='flex' alignItems='center'>
      {chartTypes.map((value, index) => (
        <Box
          key={index}
          style={
            {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 20,
              padding: '0 8px',
              borderRadius: 10,
              cursor: 'pointer',
              backgroundColor: 'transparent'
            }
          }
          onClick={() => setChartType(value)}
        >
          <p >{typeTexts[index]}</p>
        </Box>
      ))}
    </Box>
  );
};

export default ChartType;
