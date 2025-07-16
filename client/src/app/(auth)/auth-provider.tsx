"use client";

import { Amplify } from "aws-amplify";
import {
  Authenticator,
  Heading,
  Radio,
  RadioGroupField,
  useAuthenticator,
  View,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

// docs.amplify.aws/gen1/javascript/tools/libraries/configure-categories/
https: Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID!,
      userPoolClientId:
        process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID!,
    },
  },
});

const components = {
  Header() {
    return (
      <View className="mt-4 mb-7">
        <Heading className="!text-2xl !font-bold">
          {"Momo"}
          <span className="!text-secondary-500 !font-light hover:!text-primary-300">
            Rental
          </span>
        </Heading>
        <p className="text-muted-foreground mt-2">
          <span className="font-bold">Welcome!</span> Please sign in to
          continue.
        </p>
      </View>
    );
  },
  SignIn: {
    Footer() {
      const { toSignUp } = useAuthenticator();
      return (
        <View className="text-center mt-4">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <button
              onClick={toSignUp}
              className="text-primary-500 cursor-pointer hover:underline"
            >
              Sign up
            </button>
          </p>
        </View>
      );
    },
  },
  SignUp: {
    FormFields() {
      const { validationErrors } = useAuthenticator();
      return (
        <>
          <Authenticator.SignUp.FormFields />
          <RadioGroupField
            legend="Role"
            name="custom:role"
            errorMessage={validationErrors?.["custom:role"]}
            hasError={!!validationErrors?.["custom:role"]}
            isRequired
          >
            <Radio value="tenant">Tenant</Radio>
            <Radio value="manager">Manager</Radio>
          </RadioGroupField>
        </>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();
      return (
        <View className="text-center mt-4">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <button
              onClick={toSignIn}
              className="text-primary-500 cursor-pointer hover:underline"
            >
              Sign in
            </button>
          </p>
        </View>
      );
    },
  },
};

const formFields = {
  signIn: {
    username: {
      label: "Email",
      placeholder: "Enter your email",
      isRequired: true,
    },
    password: {
      label: "Password",
      placeholder: "Enter your password",
      isRequired: true,
    },
  },
  signUp: {
    username: {
      order: 1,
      label: "Username",
      placeholder: "Enter your username",
      isRequired: true,
    },
    email: {
      order: 2,
      label: "Email",
      placeholder: "Enter your email address",
      isRequired: true,
    },
    password: {
      order: 3,
      label: "Password",
      placeholder: "Create your password",
      isRequired: true,
    },
    confirm_password: {
      order: 4,
      label: "Confirm Password",
      placeholder: "Confirm your password",
      isRequired: true,
    },
  },
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuthenticator((context) => [context.user]);
  const router = useRouter();
  const pathname = usePathname();
  const isAuthPage = pathname.match(/^\/(signin|signup)$/);
  const isDashboardPage =
    pathname.startsWith("/manager") || pathname.startsWith("/tenants");

  // Redirect authenticated users away from auth pages
  useEffect(() => {
    if (user && isAuthPage) {
      router.replace("/");
    }
  }, [user, isAuthPage, router]);

  // Allow access to public pages only if not authenticated
  if (!isAuthPage && !isDashboardPage) {
    return <>{children}</>;
  }

  return (
    <Authenticator
      initialState={pathname.includes("signup") ? "signUp" : "signIn"}
      components={components}
      formFields={formFields}
    >
      {() => <>{children}</>}
    </Authenticator>
  );
}
