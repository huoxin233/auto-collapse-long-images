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
              const spoilerMarkup = isFancybox(node)
                  ? generateFlarumiteSpoiler(node.parentNode.outerHTML, customText)
                  : generateFlarumiteSpoiler(node.outerHTML, customText);
              isFancybox(node)
              ? $(node.parentNode).replaceWith(spoilerMarkup)
              : $(node).replaceWith(spoilerMarkup);
            } else {
              const spoilerMarkup = isFancybox(node)
                  ? generateNormalSpoiler(node.parentNode.outerHTML)
                  : generateNormalSpoiler(node.outerHTML);
              isFancybox(node)
              ? $(node.parentNode).replaceWith(spoilerMarkup)
              : $(node).replaceWith(spoilerMarkup);
            }
          }
        })
      });
  });
});

function isFancybox(node) {
  return $(node).parent().attr('data-fancybox');
}

function generateFlarumiteSpoiler(imageHtml, customText) {
  return `
    <details class="flarumite-spoiler">
      <summary>
        <span class="flarumite-spoiler--title flarumite-spoiler--title-closed">
          <span class="flarumite-spoiler--custom-text">${customText}</span>
          <span class="flarumite-spoiler--default-text">Click to reveal</span>
        </span>
        <span class="flarumite-spoiler--title flarumite-spoiler--title-open">
          <span class="flarumite-spoiler--custom-text">${customText}</span>
          <span class="flarumite-spoiler--default-text">Click to hide</span>
        </span>
      </summary>
      <div class="flarumite-spoiler--content">
        <p>${imageHtml}</p>
      </div>
    </details>`;
}

function generateNormalSpoiler(imageHtml) {
  return `
    <details class="spoiler">
      <p>${imageHtml}</p>
    </details>`;
}