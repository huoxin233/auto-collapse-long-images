<?php

/*
 * This file is part of huoxin/auto-collapse-long-images.
 *
 * Copyright (c) 2023 huoxin.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Huoxin\CollapseLongImages;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),
        
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),
        
    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Settings())
        ->serializeToForum('huoxin-auto-collapse-long-images.max-height', 'huoxin-auto-collapse-long-images.max-height')
        ->serializeToForum('huoxin-auto-collapse-long-images.use-flarumite-simple-spoilers', 'huoxin-auto-collapse-long-images.use-flarumite-simple-spoilers')
        ->serializeToForum('huoxin-auto-collapse-long-images.flarumite-simple-spoilers-custom-text-closed', 'huoxin-auto-collapse-long-images.flarumite-simple-spoilers-custom-text-closed')
        ->serializeToForum('huoxin-auto-collapse-long-images.flarumite-simple-spoilers-custom-text-open', 'huoxin-auto-collapse-long-images.flarumite-simple-spoilers-custom-text-open'),

];
