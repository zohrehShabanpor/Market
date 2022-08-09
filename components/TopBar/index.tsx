import Circle from "@mui/icons-material/Circle";
import { StyledProps } from "_";
import { Input, Avatar, Version, Button } from "#";
import {
  Offcanvas,
  ItemContainer,
  ItemContainerSecondary,
  Body,
  ProfileContainer,
  ProfileName,
  Header,
  ItemTitle,
  Logo,
  CloseButton,
  Menu,
  StyledTopBar,
} from "./styles";
import { useStore } from "@store";
import {
  logo2,
  logoMarket,
  Arrow,
  Arrow2,
  Search,
  Close2,
  logoPost,
} from "@images";
import { observer } from "mobx-react";
import { mainColors } from "#/Layout";
import { theme as Theme } from "@theme";
import Link from "next/link";

type Props = StyledProps<{}>;

function TopBarComponent({ className }: Props): React.ReactElement {
  const globalStore = useStore();
  let theme = globalStore?.themeColor || mainColors.blue;

  const items = [
    { title: "ویرایش اطلاعات کاربری" },
    { title: "ویرایش اطلاعات کاربری" },
    { title: "ویرایش اطلاعات کاربری" },
    { title: "ویرایش اطلاعات کاربری" },
    { title: "ویرایش اطلاعات کاربری" },
    { title: "ویرایش اطلاعات کاربری" },
  ];

  return (
    <>
      <StyledTopBar themeColor={theme} className={className}>
        <Menu
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTop"
          aria-controls="offcanvasTop"
        />
        {theme === mainColors.brightBlue ? null : (
          <Input
            style={{ width: `100%` }}
            props={{
              placeholder: "با اعتماد، جستجو کنید ...",
            }}
            Icon={Search}
          />
        )}
        <Link
          href={
            theme === mainColors.green
              ? "/market"
              : theme === mainColors.brightBlue
              ? "/post"
              : "/home"
          }
        >
          <Logo
            src={
              theme === mainColors.green
                ? logoMarket.src
                : theme === mainColors.brightBlue
                ? logoPost.src
                : logo2.src
            }
          />
        </Link>
      </StyledTopBar>

      <Offcanvas
        className="offcanvas offcanvas-bottom"
        tabIndex={-1}
        id="offcanvasTop"
      >
        <Header className="offcanvas-header">
          <ProfileContainer>
            <Avatar style={{ width: `60px`, height: `60px` }} />
            <ProfileName>مصطفی قاضی زاده</ProfileName>
          </ProfileContainer>
          <CloseButton data-bs-dismiss="offcanvas" aria-label="Close">
            <Close2 />
          </CloseButton>
        </Header>
        <Body className="offcanvas-body">
          {items.map((item, index) => {
            return (
              <ItemContainer key={index} themeColor={theme}>
                <ItemContainerSecondary>
                  <Circle />
                  <ItemTitle themeColor={theme}>{item.title}</ItemTitle>
                </ItemContainerSecondary>
                <Arrow2 className="arrow" />
              </ItemContainer>
            );
          })}

          <Button
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{
              color: `${Theme.palette.platinum[100]}`,
              position: `absolute`,
              bottom: `60px`,
              width: `calc(100% - 40px)`,
            }}
            backColor={Theme.palette.coralRed[90]}
            Icon={<Arrow />}
            href="/auth"
          >
            خروج از حساب
          </Button>
          <Version style={{ position: `absolute`, bottom: `25px` }} />
        </Body>
      </Offcanvas>
    </>
  );
}

export default observer(TopBarComponent);
