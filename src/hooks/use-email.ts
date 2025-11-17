
export const useEmail = () => {
  const sendEmail = async (emailData: {
    to_email: string;
    from_name: string;
    message: string;
    reply_to: string;
  }) => {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_mongoliavictour",
        template_id: "template_registration",
        user_id: "user_mongoliatour",
        template_params: emailData,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return response;
  };

  return { sendEmail };
};
