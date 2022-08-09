import { StyledProps } from "_";
import { Offcanvas, Header, Body, CloseButton } from "./styles";
import { Close2 } from "@images";
import React from "react";

type Props = StyledProps<{
  hasCloseButton?: boolean;
  title?: React.ReactElement;
  headerChildren?: React.ReactElement;
  size?: 1 | 2 | 3 | 4;
  id: string;
}>;

function OffcanvasComponent({
  className,
  hasCloseButton = true,
  headerChildren,
  title,
  children,
  size = 1,
  id,
}: Props & React.PropsWithChildren<{}>): React.ReactElement {
  return (
    <Offcanvas
      size={size}
      className={className + " offcanvas offcanvas-bottom"}
      tabIndex={-1}
      id={id}
    >
      <Header>
        <div className="title">{title}</div>
        {headerChildren}
        {hasCloseButton ? (
          <CloseButton data-bs-dismiss="offcanvas" aria-label="Close">
            <Close2 />
          </CloseButton>
        ) : null}
      </Header>
      <Body>{children}</Body>
    </Offcanvas>
  );
}

export default OffcanvasComponent;
