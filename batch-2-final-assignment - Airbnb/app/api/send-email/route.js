import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const {
            to,
            id,
            guestName,
            hotelName,
            checkInDate,
            checkOutDate,
            guestCount,
            totalPrice,
            hotelWebsite,
            hotelContact,
            thumbnail,
            attachments,
        } = await req.json();
        // Parse the incoming request body

        // Configure the transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SENDER_MAIL,
                pass: process.env.GOOGLE_APP_PASS,
            },
        });

        const htmlContent = `

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reservation Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }

        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border: 1px solid #dddddd;
            border-radius: 8px;
            overflow: hidden;
        }

        .header {
            background-color: #4CAF50;
            color: #ffffff;
            text-align: center;
            padding: 20px;
            font-size: 24px;
        }
        .image-contailer{
            width: 600px;
            height: 400px;
        }
        .thumbnail{
            height: 100%;
            width:100%;
            object-fit: cover;
        }

        .content {
            padding: 20px;
            line-height: 1.6;
            color: #333333;
        }

        .content h2 {
            color: #4CAF50;
        }

        .content p {
            margin: 10px 0;
        }

        .reservation-details {
            background-color: #f1f1f1;
            padding: 15px;
            border-radius: 4px;
        }

        .reservation-details table {
            width: 100%;
            border-collapse: collapse;
        }

        .reservation-details th,
        .reservation-details td {
            text-align: left;
            padding: 8px;
            border: 1px solid #dddddd;
        }

        .footer {
            text-align: center;
            background-color: #f1f1f1;
            color: #666666;
            padding: 10px;
            font-size: 14px;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <h1>${hotelName}</h1>
        <div class="header">
            Reservation Confirmed 🎉
        </div>

        <div class="content">
            <h2>Hello ${guestName},</h2>
            <p>Thank you for making a reservation with us! We are thrilled to have you. Here are the details of your reservation:</p>
           <div class="image-contailer"> <img class="thumbnail" src=${thumbnail} alt=${hotelName}/></div>

            <div class="reservation-details">
                <table>
                    <tr>
                        <th>Reservation ID</th>
                        <td>#${id}</td>
                    </tr>
                    <tr>
                        <th>Checkin</th>
                        <td>${checkInDate}</td>
                    </tr>
                    <tr>
                        <th>Checkout</th>
                        <td>${checkOutDate}</td>
                    </tr>
                    <tr>
                        <th>Guests</th>
                        <td>${guestCount}</td>
                    </tr>
                    <tr>
                        <th>Paid</th>
                        <td>${totalPrice}</td>
                    </tr>
                </table>
            </div>

            <p>If you have any questions or need to make changes to your reservation, feel free to contact us at <a href="mailto:${hotelContact}">${hotelContact}</a>.</p>

            <p>Looking forward to seeing you soon!</p>
            <p>Warm regards,</p>
            <p>The ${hotelName} Team</p>
        </div>
        <div class="footer">
            &copy; 2025 ${hotelWebsite}. All rights reserved.
        </div>
    </div>
</body>

</html>
`;

        // Define the email options
        const mailOptions = {
            from: `LWS-X-Airbnb <${process.env.EMAIL_USER}>`,
            to,
            subject: "Reservation Confirmation",
            text: `Dear ${guestName},\n\nThank you for booking your stay at${hotelName}. Your reservation is confirmed. Please find the details in the email body and Check your Invoice, which is sent to you as an attachment`,
            html: htmlContent,
            attachments: attachments || [],
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true, info }), {
            status: 200,
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            { status: 500 }
        );
    }
}
