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
export const mainBGcolor = "rgba(17, 15, 43, 1)";
export const whiteColor = "#fff";
export const greenColor = "rgba(56, 210, 174, 1)";
export const orangeColor = "rgba(255, 138, 92, 1)";
export const purpleColor = "rgba(210, 41, 196, 1)";
export const blueColor = "rgba(15, 100, 167, 1)";
export const yellowColor = "rgba(243, 181, 75, 1)";
//adaptive size functions
