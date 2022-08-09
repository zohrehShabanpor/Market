import { StyledProps } from "_";
import {
  Container9,
  Container10,
  Container11,
  Container12,
  Container13,
  Container14,
  Container15,
} from "./styles";
import { Arrow } from "@images";
import React, { useState } from "react";

type Props = StyledProps<{
  title1: React.ReactElement;
  title2: React.ReactElement;
}>;

function WeekComponent({ title1, title2 }: Props): React.ReactElement {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  return (
    <div>
      <Container9>
        <Container10>{title1}</Container10>
        <Container11>
          {title2}
          <Arrow
            onClick={() => setIsCollapseOpen(!isCollapseOpen)}
            style={{
              transform: isCollapseOpen ? `rotate(90deg)` : `rotate(270deg)`,
            }}
            className="p-1"
            data-bs-toggle="collapse"
            data-bs-target="#dayCollapse"
            aria-expanded="false"
            aria-controls="dayCollapse"
          />
        </Container11>
      </Container9>
      <Container13 className="collapse multi-collapse" id="dayCollapse">
        <Container14>
          <span>شنبه</span>
          <div>00:30 - 11:00</div>
        </Container14>
        <Container14>
          <span>یکشنبه</span>
          <div>00:30 - 11:00</div>
        </Container14>
        <Container14>
          <span>دوشنبه</span>
          <div>00:30 - 11:00</div>
        </Container14>
        <Container14>
          <span>سه شنبه</span>
          <div>00:30 - 11:00</div>
        </Container14>
        <Container14>
          <span>چهارشنبه</span>
          <div>00:30 - 11:00</div>
        </Container14>
        <Container14>
          <span>پنج شنبه</span>
          <div>00:30 - 11:00</div>
        </Container14>
        <Container15>
          <span>جمعه</span>
          <div>00:30 - 11:00</div>
        </Container15>
      </Container13>
    </div>
  );
}

export default Container12.withComponent(WeekComponent);
