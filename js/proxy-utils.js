export const getProxyUrl = (url) => {
    if (!url || typeof url !== 'string') return url;
    if (window.__tidalOriginExtension) return url;
    if (url.startsWith('blob:')) return url;
    if (url.startsWith('https://audio-proxy.binimum.org/')) return url;
    return `https://mediaflow-proxy.9961.one/proxy/stream?url=${encodeURIComponent(url)}&api_password=s3YC0Ol4rDxusmXb7XT1A3zo`;
};
