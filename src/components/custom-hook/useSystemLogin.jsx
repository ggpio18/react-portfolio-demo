import React from "react";
import { setIsLogin } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import { queryData } from "../helpers/queryData";
import { useNavigate } from "react-router-dom";
import { checkLocalStorage } from "../helpers/functions-general";

const useSystemLogin = (navigate) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loginLoading, setLoading] = React.useState(true);
  const navigation = useNavigate();

  React.useEffect(() => {
    setLoading(true);
    const fetchLogin = async () => {
      const login = await queryData(`/v1/user/token`, "post", {
        token: checkLocalStorage().token,
      });

      if (typeof login === "undefined" || !login.success) {
        localStorage.removeItem("glatoken");
        setLoading(false);
      } else {
        setLoading(false);
        // checkRoleToRedirect(navigate, login.data);
        navigation(`/contact`)
      }
    };
    if (
      checkLocalStorage() !== null &&
      checkLocalStorage().token !== undefined
    ) {
      fetchLogin();
      dispatch(setIsLogin(false));
    } else {
      setLoading(false);
      dispatch(setIsLogin(true));
    }
  }, []);

  return { loginLoading };
};

export default useSystemLogin;