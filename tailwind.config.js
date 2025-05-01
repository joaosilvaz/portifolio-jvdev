// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        mdplus: '760px',
        xlmid: '1300px',
        xlcustom: '1000px',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(90deg, #945dd6, #6978d1 55%, #13adc7)',
        'card': 'linear-gradient(90deg, #cba2f0, #a8b3f0 55%, #69d3e4)',
      },
    },
  },
  plugins: [],
}
