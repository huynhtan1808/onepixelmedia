
module.exports = ({ env }) => ({
        upload: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
          },
          actionOptions: {
            upload: {},
            delete: {},
          },
        },

        email: {
          provider: 'sendgrid',
          providerOptions: {
            apiKey: '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',
          },
          settings: {
            defaultFrom: 'info@onepixelmedia.com',
            defaultReplyTo: 'tanhuynh1808@gmail.com',
            testAddress: 'tanhuynh1808@gmail.com',
          },
        },
        // ...
});
    