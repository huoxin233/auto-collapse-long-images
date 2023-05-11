import app from 'flarum/admin/app';

app.initializers.add('huoxin/auto-collapse-long-images', () => {
  app.extensionData.for('huoxin-auto-collapse-long-images')
    .registerSetting({
      setting: 'huoxin-auto-collapse-long-images.max-height',
      type: 'number',
      min: 0,
      label: app.translator.trans('huoxin-auto-collapse-long-images.admin.max-height.label'),
      help: app.translator.trans('huoxin-auto-collapse-long-images.admin.max-height.help')
    })
    .registerSetting({
      setting: 'huoxin-auto-collapse-long-images.use-flarumite-simple-spoilers',
      type: 'switch',
      label: app.translator.trans('huoxin-auto-collapse-long-images.admin.use-flarumite-simple-spoilers.label'),
      help: app.translator.trans('huoxin-auto-collapse-long-images.admin.use-flarumite-simple-spoilers.help')
    })
    .registerSetting({
      setting: 'huoxin-auto-collapse-long-images.flarumite-simple-spoilers-custom-text',
      type: 'text',
      label: app.translator.trans('huoxin-auto-collapse-long-images.admin.use-flarumite-simple-spoilers.custom-text.label'),
      help: app.translator.trans('huoxin-auto-collapse-long-images.admin.use-flarumite-simple-spoilers.custom-text.help'),
      placeholder: app.translator.trans('huoxin-auto-collapse-long-images.admin.use-flarumite-simple-spoilers.custom-text.placeholder')
    });
});
