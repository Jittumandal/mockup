import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AdobeIllustratorIcon, AdobeXdIcon, FigmaIcon } from './CustomIcons';
import { Link } from 'react-router-dom';

export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 1, mt:3 } }}>      
      <div>              
       <Link to="/BrowseAll"> <Button variant="contained" size="large" sx={{px:1, py:1}} >
          <FigmaIcon/>
        </Button></Link>
         <Link to="/BrowseAll"> <Button variant="contained" size="large" sx={{px:1, py:1}} >
          <AdobeXdIcon/>
        </Button></Link>
        <Link to="/BrowseAll">  <Button variant="contained" size="large" sx={{px:1, py:1}} >
          <AdobeIllustratorIcon/>
        </Button></Link>
         
      </div>
    </Box>
  );
}