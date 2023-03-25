import { User } from '@/components/User';

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>

      {/* @ts-expect-error Async Server Component */}
      <User />
    </div>
  );
}
