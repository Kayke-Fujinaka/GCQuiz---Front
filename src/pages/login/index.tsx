import { GetServerSideProps } from "next";

import LoginLayout from "@/layout/login";
import { withSSRGuest } from "@/utils";

export default function Login() {
  return <LoginLayout />;
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  };
});
