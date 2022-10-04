import { GetServerSideProps } from "next";

import RegisterLayout from "@/layout/register";
import { withSSRGuest } from "@/utils";

export default function Register() {
  return <RegisterLayout />;
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  };
});
