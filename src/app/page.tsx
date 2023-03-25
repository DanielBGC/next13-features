import { User } from '@/components/User';
import { Repo } from '@/components/Repo';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Suspense fallback={<p>Loading User...</p>}>
        <User />
      </Suspense>

      <Suspense fallback={<p>Loading Repositories...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Repo />
      </Suspense>
    </div>
  );
}
