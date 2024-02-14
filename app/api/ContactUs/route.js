// pages/api/contact.js
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const route = {
  api: {
    bodyParser: true,
  },
};

// Process a POST request
export async function POST(request) {
  // Process a POST request
  try {
    const check = await request.json();
    const { firstName, lastName, email, phone, message } = check;
    console.log(firstName, lastName, email, phone, message);
    // Save data to MySQL (you need to set up your MySQL connection)
    // Example using 'mysql' package
    // const connection = mysql.createConnection({ /* your MySQL connection config */ });
    // connection.query('INSERT INTO your_table SET ?', { name, email, message }, (error, results) => { /* handle result */ });
    // connection.end();

    // Send email using nodemailer (you need to set up your email transport)
    const transporter = nodemailer.createTransport({
      /* your email transport configuration */
      // Create a Nodemailer transporter
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_ADDRESS,
      subject: "New Client Visit",
      text: `Name: ${
        firstName + " "
      }${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ status: 500, success: false, error: error });
      } else {
        console.log("Email sent:", info.response);
        return NextResponse.json({
          status: 200,
          success: true,
          message: "Form submitted successfully",
        });
      }
    });
    return NextResponse.json({
      status: 200,
      message: "Mail Sent Successfully",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
