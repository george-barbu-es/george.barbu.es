import { Platform } from 'react-native';

// Utility to create platform-aware components
export function createComponent(mobileImpl, webImpl) {
  return Platform.select({
    native: mobileImpl,
    default: webImpl || mobileImpl
  });
}

// Utility to handle styling across platforms
export function combinedStyle(mobileStyle, webStyle) {
  return Platform.select({
    native: mobileStyle,
    web: webStyle,
    default: mobileStyle
  });
}

// Utility for platform-specific props
export function platformProps(props, platformSpecificProps = {}) {
  const basePlatformProps = Platform.select({
    native: {
      // React Native specific prop mappings
      onClick: 'onPress',
    },
    web: {
      // Web specific prop mappings
      onPress: 'onClick',
    },
    default: {}
  });

  // Merge base platform props with any additional platform-specific props
  return {
    ...props,
    ...platformSpecificProps,
    ...(basePlatformProps || {})
  };
}