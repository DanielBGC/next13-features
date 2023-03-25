import { User } from '@/components/User';
import Link from 'next/link';

export default async function Home() {
  const [user, repos] = await Promise.all([
    fetch('https://api.github.com/users/danielbgc').then((response) =>
      response.json()
    ),
    fetch('https://api.github.com/users/danielbgc/repos').then((response) =>
      response.json()
    ),
  ]);

  return (
    <div>
      <h1>Home</h1>

      <h2>User</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <h2>Repos</h2>
      <pre>{JSON.stringify(repos, null, 2)}</pre>

      <Link href='/dashboard'>Dashboard</Link>
    </div>
  );
}
