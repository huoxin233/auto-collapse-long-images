import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';

app.initializers.add('huoxin/auto-collapse-long-images', () => {

  extend(CommentPost.prototype, 'oncreate', function (vnode) {
    // Get the maximum image height from the extension settings and set it to zero if it's not specified
    var maxHeight = parseInt(app.forum.attribute('huoxin-auto-collapse-long-images.max-height')) || 0; // get max height from settings
    maxHeight = maxHeight > 0 ? maxHeight : 0;

    // Get default and custom text strings for the spoiler tags
    const defaultText_closed = app.translator.trans('huoxin-auto-collapse-long-images.forum.default-text.closed');
    const defaultText_open = app.translator.trans('huoxin-auto-collapse-long-images.forum.default-text.open');
    const customText_closed = app.forum.attribute('huoxin-auto-collapse-long-images.flarumite-simple-spoilers-custom-text-closed') || defaultText_closed;
    const customText_open = app.forum.attribute('huoxin-auto-collapse-long-images.flarumite-simple-spoilers-custom-text-open') || defaultText_open;

    // Find all images in the comment that meet certain criteria (not emojis, avatars, etc.)
    this.element
      .querySelectorAll('img:not(.emoji):not(.Avatar):not(.PostMeta-ip img):not([data-reaction]):not([data-link-preview]):not(.flamoji img):not(.spoiler img):not(.flarumite-spoiler--content img)')
      .forEach((node) => {
        node.addEventListener('load', function () {

          // Check if the image is taller than the maximum height
          if (node.height > maxHeight) {

            // If the "use-flarumite-simple-spoilers" setting is enabled
            if (app.forum.attribute('huoxin-auto-collapse-long-images.use-flarumite-simple-spoilers') == 1) {

              //Generate a custom spoiler tag for the Flarumite Simple Spoilers extension
              const spoilerMarkup = isFancybox(node)
                ? generateFlarumiteSpoiler(node.parentNode.outerHTML, customText_closed, customText_open, defaultText_closed, defaultText_open)
                : generateFlarumiteSpoiler(node.outerHTML, customText_closed, customText_open, defaultText_closed, defaultText_open);
        
              // Replace the image with the generated spoiler tag
              isFancybox(node)
                ? $(node.parentNode).replaceWith(spoilerMarkup)
                : $(node).replaceWith(spoilerMarkup);
              
            } else {
              const spoilerMarkup = isFancybox(node)
                ? generateNormalSpoiler(node.parentNode.outerHTML)
                : generateNormalSpoiler(node.outerHTML);
          
              // Replace the image with the generated spoiler tag
              isFancybox(node)
                ? $(node.parentNode).replaceWith(spoilerMarkup)
                : $(node).replaceWith(spoilerMarkup);
            }
          }
        })
      });
  });
});

// Check whether an image is wrap inside Fancybox
function isFancybox(node) {
  return $(node).parent().attr('data-fancybox');
}

// Generate a custom spoiler tag used by the Flarumite Simple Spoilers extension
function generateFlarumiteSpoiler(imageHtml, customText_closed, customText_open, defaultText_closed, defaultText_open) {
  return `
    <details class="flarumite-spoiler">
      <summary>
        <span class="flarumite-spoiler--title flarumite-spoiler--title-closed">
          <span class="flarumite-spoiler--custom-text">${customText_closed}</span>
          <span class="flarumite-spoiler--default-text">${defaultText_closed}</span>
        </span>
        <span class="flarumite-spoiler--title flarumite-spoiler--title-open">
          <span class="flarumite-spoiler--custom-text">${customText_open}</span>
          <span class="flarumite-spoiler--default-text">${defaultText_open}</span>
        </span>
      </summary>
      <div class="flarumite-spoiler--content">
        <p>${imageHtml}</p>
      </div>
    </details>`;
}

// Generate a normal spoiler tag
function generateNormalSpoiler(imageHtml) {
  return `
    <details class="spoiler">
      <p>${imageHtml}</p>
    </details>`;
}