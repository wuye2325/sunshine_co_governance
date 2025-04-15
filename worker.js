export default {
    async fetch(request, env) {
      // 获取请求的 origin
      const origin = request.headers.get('Origin') || 'https://sunshine-co-governance.pages.dev';
      
      // 处理 CORS 预检请求
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          headers: {
            'Access-Control-Allow-Origin': origin,
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '86400',
          },
        });
      }
  
      // 设置响应头
      const headers = {
        'Access-Control-Allow-Origin': origin,
        'Content-Type': 'application/json',
      };
  
      try {
        // 检查是否有 KV 绑定
        if (!env.VISITOR_STATS) {
          throw new Error('KV binding not found');
        }

        // 获取当前计数
        let count = await env.VISITOR_STATS.get('visits');
        let currentCount = count ? parseInt(count) : 0;
        
        // 增加计数
        currentCount++;
        
        // 保存新的计数
        await env.VISITOR_STATS.put('visits', currentCount.toString());
        
        // 返回结果
        return new Response(
          JSON.stringify({ count: currentCount }),
          { headers }
        );
      } catch (error) {
        console.error('Worker error:', error);
        return new Response(
          JSON.stringify({ 
            error: 'Internal server error',
            details: error.message 
          }),
          { 
            status: 500, 
            headers 
          }
        );
      }
    },
  };