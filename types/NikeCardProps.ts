import { ImageSourcePropType } from "react-native";

interface ShoesColors {
  colorName: string;
  colorImage: ImageSourcePropType;
  backgroundColor: string;
}

export interface NikePropsCard {
  name: string;
  price: number;
  edition: string;
  colors: ShoesColors[];
}
