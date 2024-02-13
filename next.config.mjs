/** @type {import('next').NextConfig} */


const nextConfig = {
  headers:[
    {
      key: 'Access-Control-Allow-Origin',
      value: process.env.NEXT_PUBLIC_APP_URL,
    },
  ],
    async redirects(){
      return [
        {
          source: "/",
          destination: "/home",
          permanent: true
        },
      ]
    },
  }

export default nextConfig;
