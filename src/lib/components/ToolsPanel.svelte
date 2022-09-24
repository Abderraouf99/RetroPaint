<script lang="ts">
  import { AVAILABLE_TOOLS } from "../constants";

  let activeTool = "pencil";

  const tools = AVAILABLE_TOOLS;

  function handleToolSelect(event: MouseEvent) {
    const { dataset } = event.target;
    activeTool = dataset.toolLabel;
    console.log(activeTool);
  }
</script>

<div class="grid-column-2 tools-container">
  {#each tools as tool}
    <div
      class={tool.label === activeTool ? "active-tool" : "tool"}
      data-tool-label={tool.label}
      on:click={handleToolSelect}
    >
      <img
        data-tool-label={tool.label}
        class="tool-image"
        src={tool.src}
        alt=""
      />
    </div>
  {/each}
</div>
<div class="spacer" />
<div class="tools-options" />

<style>
  :root {
    --button-border-size: 1.25px;
  }

  .tools-container {
    max-width: 90%;
    margin-left: 2px;
    border-right: solid 1.25px black;
    border-bottom: solid 1.25px black;

    margin-right: auto;
  }
  .grid-column-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .tool {
    width: 90%;
    aspect-ratio: 1/1;
    background-color: var(--primary-color);
    border-top: solid var(--button-border-size) white;
    border-left: solid var(--button-border-size) white;

    border-right: solid var(--button-border-size) var(--secondary-color);
    border-bottom: solid var(--button-border-size) var(--secondary-color);
  }

  .active-tool {
    background-image: url("/src/assets/tools/transparentbg.png");
    background-size: contain;
    border-top: solid 1px black;
    border-left: solid 1px black;
    border-right: solid 1px var(--secondary-color);
    border-bottom: solid 1px var(--secondary-color);
  }
  .tool-image {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .spacer {
    height: 5px;
  }

  .tools-options {
    width: 70%;
    height: 80px;
    border-top: solid 1px var(--secondary-color);
    border-left: solid 1px var(--secondary-color);
    margin: auto;
    border-right: solid 1px white;
    border-bottom: solid 1px white;
  }
</style>
