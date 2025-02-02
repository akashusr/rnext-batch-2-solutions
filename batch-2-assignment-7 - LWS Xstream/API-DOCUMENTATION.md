### 📹 LWS-X-Stream API Documentation

This API provides endpoints for managing videos, such as retrieving, adding, updating, and deleting video records. It uses a `videos.json` file as the database.

#### ⚠️ Note

This API as just for assignment purpose so I have to used local `videos.json` file as a database. But platforms like Vercel are optimized for static and serverless applications and don't allow direct writes to the filesystem during runtime. So,for this reason with the base url of vercel deployed application [https://lws-x-vercel.app/api](https://lws-x-vercel.app/api) don't work write now POST, PATCH, and DELETE requests to modify the videos.json file directly, which fails because the filesystem is read-only. So that's why in this Assignment project we need to check this API in local environemt.
So use base url [http://localhost:3000/api](http://localhost:3000/api)

Now let's see the API Documentation

---

### Videos API - GET all videos data

This API provides access to a list of videos, with optional support for pagination.

---

#### **Base Url**

#### `http://localhost:3000/api`

#### **Endpoint**

#### `/videos`

Retrieve a list of videos. Supports optional query parameters for pagination.

---

#### **HTTP Method**

`GET`

---

#### **Query Parameters**

| Parameter | Type     | Description                                                                | Default | Required |
| --------- | -------- | -------------------------------------------------------------------------- | ------- | -------- |
| `page`    | `number` | The page number to retrieve.                                               | `1`     | No       |
| `limit`   | `number` | The number of videos per page.                                             | `10`    | No       |
| `start`   | `number` | Alternative of `page`; specifies the index of the first video to retrieve. | None    | No       |

---

#### **Request Headers**

| Header                    | Description                 |
| ------------------------- | --------------------------- |
| `Content-Type` (optional) | Must be `application/json`. |

---

#### **Responses**

#### **✅Success (200 OK)**

-   If pagination parameters are provided, the response includes paginated data.
-   If no pagination parameters are provided, the response includes all videos.

#### **Paginated Response Example**

```json
{
    "page": 1,
    "limit": 10,
    "data": [
        {
            "title": "GTA V : BATMAN WAS KIDNAPPED || GTA V Bangla GAMEPLAY ||  Professor Of Pc Gaming",
            "description": "GTA V : BATMAN WAS KIDNAPPED || GTA V Bangla GAMEPLAY || Professor Of Pc Gaming Today I'm playing GtaV .",
            "thumbnail": "https://i.ytimg.com/vi/hecODa5ZgZM/hqdefault.jpg",
            "channelTitle": "Professor Of Pc Gaming",
            "publishTime": "2023-01-20T04:34:11Z",
            "videoId": "hecODa5ZgZM"
        },
        {
            "title": "Enlisted moment 5",
            "description": "If you enjoyed the video please leave a Like or Comment :) #shorts #shortsvideo #enlisted #enlistedgame.",
            "thumbnail": "https://i.ytimg.com/vi/tX0TxdI8l9c/hqdefault.jpg",
            "channelTitle": "JustGameplay_YT",
            "publishTime": "2023-01-31T14:00:26Z",
            "videoId": "tX0TxdI8l9c"
        }
    ]
}
```

#### **Full Response Example**

```json
[
    {
        "title": "GTA V : BATMAN WAS KIDNAPPED || GTA V Bangla GAMEPLAY ||  Professor Of Pc Gaming",
        "description": "GTA V : BATMAN WAS KIDNAPPED || GTA V Bangla GAMEPLAY || Professor Of Pc Gaming Today I'm playing GtaV .",
        "thumbnail": "https://i.ytimg.com/vi/hecODa5ZgZM/hqdefault.jpg",
        "channelTitle": "Professor Of Pc Gaming",
        "publishTime": "2023-01-20T04:34:11Z",
        "videoId": "hecODa5ZgZM"
    },
    {
        "title": "Enlisted moment 5",
        "description": "If you enjoyed the video please leave a Like or Comment :) #shorts #shortsvideo #enlisted #enlistedgame.",
        "thumbnail": "https://i.ytimg.com/vi/tX0TxdI8l9c/hqdefault.jpg",
        "channelTitle": "JustGameplay_YT",
        "publishTime": "2023-01-31T14:00:26Z",
        "videoId": "tX0TxdI8l9c"
    }
]
```

#### **❌Error (500 Internal Server Error)**

-   If no videos are found or another issue occurs, the response includes an error message.

#### **Error Response Example**

```json
{
    "error": "No videos found!"
}
```

#### **Example Requests**

#### **Retrieve Paginated Videos Data**

```javascript
await fetch("baseurl/api/videos?page=1&limit=5);
```

#### **Retrieve Full Videos Data**

```javascript
await fetch("baseurl/api/videos);
```

---

### Video API - Get Single Video by ID

This API endpoint retrieves a single video from the database based on its unique `id`.

---

#### **Base Url**

#### `http://localhost:3000/api`

#### **Endpoint**

#### `/videos/:id`

Retrieve a single video by its `id`.

---

#### **HTTP Method**

`GET`

---

#### **Path Parameters**

| Parameter | Type   | Description                              | Required |
| --------- | ------ | ---------------------------------------- | -------- |
| `id`      | string | The unique identifier (ID) of the video. | Yes      |

---

#### **Request Headers**

| Header                    | Description                 |
| ------------------------- | --------------------------- |
| `Content-Type` (optional) | Must be `application/json`. |

---

#### **Responses**

#### **✅Success (200 OK)**

Returns the video object if a video with the specified `id` is found.

#### **Response Example**

```json
{
    "title": "Enlisted moment 5",
    "description": "If you enjoyed the video please leave a Like or Comment :) #shorts #shortsvideo #enlisted #enlistedgame.",
    "thumbnail": "https://i.ytimg.com/vi/tX0TxdI8l9c/hqdefault.jpg",
    "channelTitle": "JustGameplay_YT",
    "publishTime": "2023-01-31T14:00:26Z",
    "videoId": "tX0TxdI8l9c"
}
```

#### **Error (404 Not Found)**

-   If no video matches the specified id, an error message is returned.

#### ❌ Error Response Example

```json
{
    "error": "No Video found with this id : 1"
}
```

#### **Example Request to retrieve data by videoId:**

```javascript
await fetch("baseurl/api/videos/1);
```

---

### Video API - Add New Video

This API endpoint allows you to add a new video to the database.

---

#### **Base Url**

#### `http://localhost:3000/api`

#### **Endpoint**

#### `/videos`

Adds a new video to the database by providing necessary fields.

---

#### **HTTP Method**

`POST`

---

#### **Request Body**

The request body must be a JSON object containing the following fields:

| Field          | Type   | Description                                 | Required |
| -------------- | ------ | ------------------------------------------- | -------- |
| `title`        | string | The title of the video.                     | Yes      |
| `description`  | string | A description of the video.                 | Yes      |
| `thumbnail`    | string | The URL of the video thumbnail image.       | Yes      |
| `channelTitle` | string | The title of the channel posting the video. | Yes      |
| `videoId`      | string | A unique identifier for the video.          | Yes      |

---

#### **Request Headers**

| Header                    | Description                 |
| ------------------------- | --------------------------- |
| `Content-Type` (optional) | Must be `application/json`. |

---

#### **Responses**

#### **✅Success (201 Created)**

Returns a success message and the newly created video object.

#### **Response Example**

```json
{
    "message": "Data Created Success",
    "data": {
        "title": "Sample Video Title",
        "description": "A detailed description of the video.",
        "thumbnail": "https://example.com/thumbnail.jpg",
        "channelTitle": "Sample Channel",
        "videoId": "123456",
        "publishTime": "2024-12-06T10:00:00.000Z"
    }
}
```

#### ❌ Error (500 Internal Server Error)

-   If validation fails or the videoId already exists, an error message is returned.

#### Error Response Examples

**Missing fields:**

```json
{
    "error": "All fields are required!"
}
```

**Duplicate videoId:**

```json
{
    "error": "Data with this videoId: 123456 has been already added"
}
```

#### Example Requests

**Add a New Video**

```javascript
await fetch("baseUrl/videos", {
    method: "POST",
    body: JSON.stringify({
        title: "Sample Video Title",
        description: "A detailed description of the video.",
        thumbnail: "https://example.com/thumbnail.jpg",
        channelTitle: "Sample Channel",
        videoId: "123456",
    }),
    headers: {
        "Content-Type": "application/json",
    },
});
```

---

### Video API - Delete Video by ID

This API endpoint deletes a video from the database based on its unique `id`.

---

#### **Base Url**

#### `http://localhost:3000/api`

#### **Endpoint**

#### `/videos/:id`

Deletes a video by its `id` and updates the database.

---

#### **HTTP Method**

`DELETE`

---

#### **Path Parameters**

| Parameter | Type   | Description                                        | Required |
| --------- | ------ | -------------------------------------------------- | -------- |
| `id`      | string | The unique identifier (ID) of the video to delete. | Yes      |

---

#### **Request Headers**

| Header                    | Description                 |
| ------------------------- | --------------------------- |
| `Content-Type` (optional) | Must be `application/json`. |

---

#### **Responses**

#### **✅Success (200 OK)**

Returns a success message and the details of the deleted video.

#### **Response Example**

```json
{
    "message": "Data deleted success",
    "deletedData": {
        "videoId": "1",
        "title": "Sample Video Title",
        "description": "A detailed description of the video.",
        "url": "https://example.com/sample-video",
        "thumbnail": "https://example.com/thumbnail.jpg"
    }
}
```

#### **❌Error (404 Not Found)**

-   If no video matches the specified id, an error message is returned.

#### **Error Response Example**

```json
{
    "error": "No data found to delete"
}
```

#### **Example Requests**

#### Delete a Video by ID

```javascript
await fetch("baseurl/api/videos/1,{method: "DELETE"});
```

---

### Video API - Update Video Details

This API endpoint updates the `title` or `description` of a specific video identified by its unique `id`.

---

#### **Base Url**

#### `http://localhost:3000/api`

#### **Endpoint**

#### `/videos/:id`

Updates specific fields (`title` and/or `description`) of a video by its `id`.

---

#### **HTTP Method**

`PATCH`

---

#### **Path Parameters**

| Parameter | Type   | Description                                        | Required |
| --------- | ------ | -------------------------------------------------- | -------- |
| `id`      | string | The unique identifier (ID) of the video to update. | Yes      |

---

#### **Request Body**

The request body must be a JSON object containing one or both of the following fields:

| Field         | Type   | Description                       | Required |
| ------------- | ------ | --------------------------------- | -------- |
| `title`       | string | The new title of the video.       | No       |
| `description` | string | The new description of the video. | No       |

---

#### **Request Headers**

| Header                    | Description                 |
| ------------------------- | --------------------------- |
| `Content-Type` (optional) | Must be `application/json`. |

---

#### **Validation Rules**

1. Only `title` and `description` are allowed fields in the request body.
2. At least one field (`title` or `description`) must be provided.
3. Fields with invalid names or empty data will result in an error.

---

#### **Responses**

#### **✅Success (200 OK)**

Returns a success message and the updated video details.

#### **Response Example**

```json
{
    "message": "Data updated success",
    "updatedData": {
        "videoId": "1",
        "title": "Updated Title",
        "description": "Updated description of the video.",
        "url": "https://example.com/video1",
        "thumbnail": "https://example.com/thumbnail1.jpg"
    }
}
```

#### ❌Error (500 Internal Server Error)

-   If validation fails or an issue occurs during the update, an error message is returned.

#### Error Response Examples

#### Invalid or missing data:

```json
{
    "error": "Invalid actions: No data passed or Empty data"
}
```

#### Invalid fields in the request body:

```json
{
    "error": "Trying to change not permitted data, Title and Description only allowed to update"
}
```

#### No data found with the specified id:

```json
{
    "error": "No data found with this id:1"
}
```

#### Example Requests

-   Update Title and Description

```javascript
await fetch("/baseUrl/videos/2", {
    method: "PATCH",
    body: JSON.stringify({
        title: "Updated Title",
        description: "Updated description of the video.",
    }),
    headers: {
        "Content-Type": "application/json",
    },
});
```
