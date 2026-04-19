export const getProxyUrl = (url) => {
    if (window.__tidalOriginExtension) return url;
    return `https://mediaflow-proxy.9961.one/proxy/stream?url=${encodeURIComponent(url)}&api_password=s3YC0Ol4rDxusmXb7XT1A3zo`;
};
