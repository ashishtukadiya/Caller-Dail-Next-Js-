import { useSelector } from "react-redux";
import AuthLayout from "./AuthLayout";
import MainLayout from "./MainLayout";
import { useEffect } from "react";

const RootLayout = ({ children, router }) => {
  const isError = router.pathname.includes("/_error");
  const path = router.asPath;

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     if (!path.startsWith("/auth")) {
  //       router.push("/auth/login");
  //     }
  //   }

  //   return () => {};
  // }, [path]);

  return (
    <>
      {isError ? (
        { children }
      ) : router.pathname.startsWith("/auth") ? (
        <AuthLayout>{children}</AuthLayout>
      ) : (
        <MainLayout>{children}</MainLayout>
      )}
    </>
  );
};

export default RootLayout;
