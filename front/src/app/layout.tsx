import { FRONT_API_ENDPOINT } from '@/constants/server';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import ReduxProvider from '@/store/redux-proider';
import ClientComponent from '@/components/oraganisms/BaseLayout/client-component';
import { AuthUser } from '@/types/auth';
import '@/styles/index.css';
import { validateToken } from '@/app/apis/authApi';

type RootLayoutProps = {
  children: React.ReactNode;
};
export default async function RootLayout({ children }: RootLayoutProps) {
  const cookieStore = await cookies();
  const headersList = await headers();
  const currentPath = headersList.get('x-pathname') ?? '';

  // 必要な場合だけ認証
  let authUser = undefined;
  const unauthorozeAllowPath = ['/auth/login', '/auth/signup'];
  if (!unauthorozeAllowPath.includes(currentPath)) {
    const token = cookieStore.get('accessToken')?.value;
    const response = await validateToken({ token });
    if (response.code !== 200) {
      return redirect('/auth/login');
    }
    if (response.data === undefined) {
      return redirect('/auth/login');
    }

    // 認証 OK
    authUser = response?.data?.user;
  }

  return (
    <html lang="ja">
      <body>
        <ReduxProvider>
          <ClientComponent user={authUser}>{children}</ClientComponent>
        </ReduxProvider>
      </body>
    </html>
  );
}
