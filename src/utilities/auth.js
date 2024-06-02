export const isAuthenticated = () => {
  return fetch('http://localhost:5000/users/me', {
    credentials: 'include',
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Not authenticated');
    })
    .then((user) => user)
    .catch((error) => null);
};

export const logout = () => {
  return fetch('http://localhost:5000/users/logout', {
    method: 'POST',
    credentials: 'include',
  }).then((res) => res.json());
};
