module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Epilogue", "sans-serif;"],
      },
      colors: {
        primary: "#1DC071",
        secondary: "#6F49FD",
        text1: "#171725",
        text2: "#4B5264",
        text3: "#808191",
        text4: "#B2B3BD",
        "icon-color": "#A2A2A8",
        white: "#FFFFFF",
        whiteSoft: "#FCFBFF",
        graySoft: "#FCFCFC",
        strock: "#F1F1F3",
        lite: "#FCFCFD",
        error: "#EB5757",
        darkbg: "#13131A",
        darkSecondary: "#1C1C24",
        softDark: "#22222C",
        darkSoft: "#24242C",
        darkStroke: "#3A3A43",
        darkRed: "#422C32",
      },
      boxShadow: {
        sdPrimary: `rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px`,
      },
    },
  },
  plugins: [],
};
