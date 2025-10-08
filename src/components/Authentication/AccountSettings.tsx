import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Switch,
  FormControlLabel,
  Divider,
  InputAdornment,
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const UserAccountSettings = () => {
  // States for profile details
  const [avatar, setAvatar] = useState(null);
  const [password, setPassword] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(true);

  // Dummy data for other sections
  const downloadedItems = ['File 1.pdf', 'File 2.docx', 'File 3.zip'];
  const favoriteItems = ['Product A', 'Product B', 'Product C'];
  const subscriptionDetails = {
    plan: 'Premium',
    renewalDate: '2025-12-31',
    status: 'Active',
  };

  // Handle avatar upload
  const handleAvatarChange = (event: { target: { files: (Blob | MediaSource)[]; }; }) => {
    if (event.target.files && event.target.files[0]) {
      setAvatar(URL.createObjectURL(event.target.files[0]));
    }
  };

  // Handle password change input
  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  // Handle newsletter toggle
  const handleNewsletterToggle = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setNewsletterSubscribed(event.target.checked);
  };

  // Handle delete account
  const handleDeleteAccount = () => {
    if (
      window.confirm(
        'Are you sure you want to delete your account? This action cannot be undone.'
      )
    ) {
      // Delete account logic here
      alert('Account deleted');
    }
  };

  // Handle profile form submit (e.g., avatar & password update)
  const handleProfileUpdate = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Perform update logic here
    alert('Profile updated successfully');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" gutterBottom>
        User Account Settings
      </Typography>

      {/* User Profile Update */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Update Profile Details
        </Typography>
        <Box
          component="form"
          onSubmit={handleProfileUpdate}
          noValidate
          autoComplete="off"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              src={avatar}
              alt="User Avatar"
              sx={{ width: 80, height: 80 }}
            />
            <label htmlFor="avatar-upload">
              <input
                accept="image/*"
                id="avatar-upload"
                type="file"
                style={{ display: 'none' }}
                onChange={handleAvatarChange}
              />
              <IconButton color="primary" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
          </Box>

          <TextField
            label="New Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter new password"
          />

          <Button type="submit" variant="contained">
            Update Profile
          </Button>
        </Box>
      </Paper>

      {/* Downloaded Items */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Downloaded Items
        </Typography>
        <List dense>
          {downloadedItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Favorite Items */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Favorite Items
        </Typography>
        <List dense>
          {favoriteItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Subscription Details */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Subscription Details
        </Typography>
        <Typography>Plan: {subscriptionDetails.plan}</Typography>
        <Typography>Renewal Date: {subscriptionDetails.renewalDate}</Typography>
        <Typography>Status: {subscriptionDetails.status}</Typography>
      </Paper>

      {/* Newsletter Subscription Toggle */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <FormControlLabel
          control={
            <Switch
              checked={newsletterSubscribed}
              onChange={handleNewsletterToggle}
              color="primary"
            />
          }
          label="Subscribe to Newsletter"
        />
      </Paper>

      {/* Delete Account */}
      <Paper sx={{ p: 3, mb: 4, backgroundColor: '#ffe6e6' }}>
        <Typography variant="h6" gutterBottom color="error">
          Delete Account
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Deleting your account is permanent and cannot be undone.
        </Typography>
        <Button variant="contained" color="error" onClick={handleDeleteAccount}>
          Delete My Account
        </Button>
      </Paper>
    </Container>
  );
};

export default UserAccountSettings;
