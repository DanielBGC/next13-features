import { User } from '@/components/User';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      {/* @ts-expect-error Async Server Component */}
      <User />

      <Link href='/dashboard'>Dashboard</Link>
    </div>
  );
}
