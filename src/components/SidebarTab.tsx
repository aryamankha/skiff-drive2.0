import React, { useState } from "react";
import styled from "styled-components";
import { SidebarTab, type SidebarTabProps } from "./SidebarTab.style";

const StyledSidebarTabContent = styled(SidebarTab.Content)`
  &:hover {
    background-color: rgb(41, 41, 41);
  }
`;

const SidebarTabComponent = (props: SidebarTabProps) => {
  const [numClicks, setNumClicks] = useState(0);

  const clickHandler = (e: Event) => {
    e.preventDefault();
    setNumClicks(numClicks + 1);
  };

  return (
    <SidebarTab.Root status={props.status} onClick={clickHandler}>
      <StyledSidebarTabContent>
        {props.icon}
        <SidebarTab.Inbox>{props.label}</SidebarTab.Inbox>
      </StyledSidebarTabContent>
    </SidebarTab.Root>
  );
};

export { SidebarTabComponent as SidebarTab };
