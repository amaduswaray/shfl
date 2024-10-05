export interface SpotifyUser {
  name: string | undefined | null;
  pictrue: string | undefined | null;
  sub: string | undefined | null; // This is the spotify id
  refreshToken: string;
  email: string | undefined | null;
  access_token: string;
}
