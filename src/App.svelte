<script lang="ts">
</script>

<main>
  <div class="app-options-container" />
  <div class="grid-column-2 grid-row-2">
    <div class="tools-panel">
      <div />
    </div>

    <div class="diagram-area">
      <div />
    </div>

    <div class="color-palette-container" />
  </div>
</main>

<style>
  :root {
    --option-bar-height: 20px;
    --tool-bar-width: 100px;
    --color-picker-footer-height: 80px;
  }
  main {
    height: 100%;
    width: 100%;
  }

  .app-options-container {
    height: var(--option-bar-height);
    width: 100%;
    background-color: blue;
  }
  .grid-column-2 {
    display: grid;
    grid-template-columns: var(--tool-bar-width) calc(
        100vw - var(--tool-bar-width)
      );
    height: 100%;
    width: 100%;
  }
  .grid-row-2 {
    grid-template-rows:
      calc(
        100vh -
          calc(var(--color-picker-footer-height) + var(--option-bar-height))
      )
      calc(var(--color-picker-footer-height) + var(--option-bar-height));
  }
  .color-palette-container {
    height: var(--color-picker-footer-height);
    grid-column: 2;
    width: 100%;
  }

  .tools-panel {
    background-color: black;
  }

  .diagram-area {
    background-color: red;
  }
</style>
