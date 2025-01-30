<script lang="ts">
  import Point from "./Point.svelte";

  interface IProps {
    isOpenModal: boolean
  }

  const points = [
    {
      path_imge: '/img/place/бар1.png',
      class_name: 'bar'
    },
    {
      path_imge: '/img/place/батуты1.png',
      class_name: 'trampolines'
    },
    {
      path_imge: '/img/place/башня1.png',
      class_name: 'tower'
    },
    {
      path_imge: '/img/place/горка1.png',
      class_name: 'slide'
    },
    {
      path_imge: '/img/place/дискотека1.png',
      class_name: 'disco'
    },
    {
      path_imge: '/img/place/игровая площадка1.png',
      class_name: 'playground'
    },
    {
      path_imge: '/img/place/кафе1.png',
      class_name: 'caffe1'
    },
    {
      path_imge: '/img/place/кафе1.png',
      class_name: 'caffe2'
    },
    {
      path_imge: '/img/place/комната для др1.png',
      class_name: 'birthday-room1'
    },
    {
      path_imge: '/img/place/комната для др2.png',
      class_name: 'birthday-room2'
    },
    {
      path_imge: '/img/place/комната для др2.png',
      class_name: 'birthday-room2-2'
    },
    {
      path_imge: '/img/place/кухня1.png',
      class_name: 'kitchen'
    },
    {
      path_imge: '/img/place/лабиринт1.png',
      class_name: 'maze'
    },
    {
      path_imge: '/img/place/лого1.png',
      class_name: 'logo'
    },
    {
      path_imge: '/img/place/песочница1.png',
      class_name: 'sandbox'
    },
    {
      path_imge: '/img/place/ресепшн1.png',
      class_name: 'reception'
    },
    {
      path_imge: '/img/place/тарзанка1.png',
      class_name: 'bungee'
    },
    {
      path_imge: '/img/place/хоккей1.png',
      class_name: 'hockey'
    },
    {
      path_imge: '/img/place/яма1.png',
      class_name: 'pit'
    },
  ]

  let { isOpenModal = $bindable() }: IProps = $props()
  let map: HTMLDivElement
  let isDragging: boolean = $state(false);
  let pos = $state({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  })

  const startDrag = (e: MouseEvent) => {
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
    <img class="map__img" src="/img/zpark-map.webp" alt="map" draggable="false">
    {#each points as pointData}
      <Point bind:isOpenModal={isOpenModal} data={pointData}/>
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
      width: max-content;
      height: max-content;
    }

    &__img {
      position: relative;
      z-index: -1;
      display: block;
      width: 2500px;
      user-select: none;
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