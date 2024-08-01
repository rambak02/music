const baseUrl = "https://webdev-music-003b5b991590.herokuapp.com/user"
type AuthUserType = {
    email: string,
    password: string,
    username: string
}
type LoginUserType = {
    email: string,
    password: string,
}

export async function authUser({email, password, username}: AuthUserType) {
  const response = await fetch(baseUrl + "/signup/", {
    method: "POST",
    body: JSON.stringify({
        email,
        password,
        username
    }),
    headers: {
        "content-type": "application/json",
    }
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return response.json();
}
export async function loginUser({email, password}: LoginUserType) {
    const response = await fetch(baseUrl + "/login/", {
      method: "POST",
      body: JSON.stringify({
          email,
          password,
      }),
      headers: {
          "content-type": "application/json",
      }
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    return response.json();
  }

  export async function fetchToken({email, password}: LoginUserType) {
    const response = await fetch(baseUrl + "/token/", {
    method: "POST",
    body: JSON.stringify({
        email,
        password
    }),
    headers: {
        "content-type": "application/json",
    }
    });
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message)
    }
    return response.json();
  }

