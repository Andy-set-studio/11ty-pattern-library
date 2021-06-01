const frameContext = location.pathname.replace(/\//g, '-');

const frameKeys = {
  width: `${frameContext}:frame-width`,
  height: `${frameContext}:frame-height`
};

const frameWidth = localStorage.getItem(frameKeys.width);
const frameHeight = localStorage.getItem(frameKeys.height);

if (frameWidth) {
  document.documentElement.style.setProperty('--frame-width', frameWidth);
}

if (frameHeight) {
  document.documentElement.style.setProperty('--frame-height', frameHeight);
}

document.querySelectorAll('iframe').forEach(item =>
  item.contentWindow.addEventListener('resize', evt => {
    const rects = item.getClientRects()[0];
    const itemWidth = rects.width;
    const itemHeight = rects.height;

    document.documentElement.style.setProperty('--frame-width', `${itemWidth}px`);
    document.documentElement.style.setProperty('--frame-height', `${itemHeight}px`);
    localStorage.setItem(frameKeys.width, `${itemWidth}px`);
    localStorage.setItem(frameKeys.height, `${itemHeight}px`);
  })
);
