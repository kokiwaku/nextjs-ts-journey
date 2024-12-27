import { FRONT_API_ENDPOINT } from '@/constants/server';
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import ReduxProvider from '@/store/redux-proider';
import ClientComponent from "@/components/top/client-component";
import { AuthUser } from '@/types/auth';
import '@/styles/index.css'

type RootLayoutProps = {
  children: React.ReactNode;
};
export default async function RootLayout({
  children,
}: RootLayoutProps) {
  const cookieStore = await cookies();
  const headersList = await headers();
  const currentPath = headersList.get('x-pathname') ?? '';

  debugger;
  // 認証不要のパス
  const unauthorozeAllowPath = [
    '/auth/login',
    '/auth/signup',
  ];

  let authUser: AuthUser = {
    id: '',
    name: '',
    email: '',
  };
  const authToken = cookieStore.get('auth_token')?.value;
  if (authToken !== undefined) {
    try {
      const response = await fetch(`${FRONT_API_ENDPOINT}/auth/validate_token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({authToken})
      });
      // response check
      if (!response.ok) {
        throw new Error('Fail to valid token..');
      }
      const responseJson = await response.json();
      if (responseJson === null) {
        throw new Error('Fail to valid token..');
      }

      authUser = responseJson;
    } catch (error) {
      console.error("error:", error);
    }
  }

  // 認証されていない場合
  if (authUser.id === '') {
    if (!unauthorozeAllowPath.includes(currentPath)) {
      return redirect('/auth/login');
    }
  }

  return (
    <html lang="ja">
      <body>
        <ReduxProvider>
          <ClientComponent user={authUser}>
            {children}
          </ClientComponent>
        </ReduxProvider>
      </body>
    </html>
  );
}