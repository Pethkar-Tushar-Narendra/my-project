import { useSelector } from "react-redux";

/**
 * Custom hook to check if user is logged in.
 * Returns true if token exists, otherwise false.
 */
export function useAuth() {
  // Access token from Redux state
  const token = useSelector((state) => state.user.token);

  // Return true if a valid token exists (user is authenticated)
  return !!token;
}
