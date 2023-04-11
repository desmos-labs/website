module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      md: "768px",
      lg: "1280px",
      xl: "1920px",
    },
    extend: {
      // All the widths and minHeights are follow the Figma section size to define
      // mobile: The Mobile section size
      // md: The Tablet section size
      // lg: The Desktop section size
      // xl: The Largest section size
      width: {
        mobile: "375px",
        md: "768px",
        lg: "1280px",
        xl: "1920px",
      },
      height: {
        "navbar-mobile": "60px",
        "navbar-md": "60px",
        "navbar-lg": "80px",
        "navbar-xl": "80px",
        "our-modules-mobile": "489px",
        "our-modules-md": "752px",
        "our-modules-lg": "600px",
        "our-modules-xl": "800px",
      },
      minHeight: {
        mobile: "589px",
        md: "768px",
        lg: "752px",
        xl: "1000px",
      },
      padding: {
        xMobile: "20px",
        xMd: "40px",
        xLg: "90px",
        xXl: "100px",
        yMobile: "26px",
        yMd: "60px",
        yLg: "80px",
        yXl: "80px",
        "navbar-mobile": "60px",
        "navbar-md": "60px",
      },
      margin: {
        xMobile: "20px",
        xMd: "40px",
        xLg: "90px",
        xXl: "100px",
        yMobile: "26px",
        yMd: "60px",
        yLg: "80px",
        yXl: "80px",
        "navbar-mobile": "60px",
        "navbar-md": "60px",
      },
      colors: {
        desmos: {
          primary: "#FF6C3E",
          hover: "#FFF3E0",
          background: { primary: "#141419", secondary: "#120703" },
          black: {
            light: "#DDDDDD",
            Default: "#25282D",
            dark: "#000000",
          },
          white: {
            light: "#EFEFEF",
            Default: "#DDDDDD",
            dark: "#C2C2C2",
          },
          red: "#E15163",
          gray: {
            light: "#F6F6F6",
            Default: "#D5D4D4",
            dark: "#AFAFAF",
          },
          orange: {
            light: "#FFE3CF",
            Default: "#FFC398",
            dark: "#FF8024",
          },
          salmon: {
            light: "#FFE8E3",
            Default: "#FFAF9C",
            dark: "#FF5F38",
          },
          purple: {
            light: "#FDDBEC",
            Default: "#F9ACD4",
            dark: "#F359A8",
          },
          indigo: {
            light: "#EAD8FE",
            Default: "#CC9FFB",
            dark: "#A558F3",
          },
        },
      },
      backgroundImage: {
        "gradient-to-49": "linear-gradient(49.81deg, var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-orange-mobile": "url('/bg gradient orange_mobile.webp')",
        "gradient-orange-tablet": "url('/bg gradient orange_tablet.png')",
        "gradient-orange-desktop": "url('/bg gradient orange_desktop.png')",
        "modules-section-button": "url('/modules-button.webp')",
        "modules-section-button-hover": "url('/modules-button-hover.webp')",
        "kickstart-program-banner": "url('/program-1920.png')",
        "academy-banner": "url('/academy-1920.png')",
        "university-banner": "url('/university-1920.png')",
        "university-banner-mobile": "url('/banner-background.png')",
        "all-in-one": "url('/section2_d.png')",
        "all-in-one-md": "url('/all-in-one-bg-768w.png')",
        "all-in-one-mobile": "url('/all-in-one-bg-375w.webp')",
        "modules-xl": "url('/Section3_1920w.png')",
        "modules-lg": "url('/Section3_1280w.png')",
        cosmwasm: "url('/section4_d.png')",
        "complete-toolkit": "url('/section5_d.png')",
        "home-banner-mobile": "url('/home_animation_375w.webp')",
        "home-banner-md": "url('/home_animation_768w.png')",
        "home-banner-lg": "url('/home_animation_1280w.png')",
        "home-banner-xl": "url('/home_animation_1920w.png')",
        "why-desmos-01": "url('/Why-Desmos-1.webp')",
        "why-desmos-02": "url('/Why-Desmos-2.webp')",
        contribute: "url('/contribute-section-video-d.png')",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-12%)" },
        },
        smallBounce: {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(5%)" },
        },
        goRight: {
          "0%, 100%": { transform: "translateX(0%)" },
          "50%": { transform: "translateX(45%)" },
        },
      },
      animation: {
        modulesButtonBounce: "bounce 6s ease-in-out infinite",
        popupImgBounce: "smallBounce 2s ease-in-out infinite",
        whyDesmosSlideNextButton: "goRight 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
}
