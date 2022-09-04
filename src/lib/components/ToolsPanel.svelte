<script lang="ts">
  let activeTool = "pencil";

  const availableTools = [
    {
      label: "selection-free",
      src: "src/assets/tools/free-select.png",
      alt: "Free form selection tool",
    },
    {
      label: "selection-rect",
      src: "src/assets/tools/rect-select.png",
      alt: "Rectangular selection tool",
    },
    { label: "eraser", src: "src/assets/tools/eraser.png", alt: "Eraser tool" },
    {
      label: "paint-bucket",
      src: "src/assets/tools/paint-bucker.png",
      alt: "Paint bucket tool",
    },
    {
      label: "color-picker",
      src: "src/assets/tools/color-picker.png",
      alt: "Color picker tool",
    },
    { label: "zoom", src: "src/assets/tools/zoom.png", alt: "Zooming tool" },
    { label: "pencil", src: "src/assets/tools/pencil.png", alt: "Pencil tool" },
    {
      label: "brush",
      src: "src/assets/tools/paint-brush.png",
      alt: "Paint brush tool",
    },
    {
      label: "graphiti",
      src: "src/assets/tools/grafiti.png",
      alt: "Graphiti tool",
    },
    { label: "text", src: "src/assets/tools/text.png", alt: "Text tool" },
    { label: "line", src: "src/assets/tools/line.png", alt: "Line tool" },
    {
      label: "curve",
      src: "src/assets/tools/bezzier.png",
      alt: "Bezzier curve tool",
    },
    {
      label: "rect",
      src: "src/assets/tools/rectangle.png",
      alt: "Rectangle tool",
    },
    { label: "shape", src: "src/assets/tools/shape.png", alt: "Shape tool" },
    {
      label: "ellipse",
      src: "src/assets/tools/ellipse.png",
      alt: "Ellipse tool",
    },
    {
      label: "rounded-rect",
      src: "src/assets/tools/rounded-rect.png",
      alt: "Rounded rectangle tool",
    },
  ];

  function handleToolSelect(event: MouseEvent) {
    const { dataset } = event.target;
    console.log(dataset);
    activeTool = dataset.toolLabel;
    console.log(activeTool);
  }
</script>

<div class="grid-column-2 tools-container">
  {#each availableTools as tool}
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
