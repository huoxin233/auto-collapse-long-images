import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';

app.initializers.add('huoxin/auto-collapse-long-images', () => {

  extend(CommentPost.prototype, 'oncreate', function (vnode) {
    var maxHeight = parseInt(app.forum.attribute('huoxin-auto-collapse-long-images.max-height')) || 0; // get max height from settings
    maxHeight = maxHeight > 0 ? maxHeight : 0;
    console.log(maxHeight);
    this.element
      .querySelectorAll('img:not(.emoji):not(.Avatar):not(.PostMeta-ip img):not([data-reaction]):not([data-link-preview]):not(.flamoji img):not(.spoiler img):not(.flarumite-spoiler--content img)')
      .forEach((node) => {
        node.addEventListener('load', function () {
          if (node.height > maxHeight) {
            if (app.forum.attribute('huoxin-auto-collapse-long-images.use-flarumite-simple-spoilers') == 1) {
              const customText = app.forum.attribute('huoxin-auto-collapse-long-images.flarumite-simple-spoilers-custom-text');
              const flarumiteSpoiler = `
                <details class="flarumite-spoiler">
                  <summary>
                    <span class="flarumite-spoiler--title flarumite-spoiler--title-closed">
                      <span class="flarumite-spoiler--custom-text">${customText}</span>
                      <span class="flarumite-spoiler--default-text">Click to reveal</span>
                    </span>
                    <span class="flarumite-spoiler--title flarumite-spoiler--title-open">
                      <span class="flarumite-spoiler--custom-text">${customText}</span>
                      <span class="flarumite-spoiler--default-text">Click to reveal</span>
                    </span>
                  </summary>
                  <div class="flarumite-spoiler--content">
                    <p>${node.outerHTML}</p>
                  </div>
                </details>`;
              $(node).replaceWith(flarumiteSpoiler);
            } else {
              const normalSpoiler = document.createElement('details');
              normalSpoiler.classList.add('spoiler');

              $(node).wrap(normalSpoiler);
            }
          }
        })
      });
  });
});
