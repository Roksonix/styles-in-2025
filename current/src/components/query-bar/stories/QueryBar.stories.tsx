import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import styled from "styled-components";

import { colorsPalettes } from "@/styles";

import { renderDefaultTextComponent } from "..";
import { QueryBarAppItem } from "../src/QueryBarItems/QueryBarAppItem";
import { QueryBarGroupItem } from "../src/QueryBarItems/QueryBarGroupItem";
import { QueryBarWebsiteItem } from "../src/QueryBarItems/QueryBarWebsiteItem";

import {
  getAppCategoryItemsData,
  getAppCompareItemsData,
  getCategoryItemsData,
  getKeywordItemsData,
  getWebsiteCompareItemsData,
  getWebsiteItemsData,
} from "./QueryBarStoriesHelper";
import { Flex } from "@/components/foundations";

const ItemWrapper = styled.div`
  margin-right: 8px;
  display: flex;
  flex-shrink: 1;
  max-width: 320px;
  min-width: 128px;
`;

export default {
  title: "COMPONENTS/QueryBar",
  decorators: [(Story: React.ComponentType) => <Story />],
};

export const WebsiteQueryBarItemSingle = () => {
  const queryBarItems = getWebsiteItemsData().map((item) => {
    return (
      <ItemWrapper key={item.text}>
        <QueryBarWebsiteItem
          isCompare={false}
          text={item.text}
          image={item.image}
          onItemClick={() => action(`clicked item`)(item.text)}
        />
      </ItemWrapper>
    );
  });

  return <Flex>{queryBarItems}</Flex>;
};

WebsiteQueryBarItemSingle.story = {
  name: "Website Query Bar Item (Single)",
};

export const WebsiteQueryBarItemSingleReverseEllipsis = () => {
  const queryBarItems = getWebsiteItemsData().map((item) => {
    return (
      <ItemWrapper key={item.text}>
        <QueryBarWebsiteItem
          isCompare={false}
          text={item.text}
          image={item.image}
          onItemClick={() => action(`clicked item`)(item.text)}
          textRenderFunction={(...args) => renderDefaultTextComponent(args[0], args[1], args[2], true)}
        />
      </ItemWrapper>
    );
  });

  return <Flex>{queryBarItems}</Flex>;
};

WebsiteQueryBarItemSingle.story = {
  name: "Website Query Bar Item (Single) with reverse ellipsis",
};

export const WebsiteQueryBarItemCompare = () => {
  const queryBarItems = getWebsiteCompareItemsData().map((item) => {
    return (
      <ItemWrapper key={item.text}>
        <QueryBarWebsiteItem
          isCompare={true}
          text={item.text}
          image={item.image}
          onItemClick={() => action(`clicked item`)(item.text)}
          badgeColor={item.badgeColor}
          onButtonClick={() => action("clicked close button")(item.text)}
          isDisabled={boolean("Disable icon and text hover state", false)}
        />
      </ItemWrapper>
    );
  });

  return <Flex>{queryBarItems}</Flex>;
};

WebsiteQueryBarItemCompare.story = {
  name: "Website Query Bar Item (Compare)",
};

export const WebsiteQueryBarItemSingleWithSecondaryText = () => {
  const queryBarItems = getWebsiteItemsData().map((item) => {
    return (
      <ItemWrapper key={item.text}>
        <QueryBarWebsiteItem
          isCompare={false}
          text={item.text}
          secondaryText={item.secondaryText}
          image={item.image}
          onItemClick={() => action(`clicked item`)(item.text)}
        />
      </ItemWrapper>
    );
  });

  return <Flex>{queryBarItems}</Flex>;
};

WebsiteQueryBarItemSingleWithSecondaryText.story = {
  name: "Website Query Bar Item With Secondary Text",
};

export const WebsiteQueryBarItemSingleWithRendererFunction = () => {
  const queryBarItems = getWebsiteItemsData().map((item) => {
    return (
      <ItemWrapper key={item.text}>
        <QueryBarWebsiteItem
          isCompare={false}
          text={item.text}
          secondaryText={item.secondaryText}
          textRenderFunction={(_isActive, text, secondaryText) => (
            <div>
              <div style={{ color: "rebeccapurple" }}>{text}</div>
              <div style={{ color: "green" }}>{secondaryText}</div>
            </div>
          )}
          image={item.image}
          onItemClick={() => action(`clicked item`)(item.text)}
        />
      </ItemWrapper>
    );
  });

  return <Flex>{queryBarItems}</Flex>;
};

