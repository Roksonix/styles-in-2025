interface ColorsGroupObject {
    name: string;
    toArray: () => string[];
}
  
const ColorsGroup = <T>(name: string, obj: T): T & ColorsGroupObject => {
    // @ts-expect-error
    const newObject = Object.entries(obj).reduce((agr, [key, value]) => {
        return { ...agr, [key]: value };
    }, {} as T);

    Object.defineProperty(newObject, "toArray", {
        // @ts-expect-error
        value: () => Object.values(newObject),
    });
    Object.defineProperty(newObject, "name", {
        value: name,
    });

    return newObject as T & ColorsGroupObject;
};

export const carbon = ColorsGroup("carbon", {
    0: "#FFFFFF",
    25: "#F7F7F8",
    50: "#E6E9EC",
    100: "#CBD1D7",
    200: "#B5BEC6",
    250: "#8995A1",
    300: "#6B7C8C",
    400: "#3A5166",
    500: "#092540",
  });
  
  export const midnight = ColorsGroup("midnight", {
    50: "#D8DCE8",
    100: "#B0B8D1",
    200: "#6F7EAB",
    300: "#435993",
    400: "#243C7B",
    500: "#16275D",
    600: "#0E1C48",
  });
  
  export const bluegrey = ColorsGroup("bluegrey", {
    100: "#F5F9FD",
    200: "#EDF2F7",
    300: "#D6E4F2",
    400: "#AEC7E0",
    500: "#6F93B7",
    600: "#38618C",
  });
  
  export const blue = ColorsGroup("blue", {
    50: "#F5F8FF",
    75: "#ECF1FF",
    100: "#E3EBFF",
    200: "#B8CCFE",
    300: "#94B2FE",
    350: "#6B95FF",
    400: "#3E74FE",
    500: "#195AFE",
    600: "#0534AC",
  });
  
  export const sky = ColorsGroup("sky", {
    100: "#EDF3FF",
    200: "#C5DAFF",
    300: "#A9C8FE",
    400: "#82AFFE",
    500: "#4D87F7",
  });
  
  export const teal = ColorsGroup("teal", {
    100: "#BDFDFF",
    200: "#87F4F8",
    300: "#6FE8EC",
    400: "#5FD5D9",
    500: "#3DB7BB",
    600: "#2F969D",
    700: "#0096AA",
  });
  
  export const torquoise = ColorsGroup("torquoise", {
    50: "#E6FAF5",
    100: "#B2F1EC",
    200: "#65E4D8",
    300: "#41C8BB",
    400: "#26B3A6",
    500: "#009688",
  });
  
  export const mint = ColorsGroup("mint", {
    100: "#A5FEE3",
    200: "#82F0CF",
    300: "#49E1B3",
    400: "#1EC794",
    500: "#13A77A",
  });
  
  export const green = ColorsGroup("green", {
    100: "#DDFFD4",
    200: "#BDF0AF",
    300: "#A5E593",
    400: "#8ACD77",
    500: "#70AF5F",
    s100: "#4FBF40",
    g100: "#039A80"
  });
  
  export const yellow = ColorsGroup("yellow", {
    100: "#FFF5D6",
    200: "#FFEAA8",
    300: "#FFDF7C",
    400: "#F9CF5A",
    500: "#DEA801",
    600: "#C18000"
  });
  
  export const orange = ColorsGroup("orange", {
    100: "#FFEBDD",
    200: "#FFD1B0",
    300: "#FF9A47",
    400: "#FF7A1A",
    500: "#DE5D00",
  });
  
  export const red = ColorsGroup("red", {
    100: "#FFE6E6",
    200: "#FFC9C9",
    300: "#FCAAA5",
    350: "#F48080",
    400: "#E95F5F",
    500: "#BB3F3F",
    s100: "#FF442D",
  });
  
  export const pink = ColorsGroup("pink", {
    100: "#FFD9E6",
    200: "#FDB1CB",
    300: "#F48FB1",
    400: "#E6648F",
    500: "#C6446F",
    600: "#E44675",
  });
  
  export const purple = ColorsGroup("purple", {
    100: "#F6BFFF",
    200: "#F1A9FE",
    300: "#CE67E0",
    400: "#B74DC9",
    500: "#912AA2",
  });
  
  export const indigo = ColorsGroup("indigo", {
    50: "#EFEFFF",
    100: "#DFDEFF",
    200: "#A6A2FF",
    300: "#7975F2",
    400: "#625ED9",
    500: "#524FA0",
  });
  
  export const brown = ColorsGroup("brown", {
    100: "#F5E3E0",
    200: "#E4BEB6",
    300: "#D4A197",
    400: "#C38A7F",
    500: "#AD695C",
  });
  
  export const black = ColorsGroup("black", {
    0: "#000000",
  });
  
  export const navigation = ColorsGroup("navigation", {
    ACTIVE_BLUE: "#3E74FE",
    ACTIVE_TILE_BACKGROUND: "#ECF2F9",
    ACTIVE_TILE_CLICKED: "#CADCFD",
    ACTIVE_TILE_HOVER: "#DCE8FE",
    ICON_BAR_BACKGROUND: "#DFE5EB",
    BORDER_DARK_1: "#E6E9EC",
    BORDER_DARK_2: "#CBD1D7",
    BORDER_DARK_3: "#B5BEC6",
    ICON_DARK: "#092540",
    ITEM_HOVER: "#F7F7F8",
    NAV_BACKGROUND: "#EDF1F5",
    NAV_ITEM_SELECTED: "#DCE6F5",
    UPSALE: "#7975F2",
    IMPERSONATE: "#F26F6F",
    IMPERSONATE_HOVER: "#DD6667",
    DEMO: "#ffb366",
  });
  
  export const solutions = ColorsGroup("solutions", {
    DIGITAL_RESEARCH: "#0FBFE5",
    DIGITAL_MARKETING: "#ff326f",
    SALES: "#FFB800",
    INVESTORS: "#00CA9A",
    SHOPPER: "#C343FF",
  });
  