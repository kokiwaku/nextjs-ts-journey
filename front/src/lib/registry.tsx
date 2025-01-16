'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

/**
 * Styled Componentsのサーバーサイドレンダリングを設定するRegistry
 *
 * 公式実装例：
 * - Next.js App Router Playground:
 *   https://github.com/vercel/app-playground/tree/main/app/styling/styled-components
 *
 * - Styled Components公式ドキュメント:
 *   https://styled-components.com/docs/advanced#nextjs
 */
export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    // Prevent memory leak
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  // If client, return children as-is
  if (typeof window !== 'undefined') return <>{children}</>;

  // If server, wrap children in StyleSheetManager
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
