// app/headcount/
import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(
      `https://api.tally.so/forms/${process.env.FORM_ID}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TALLY}`
        }
      }
    );

    // Extract responses from the Tally data
    // Assuming the response contains the submissions data
    const submissions = response.data?.submissions || [];
    const headcount = submissions.length;

    return NextResponse.json({ 
      success: true, 
      headcount: headcount 
    });
  } catch (e) {
    console.error("Error fetching headcount:", e);
    return NextResponse.json({ success: false, error: e });
  }
}
