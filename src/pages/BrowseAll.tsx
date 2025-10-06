
import { Box, Grid, Paper, Typography, Checkbox, FormControlLabel, Pagination, Card, CardContent, TextField, AppBar, Toolbar } from '@mui/material';
import { useState } from 'react';

const filters = [
  { label: 'Category A', value: 'categoryA' },
  { label: 'Category B', value: 'categoryB' },
  { label: 'Category C', value: 'categoryC' },
];

const allProducts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  category: filters[i % filters.length].value,
}));

const PRODUCTS_PER_PAGE = 8;

function ProductPage() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  // Filter products by search term and selected filters
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilters.length
      ? selectedFilters.includes(product.category)
      : true;
    return matchesSearch && matchesFilter;
  });

  // Paginate filtered products
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE,
  );

  const pageCount = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const handleFilterChange = (filterValue) => {
    setSelectedFilters((prev) =>
      prev.includes(filterValue)
        ? prev.filter((f) => f !== filterValue)
        : [...prev, filterValue],
    );
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ width: '100vw' }}>
      {/* Top Search Bar */}
      <AppBar position="static" color="default" sx={{ mb: 2 }}>
        <Toolbar>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Toolbar>
      </AppBar>

      <Grid container spacing={2}>
        {/* Left Filter Panel */}
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Filters
            </Typography>
            {filters.map((filter) => (
              <FormControlLabel
                key={filter.value}
                control={
                  <Checkbox
                    checked={selectedFilters.includes(filter.value)}
                    onChange={() => handleFilterChange(filter.value)}
                    color="primary"
                  />
                }
                label={filter.label}
              />
            ))}
          </Paper>
        </Grid>

        {/* Right Product Display */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            {paginatedProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle1">{product.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Category: {product.category}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Pagination */}
          {pageCount > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Pagination
                count={pageCount}
                page={page}
                onChange={handlePageChange}
                color="primary"
              />
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductPage;


// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import Container from "@mui/material/Container";

// export default function BrowseAll() {
//   const [expanded, setExpanded] = React.useState(false);


//   return (
//     <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>


//       <Card sx={{ maxWidth: 345 }}>
//         <CardHeader
//           avatar={
//             <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//               R
//             </Avatar>
//           }
//           action={
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title="Shrimp and Chorizo Paella"
//           subheader="September 14, 2016"
//         />
//         <CardMedia
//           component="img"
//           height="194"
//           image="/static/images/cards/paella.jpg"
//           alt="Paella dish"
//         />
//         <CardContent>
//           <Typography variant="body2" sx={{ color: "text.secondary" }}>
//             This impressive paella is a perfect party dish and a fun meal to
//             cook together with your guests. Add 1 cup of frozen peas along with
//             the mussels, if you like.
//           </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//           <IconButton aria-label="add to favorites">
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton aria-label="share">
//             <ShareIcon />
//           </IconButton>
//         </CardActions>
//       </Card>


      
//     </Container>
//   );
// }
