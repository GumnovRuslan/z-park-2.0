
<svelte:head>
  <title>
    Z-park
  </title>
</svelte:head>

<main>
  <slot/>
</main>

<style lang="scss">
  main {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow: auto;
  }
</style>