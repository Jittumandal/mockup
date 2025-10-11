import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SearchBar from './SearchBar';
import { FigmaIcon } from './Icons/CustomIcons';
import HeroButtons from './Icons/HeroButtons';
import { red } from '../theme/themePrimitives';
import ScrollText from './TextAnimation';

// import GridIcon from '../components/Images/grid.svg';


export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        height:'100vh',
        backgroundRepeat: "no-repeat",
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          backgroundImage: 'url(https://files.artadjust.com/assets/background-1.svg)',
          ...theme.applyStyles("dark", {
          backgroundImage:'url(https://files.artadjust.com/assets/background-1.svg)',
        }),
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize:1024,
          opacity: 0.3,
          zIndex:1,          
        },
        
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        }),
      })}  
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:'center',
          position:"relative",
          height:'100%',
          zIndex:2,
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: "center", width: { xs: "100%", sm: "80%" } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column' },
              alignItems: 'center',
              fontSize: '4.5rem',
              sm:'3.5rem',
            }}
          >            
            Make workflow simple with
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: "inherit",
                color: "primary.main",
                ...theme.applyStyles("dark", {
                  color: "primary.light",
                }),
              })}
            >
              pre-built components
            </Typography>
          </Typography>
          <Typography
          variant="h5"          
            sx={{
              textAlign: "center",
              color: "text.secondary",
              lineHeight: 1.5,
              width: { sm: "100%", md: "80%" },
            }}
          >
           Speed up your design with ready-to-use components for Figma, Adobe XD, and Illustrator—just copy and paste, it’s that simple!
          </Typography>
          <HeroButtons/> 
        </Stack>
       
      </Container>
       <ScrollText/>
    </Box>
  );
}
