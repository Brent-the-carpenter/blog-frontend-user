import GetCheckToken from "../fetch/GetCheckToken";
import { useEffect, useState } from "react";

const useCheckToken = (token) => {
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const response = await GetCheckToken(token);
        if (response.status === 200) {
          setIsTokenValid(true);
        }
      } catch (error) {
        setIsTokenValid(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkToken();
  }, [token]);

  return { isTokenValid, isLoading };
};
export default useCheckToken;
