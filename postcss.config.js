module.exports = {
    plugins:
      process.env.NODE_ENV === 'production'
        ? [
            // Transformations done in production build           
          ]
        : [
            // No transformations in development
          ],
  }