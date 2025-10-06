import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

export default function Pricing() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 400,
          mx: "auto",
          mt: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5" align="center">
        Pricing
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          multiline
          rows={4}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </Box>
    </Container>
  );
}
