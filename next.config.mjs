/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],

        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.notik.ru',
                port: '',
                pathname: '/content/img/1590125588_03-laptop-for-coding.jpg',
            },
            {
                protocol: "https",
                hostname: "w7.pngwing.com",
                port: '',
                pathname: "/pngs/381/906/png-transparent-location-icon-google-maps-computer-icons-gps-navigation-systems-google-map-maker-map-text-logo-wikimedia-commons.png"
            },
            {
                protocol: "https",
                hostname: "e7.pngegg.com",
                port: '', 
                pathname: "/pngimages/284/690/png-clipart-telegram-logo-computer-icons-telegram-logo-blue-angle.png"
            },
            {
                protocol: "https",
                hostname: "static.vecteezy.com",
                port: '', 
                pathname: "/system/resources/previews/010/056/094/non_2x/email-and-mail-icon-sign-symbol-design-free-png.png"
            }
        ]
    }
};

export default nextConfig;
