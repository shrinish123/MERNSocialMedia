module.exports ={
    env:{
        CLOUDINARY_URL : "https://api.cloudinary.com/v1_1/dk96bclgg/image/upload/"
    }, 
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://socialmediashrinish.netlify.app/:path*',
          },
        ]
      },
}