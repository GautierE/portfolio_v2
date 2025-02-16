export const POST = async (req: Request) => {
  try {
    const {
      name,
      email,
      message,
    }: { name: string; email: string; message: string } = await req.json();

    const webhookUrl =
      "https://discord.com/api/webhooks/1079302547153625158/FnmXKmydlEjJnrNfEut_KfPUZDqSiwHhZeB-EjayVwUURWKeTObHZaSEqKAkZsUxDF8r";

    const payload = {
      username: "🧑‍💼 Employer 🧑‍💼",
      avatar_url:
        "https://pbs.twimg.com/profile_images/1592320647522574337/XSisuLz-_400x400.jpg",
      embeds: [
        {
          color: 0x00ffff,
          title: "🎉🎉 Someone contacted you 🎉🎉",
          fields: [
            { name: "Name", value: name || "N/A" },
            { name: "Email", value: email || "N/A" },
            { name: "Message", value: message || "N/A" },
          ],
        },
      ],
    };

    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!discordResponse.ok) {
      throw new Error(`Discord webhook error: ${discordResponse.statusText}`);
    }

    return new Response(JSON.stringify({ message: "success" }), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        message: `Error while sending contact message: ${error.message}`,
      }),
      {
        status: 500,
      },
    );
  }
};
