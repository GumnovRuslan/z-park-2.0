<script lang="ts">
  import Point from "./Point.svelte";
  import { POINTS } from "$lib/bd/pointData.js";

  interface IProps {
    modalData: {
      isOpenModal: boolean
      name: string
      type: string
    }
  }

  let { modalData = $bindable() }: IProps = $props()
  let map: HTMLDivElement
  let isDragging: boolean = $state(false);
  let pos = $state({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  })

  const startDrag = (e: MouseEvent) => {
    e.preventDefault()
    isDragging = true;
    pos = {
      startX: e.pageX - map.offsetLeft,
      startY: e.pageY - map.offsetTop,
      scrollLeft: map.scrollLeft,
      scrollTop: map.scrollTop,
    }
  }

  function stopDrag() {
    isDragging = false;
  }

  const drag = (e: MouseEvent, speed: number = 1) => {
    e.preventDefault();
    if (!isDragging) return;
    if (speed <= 0) speed = 0.1;
    const x = e.pageX - map.offsetLeft;
    const y = e.pageY - map.offsetTop;
    const walkX = (x - pos.startX) * speed
    const walkY = (y - pos.startY) * speed
    map.scrollLeft = pos.scrollLeft - walkX;
    map.scrollTop = pos.scrollTop - walkY;
  }
</script>

<div class="map"
  role="presentation"
  bind:this={map}
  onmousedown={startDrag}
  onmouseup={stopDrag}
  onmouseleave={stopDrag}
  onmousemove={drag}
  style:cursor={isDragging ? 'grabbing' : 'grab'}
>
  <div class="map__img-wrapper">
    <img class="map__img" src="/img/map.webp" alt="map" draggable="false">
    {#each POINTS as pointData}
      <Point bind:modalData={modalData} data={pointData}/>
    {/each}
  </div>
</div>

<style lang="scss">
  @use "/static/styles/mixins" as mixins;
  
  .map {
    width: 100vw;
    height: 100vh;
    overflow: auto;

    &::-webkit-scrollbar { 
      width: 0;
      height: 0; 
    }

    &__img-wrapper {
      position: relative;
      z-index: 1;
      width: max-content;
      height: max-content;
    }

    &__img {
      position: relative;
      z-index: -1;
      display: block;
      width: 2500px;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      pointer-events: none;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 4000px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 3000px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 2500px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 3000px;
      }
    }
  }
</style>