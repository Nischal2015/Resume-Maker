module.exports = {
  theme: {
    extend: {
      fontSize: {
        name: ["var(--text-name)", "calc(1.15*var(--text-name))"],
        heading: ["var(--text-heading)", "calc(1.15*var(--text-heading))"],
        body: ["var(--text-body)", "var(--text-body)"],
      },
    },
  },
  content: ["./*.html", "./src/**/*.css"],
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/forms")],
};
