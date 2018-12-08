export const login = (user) => {
  return $.ajax({
    url: 'api/session',
    method: 'POST',
    data: { user }
  });
};

// user = {username: "bob", password: "123456"}

export const signup = (user) => {
  return $.ajax({
    url: 'api/users',
    method: 'POST',
    data: { user } // {user: {username: "bob", password: "123456"}}
  });
};

export const logout = () => {
  return $.ajax({
    url: 'api/session',
    method: 'DELETE'
  });
};

