import Link from 'next/link';

export const revalidate = 30; // 30 seconds

export default async function Home() {
  const response = await fetch('https://api.github.com/users/danielbgc', {
    cache: 'force-cache',
  });
  const user = await response.json();

  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Link href='/dashboard'>Dashboard</Link>
    </div>
  );
}
