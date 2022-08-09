import React, { useRef } from "react";
import { avatar } from "../../assets/images";

import { StyledAvatar, Container } from "./styles";

interface Props {
  className?: string;
  imageUrl?: string;
  getImage?: (event: any) => void;
  hasFileExplore?: boolean;
  alt?: string;
  style?: any;
}

function AvatarComponent({
  className,
  imageUrl,
  getImage,
  hasFileExplore = false,
  alt,
  style,
}: Props): React.ReactElement {
  const inputFile = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
        onChange={(event) => {
          if (getImage) getImage(event);
        }}
      />
      <Container
        style={style}
        className={className + " avatar-container"}
        onClick={() => {
          if (hasFileExplore && inputFile) inputFile?.current?.click();
        }}
      >
        <StyledAvatar alt={alt || "avatar"} src={imageUrl || avatar.src} />
      </Container>
    </>
  );
}

export default AvatarComponent;
