# API Documentation

### Base Url :-

-   **Local Server**: `http://localhost:3000/api`
-   **Live Server**: `https://lws-x-airbnb.vercel.app/api`

## 🏨 Hotel

A comprehensive API for managing hotels, allowing users to retrieve hotel details, update records, and delete entries with robust error handling and data validation.

---

## ✨ Features

-   **Fetch Hotel Details**: Retrieve detailed information about a specific hotel, including its host, reviews, and bookings.
-   **Update Hotel Information**: Modify hotel details with strong validation using `Zod`.
-   **Delete Hotel**: Remove hotel records with a single API call.
-   **MongoDB Relations**: Leverages `Mongoose` for database relationships and efficient queries.
-   **Schema Validation**: Uses `Zod` for validating request data.
-   **Paginated Responses**: Supports pagination for large datasets (in other related endpoints).

---

## 🛠️ Tech Stack

-   **Framework**: Next.js
-   **Database**: MongoDB
-   **ORM**: Mongoose
-   **Validation**: Zod
-   **API Framework**: Next.js API routes with `NextResponse`

---

## 🔌 Endpoints

### GET ALL HOTEL

### **GET /api/hotels**

#### 🔑 Query Parameters

-   `query` (optional) - The search term for the hotel name. Defaults to an empty string (returns all hotels).
-   `page` (optional) - The page number for pagination. Defaults to `1`.
-   `limit` (optional) - The number of hotels per page. Defaults to `8`.

#### 📡 Example Request

```javascript
fetch("/api/hotels?query=beach&page=1&limit=8");
```

#### ✅ Success Response (200 OK)

```json
{
    "page": 1,
    "limit": 10,
    "totalPage": 5,
    "totalData": 50,
    "query": "beach",
    "data": [
        {
            "name": "Beachside Hotel",
            "thumbnail": "https://example.com/thumbnail.jpg",
            "location": "Malibu, CA",
            "bedrooms": 3,
            "rate": 4.5,
            "reviews": [
                {
                    "rating": 5
                },
                {
                    "rating": 4
                }
            ],
            "host": {
                "name": "John Doe",
                "image": "https://example.com/john.jpg",
                "email": "john@example.com"
            }
        }
    ]
}
```

#### ❌ Example Response (404 Not Found)

```json
{
    "page": 1,
    "limit": 10,
    "totalPage": 0,
    "totalData": 0,
    "query": "mountain",
    "data": [],
    "message": "No Data Found"
}
```

#### 🚨 Example Response (500 Internal Server Error)

```json
{
    "success": false,
    "error": {
        "message": "Database connection failed"
    }
}
```

---

### CREATE A HOTEL

### **POST /api/hotels**

#### 📡 Example Request

```javascript
fetch("/api/hotels", {
    method: "POST",
    body: JSON.stringify({
        name: "Mountain View Resort",
        thumbnail: "https://example.com/mountain.jpg",
        gallery: [
            "https://example.com/mountain.jpg",
            "https://example.com/mountain.jpg",
            "https://example.com/mountain.jpg",
            "https://example.com/mountain.jpg",
        ],
        location: "Aspen, CO",
        bedrooms: 5,
        rate: 4.7,
        host: "60fbcf4c5e3e9a001f8e4e1a",
    }),
});
```

#### ✅ Success Response (201 Created)

```json
{
    "success": true,
    "message": "Hotel Created Successfully",
    "data": {
        "name": "Mountain View Resort",
        "thumbnail": "https://example.com/mountain.jpg",
        "location": "Aspen, CO",
        "bedrooms": 5,
        "rate": 4.7,
        "host": "60fbcf4c5e3e9a001f8e4e1a",
        "_id": "60fbcf4c5e3e9a001f8e4e2b"
    }
}
```

#### 🚫 Example Response (400 Bad Request - Validation Error)

```json
{
    "success": false,
    "error": {
        "message": "Invalid hotel data"
    }
}
```

#### 🚨 Example Response (500 Internal Server Error)

```json
{
    "success": false,
    "error": {
        "message": "Failed to create hotel"
    }
}
```

---

### GET SINGLE HOTEL DETAILS

### **GET /api/hotels/:hotelId**

Retrieve details of a specific hotel by its unique ID.

#### 📥 Path Parameters

| Parameter | Type   | Description                  |
| --------- | ------ | ---------------------------- |
| `hotelId` | String | The ID of the hotel to fetch |

#### 📤 Example Request

```javascript
fetch("/api/hotels/64af3e62f823c2a06dbb2832", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
});
```

#### ✅ Success Response (200 OK)

```json
{
    "success": true,
    "data": {
        "_id": "64af3e62f823c2a06dbb2832",
        "name": "Luxury Hotel",
        "location": "Dubai",
        "bedrooms": 5,
        "rate": 300,
        "thumbnail": "image_url",
        "host": {
            "name": "John Doe",
            "email": "john@example.com",
            "image": "profile_url"
        },
        "reviews": [
            {
                "rating": 4.5,
                "user": "64af3e62f823c2a06dbb2833"
            }
        ],
        "bookings": [{ "checkIn": "2023-12-01", "checkOut": "2023-12-05" }]
    }
}
```

#### 🚨 Example Response (500 Internal Server Error)

```json
{
    "success": false,
    "error": {
        "message": "Hotel not found"
    }
}
```

---

## BOOKING

### GET ALL BOOKINGS

### GET /api/bookings

