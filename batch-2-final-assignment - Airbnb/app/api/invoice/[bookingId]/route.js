import { formatDate } from "@/utils";
import { NextResponse } from "next/server";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export async function GET(_req, { params: { bookingId } }) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings/${bookingId}`,
        {
            next: { revalidate: 0 },
        }
    );
    if (!response.ok) {
        return redirect("/");
    }

    const bookingInfo = await response.json();

    // initialize new pdfDoc function
    const pdfDoc = await PDFDocument.create();
    //create page
    const page = pdfDoc.addPage([600, 900]);
    // get height width from page
    const { width, height } = page.getSize();
    const colorCode = (code) => code / 255;

    // embed font for document
    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const normalFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const imageUrl = "/logo.png";
    const paidImageUrl = "/paid.png";
    // logo image=======================================
    const imageBytes = await fetch(
        new URL(imageUrl, process.env.NEXT_PUBLIC_API_BASE_URL)
    ).then((res) => res.arrayBuffer());

    // Embed the png image into the PDF
    const image = await pdfDoc.embedPng(imageBytes);

    // Get the dimensions of the image
    const { width: imageWidth, height: imageHeight } = image.scale(0.2);

    // paid image===============================
    const paidimageBytes = await fetch(
        new URL(paidImageUrl, process.env.NEXT_PUBLIC_API_BASE_URL)
    ).then((res) => res.arrayBuffer());

    // Embed the png image into the PDF
    const paidimage = await pdfDoc.embedPng(paidimageBytes);

    // Get the dimensions of the image
    const { width: paidimageWidth, height: paidwimageHeight } =
        paidimage.scale(0.1);

    // styles=================================================
    const padding = 20;
    const primaryColor = rgb(colorCode(55), colorCode(125), colorCode(125));
    const secondaryColor = rgb(colorCode(255), colorCode(255), colorCode(255));
    const borderColor = rgb(colorCode(245), colorCode(167), colorCode(58));
    const underLineColor = rgb(colorCode(199), colorCode(199), colorCode(199));
    const bgColor = rgb(colorCode(245), colorCode(245), colorCode(245));
    const textColor = rgb(colorCode(50), colorCode(50), colorCode(50));

    // draw main heder
    page.drawRectangle({
        x: 0,
        y: height - 100,
        height: 100,
        width,
        color: primaryColor,
    });

    page.drawImage(image, {
        x: padding, // X position on the page
        y: height - 70, // Adjusted Y to prevent overlap with rectangle
        width: imageWidth, // Image width
        height: imageHeight, // Image height
    });

    page.drawText("INVOICE", {
        x: 200 + 50,
        y: height - 60,
        font: font,
        size: 20,
        color: secondaryColor,
    });

    page.drawText(`Booking ID : #${bookingInfo?.data?._id.toString()}`, {
        x: 200 + 180 - padding,
        y: height - 60,
        font: normalFont,
        size: 12,
        color: secondaryColor,
    });

    page.drawText(`Date : ${formatDate(bookingInfo?.data?.createdAt)}`, {
        x: 200 + 180 - padding,
        y: height - 40,
        font: normalFont,
        size: 12,
        color: secondaryColor,
    });

    // draw header border-botom
    page.drawRectangle({
        x: 0,
        y: height - 105,
        height: 5,
        width,
        color: borderColor,
    });

    // draw hotel name information

    page.drawText(`${bookingInfo?.data?.hotel?.name}`, {
        x: padding,
        y: height - 140,
        font: font,
        size: 20,
        color: primaryColor,
    });

    // draw text underline
    page.drawRectangle({
        x: padding,
        y: height - 160,
        height: 2,
        width: width - 40,
        color: underLineColor,
    });

    // draw guest information box
    page.drawRectangle({
        x: padding,
        y: height - 270,
        height: 70,
        width: width - 40,
        color: bgColor,
    });

    page.drawText("Guest Information", {
        x: padding,
        y: height - 190,
        font: font,
        size: 15,
        color: primaryColor,
    });

    page.drawText(`Name: ${bookingInfo?.data?.user?.name} `, {
        x: padding + 20,
        y: height - 227,
        font: normalFont,
        size: 12,
        color: textColor,
    });

    page.drawText(`Email:  ${bookingInfo?.data?.user?.email} `, {
        x: padding + 20,
        y: height - 252,
        font: normalFont,
        size: 12,
        color: textColor,
    });

    // draw reservation details box
    page.drawRectangle({
        x: padding,
        y: height - 400,
        height: 80,
        width: width - 40,
        color: bgColor,
    });

    page.drawText("Reservation Details", {
        x: padding,
        y: height - 310,
        font: font,
        size: 15,
        color: primaryColor,
    });

    page.drawText(`Checkin: ${bookingInfo?.data?.checkin}`, {
        x: padding + 20,
        y: height - 350,
        font: normalFont,
        size: 12,
        color: textColor,
    });

    page.drawText(`Checkout:  ${bookingInfo?.data?.checkout}`, {
        x: 300 + 20,
        y: height - 350,
        font: normalFont,
        size: 12,
        color: textColor,
    });

    page.drawText(`Total Spent: ${bookingInfo?.data?.totalDays} nights `, {
        x: padding + 20,
        y: height - 375,
        font: normalFont,
        size: 12,
        color: textColor,
    });

    page.drawText(`Guest:  ${bookingInfo?.data?.guests}`, {
        x: 300 + 20,
        y: height - 375,
        font: normalFont,
        size: 12,
        color: textColor,
    });

    // draw Billing Address box
    page.drawRectangle({
        x: padding,
        y: height - 550,
        height: 100,
        width: width - 40,
        color: bgColor,
    });

    page.drawText("Billing Address", {
        x: padding,
        y: height - 440,
        font: font,
        size: 15,
        color: primaryColor,
    });

    page.drawText(`Street: ${bookingInfo?.data?.billing_address?.street} `, {
        x: padding + 20,
        y: height - 480,
        font: normalFont,
        size: 12,
        color: textColor,
    });

    page.drawText(`City: ${bookingInfo?.data?.billing_address?.city}`, {
        x: padding + 20,
        y: height - 505,
        font: normalFont,
        size: 12,
        color: textColor,
    });

    page.drawText(`State: ${bookingInfo?.data?.billing_address?.state}`, {
        x: padding + 20,
        y: height - 530,
        font: normalFont,
        size: 12,
        color: textColor,
    });

    page.drawText(`ZIP Code:  ${bookingInfo?.data?.billing_address?.zip}`, {
        x: 300 + 20,
        y: height - 530,
        font: normalFont,
        size: 12,
        color: textColor,
    });

    // draw Payment Summery box
    page.drawRectangle({
        x: padding,
        y: height - 760,
        height: 180,
        width: width - 40,
        color: primaryColor,
    });

    page.drawText("Payment Summery", {
        x: padding + 60,
        y: height - 620,
        font: font,
        size: 15,
        color: secondaryColor,
    });

    page.drawText(
        `Room Rate ( ${bookingInfo?.data?.totalDays} nights x $${bookingInfo?.data?.hotel?.rate})`,
        {
            x: padding + 60,
            y: height - 645,
            font: normalFont,
            size: 12,
            color: secondaryColor,
        }
    );

    page.drawText(
        `$${bookingInfo?.data?.totalDays * bookingInfo?.data?.hotel?.rate}`,
        {
            x: 300 + padding + 60,
            y: height - 645,
            font: normalFont,
            size: 12,
            color: secondaryColor,
        }
    );

    page.drawText("Cleaning Fee", {
        x: padding + 60,
        y: height - 665,
        font: normalFont,
        size: 12,
        color: secondaryColor,
    });

    page.drawText(`$${bookingInfo?.data?.cleaning_fee}`, {
        x: 300 + padding + 60,
        y: height - 665,
        font: normalFont,
        size: 12,
        color: secondaryColor,
    });

    page.drawText("Service Fee", {
        x: padding + 60,
        y: height - 685,
        font: normalFont,
        size: 12,
        color: secondaryColor,
    });

    page.drawText(`$${bookingInfo?.data?.service_fee}`, {
        x: 300 + padding + 60,
        y: height - 685,
        font: normalFont,
        size: 12,
        color: secondaryColor,
    });

    page.drawRectangle({
        x: padding + 60,
        y: height - 705,
        height: 1,
        width: width - 200,
        color: secondaryColor,
    });

    page.drawText("Total Amount", {
        x: padding + 60,
        y: height - 725,
        font: font,
        size: 12,
        color: secondaryColor,
    });

    page.drawText(`$${bookingInfo?.data?.total_payable}`, {
        x: 300 + padding + 60,
        y: height - 725,
        font: font,
        size: 12,
        color: secondaryColor,
    });

    // draw text underline
    page.drawRectangle({
        x: padding,
        y: height - 790,
        height: 2,
        width: width - 40,
        color: underLineColor,
    });

    page.drawText(`${bookingInfo?.data?.hotel?.name}`, {
        x: padding,
        y: height - 820,
        font: normalFont,
        size: 10,
        color: textColor,
    });
    page.drawText(`${bookingInfo?.data?.hotel?.location}`, {
        x: padding,
        y: height - 840,
        font: normalFont,
        size: 10,
        color: textColor,
    });

    page.drawText("Tel: +003 4545 432 | Email: contact@dummyemail.com ", {
        x: padding,
        y: height - 860,
        font: normalFont,
        size: 10,
        color: textColor,
    });
    page.drawImage(paidimage, {
        x: 450,
        y: height - 280,
        width: paidimageWidth,
        height: paidwimageHeight,
    });
    // save pdf
    const pdfBytes = await pdfDoc.save();
    return new NextResponse(pdfBytes, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename=invoice-${bookingInfo?.data?._id}.pdf`,
        },
    });
}
