<script lang="ts">
  import { afterUpdate, onMount } from "svelte";
  import type { Point } from "../interfaces/point";

  let ctx: CanvasRenderingContext2D | undefined;
  let isMouseDown: boolean = false;
  let canvasOffset: Point;
  let points: Point[] = [];
  afterUpdate(handleCanvasUpdate);

  window.addEventListener("mousemove", handleMouseMove);

  function handleCanvasUpdate() {
    const canvas = document.querySelector("canvas");
    if (canvas === null) throw new Error("Canvas cannot be null");
    ctx = canvas.getContext("2d");
    const { x, y } = canvas.getBoundingClientRect();
    canvasOffset = { x, y } as Point;
  }

  function handleMouseDown(event: MouseEvent): void {
    isMouseDown = event.button === 0;
    if (!isMouseDown) return;
    points.push({
      x: event.clientX - canvasOffset.x,
      y: event.clientY - canvasOffset.y,
    } as Point);
  }

  function handleMouseMove(event: MouseEvent): void {
    if (!isMouseDown) return;
    points.push({
      x: event.clientX - canvasOffset.x,
      y: event.clientY - canvasOffset.y,
    } as Point);
    console.log(points);
    draw(points);
  }

  function handleMouseUp(event: MouseEvent): void {
    points = [];
    isMouseDown = false;
  }

  function draw(points: Point[]): void {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
    ctx.restore();
  }
</script>

<canvas
  on:mousedown={handleMouseDown}
  on:mouseup={handleMouseUp}
  width="1200px"
  height="600px"
/>

<style>
  canvas {
    position: relative;
    top: 10px;
    left: 10px;
    background-color: white;
  }
</style>
