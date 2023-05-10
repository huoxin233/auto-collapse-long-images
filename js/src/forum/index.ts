import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';

app.initializers.add('huoxin/auto-collapse-long-images', () => {

  extend(CommentPost.prototype, 'oncreate', function (vnode) {
    var maxHeight = parseInt(app.forum.attribute('huoxin-auto-collapse-long-images.max-height')) || 0; // get max height from settings
    maxHeight = maxHeight > 0 ? maxHeight : 0;
    console.log(maxHeight);
    this.element
      .querySelectorAll('img:not(.emoji):not(.Avatar):not(.PostMeta-ip img):not([data-reaction]):not([data-link-preview]):not(.flamoji img):not(.spoiler img):(.flarumite-spoiler--content img)')
      .forEach((node) => {
        node.addEventListener('load', function() {
        if (node.height > maxHeight) {
        const spoiler = document.createElement('details');
        spoiler.classList.add('spoiler');

        $(node).wrap(spoiler);
      }
    })
      });
  });
});
