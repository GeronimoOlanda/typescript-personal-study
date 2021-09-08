// tipando as variaveis antes de utilizalas
type VerifyUserFn = (user: User, sentValues: User) => boolean;
type User = { username: string; password: string };

const VerifyUser: VerifyUserFn = (user, sentValues) => {
  return (
    user.username === sentValues.username &&
    user.password === sentValues.password
  );
};

const bdUser = { username: 'Geronimo', password: 'NHDja211' };

const SendUser = { username: 'Geronimo', password: 'NHDja211' };

const logedIn = VerifyUser(bdUser, SendUser);

console.log(logedIn);
