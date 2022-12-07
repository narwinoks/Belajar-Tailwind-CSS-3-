const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // container:{
      //   center :true,
      //   padding :'1rem'
      // },
      color: {
        facebook: "#1877F2",
        twitter: "#1DA1F2",
        messenger: "#0099FF",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        // display: ["Zen Dots"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
