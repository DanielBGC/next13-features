import { Repo } from './Repo';

type UserPropsType = {};

export async function User(props: UserPropsType) {
  const response = await fetch('https://api.github.com/users/danielbgc', {
    cache: 'no-store',
  });
  const user = await response.json();

  return (
    <div>
      <h1>User:</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      {/* @ts-expect-error Async Server Component */}
      <Repo />
    </div>
  );
}
