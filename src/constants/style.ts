import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const vw = width / 100;
export const vh = height / 100;

//font size
export const titleSize = 4.3 * vw;
export const descriptionSize = 3 * vw;
export const regularSize = 5 * vw;

//typography
export const fontBlack = "Lato Bold";
export const fontBold = "Lato Bold";
export const fontRegular = "Lato Regular";
export const fontLight = "Lato Light";

export const fontBlackItalic = "Lato Bold Italic";
export const fontBoldItalic = "Lato Bold Italic";
export const fontRegularItalic = "Lato Regular Italic";
export const fontLightItalic = "Lato Light Italic";

//colors

//adaptive size functions
