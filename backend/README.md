# DealMart Backend

A complete backend solution for the DealMart e-commerce application with user authentication and order management.

## Features

- **User Authentication**: Registration and login with JWT tokens
- **Order Management**: Create orders and view order history
- **Product Management**: Product CRUD operations
- **Secure API**: Protected routes with JWT authentication
- **MongoDB Integration**: Persistent data storage

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Create a `.env` file in the backend directory with the following variables:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/dealmart
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

### 3. MongoDB Setup

Make sure MongoDB is running on your system. If you don't have MongoDB installed:

- **Windows**: Download and install from [MongoDB website](https://www.mongodb.com/try/download/community)
- **macOS**: `brew install mongodb-community`
- **Linux**: Follow [MongoDB installation guide](https://docs.mongodb.com/manual/installation/)

Start MongoDB service:
```bash
# Windows
net start MongoDB

# macOS/Linux
brew services start mongodb-community
# or
sudo systemctl start mongod
```

### 4. Start the Server

```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login

### Orders
- `POST /api/orders` - Create new order (requires auth)
- `GET /api/orders` - Get user order history (requires auth)

### Products
- `GET /api/products` - Get all products
- `POST /api/seed-products` - Seed sample products

## Database Schema

### User
```javascript
{
  email: String (unique),
  password: String (hashed),
  name: String,
  createdAt: Date
}
```

### Product
```javascript
{
  name: String,
  price: Number,
  image: String,
  category: String,
  description: String
}
```

### Order
```javascript
{
  userId: ObjectId (ref: User),
  items: [{
    productId: ObjectId (ref: Product),
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  orderDate: Date,
  status: String (pending/confirmed/shipped/delivered)
}
```

## Testing the API

### 1. Seed Products
```bash
curl -X POST http://localhost:5000/api/seed-products
```

### 2. Register User
```bash
curl -X POST http://localhost:5000/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### 3. Login
```bash
curl -X POST http://localhost:5000/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### 4. Create Order (with token)
```bash
curl -X POST http://localhost:5000/api/orders \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "items": [{"productId": "PRODUCT_ID", "quantity": 2, "price": 499}],
    "totalAmount": 998
  }'
```

## Security Features

- **Password Hashing**: Using bcryptjs with salt rounds
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Express-validator for request validation
- **CORS**: Configured for frontend integration

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- `400` - Bad Request (validation errors)
- `401` - Unauthorized (missing/invalid token)
- `403` - Forbidden (invalid token)
- `500` - Internal Server Error

## Development

- **Hot Reload**: Nodemon for development
- **Environment Variables**: dotenv for configuration
- **CORS**: Enabled for frontend development
- **Logging**: Console logging for debugging

## Production Considerations

- Change JWT_SECRET to a strong, unique key
- Use environment-specific MongoDB URIs
- Enable HTTPS
- Add rate limiting
- Implement proper logging
- Add monitoring and health checks
- Use PM2 or similar process manager
