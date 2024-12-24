import {useWindowDimensions, Dimensions, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');

export const isSmallScreen = width < 375;
export const isMediumScreen = width >= 375 && width < 768;
export const isLargeScreen = width >= 768;

export const useResponsive = () => {
  const window = useWindowDimensions();
  const {width, height} = window;
  return {
    width,
    height,
    isMobile: width < 768,
    isLandScape: width > height,
    isTablet: width >= 768,
    isDesktop: width >= 1024,
    fontSize: PixelRatio.getFontScale(),
  };
};
