import axios from "axios";

export const UpdateUser = (orguser,userAuth, userName, auth, image) => {
  return axios
    .post("http://localhost:8080/auth/updateuser", {
      orguser:orguser,
      userAuth: userAuth,
      userName: userName,
      auth: auth,
      image: image,
    })
}

export const CheckUser = (userAuth) => {
  return axios
    .post("http://localhost:8080/auth/checkuser", {
      userAuth: userAuth,
    });
};

export const NewUser = (userAuth, userName, auth, image) => {
  return axios
    .post("http://localhost:8080/auth/newuser", {
      userAuth: userAuth,
      userName: userName,
      auth: auth,
      image: image,
    })
};
