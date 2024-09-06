import { jwtDecode } from 'jwt-decode';

export function isTokenExpired(token) {
  try {
    const decoded = jwtDecode(token); // Decode the JWT
    const currentTime = Date.now() / 1000; // Current time in seconds

    return decoded.exp < currentTime; // Check if the token is expired
  } catch (error) {
    return true; // If there's an error decoding, assume the token is invalid or expired
  }
}
