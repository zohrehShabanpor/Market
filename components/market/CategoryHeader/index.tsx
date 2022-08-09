import {
  StyledCategoryHeader,
  Title,
  Span,
  Arrow,
  LinkContainer,
} from "./styles";
import { StyledProps } from "_";
import Link from "next/link";
import React from "react";

type Props = StyledProps<{
  title?: string;
  link?: { title: string; href?: string };
}>;

function CategoryHeaderComponent({
  className,
  title,
  link,
  children,
}: Props & React.PropsWithChildren<{}>): React.ReactElement {
  return (
    <div
      style={{
        justifyContent:
          (title && link) || (title && children) || (link && children)
            ? `space-between`
            : title
            ? `start`
            : `end`,
      }}
      className={className}
    >
      {title ? <Title>{title}</Title> : null}
      {children}
      {link ? (
        link.href ? (
          <Link href={link.href}>
            <LinkContainer>
              <Span>{link.title}</Span>
              <Arrow />
            </LinkContainer>
          </Link>
        ) : (
          <LinkContainer>
            <Span>{link.title}</Span>
            <Arrow />
          </LinkContainer>
        )
      ) : null}
    </div>
  );
}

export default StyledCategoryHeader.withComponent(CategoryHeaderComponent);
