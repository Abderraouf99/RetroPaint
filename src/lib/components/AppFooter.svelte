<script lang="ts">
  const defaultColors: string[] = [
    "#000000",
    "#808080",
    "#800100",
    "#808000",
    "#008000",
    "#038080",
    "#0E0080",
    "#800180",
    "#7F8040",
    "#014040",
    "#0180FF",
    "#004080",
    "#4002FF",
    "#804000",
    "#FFFFFF",
    "#C0C0C0",
    "#FF0000",
    "#FFFF00",
    "#00FF00",
    "#00FFFF",
    "#0000FF",
    "#FF00FF",
    "#FFFF0F",
    "#00FF0F",
    "#0FFFFF",
    "#0F0FFF",
    "#FF000F",
    "#FF8040",
  ];

  let mousePosition = { x: 0, y: 0 };
  window.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;
    mousePosition = { x: clientX, y: clientY };
  });
</script>

<div style="height: 5px" />
<div class="color-picker-container">
  <div class="grid-column-16 grid-row-2 fitted-color-choices">
    <div class="primary-secondary-color-switcher">
      <div class="primary-color" />
      <div class="secondary-color" />
    </div>
    {#each defaultColors as color}
      <div style:background-color={color} class="color-tile" />
    {/each}
  </div>
  <div style="height: 5px" />
</div>
<div style=" border-top: solid 1px white;">
  <div style="height: 2px" />
  <div class="grid-column-3">
    <div class="grid-column-3-child">
      If you need help with the application, click on the help menu
    </div>
    <div class="grid-column-3-child">
      {mousePosition.x}, {mousePosition.y}
    </div>
    <div class="grid-column-3-child" />
  </div>
</div>

<style>
  .grid-column-16 {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
  }
  .grid-row-2 {
    grid-template-rows: repeat(2, 1fr);
  }
  .primary-secondary-color-switcher {
    grid-row: span 2;
    grid-column: span 2;
  }

  .fitted-color-choices {
    width: 256px;
    height: 32px;
  }

  .primary-secondary-color-switcher {
    position: relative;
    width: 32px;
    height: 32px;
    border-top: solid 1px var(--secondary-color);
    border-left: solid 1px var(--secondary-color);
    border-right: solid 1px white;
    border-bottom: solid 1px white;
    background-image: url("/src/assets/tools/transparentbg.png");
    background-size: contain;
  }

  .color-tile {
    height: 15px;
    width: 15px;
    border-top: solid 1px var(--secondary-color);
    border-left: solid 1px var(--secondary-color);
    border-right: solid 1px white;
    border-bottom: solid 1px white;
  }

  .grid-column-3 {
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
    gap: 5px;
  }
  .grid-column-3-child {
    border-top: solid 1px var(--secondary-color);
    border-left: solid 1px var(--secondary-color);

    border-bottom: solid 1px white;
    border-right: solid 1px white;
  }
  .color-picker-container {
    border-bottom: solid 1px var(--secondary-color);
  }

  .primary-color {
    position: absolute;
    top: 25%;
    left: 25%;
    background-color: black;
    height: 15px;
    width: 15px;
    z-index: 1;
    transform: translate(-25%, -25%);
    border-top: solid 2px white;
    border-left: solid 2px white;
    border-right: solid 2px var(--secondary-color);
    border-bottom: solid 2px var(--secondary-color);
  }
  .secondary-color {
    position: absolute;
    bottom: 10%;
    right: 10%;
    background-color: white;
    height: 15px;
    width: 15px;
    border-top: solid 2px white;
    border-left: solid 2px white;
    border-right: solid 2px var(--secondary-color);
    border-bottom: solid 2px var(--secondary-color);
  }
</style>
