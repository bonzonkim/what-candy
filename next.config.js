/** @type {import('next').NextConfig} */

module.exports = {
  distDir: '.build',
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
