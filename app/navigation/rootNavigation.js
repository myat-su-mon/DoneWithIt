const { createRef } = require("react");

export const navigationRef = createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

export default { navigate };
