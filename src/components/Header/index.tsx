import { MdSpaceDashboard, MdOutlineHistory } from "react-icons/md";

import Link from "next/link";
import Router, { useRouter } from "next/router";

import { useAuth } from "@/contexts/useAuth";
import { useWindowSize } from "@/hooks/useWindowSize";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { Button } from "../Button";
import * as S from "./style";

export function Header() {
  const { asPath } = useRouter();
  const { width } = useWindowSize();

  const mobile = (width as number) < 750;

  const { useSignOut } = useAuth();

  function handleLogOut() {
    useSignOut();
    Router.push("./login");
  }

  return (
    <S.Container>
      {mobile ? (
        <DropdownMenu.Root>
          <S.MenuTrigger>
            <span />
            <span />
            <span />
          </S.MenuTrigger>

          <DropdownMenu.Portal>
            <S.MenuContent sideOffset={10}>
              <S.MenuLogo>GCQuiz</S.MenuLogo>
              <S.MenuItem
                onClick={() => setTimeout(() => Router.push("/"), 220)}
                className={asPath === "/" ? "active" : ""}
              >
                <MdSpaceDashboard />
                Início
              </S.MenuItem>
              <S.MenuItem>
                <Button
                  background="red"
                  widthSize="sm"
                  iconLeft
                  onClick={handleLogOut}
                >
                  <MdOutlineHistory />
                  <span>Sair</span>
                </Button>
              </S.MenuItem>
            </S.MenuContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      ) : (
        <>
          <S.Logo>GCQuiz</S.Logo>
          <S.Menu>
            <ul>
              <li className={asPath === "/" ? "active" : ""}>
                <MdSpaceDashboard />
                <Link href="/" passHref>
                  <a>Início</a>
                </Link>
              </li>
              <li>
                <Button
                  iconLeft
                  background="red"
                  widthSize="sm"
                  onClick={handleLogOut}
                >
                  <MdSpaceDashboard />
                  <span>Sair</span>
                </Button>
              </li>
            </ul>
          </S.Menu>
        </>
      )}
    </S.Container>
  );
}
