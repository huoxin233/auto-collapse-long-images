import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';

app.initializers.add('huoxin/auto-collapse-images', () => {

  extend(CommentPost.prototype, 'oncreate', function (vnode) {
    this.element
      .querySelectorAll('img:not(.emoji):not(.Avatar):not(.PostMeta-ip img):not([data-reaction]):not([data-link-preview]):not(.flamoji img)')
      .forEach((node) => {
        node.addEventListener('load', function() {
        if (node.height > 800) {
        const spoiler = document.createElement('details');
        spoiler.classList.add('spoiler');

        $(node).wrap(spoiler);
      }
    })
      });
  });
});
