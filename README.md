# Next.js Product Management App

## Project Overview
This is a **completed project** built with Next.js 15, featuring public and protected pages with authentication via NextAuth.js. Users can view a landing page, browse product details, and, after logging in, access a protected dashboard to add new products.

## Core Features

### Landing Page (`/`)
- Sections: Navbar, Hero, Product Highlights, Footer
- Navigation to Login and Products
- Publicly accessible (no authentication required)

### Login (`/login`)
- Implemented with NextAuth.js
- Social login (Google) and/or credentials login
- Redirects to `/products` after successful login

### Product List (`/products`)
- Publicly accessible
- Displays a list of products fetched from a mock backend or file
- Each product includes: name, description, price, and a "Details" button

### Product Details (`/products/[id]`)
- Publicly accessible
- Shows full details of a single product

### Protected Page: Add Product (`/dashboard/add-product`)
- Only accessible to logged-in users
- Includes a form to add new products
- Stores product data in the backend
- Redirects unauthenticated users to `/login`

## Optional Enhancements
- Loading spinner during form submissions
- Toast messages for successful product addition
- Theme toggle (light/dark)

## Technologies Used
- **Next.js 15** (App Router)
- **NextAuth.js** for authentication
- Route Handlers (`/api`) for backend endpoints
- Mock backend or simple Express.js server for product data

