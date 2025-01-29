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
  <img src={data.path_imge} alt="alt" class="point__img" >
</button>

<style lang="scss">
  .point {
    &__btn {
      position: absolute;
      z-index: 1;
      // width: 500px;
      cursor: pointer;
      border: none;
      transition: 0.3s ease-in-out;

      &:hover {
        transform: scale(110%);
      }
    }

    &--bar {
      top: 19.5%;
      left: 55%;
      width: 180px;
    }

    &--trampolines {
      top: 79%;
      left: 31%;
      width: 234px;
    }

    &--tower {
      top: 47.7%;
      left: 55.5%;
      width: 235px;
    }

    &--slide {
      top: 78.5%;
      left: 63.3%;
      width: 235px;
    }

    &--disco {
      top: 64.4%;
      left: 77%;
      width: 235px;
    }

    &--playground {
      top: 25.5%;
      left: 38.8%;
      width: 218px;
    }

    &--caffe1 {
      top: 33.2%;
      left: 35.4%;
      width: 218px;
    }

    &--caffe2 {
      top: 37.6%;
      left: 49.5%;
      width: 218px;
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
</style>