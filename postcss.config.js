import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [
    postcssPresetEnv({
      features: {
        "nesting-rules": true,
        "logical-properties-and-values": false,
      },
      browsers: ["> 1%", "last 2 versions", "not dead"],
    }),
  ],
};
