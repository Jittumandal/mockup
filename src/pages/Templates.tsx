import {
  Box,
  Grid,
  Paper,
  Typography,
  Checkbox,
  FormControlLabel,
  Pagination,
  Card,
  CardContent,
  TextField,
  Toolbar,
  Drawer,
  InputAdornment,
  CardMedia,
} from '@mui/material';
import { useState } from 'react';
import Masonry from '@mui/lab/Masonry';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const filters = [
  { label: 'Web Banner', value:'webbanner'},
  { label: 'Header', value:'header' },
  { label: 'Blogs', value:'blogs' },
];

const productImages = [
  'https://cdn.pixabay.com/photo/2025/09/12/18/36/pumpkin-9830952_1280.jpg',
  'https://cdn.pixabay.com/photo/2025/09/07/05/48/autumn-leaf-9819979_1280.jpg',
  'https://cdn.pixabay.com/photo/2025/09/04/14/58/horse-9815867_1280.jpg',
  'https://cdn.pixabay.com/photo/2025/09/08/14/44/corn-9822476_1280.jpg',
  'https://cdn.pixabay.com/photo/2025/06/14/11/15/dahlia-9659400_1280.jpg',
  'https://cdn.pixabay.com/photo/2025/09/10/11/25/duck-9826181_1280.jpg',
  'https://cdn.pixabay.com/photo/2023/11/21/19/47/fall-8404115_1280.jpg',
  'https://cdn.pixabay.com/photo/2025/08/09/18/23/knight-9765068_1280.jpg',
  'https://cdn.pixabay.com/photo/2025/09/04/07/47/portrait-9814955_1280.jpg',
  'https://cdn.pixabay.com/photo/2025/02/05/08/07/man-9383629_1280.jpg',
];

const productNames = [
  'Gadget',
  'Tool',
  'Accessory',
  'Device',
  'Apparel',
  'Decor',
  'Toy',
  'Book',
  'Furniture',
  'Kitchenware',
];

const allProducts = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `${productNames[i % productNames.length]} ${i + 1}`,
  image: productImages[i % productImages.length],
  category: filters[i % filters.length].value,
}));

const PRODUCTS_PER_PAGE = 20;
const drawerWidth = 240;

function ProductPage() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilters.length
      ? selectedFilters.includes(product.category)
      : true;
    return matchesSearch && matchesFilter;
  });

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE,
  );

  const pageCount = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const handleFilterChange = (filterValue) => {
    setSelectedFilters((prev) =>
      prev.includes(filterValue) ? prev.filter((f) => f !== filterValue) : [...prev, filterValue],
    );
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'start', height: '100vh' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', pt: 2, mt: 7 },
        }}
      >
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
      </Drawer>

      {/* Right Product Display */}
      <Box sx={{ flexGrow: 1, alignItems: 'start', p: 3 }}>
        {/* Top Search Bar */}
        <Toolbar sx={{ mt: 5, mb: 2, display: 'flex', flexDirection: 'row' }}>
          <Box display="flex" flexGrow={1} flexDirection="column">
            <Typography variant="h6" component="div">
              Browse All
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Short description goes here
            </Typography>
          </Box>
          <Box sx={{ width: '250px' }}>
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

        
            <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, }} spacing={2}>
              {paginatedProducts.map((product) => (
                <Card
                  key={product.id}
                  variant="outlined"
                  sx={{ maxWidth: 520, borderRadius: 3, boxShadow: 3 }}
                >
                  <CardMedia component="img" image={product.image} alt={product.name} />
                  <CardContent>
                    <Typography variant="subtitle1">{product.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Category: {product.category}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Masonry>
          

        {/* Pagination */}
        {pageCount > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination count={pageCount} page={page} onChange={handlePageChange} color="primary" />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default ProductPage;
