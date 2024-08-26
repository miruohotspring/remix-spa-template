import { CardWithForm } from '@/feature/CardWithForm';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix SPA' },
    { name: 'description', content: 'Welcome to Remix (SPA Mode)!' },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen justify-center font-sans p-4">
      <div className="m-auto">
        <CardWithForm />
      </div>
    </div>
  );
}
