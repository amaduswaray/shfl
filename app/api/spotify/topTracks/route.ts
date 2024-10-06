import { headers } from "next/headers";
import axios from "axios";
import { NextResponse } from "next/server";

type Term = "short_term" | "medium_term" | "long_term" | null;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const headerList = headers();
  const accessToken = headerList.get("Authorization");
  const term: Term = searchParams.get("term") as Term;

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/me/top/tracks?time_range=${term}&limit=15`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    );

    console.log(response.data.items);
    return NextResponse.json({ sucess: true, items: response.data.items });
  } catch (error) {
    console.error(error);

    //TODO: Handle if unauthorized due to access token expiring

    return NextResponse.json({
      sucess: false,
      status: 500,
      message: "A spotify error occured",
    });
  }
}

/* const fetchTopTracks = async (token, term) => {
  const settings = {
    headers: { Authorization: "Bearer " + token },
  };

  // Create variables that can be changed under settings. this will be a part of the get request
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?time_range=" + term,
      settings,
    );
    const data = await response.json();
    const top15 = data.items.splice(0, 15);
    const newData = top15.map((item) => {
      return {
        name: item.name,
        artists: item.artists.map((item) => item.name),
      };
    });

    return newData;
  } catch (error) {
    console.log("Error: ", error);
  }
}; */
