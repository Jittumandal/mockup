
import {Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

// Sample data array
const cards = [
  {
    title: "Mountain View",
    description: "Beautiful sunrise over the mountains 🌄",
    image: "https://source.unsplash.com/random/400x200?mountain",
  },
  {
    title: "Beach Bliss",
    description: "Relaxing by the ocean 🌊",
    image: "https://source.unsplash.com/random/400x200?beach",
  },
  {
    title: "City Nights",
    description: "Vibrant lights and skyscrapers 🌆",
    image: "https://source.unsplash.com/random/400x200?city",
  },
];

export default function CardList() {
  return (
    <Grid container spacing={3}>
      {cards.map((card, index) => (
        
          <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="180"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        
      ))}
    </Grid>
  );
}
