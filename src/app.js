module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
 <script>
  document.getElementById('menu-toggle').onclick = function() {
    document.getElementById('menu').classList.toggle('hidden');
  };
</script>
