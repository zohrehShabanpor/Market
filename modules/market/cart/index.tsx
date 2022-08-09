import { observer } from "mobx-react";
import { StyledProps } from "_";
import {
  Content,
  OptionsContainer,
  Option,
  Notification,
  ActiveContainer,
  StyledMarket,
  Header,
  Arrow,
} from "./styles";
import { useEffect, useMemo, useState } from "react";
import { useStore } from "@store";
import { Doing, Reserve, OnHold } from "./Screens";
import { useRouter } from "next/router";

export enum CartItems {
  "onHold",
  "Doing",
  "Reserved",
}

type Props = StyledProps<{}>;

function CardModule({ className }: Props): React.ReactElement {
  const globalStore = useStore();
  const [activeItem, setActiveItem] = useState<number>();
  const router = useRouter();

  useEffect(() => {
    if (!globalStore.activeCartItem) {
      globalStore.setActiveCartItem(0);
      setActiveItem(CartItems.onHold);
    } else {
      setActiveItem(globalStore.activeCartItem);
    }
  }, []);

  useMemo(() => {
    if (activeItem) globalStore.setActiveCartItem(activeItem);
  }, [activeItem]);

  const options = [
    {
      title: "در انتظار پرداخت",
      notificationCount: "2",
      value: CartItems.onHold,
    },
    { title: "درحال انجام", notificationCount: "2", value: CartItems.Doing },
    { title: "رزرو شده", notificationCount: "2", value: CartItems.Reserved },
  ];

  return (
    <div className={className}>
      <Header>
        باکس خرید
        <Arrow onClick={() => router.back()} />
      </Header>
      <Content>
        <OptionsContainer>
          {options.map((item, index) => {
            return (
              <Option
                key={index}
                onClick={() => setActiveItem(item.value)}
                className={activeItem === item.value ? "active" : ""}
              >
                {item.title}
                <Notification value={item.notificationCount} />
              </Option>
            );
          })}
        </OptionsContainer>
        <ActiveContainer>
          {activeItem === CartItems.Reserved ? (
            <Reserve />
          ) : activeItem === CartItems.Doing ? (
            <Doing />
          ) : (
            <OnHold />
          )}
        </ActiveContainer>
      </Content>
    </div>
  );
}

export default StyledMarket.withComponent(observer(CardModule));
