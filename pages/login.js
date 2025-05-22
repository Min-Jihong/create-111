import { useState } from 'react';
import { useRouter } from 'next/router';
import { LoginForm } from '@/components/auth/LoginForm';
import { SocialLogin } from '@/components/auth/SocialLogin';
import { Layout } from '@/components/layouts/Layout';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  
  const handleLogin = async (credentials) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      
      if (!response.ok) {
        throw new Error('Login failed');
      }
      
      const data = await response.json();
      router.push(data.redirectUrl || '/my-page');
    } catch (err) {
      setError(err.message);
    }
  };
  
  return (
    <Layout>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <LoginForm onSubmit={handleLogin} />
      <SocialLogin />
    </Layout>
  );
}