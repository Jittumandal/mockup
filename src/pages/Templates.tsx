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
  Button,
} from "@mui/material";
import { useState } from "react";
import Masonry from "@mui/lab/Masonry";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { CardActions, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Anchor } from "@mui/icons-material";

const filters = [
  { label: "Figma", value: "Figma" },
  { label: "Adobe XD", value: "AdobeXD" },
  { label: "Adobe Illustrator", value: "AdobeIllustrator" },
];



const productImages = [
  "https://cdn.pixabay.com/photo/2025/09/12/18/36/pumpkin-9830952_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/09/07/05/48/autumn-leaf-9819979_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/09/04/14/58/horse-9815867_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/09/08/14/44/corn-9822476_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/06/14/11/15/dahlia-9659400_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/09/10/11/25/duck-9826181_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/11/21/19/47/fall-8404115_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/08/09/18/23/knight-9765068_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/09/04/07/47/portrait-9814955_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/02/05/08/07/man-9383629_1280.jpg",
];

const productNames = [
  "Gadget",
  "Tool",
  "Accessory",
  "Device",
  "Apparel",
  "Decor",
  "Toy",
  "Book",
  "Furniture",
  "Kitchenware",
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
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilters.length
      ? selectedFilters.includes(product.category)
      : true;
    return matchesSearch && matchesFilter;
  });

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  const pageCount = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const handleFilterChange = (filterValue) => {
    setSelectedFilters((prev) =>
      prev.includes(filterValue)
        ? prev.filter((f) => f !== filterValue)
        : [...prev, filterValue]
    );
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <Box sx={{ display: "flex", alignItems: "start", height: "100vh" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            pt: 2,
            mt: 7,
          },
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
      <Box sx={{ flexGrow: 1, alignItems: "start", p: 3 }}>
        {/* Top Search Bar */}
        <Toolbar sx={{ mt: 5, mb: 2, display: "flex", flexDirection: "row" }}>
          <Box display="flex" flexGrow={1} flexDirection="column">
            <Typography variant="h6" component="div">
              Browse All
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Short description goes here
            </Typography>
          </Box>
          <Box sx={{ width: "250px" }}>
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

        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={3}>
          {paginatedProducts.map((product) => (
            <Card
              key={product.id}
              variant="outlined"
              sx={{
                maxWidth: 520,
                borderRadius: 2,
                boxShadow: 2,
                position: "relative",
              }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{ borderRadius: 1 }}
              />

              <Button
                variant="contained"
                color="success"
                sx={{
                  py: "6",
                  position: "absolute",
                  top: 24,
                  right: 24,
                  paddingLeft: 1,
                  paddingRight: 1,
                  minWidth: "auto",
                }}
              >
                <WorkspacePremiumIcon sx={{ color: "white" }} />
              </Button>

              {hoveredId === product.id && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0,0,0,0.6)",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 2,
                    p: 2,
                  }}
                >
                  <CardActions>
                    <Button
                      sx={{ minWidth: "auto", paddingRight: 0.5 }}
                      role={undefined}
                      variant="contained"
                      startIcon={<FavoriteIcon />}
                    />

                    <Button
                      sx={{ minWidth: "auto", paddingRight: 0.5 }}
                      role={undefined}
                      variant="contained"
                      startIcon={<ShareIcon />}
                    />
                    
                 
                    <Button href="https://www.figma.com/design/M3QNWSUoPtBTgqx44sUsaX/Untitled?node-id=1-17&m=dev&t=Ztr4iLWtTgj8zUOx-1"  target="_blank" rel="noopener noreferrer"                    
                      variant="contained"                    
                      startIcon={<ContentCopyIcon />}
                    >
                      {" "}
                      COPY
                    </Button>

                   
               
                  </CardActions>
                </Box>
              )}
              <CardContent sx={{ mt: 2 }}>
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
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={pageCount}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default ProductPage;
