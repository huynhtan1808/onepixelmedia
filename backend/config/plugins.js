
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
            apiKey: 'SENDGRID_API',
          },
          settings: {
            defaultFrom: 'info@onepixelmedia.com',
            defaultReplyTo: 'info@onepixelmedia.com',
            testAddress: 'info@onepixelmedia.com',
          },
        },
        // ...
});
    
