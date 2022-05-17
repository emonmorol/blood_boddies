module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "blood-banner": "url('/src/Images/banner.png')",
        "blood-donar": "url('/src/Images/blood-donar.png')",
        "counter-bg": "url('/src/Images/counter-bg.jpg')",
        "join-us": "url('/src/Images/joinus_bg.jpg')",
        "login-bg": "url('/src/Images/bg-login.webp')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fe3c47",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
