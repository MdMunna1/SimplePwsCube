//** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // আপনার React ফোল্ডারে সব js এবং jsx ফাইল
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // DaisyUI প্লাগইন যুক্ত করুন
};
