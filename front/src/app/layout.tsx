import '@/styles/index.css';
import { TodoProvider } from '@/context/TodoContext';
import { AuthProvider } from '@/context/AuthContext';
import StyledComponentsRegistry from '@/lib/registry';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body>
        <StyledComponentsRegistry>
          <TodoProvider>
            <AuthProvider>{children}</AuthProvider>
          </TodoProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
