/** @type {import('next').NextConfig} */

module.exports = {
  distDir: '.build',
  // assetPrefix: 'https://developers.kakao.com/sdk/js/kakao.js',
  async headers(){
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      },
    ];
  },
};
