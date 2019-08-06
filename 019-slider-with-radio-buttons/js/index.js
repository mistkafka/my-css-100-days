
const WIDTH = 400;
const HEIGHT = 400;


const Slider = {
  el: '.slider-viewport',
  data() {
    const sliders = [{
      color: '#9b59b6'
    }, {
      color: '#3498db'
    }, {
      color: '#1abc9c'
    }];

    window.ins = this;

    return {
      sliders,
      activeIndex: 0,
    }
  },
  mounted() {
    window.setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.sliders.length;
    }, 2  * 1000);
  },
  computed: {
    canvasTransform() {
      const offset = -this.activeIndex * WIDTH;
      return `transform: translate3D(${offset}px, 0, 0)`;
    },
    fillBallTransform() {
      const offset = this.activeIndex * 55;
      return `transform: translate3D(${offset}px, 0, 0)`;
    },
    uiSliders() {
      return this.sliders.map((item) => {
        item.style = `backgroundColor: ${item.color}`;
        return item;
      });
    }
  },
  methods: {
    handleClickRadio(index) {
      this.activeIndex = index;
    }
  }
};

new Vue(Slider);
