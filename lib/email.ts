import { Resend } from 'resend';

let resend: Resend | null = null;

function getResendClient() {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const resendClient = getResendClient();
    if (!resendClient) {
      throw new Error('Resend client not configured');
    }
    const { data: emailData, error } = await resendClient.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@oloresort.fi',
      to: [process.env.CONTACT_EMAIL || 'levi@oloresort.fi'],
      subject: `New Contact Form Submission from ${data.firstName} ${data.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This message was sent from the OloResort contact form.</p>
            <p>Reply directly to this email to respond to the customer.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }

    return { success: true, data: emailData };
  } catch (error) {
    console.error('Error in sendContactEmail:', error);
    throw new Error('Failed to send email');
  }
}

export async function sendConfirmationEmail(data: ContactFormData) {
  try {
    const resendClient = getResendClient();
    if (!resendClient) {
      throw new Error('Resend client not configured');
    }
    const { data: emailData, error } = await resendClient.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@oloresort.fi',
      to: [data.email],
      subject: 'Thank you for contacting OloResort - We\'ll be in touch soon!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Thank you for contacting OloResort!
          </h2>
          
          <p>Dear ${data.firstName},</p>
          
          <p>Thank you for reaching out to us! We have received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Message:</strong> ${data.message}</p>
          </div>
          
          <p>In the meantime, feel free to explore our website to learn more about our unique accommodation and activities in Levi, Lapland.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Best regards,<br>
              The OloResort Team<br>
              <br>
              <strong>Contact Information:</strong><br>
              Email: levi@oloresort.fi<br>
              Phone: +358 44 901 4162 (Sales)<br>
              Phone: +358 44 901 4164 (Reception)<br>
              Address: Taalontie 46, 99130 Sirkka, Finland
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Error sending confirmation email:', error);
      // Don't throw error for confirmation email failure
      return { success: false, error };
    }

    return { success: true, data: emailData };
  } catch (error) {
    console.error('Error in sendConfirmationEmail:', error);
    return { success: false, error };
  }
}
