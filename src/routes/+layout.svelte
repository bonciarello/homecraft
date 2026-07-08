<script>
  // Layout — provides global styles and the slot for page content
</script>

<slot />

<style>
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(body) {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background: #F5F3F0;
    color: #1E1E24;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :global(:focus-visible) {
    outline: 2.5px solid #5344DB;
    outline-offset: 2px;
    border-radius: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    :global(*) {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
</style>
