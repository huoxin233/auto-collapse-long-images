import app from 'flarum/admin/app';

app.initializers.add('huoxin/auto-collapse-long-images', () => {
  app.extensionData.for('huoxin-auto-collapse-long-images')
    .registerSetting({
      setting: 'huoxin-auto-collapse-long-images.max-height',
      type: 'number',
      min: 0,
      label: app.translator.trans('huoxin-auto-collapse-long-images.admin.max-height.label')
    });
});
