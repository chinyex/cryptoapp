import connectDB from "../../../../lib/db";
import Message from "../../../../models/Message";

export async function POST(req) {
  try {
    await connectDB();
    const { name, email, message } = await req.json();
    console.log()
    if ((!name, !email, !message)) {
      console.log(name, email, message)
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
        }
      );
    }

    const newMessage = new Message({
      name,
      email,
      message,
    });
    await newMessage.save();
    return new Response(
      JSON.stringify({ message: "Message sent successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
