import { headers } from "next/headers";
import axios from "axios";

export async function GET(req: Request) {
  const headerList = headers();
  const accessToken = headerList.get("Authorization");

  try {
    const response = await axios.get(`https://api.spotify.com/v1/me/`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    // console.log(response.data);
    return Response.json({ sucess: true, image: response.data.images[1].url });
    // Return success here, with all the needed data
  } catch (error) {
    console.error(error);

    return Response.json({ sucess: false });
  }
}
