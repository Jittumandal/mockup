import { styled, keyframes } from '@mui/system';
<link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

// Keyframes for the scroll animation
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
`;

// Styled SVG container similar to .TextAnimation
export const SvgContainer = styled('svg')({
  opacity: 1,
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  height: 200,
});

// Styled text with the specified stroke, font and animation
export const AnimatedText = styled('text')({
  fill: 'none',
  fontSize: 100,
  fontWeight: 800,
  strokeDasharray: 2,
  textTransform: 'uppercase',
  stroke: 'rgba(145, 158, 171, 0.25)',
  strokeWidth: 'rgba(145, 158, 171, 0.03)',
  fontFamily: `Barlow, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  animation: `${scroll} 40s linear infinite`,
});

// Styled div similar to .mu-position
export const MuPosition = styled('div')({
  width: 12,
  height: 12,
  top: '50%',
  left: '50%',
  position: 'absolute',
  transform: 'translate(calc(50% + 136px), calc(50% + 332px))',
});

export default function ScrollText() {
  return (
    <SvgContainer viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" sx={{position:''}}>
      <AnimatedText x="0" y="95">
       Boost Your Workflow with Readymade Components
      </AnimatedText>
    </SvgContainer>
  );
}
