import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { twMerge } from "tailwind-merge";

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

const ItemWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={twMerge("mr-2 flex flex-shrink-1 max-w-[320px] min-w-[128px]", className)}>
    {children}
  </div>
);

const meta: Meta = {
  title: "COMPONENTS/QueryBar",
  decorators: [(Story: React.ComponentType) => <Story />],
};

export default meta;
type Story = StoryObj;

export const WebsiteQueryBarItemSingle: Story = {
  render: () => {
    const queryBarItems = getWebsiteItemsData().map((item) => (
      <ItemWrapper key={item.text}>
        <QueryBarWebsiteItem
          isCompare={false}
          text={item.text}
          image={item.image}
          onItemClick={() => action(`clicked item`)(item.text)}
        />
      </ItemWrapper>
    ));

    return <div className="flex">{queryBarItems}</div>;
  },
  name: "Website Query Bar Item (Single)",
};

export const WebsiteQueryBarItemSingleReverseEllipsis: Story = {
  render: () => {
    const queryBarItems = getWebsiteItemsData().map((item) => (
      <ItemWrapper key={item.text}>
        <QueryBarWebsiteItem
          isCompare={false}
          text={item.text}
          image={item.image}
          onItemClick={() => action(`clicked item`)(item.text)}
          textRenderFunction={(...args) => renderDefaultTextComponent(args[0], args[1], args[2], true)}
        />
      </ItemWrapper>
    ));

    return <div className="flex">{queryBarItems}</div>;
  },
  name: "Website Query Bar Item (Single) with reverse ellipsis",
};

export const WebsiteQueryBarItemCompare: Story = {
  render: () => {
    const queryBarItems = getWebsiteCompareItemsData().map((item) => (
      <ItemWrapper key={item.text}>
        <QueryBarWebsiteItem
          isCompare={true}
          text={item.text}
          image={item.image}
          onItemClick={() => action(`clicked item`)(item.text)}
          badgeColor={item.badgeColor}
          onButtonClick={() => action("clicked close button")(item.text)}
        />
      </ItemWrapper>
    ));

    return <div className="flex">{queryBarItems}</div>;
  },
  name: "Website Query Bar Item (Compare)",
};

export const WebsiteQueryBarItemSingleWithSecondaryText: Story = {
  render: () => {
    const queryBarItems = getWebsiteItemsData().map((item) => (
      <ItemWrapper key={item.text}>
        <QueryBarWebsiteItem
          isCompare={false}
          text={item.text}
          secondaryText={item.secondaryText}
          image={item.image}
          onItemClick={() => action(`clicked item`)(item.text)}
        />
      </ItemWrapper>
    ));

    return <div className="flex">{queryBarItems}</div>;
  },
  name: "Website Query Bar Item With Secondary Text",
};

export const WebsiteQueryBarItemSingleWithRendererFunction: Story = {
  render: () => {
    const queryBarItems = getWebsiteItemsData().map((item) => (
      <ItemWrapper key={item.text}>
        <QueryBarWebsiteItem
          isCompare={false}
          text={item.text}
          secondaryText={item.secondaryText}
          textRenderFunction={(_isActive, text, secondaryText) => (
            <div>
              <div className="text-purple-600">{text}</div>
              <div className="text-green-600">{secondaryText}</div>
            </div>
          )}
          image={item.image}
          onItemClick={() => action(`clicked item`)(item.text)}
        />
      </ItemWrapper>
    ));

    return <div className="flex">{queryBarItems}</div>;
  },
  name: "Website Query Bar Item With Renderer function",
};

export const KeywordQueryBarItem: Story = {
  render: () => {
    const queryBarItems = getKeywordItemsData().map((item) => (
      <ItemWrapper key={item.text}>
        <QueryBarGroupItem
          text={item.text}
          secondaryText={item.secondaryText}
          icon={item.image}
          onItemClick={() => action("item click")(item.text)}
        />
      </ItemWrapper>
    ));

    return <div className="flex">{queryBarItems}</div>;
  },
};

export const KeywordQueryBarItemWithBadge: Story = {
  render: () => {
    const queryBarItems = getKeywordItemsData().map((item) => (
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
    ));

    return <div className="flex">{queryBarItems}</div>;
  },
};

export const CategoryQueryBarItem: Story = {
  render: () => {
    const queryBarItems = getCategoryItemsData().map((item) => (
      <ItemWrapper key={item.text}>
        <QueryBarGroupItem
          text={item.text}
          secondaryText={item.secondaryText}
          icon={item.image}
          onItemClick={() => action("item click")(item.text)}
        />
      </ItemWrapper>
    ));

    return <div className="flex">{queryBarItems}</div>;
  },
};

export const CategoryQueryBarItemWithCustomRightIcon: Story = {
  render: () => {
    const queryBarItems = getCategoryItemsData().map((item) => (
      <ItemWrapper key={item.text}>
        <QueryBarGroupItem
          text={item.text}
          secondaryText={item.secondaryText}
          icon={item.image}
          onItemClick={() => action("item click")(item.text)}
          iconName="add-icon"
        />
      </ItemWrapper>
    ));

    return <div className="flex">{queryBarItems}</div>;
  },
};

export const CategoryQueryBarItemCompare: Story = {
  render: () => {
    const queryBarItems = getCategoryItemsData().map((item) => (
      <ItemWrapper key={item.text}>
        <QueryBarGroupItem
          isCompare={true}
          text={item.text}
          secondaryText={item.secondaryText}
          icon={item.image}
          onItemClick={() => action("item click")(item.text)}
        />
      </ItemWrapper>
    ));

    return <div className="flex">{queryBarItems}</div>;
  },
};

export const AppCategoryQueryBarItem: Story = {
  render: () => {
    const queryBarItems = getAppCategoryItemsData().map((item) => (
      <ItemWrapper key={item.text}>
        <QueryBarAppItem
          text={item.text}
          secondaryText={item.secondaryText}
          image={item.image}
          onItemClick={() => action("item click")(item.text)}
          isCompare={false}
        />
      </ItemWrapper>
    ));

    return <div className="flex">{queryBarItems}</div>;
  },
};

export const AppQueryBarItemCompare: Story = {
  render: () => {
    const queryBarItems = getAppCompareItemsData().map((item) => (
      <ItemWrapper key={item.text}>
        <QueryBarAppItem
          isCompare={true}
          text={item.text}
          secondaryText={item.secondaryText}
          image={item.image}
          onItemClick={() => action("item click")(item.text)}
          badgeColor={item.badgeColor}
          onButtonClick={() => action("clicked close button")(item.text)}
        />
      </ItemWrapper>
    ));

    return <div className="flex">{queryBarItems}</div>;
  },
};
