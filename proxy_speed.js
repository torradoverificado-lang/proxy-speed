const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Proxy HTTP
app.use('/', createProxyMiddleware({
    target: 'https://1.1.1.1',
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
        console.log('[HTTP] Petición interceptada:', req.url);
    }
}));

app.listen(PORT, () => {
    console.log(`Proxy corriendo en puerto ${PORT}`);
});

console.log('==========================================');
console.log('   PROXY SPEED (INTENTO)');
console.log('==========================================');
console.log('⚠️ ESTO NO DARÁ SPEED REAL EN FREE FIRE');
console.log('==========================================');
