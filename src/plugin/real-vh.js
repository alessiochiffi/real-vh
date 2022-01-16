import throttle from '../util';

const RealVh = {
  install(Vue, options) {
    let vh = window.innerHeight * 0.01;
    let isRealVhSet = false;
    const cssVarName = options && options.varName ? options.varName : 'vh';

    Vue.mixin({
      created() {
        if (isRealVhSet) {
          return;
        }

        this.setRealVh();
      },
      mounted() {
        window.addEventListener('resize', () => {
          throttle(this.updateRealVh(), 100);
        });
      },
      methods: {
        addStyleTag(styleString) {
          const styleTag = document.createElement('style');
          styleTag.classList.add('real-vh');
          styleTag.textContent = styleString;
          document.head.append(styleTag);
          isRealVhSet = true;
        },
        updateStyle(styleString) {
          const styleTag = document.querySelector('.real-vh');

          if (!styleTag) {
            return;
          }

          styleTag.textContent = styleString;
        },
        setRealVh() {
          this.addStyleTag(this.getCss());
        },
        updateRealVh() {
          this.updateStyle(this.getCss());
        },
        getCss() {
          vh = window.innerHeight * 0.01;

          return `:root {
            --${cssVarName}: ${vh}px;
            --${cssVarName}50: calc(var(--${cssVarName}, 1vh) * 50);
            --${cssVarName}100: calc(var(--${cssVarName}, 1vh) * 100);
          }
        `;
        },
      },
    });
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(RealVh);
}

export default RealVh;
