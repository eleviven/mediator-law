export const renderComponent = (component) => {
  switch (component) {
    case "function":
      return component();
    default:
      return component;
  }
};
