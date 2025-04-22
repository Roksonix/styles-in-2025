import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs";
import { css } from "@emotion/css";

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
import { renderDefaultTextComponent } from "../src/Common/QueryBarItemHelper";

const itemWrapperStyles = css`
  margin-right: 8px;
  display: flex;
  flex-shrink: 1;
  max-width: 320px;
  min-width: 128px;
`;
const flex = css`
  display: flex;
`;

export default {
  title: "COMPONENTS/QueryBar",
  decorators: [(Story: React.ComponentType) => <Story />],
};

export const WebsiteQueryBarItemSingle = () => {
  const queryBarItems = getWebsiteItemsData().map((item) => {
    return (
      <div className={itemWrapperStyles} key={item.text}>
        <QueryBarWebsiteItem
          isCompare={false}
          text={item.text}
          image={item.image}
          onItemClick={() => action(`clicked item`)(item.text)}
        />
      </div>
    );
  });

  return <div className={flex}>{queryBarItems}</div>;
};

WebsiteQueryBarItemSingle.story = {
  name: "Website Query Bar Item (Single)",
};

export const WebsiteQueryBarItemSingleReverseEllipsis = () => {
  const queryBarItems = getWebsiteItemsData().map((item) => {
    return (
      <div className={itemWrapperStyles} key={item.text}>
        <QueryBarWebsiteItem
          isCompare={false}
          text={item.text}
          image={item.image}
          onItemClick={() => action(`clicked item`)(item.text)}
          textRenderFunction={(...args) => renderDefaultTextComponent(args[0], args[1], args[2], true)}
        />
      </div>
    );
  });

  return <div className={flex}>{queryBarItems}</div>;
};

WebsiteQueryBarItemSingle.story = {
  name: "Website Query Bar Item (Single) with reverse ellipsis",
};

export const WebsiteQueryBarItemCompare = () => {
  const queryBarItems = getWebsiteCompareItemsData().map((item) => {
    return (
      <div className={itemWrapperStyles} key={item.text}>
        <QueryBarWebsiteItem
          isCompare={true}
          text={item.text}
          image={item.image}
          onItemClick={() => action(`clicked item`)(item.text)}
          badgeColor={item.badgeColor}
          onButtonClick={() => action("clicked close button")(item.text)}
          isDisabled={boolean("Disable icon and text hover state", false)}
        />
      </div>
    );
  });

  return <div className={flex}>{queryBarItems}</div>;
};

WebsiteQueryBarItemCompare.story = {
  name: "Website Query Bar Item (Compare)",
};

export const WebsiteQueryBarItemSingleWithSecondaryText = () => {
  const queryBarItems = getWebsiteItemsData().map((item) => {
    return (
      <div className={itemWrapperStyles} key={item.text}>
        <QueryBarWebsiteItem
          isCompare={false}
          text={item.text}
          secondaryText={item.secondaryText}
          image={item.image}
          onItemClick={() => action(`clicked item`)(item.text)}
        />
      </div>
    );
  });

  return <div className={flex}>{queryBarItems}</div>;
};

WebsiteQueryBarItemSingleWithSecondaryText.story = {
  name: "Website Query Bar Item With Secondary Text",
};

export const WebsiteQueryBarItemSingleWithRendererFunction = () => {
  const queryBarItems = getWebsiteItemsData().map((item) => {
    return (
      <div className={itemWrapperStyles} key={item.text}>
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
      </div>
    );
  });

  return <div className={flex}>{queryBarItems}</div>;
};

WebsiteQueryBarItemSingleWithRendererFunction.story = {
  name: "Website Query Bar Item With Renderer function",
};

export const KeywordQueryBarItem = () => {
  const queryBarItems = getKeywordItemsData().map((item) => {
    return (
      <div className={itemWrapperStyles} key={item.text}>
        <QueryBarGroupItem
          text={item.text}
          secondaryText={item.secondaryText}
          icon={item.image}
          onItemClick={() => action("item click")(item.text)}
        />
      </div>
    );
  });

  return <div className={flex}>{queryBarItems}</div>;
};

export const KeywordQueryBarItemWithBadge = () => {
  const queryBarItems = getKeywordItemsData().map((item) => {
    return (
      <div className={itemWrapperStyles} key={item.text}>
        <QueryBarGroupItem
          isCompare={true}
          text={item.text}
          secondaryText={item.secondaryText}
          icon={item.image}
          onItemClick={() => action("item click")(item.text)}
          badgeColor={item.badgeColor}
        />
      </div>
    );
  });

  return <div className={flex}>{queryBarItems}</div>;
};

export const CategoryQueryBarItem = () => {
  const queryBarItems = getCategoryItemsData().map((item) => {
    return (
      <div className={itemWrapperStyles} key={item.text}>
        <QueryBarGroupItem
          text={item.text}
          secondaryText={item.secondaryText}
          icon={item.image}
          onItemClick={() => action("item click")(item.text)}
        />
      </div>
    );
  });

  return <div className={flex}>{queryBarItems}</div>;
};

export const CategoryQueryBarItemWithCustomRightIcon = () => {
  const queryBarItems = getCategoryItemsData().map((item) => {
    return (
      <div className={itemWrapperStyles} key={item.text}>
        <QueryBarGroupItem
          iconName="arrow"
          text={item.text}
          secondaryText={item.secondaryText}
          icon={item.image}
          onItemClick={() => action("item click")(item.text)}
        />
      </div>
    );
  });

  return <div className={flex}>{queryBarItems}</div>;
};

CategoryQueryBarItemWithCustomRightIcon.story = {
  name: "Category Query Bar Item with custom right icon",
};

export const CategoryQueryBarItemCompare = () => {
  const queryBarItems = getCategoryItemsData().map((item) => {
    return (
      <div className={itemWrapperStyles} key={item.text}>
        <QueryBarGroupItem
          text={item.text}
          secondaryText={item.secondaryText}
          icon={item.image}
          onItemClick={() => action("item click")(item.text)}
          onButtonClick={() => action("clicked close button")(item.text)}
          isCompare={true}
        />
      </div>
    );
  });

  return <div className={flex}>{queryBarItems}</div>;
};

CategoryQueryBarItemCompare.story = {
  name: "Category Query Bar Item (Compare)",
};

export const AppCategoryQueryBarItem = () => {
  const queryBarItems = getAppCategoryItemsData().map((item) => {
    return (
      <div className={itemWrapperStyles} key={item.text}>
        <QueryBarGroupItem
          text={item.text}
          secondaryText={item.secondaryText}
          icon={item.image}
          onItemClick={() => action("item click")(item.text)}
        />
      </div>
    );
  });

  return <div className={flex}>{queryBarItems}</div>;
};

export const AppQueryBarItemCompare = () => {
  const queryBarItems = getAppCompareItemsData().map((item) => {
    return (
      <div className={itemWrapperStyles} key={item.text}>
        <QueryBarAppItem
          isCompare={true}
          text={item.text}
          secondaryText={item.secondaryText}
          image={item.image}
          badgeColor={item.badgeColor}
          onItemClick={() => action(`clicked item`)(item.text)}
          onButtonClick={() => action("clicked close button")(item.text)}
        />
      </div>
    );
  });

  return <div className={flex}>{queryBarItems}</div>;
};

AppQueryBarItemCompare.story = {
  name: "App Query Bar Item (Compare)",
};
