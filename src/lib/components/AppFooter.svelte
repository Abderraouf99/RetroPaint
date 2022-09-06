<script lang="ts">
  import { DEFAULT_COLORS } from "../constants";
  import {
    backgroundColorStores,
    foregroundColorStores,
  } from "../stores/toolsColorsStores";

  const colorPalette = DEFAULT_COLORS;
  let mousePosition = { x: 0, y: 0 };
  let foregroundColor: string = "";
  let backgroundColor: string = "";

  foregroundColorStores.subscribe((value) => {
    foregroundColor = value;
  });
  backgroundColorStores.subscribe((value) => {
    backgroundColor = value;
  });

  function handleMouseMove(event: MouseEvent) {
    const { clientX, clientY } = event;
    mousePosition = { x: clientX, y: clientY };
  }

  function handleColorSwitch() {
    const oldForegroundColor = foregroundColor;
    const oldBackgroundColor = backgroundColor;

    backgroundColorStores.update(() => oldForegroundColor);
    foregroundColorStores.update(() => oldBackgroundColor);
  }

  window.addEventListener("mousemove", handleMouseMove);
</script>

<div style="height: 5px" />
<div class="color-picker-container">
  <div class="grid-column-16 grid-row-2 fitted-color-choices">
    <div
      class="primary-secondary-color-switcher top-left-border bottom-right-border"
    >
      <div
        style:background-color={foregroundColor}
        class="primary-color top-left-border bottom-right-border"
        on:click={handleColorSwitch}
      />
      <div
        style:background-color={backgroundColor}
        class="secondary-color  top-left-border bottom-right-border"
        on:click={handleColorSwitch}
      />
    </div>
    {#each colorPalette as color}
      <div
        style:background-color={color}
        class="color-tile top-left-border bottom-right-border"
      />
    {/each}
  </div>
  <div style="height: 5px" />
</div>
<div style=" border-top: solid 1px white;">
  <div style="height: 2px" />
  <div class="grid-column-3">
    <div class="top-left-border bottom-right-border">
      If you need help with the application, click on the help menu
    </div>
    <div class="top-left-border bottom-right-border">
      {mousePosition.x}, {mousePosition.y}
    </div>
    <div class="top-left-border bottom-right-border" />
  </div>
</div>

<style>
  :root {
    --border-size: 2px;
    --color-box-size: 16px;
  }
  .grid-column-16 {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
  }
  .grid-row-2 {
    grid-template-rows: repeat(2, 1fr);
  }
  .fitted-color-choices {
    width: 256px;
    height: 32px;
  }

  .primary-secondary-color-switcher {
    position: relative;
    width: calc(2 * var(--color-box-size));
    aspect-ratio: 1/1;
    grid-row: span 2;
    grid-column: span 2;
    background-image: url("/src/assets/tools/transparentbg.png");
    background-size: contain;
  }

  .color-tile {
    height: calc(var(--color-box-size) - var(--border-size));
    aspect-ratio: 1/1;
  }

  .grid-column-3 {
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
    gap: 5px;
  }

  .color-picker-container {
    border-bottom: solid 1px var(--secondary-color);
  }

  .primary-color {
    position: absolute;
    top: 25%;
    left: 25%;
    background-color: black;
    height: calc(var(--color-box-size) - var(--border-size));
    aspect-ratio: 1/1;
    z-index: 1;
    transform: translate(-25%, -25%);
  }
  .secondary-color {
    position: absolute;
    bottom: 10%;
    right: 10%;
    background-color: white;
    height: calc(var(--color-box-size) - var(--border-size));
    aspect-ratio: 1/1;
  }

  .top-left-border {
    border-top: solid var(--border-size) var(--secondary-color);
    border-left: solid var(--border-size) var(--secondary-color);
  }
  .bottom-right-border {
    border-right: solid var(--border-size) white;
    border-bottom: solid var(--border-size) white;
  }
</style>
