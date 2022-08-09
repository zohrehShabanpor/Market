import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MODULES, StyledProps } from "_";

type Props = StyledProps<{}>;

const HomeComponent: NextPage<Props> = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(MODULES.find(({ name }) => name === "home")?.url as string);
  }, []);

  return null;
};

export default HomeComponent;
