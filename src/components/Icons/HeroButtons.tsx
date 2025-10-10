import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AdobeIllustratorIcon, AdobeXdIcon, FigmaIcon } from './CustomIcons';

export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 1, mt:3 } }}>      
      <div>              
        <Button variant="contained" size="large" sx={{px:1, py:1}} >
          <FigmaIcon/>
        </Button>
        <Button variant="contained" size="large" sx={{px:1, py:1}} >
          <AdobeXdIcon/>
        </Button>
        <Button variant="contained" size="large" sx={{px:1, py:1}} >
          <AdobeIllustratorIcon/>
        </Button>
         
      </div>
    </Box>
  );
}