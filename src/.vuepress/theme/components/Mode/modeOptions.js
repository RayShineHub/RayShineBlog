const modeOptions = {
  light: {
    // '--default-color-10': 'rgba(255, 255, 255, 1)',
    // '--default-color-9': 'rgba(255, 255, 255, .9)',
    // '--default-color-8': 'rgba(255, 255, 255, .8)',
    // '--default-color-7': 'rgba(255, 255, 255, .7)',
    // '--default-color-6': 'rgba(255, 255, 255, .6)',
    // '--default-color-5': 'rgba(255, 255, 255, .5)',
    // '--default-color-4': 'rgba(255, 255, 255, .4)',
    // '--default-color-3': 'rgba(255, 255, 255, .3)',
    // '--default-color-2': 'rgba(255, 255, 255, .2)',
    // '--default-color-1': 'rgba(255, 255, 255, .1)',
    // '--background-color': 'rgba(227, 224, 214, 1)',
    // '--box-shadow': '0 1px 8px 0 rgba(0, 0, 0, 0.1)',
    // '--box-shadow-hover': '0 2px 16px 0 rgba(0, 0, 0, 0.2)',
    // '--text-color': '#242424',
    // '--text-color-sub': '#7F7F7F',
    // '--border-color': '#eaecef',
    // '--code-color': 'rgba(27, 31, 35, 0.05)',
    // '--mask-color': '#888'

    '--default-color-10': 'rgba(227, 224, 214, 1)',
    '--default-color-9': 'rgba(227, 224, 214, .9)',
    '--default-color-8': 'rgba(227, 224, 214, .8)',
    '--default-color-7': 'rgba(227, 224, 214, .7)',
    '--default-color-6': 'rgba(227, 224, 214, .6)',
    '--default-color-5': 'rgba(227, 224, 214, .5)',
    '--default-color-4': 'rgba(227, 224, 214, .4)',
    '--default-color-3': 'rgba(227, 224, 214, .3)',
    '--default-color-2': 'rgba(227, 224, 214, .2)',
    '--default-color-1': 'rgba(227, 224, 214, .1)',
    '--background-color': 'rgba(227, 224, 214, 1)',
    '--nav-background-color': 'rgba(227, 224, 214, .7)',
    '--box-shadow': '0 1px 8px 0 rgba(0, 0, 0, .1)',
    '--box-shadow-hover': '0 2px 16px 0 rgba(0, 0, 0, .3)',
    '--text-color': 'rgba(50, 65, 100, 1)',
    '--text-color-sub': 'rgba(50, 65, 100, .5)',
    '--border-color': 'rgba(255, 255, 255, .3)',
    '--code-color': 'rgba(27, 31, 35, 0.05)',
    '--mask-color': '#888',
    '--border-top': '1px solid rgba(255, 255, 255, 0.5)',
    // docsearch
    '--docsearch-primary-color': 'var(--text-color-sub)',
    '--docsearch-text-color': 'var(--text-color)',
    '--docsearch-spacing': '12px',
    '--docsearch-icon-stroke-width': '1.4',
    '--docsearch-highlight-color': 'var(--docsearch-primary-color)',
    '--docsearch-muted-color': 'rgb(150, 159, 175)',
    '--docsearch-container-background': 'rgba(101, 108, 133, 0.8)',
    '--docsearch-logo-color': 'var(--text-color-sub)',
    '--docsearch-searchbox-background': 'none',
    '--docsearch-key-gradient': 'linear-gradient(-225deg,var(--default-color-1),var(--default-color-10))',
    '--docsearch-modal-background': 'var(--nav-background-color)',
    '--docsearch-modal-shadow': 'var(--box-shadow)',
    '--docsearch-hit-background': 'var(--nav-background-color)',
    '--docsearch-hit-shadow': 'var(--box-shadow)',
    '--docsearch-footer-background':'var(--nav-background-color)',
    '--docsearch-searchbox-focus-background': 'rgba(52, 65, 100, .1)',
    '--docsearch-hit-color': 'var(--text-color)',
    '--docsearch-key-shadow': 'var(--box-shadow)',
    '--docsearch-footer-shadow': 'var(--box-shadow)',

    // waline
    '--waline-bgcolor': 'var(--background-color)',
    '--waline-bgcolor-light': 'none',
    '--waline-border': '1px solid var(--text-color-sub)',
    '--waline-info-bgcolor' : 'none',
    '--waline-color': 'var(--text-color-sub)',
    '--waline-bgcolor-hover': 'var(--text-color-sub)',
    '--waline-info-color': 'var(--text-color-sub)',

    
    '--tw-border-opacity': '1'

  },
  dark: {
    // '--default-color-10': 'rgba(0, 0, 0, 1)',
    // '--default-color-9': 'rgba(0, 0, 0, .9)',
    // '--default-color-8': 'rgba(0, 0, 0, .8)',
    // '--default-color-7': 'rgba(0, 0, 0, .7)',
    // '--default-color-6': 'rgba(0, 0, 0, .6)',
    // '--default-color-5': 'rgba(0, 0, 0, .5)',
    // '--default-color-4': 'rgba(0, 0, 0, .4)',
    // '--default-color-3': 'rgba(0, 0, 0, .3)',
    // '--default-color-2': 'rgba(0, 0, 0, .2)',
    // '--default-color-1': 'rgba(0, 0, 0, .1)',
    // '--background-color': 'rgba(50, 65, 100, 1)',
    // '--box-shadow': '0 1px 8px 0 rgba(0, 0, 0, .6)',
    // '--box-shadow-hover': '0 2px 16px 0 rgba(0, 0, 0, .7)',
    // '--text-color': 'rgba(255, 255, 255, .8)',
    // '--text-color-sub': '#8B8B8B',
    // '--border-color': 'rgba(0, 0, 0, .3)',
    // '--code-color': 'rgba(0, 0, 0, .3)',
    // '--mask-color': '#000'

    '--default-color-10': 'rgba(50, 65, 100, 1)',
    '--default-color-9': 'rgba(50, 65, 100, .9)',
    '--default-color-8': 'rgba(50, 65, 100, .8)',
    '--default-color-7': 'rgba(50, 65, 100, .7)',
    '--default-color-6': 'rgba(50, 65, 100, .6)',
    '--default-color-5': 'rgba(50, 65, 100, .5)',
    '--default-color-4': 'rgba(50, 65, 100, .4)',
    '--default-color-3': 'rgba(50, 65, 100, .3)',
    '--default-color-2': 'rgba(50, 65, 100, .2)',
    '--default-color-1': 'rgba(50, 65, 100, .1)',
    '--background-color': 'rgba(32, 42, 64, 1)',
    '--nav-background-color': 'rgba(32, 42, 64, .7)',
    '--box-shadow': '0 1px 8px 0 rgba(0, 0, 0, .2)',
    '--box-shadow-hover': '0 2px 16px 0 rgba(0, 0, 0, .4)',
    '--text-color': 'rgba(255, 244, 192, 1)',
    '--text-color-sub': 'rgba(255, 244, 192, .5)',
    '--border-color': 'rgba(0, 0, 0, .3)',
    '--code-color': 'rgba(0, 0, 0, .3)',
    '--mask-color': '#000',
    '--border-top': '1px solid rgba(255, 255, 255, 0.07)',
    // docsearch
    '--docsearch-primary-color': 'var(--text-color-sub)',
    '--docsearch-text-color': 'var(--text-color)',
    '--docsearch-spacing': '12px',
    '--docsearch-icon-stroke-width': '1.4',
    '--docsearch-highlight-color': 'var(--docsearch-primary-color)',
    '--docsearch-muted-color': 'rgba(255, 244, 192, .2)',
    '--docsearch-container-background': 'rgba(32, 42, 64, .7)',
    '--docsearch-logo-color': 'var(--text-color-sub)',
    '--docsearch-searchbox-background': 'none',
    '--docsearch-key-gradient': 'linear-gradient(-225deg,var(--default-color-1),var(--default-color-10))',
    '--docsearch-modal-background': 'var(--background-color)',
    '--docsearch-modal-shadow': 'var(--box-shadow)',
    '--docsearch-hit-background': 'var(--nav-background-color)',
    '--docsearch-hit-shadow': 'var(--box-shadow)',
    '--docsearch-footer-background':'var(--nav-background-color)',
    '--docsearch-searchbox-focus-background': 'rgba(227, 224, 214, .1)',
    '--docsearch-hit-color': 'var(--text-color)',
    '--docsearch-key-shadow': 'var(--box-shadow)',
    '--docsearch-footer-shadow': 'var(--box-shadow)',

    // waline
    '--waline-bgcolor': 'var(--background-color)',
    '--waline-bgcolor-light': 'none',
    '--waline-border': '1px solid var(--text-color-sub)',
    '--waline-info-bgcolor' : 'none',
    '--waline-color': 'var(--text-color-sub)',
    '--waline-bgcolor-hover': 'var(--text-color-sub)',
    '--waline-info-color': 'var(--text-color-sub)',

    
    '--tw-border-opacity': '1'
  }
}

export default modeOptions
