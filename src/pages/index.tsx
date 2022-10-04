import { GetServerSideProps } from "next";

import HomeLayout from "@/layout/home";
import { withSSRAuth } from "@/utils";

export default function Home() {
  return <HomeLayout />;
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
