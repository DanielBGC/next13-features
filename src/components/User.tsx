import { cookies, headers } from 'next/headers';

type UserPropsType = {};

export async function User(props: UserPropsType) {
  const userCookies = cookies();
  const userHeaders = headers();

  return (
    <div>
      <h1>User:</h1>
      <pre>{JSON.stringify(userCookies.getAll(), null, 2)}</pre>
      <pre>{JSON.stringify(userHeaders.entries(), null, 2)}</pre>
    </div>
  );
}
