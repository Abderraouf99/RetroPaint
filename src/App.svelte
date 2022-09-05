<script lang="ts">
  import AppFooter from "./lib/components/AppFooter.svelte";
  import AppOptions from "./lib/components/AppOptions.svelte";
  import Canvas from "./lib/components/Canvas.svelte";
  import ToolsPanel from "./lib/components/ToolsPanel.svelte";
</script>

<main>
  <div class="app-options-container">
    <AppOptions />
  </div>
  <div class="grid-column-2 grid-row-2">
    <div class="tools-panel">
      <ToolsPanel />
    </div>

    <div class="diagram-area">
      <Canvas />
    </div>

    <div class="color-palette-container">
      <AppFooter />
    </div>
  </div>
</main>

<style>
  :root {
    --option-bar-height: 20px;
    --tool-bar-width: 56px;
    --color-picker-footer-height: 70px;
  }
  main {
    height: 100%;
    width: 100%;
  }

  .app-options-container {
    height: var(--option-bar-height);
    width: 100%;
    background-color: var(--primary-color);
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
    grid-column: span 2;
    height: var(--color-picker-footer-height);
    width: 100%;
    background-color: var(--primary-color);
    border: solid 1px white;
  }

  .tools-panel {
    background-color: var(--primary-color);
    border: solid 1px black;
    border-top: solid 1px white;
  }

  .diagram-area {
    background-color: var(--secondary-color);
    border: solid 1px black;
    border-left: none;
  }
</style>
