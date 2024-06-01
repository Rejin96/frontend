import axios from "axios";

function useLogin() {
  function login(email, password) {
    let data = {
      email,
      password,
    };
    console.log(data);
    axios
      .post("/api/user/login", data)
      .then((resp) => console.log(resp.data))
      .catch((err) => alert(err.response.data.error));
  }
  return { login };
}

export default useLogin;
