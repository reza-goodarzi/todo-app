import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function useRedirect() {
  const [path, setPath] = useState("");
  const { token, user, error } = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (token && user && !error) {
      setPath("/");
    }

    if (!token || !user) {
      setPath("/login");
    }
  }, [token, user, error]);

  const goToPath = () => {
    router.push(path);
  };

  return goToPath;
}