WebsiteQueryBarItemSingleWithRendererFunction.story = {
  name: "Website Query Bar Item With Renderer function",
};

export const KeywordQueryBarItem = () => {
  const queryBarItems = getKeywordItemsData().map((item) => {
    return (
      <ItemWrapper key={item.text}>
        <QueryBarGroupItem
          text={item.text}
          secondaryText={item.secondaryText}
          icon={item.image}
          onItemClick={() => action("item click")(item.text)}
        />
      </ItemWrapper>
    );
  });

  return <Flex>{queryBarItems}</Flex>;
};

export const KeywordQueryBarItemWithBadge = () => {
  const queryBarItems = getKeywordItemsData().map((item) => {
    return (
      <ItemWrapper key={item.text}>
        <QueryBarGroupItem
          isCompare={true}
          text={item.text}
          secondaryText={item.secondaryText}
          icon={item.image}
          onItemClick={() => action("item click")(item.text)}
          badgeColor={item.badgeColor}
        />
      </ItemWrapper>
    );
  });

  return <Flex>{queryBarItems}</Flex>;
};

export const CategoryQueryBarItem = () => {
  const queryBarItems = getCategoryItemsData().map((item) => {
    return (
      <ItemWrapper key={item.text}>
        <QueryBarGroupItem
          text={item.text}
          secondaryText={item.secondaryText}
          icon={item.image}
          onItemClick={() => action("item click")(item.text)}
        />
      </ItemWrapper>
    );
  });

  return <Flex>{queryBarItems}</Flex>;
};

export const CategoryQueryBarItemWithCustomRightIcon = () => {
  const queryBarItems = getCategoryItemsData().map((item) => {
    return (
      <ItemWrapper key={item.text}>
        <QueryBarGroupItem
          iconName="arrow"
          text={item.text}
          secondaryText={item.secondaryText}
          icon={item.image}
          onItemClick={() => action("item click")(item.text)}
        />
      </ItemWrapper>
    );
  });

  return <Flex>{queryBarItems}</Flex>;
};

CategoryQueryBarItemWithCustomRightIcon.story = {
  name: "Category Query Bar Item with custom right icon",
};

export const CategoryQueryBarItemCompare = () => {
  const queryBarItems = getCategoryItemsData().map((item) => {
    return (
      <ItemWrapper key={item.text}>
        <QueryBarGroupItem
          text={item.text}
          secondaryText={item.secondaryText}
          icon={item.image}
          onItemClick={() => action("item click")(item.text)}
          onButtonClick={() => action("clicked close button")(item.text)}
          isCompare={true}
        />
      </ItemWrapper>
    );
  });

  return <Flex>{queryBarItems}</Flex>;
};

CategoryQueryBarItemCompare.story = {
  name: "Category Query Bar Item (Compare)",
};

export const AppCategoryQueryBarItem = () => {
  const queryBarItems = getAppCategoryItemsData().map((item) => {
    return (
      <ItemWrapper key={item.text}>
        <QueryBarGroupItem
          text={item.text}
          secondaryText={item.secondaryText}
          icon={item.image}
          onItemClick={() => action("item click")(item.text)}
        />
      </ItemWrapper>
    );
  });

  return <Flex>{queryBarItems}</Flex>;
};

export const AppQueryBarItemCompare = () => {
  const queryBarItems = getAppCompareItemsData().map((item) => {
    return (
      <ItemWrapper key={item.text}>
        <QueryBarAppItem
          isCompare={true}
          text={item.text}
          secondaryText={item.secondaryText}
          image={item.image}
          badgeColor={item.badgeColor}
          onItemClick={() => action(`clicked item`)(item.text)}
          onButtonClick={() => action("clicked close button")(item.text)}
        />
      </ItemWrapper>
    );
  });

  return <Flex>{queryBarItems}</Flex>;
};

AppQueryBarItemCompare.story = {
  name: "App Query Bar Item (Compare)",
};
