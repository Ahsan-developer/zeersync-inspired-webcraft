import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: corsHeaders,
    });
  }

  try {
    const { firstName, lastName, email, company, message }: ContactEmailRequest = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // Send email notification to business
    const businessEmailResponse = await resend.emails.send({
      from: "TechFlow Contact <onboarding@resend.dev>",
      to: ["hello@techflow.com"], // Replace with your actual business email
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send confirmation email to customer
    const confirmationEmailResponse = await resend.emails.send({
      from: "TechFlow <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting TechFlow!",
      html: `
        <h1>Thank you for reaching out, ${firstName}!</h1>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p>Here's a copy of your message:</p>
        <blockquote style="border-left: 4px solid #e2e8f0; padding-left: 16px; margin: 16px 0; color: #64748b;">
          ${message.replace(/\n/g, '<br>')}
        </blockquote>
        <p>Best regards,<br>The TechFlow Team</p>
      `,
    });

    console.log("Emails sent successfully:", { businessEmailResponse, confirmationEmailResponse });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send email", 
        details: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);