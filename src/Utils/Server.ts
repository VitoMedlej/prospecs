const dev = process.env.NODE_ENV !== 'production';


export const server = dev ? 'http://localhost:3000' : `${process.env.NEXT_PUBLIC_URL || 'https://DesignCompass-lb.netlify.app'}`;