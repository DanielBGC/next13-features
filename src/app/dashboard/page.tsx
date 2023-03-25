import Link from 'next/link';

type DashboardPropsType = {};

export default function Dashboard(props: DashboardPropsType) {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href='/'>Home</Link>
    </div>
  );
}
