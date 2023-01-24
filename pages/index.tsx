import broadcasts from "@/utils/broadcasts";
import { useEffect } from "react";

// Get the default route

const [defaultBroadcast] = broadcasts.filter((route) => route.default);

export default function Index() {
  // Redirect to the default route
  useEffect(() => {
    window.location.href = defaultBroadcast.slug;
  }, []);
  return null;
}
