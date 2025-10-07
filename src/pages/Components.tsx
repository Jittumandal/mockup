
import { Diversity1, Search, Start } from '@mui/icons-material';
import { Box, Grid, Paper, Typography, Checkbox, FormControlLabel, Pagination, Card, CardContent, TextField, Toolbar, Drawer, Divider, IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

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

const PRODUCTS_PER_PAGE = 10;
const drawerWidth = 240;

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

    <Box sx={{ display: 'flex', alignItems: "Start", height: '100vh', }}>


      <Grid container spacing={2}>
        {/* Left Filter Panel */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', pt: 2, mt: 7 },

          }}
        >
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
        </Drawer>

        {/* Right Product Display */}
        <Box sx={{ flexGrow: 1, alignItems: "Start", ml: `${drawerWidth}px`, p: 3 }}>
          {/* Top Search Bar */}

           <Toolbar  sx={{ mt: 5, mb: 2, display:"flex", flexDirection:"row" }}>
      <Box display="flex" flexGrow={1} flexDirection="column">
        <Typography variant="h6" component="div">
         Components
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Short description goes here
        </Typography>
      </Box>
      <Box>
        <TextField
              fullWidth
              variant="outlined"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
        endAdornment: (
          <InputAdornment position="end">           
              <SearchOutlinedIcon />
          </InputAdornment>
        ),
      }}
              
            />

        
      </Box>
    </Toolbar>

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
        </Box>

      </Grid>
    </Box>
  );
}

export default ProductPage;


