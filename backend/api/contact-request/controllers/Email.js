module.exports = {
    index: async ctx => {
        await strapi.plugins['email'].services.email.send({
            to: 'tanhuynh1808@gmail.com',
            from: 'info@onepixelmedia.com',
            replyTo: 'hi@tanhuynh.io',
            subject: 'Use strapi email provider successfully',
            text: 'Hello world!',
            html: 'Hello world!',
          });
          ctx.send("Email sent!");
    }
  };