"use client";

import StoreProvider from "@/state/redux";
import { Authenticator } from "@aws-amplify/ui-react";
import AuthProvider from "./(auth)/auth-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <Authenticator.Provider>
        <AuthProvider>{children}</AuthProvider>
      </Authenticator.Provider>
    </StoreProvider>
  );
}
