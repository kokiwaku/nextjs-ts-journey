import ReduxProvider from '@/store/redux-proider';
import '@/styles/index.css';

type RootLayoutProps = {
  children: React.ReactNode;
};
export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
