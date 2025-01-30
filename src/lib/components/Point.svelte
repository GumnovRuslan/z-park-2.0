<script lang="ts">

  interface IProps {
    isOpenModal: boolean
    data: {
      path_imge: string
      class_name: string
    }
  }

  let { isOpenModal = $bindable(), data }: IProps = $props()
</script>

<button class="point point__btn point--{data.class_name}" type="button" onclick={() => isOpenModal = true}>
  <img src={data.path_imge} alt="alt" class="point__img" draggable="false">
</button>

<style lang="scss">
  @use "/static/styles/mixins" as mixins;

  .point {
    &__btn {
      position: absolute;
      z-index: 1;
      cursor: pointer;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(110%);
      }
    }

    &--bar {
      top: 19.4%;
      left: 54.7%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 306px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 232px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 190px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 232px;
      }
    }

    &--trampolines {
      top: 79%;
      left: 31%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 376px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 281px;

      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 234px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 281px;
      }
    }

    &--tower {
      top: 47.7%;
      left: 55.5%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 376px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 283px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 235px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 283px;
      }
    }

    &--slide {
      top: 78.5%;
      left: 63.3%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 376px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 283px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 235px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 283px;
      }
    }

    &--disco {
      top: 64.4%;
      left: 77%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 376px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 283px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 235px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 283px;
      }
    }

    &--playground {
      top: 25.5%;
      left: 38.8%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 348px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 261px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 218px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 261px;
      }
    }

    &--caffe1 {
      top: 33.2%;
      left: 35.4%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 348px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 261px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 218px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 261px;
      }
    }

    &--caffe2 {
      top: 37.6%;
      left: 49.5%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 348px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 261px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 218px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 261px;
      }
    }

    &--birthday-room1 {
      top: 27.3%;
      left: 68.4%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 381px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 285px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 240px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 285px;
      }
    }

    &--birthday-room2 {
      top: 41.2%;
      left: 73%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 381px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 285px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 240px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 285px;
      }
    }

    &--birthday-room2-2 {
      top: 76.4%;
      left: 39%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 381px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 287px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 240px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 287px;
      }
    }

    &--kitchen {
      top: 21.3%;
      left: 45.9%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 348px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 261px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 218px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 261px;
      }
    }

    &--maze {
      top: 52%;
      left: 63.9%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 376px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 281px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 235px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 281px;
      }
    }

    &--logo {
      top: 3.4%;
      left: 36.2%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 1145px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 858px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 714px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 858px;
      }

      &:hover {
        transform: scale(103%);
      }
    }

    &--sandbox {
      top: 34.3%;
      left: 19.7%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 455px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 341px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 286px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 341px;
      }
    }

    &--reception {
      top: 57.3%;
      left: 42.4%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 376px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 283px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 235px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 283px;
      }
    }

    &--bungee {
      top: 60%;
      left: 26.4%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 496px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 372px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 310px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 372px;
      }
    }

    &--hockey {
      top: 19.1%;
      left: 62.7%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 258px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 194px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 161px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 194px;
      }
    }

    &--pit {
      top: 79.6%;
      left: 19.2%;

      @include mixins.media-breakpoint-up(xxxl) {
        width: 376px;
      }

      @include mixins.media-breakpoint-between(xl, xxxl) {
        width: 283px;
      }

      @include mixins.media-breakpoint-between(md, xl) {
        width: 235px;
      }

      @include mixins.media-breakpoint-down(md) {
        width: 283px;
      }
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      user-select: none;
    }
  }
</style>