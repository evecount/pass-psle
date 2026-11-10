
'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

const LoginForm = dynamic(
  () => import('@/components/LoginForm'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    )
  }
);

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 pt-24">
      <LoginForm />
    </main>
  );
}
