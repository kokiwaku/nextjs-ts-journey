import '@/styles/index.css';
import { TodoProvider } from '@/context/TodoContext';
import { AuthProvider } from '@/context/AuthContext';

type RootLayoutProps = {
  children: React.ReactNode;
};
export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <TodoProvider>
      <AuthProvider>
        <html lang="ja">
          <body>{children}</body>
        </html>
      </AuthProvider>
    </TodoProvider>
  );
}