#### 📋 Description

This endpoint fetches all bookings. The response includes information about the user, hotel, and booking details.

#### 📡 Example Request

```javascript
fetch("/api/bookings");
```

#### ✅ Success Response (200 OK)

```json
{
    "success": true,
    "data": [
        {
            "_id": "60f3b573c105fe1f8f96d7d4",
            "user": {
                "_id": "60f3b569c105fe1f8f96d7d3",
                "name": "Alice",
                "email": "alice@example.com"
            },
            "hotel": {
                "_id": "60f3b56fc105fe1f8f96d7d2",
                "name": "Beachside Resort",
                "location": "Malibu, CA"
            },
            "checkInDate": "2025-06-01T00:00:00Z",
            "checkOutDate": "2025-06-07T00:00:00Z",
            "totalAmount": 1200
        }
    ]
}
```

#### ⚠️ Example Response (404 Not Found)

```json
{
    "data": [],
    "message": "No Data Found"
}
```

#### 🚨 Example Response (500 Internal Server Error)

```json
{
    "success": false,
    "error": {
        "message": "Database connection failed"
    }
}
```

---

### CREATE A BOOKING

### POST /api/bookings

#### 📋 Description

This endpoint allows a user to create a new booking. The user must provide the hotel ID, user ID, check-in date, check-out date, and total booking amount.

#### 📡 Example Request

```javascript
fetch("/api/bookings", {
    method: "POST",
    body: JSON.stringify({
        user: "60f3b569c105fe1f8f96d7d3",
        hotel: "60f3b56fc105fe1f8f96d7d2",
        checkInDate: "2025-06-01T00:00:00Z",
        checkOutDate: "2025-06-07T00:00:00Z",
        billingAddress: {},
        totalAmount: 1200,
    }),
});
```

#### ✅ Success Response (201 Created)

```json
{
    "success": true,
    "data": [
        {
            "_id": "60f3b573c105fe1f8f96d7d4",
            "user": {
                "_id": "60f3b569c105fe1f8f96d7d3",
                "name": "Alice",
                "email": "alice@example.com"
            },
            "hotel": {
                "_id": "60f3b56fc105fe1f8f96d7d2",
                "name": "Beachside Resort",
                "location": "Malibu, CA"
            },
            "checkInDate": "2025-06-01T00:00:00Z",
            "checkOutDate": "2025-06-07T00:00:00Z",
            "totalAmount": 1200
        }
    ]
}
```

#### ⚠️ Example Response (400 Bad Request - Validation Error)

```json
{
    "success": false,
    "error": {
        "message": "Invalid booking data"
    }
}
```

#### 🚨 Example Response (500 Internal Server Error)

```json
{
    "success": false,
    "error": {
        "message": "Failed to create booking"
    }
}
```

---

### GET BOOKING INFORMATION BY ID

### GET /api/bookings/:bookingId

#### 📡 Example Request

```javascript
fetch("/api/bookings/60f3b573c105fe1f8f96d7d4");
```

#### ✅ Success Response (200 OK)

```json
{
    "success": true,
    "data": {
        "_id": "60f3b573c105fe1f8f96d7d4",
        "user": {
            "_id": "60f3b569c105fe1f8f96d7d3",
            "name": "Alice",
            "email": "alice@example.com",
            "image": "https://example.com/alice.jpg"
        },
        "hotel": {
            "_id": "60f3b56fc105fe1f8f96d7d2",
            "name": "Beachside Resort",
            "location": "Malibu, CA",
            "rooms": 50,
            "rating": 4.5
        },
        "checkInDate": "2025-06-01T00:00:00Z",
        "checkOutDate": "2025-06-07T00:00:00Z",
        "totalAmount": 1200
    }
}
```

#### ⚠️ Example Response (404 Not Found)

```json
{
    "data": null,
    "message": "No Data Found"
}
```

#### 🚨 Example Response (500 Internal Server Error)

```json
{
    "success": false,
    "error": {
        "message": "Booking not found"
    }
}
```

---

## REVIEW

### GET ALL REVIEWS OF A HOTEL

### GET /api/reviews?hotel=3645tweygfhsgfsduysf4

### Query Parameters

hotel - The hotel ID to filter reviews for a specific hotel.

**This endpoint retrieves all reviews or of a hotel ID provided as a query parameter.**

#### 📡 Example Request

```javascript
fetch("/api/reviews?hotel=60f3b56fc105fe1f8f96d7d2");
```

#### ✅ Success Response (200 OK) (Filtered by Hotel ID)

```json
{
    "success": true,
    "data": [
        {
            "_id": "60f3b573c105fe1f8f96d7d4",
            "rating": 5,
            "comment": "Excellent stay!",
            "hotel": "60f3b56fc105fe1f8f96d7d2",
            "user": {
                "_id": "60f3b569c105fe1f8f96d7d3",
                "name": "Alice",
                "email": "alice@example.com",
                "image": "https://example.com/alice.jpg"
            }
        }
    ]
}
```

#### ⚠️ Example Response (404 Not Found)

```json
{
    "data": [],
    "message": "No Data Found"
}
```

#### 🚨 Example Response (500 Internal Server Error)

```json
{
    "success": false,
    "error": {
        "message": "Database connection failed"
    }
}
```

### ⚠️ Error Handling

If an error occurs, the response will follow this structure:

```json
{
    "success": false,
    "error": {
        "message": "Error message describing what went wrong"
    }
}
```
