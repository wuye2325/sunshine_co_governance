# Cloudflare Pages 部署指南

## 项目结构
```
sunshine_co_governance/
├── index.html              # 主页面（传统 HTML）
├── images/                 # 主页面图片资源
├── docs/                   # 项目文档
└── web_event_timelines/    # 子页面（Vue + Vite）
    ├── template/          
    │   └── images/        # 子页面图片资源
    ├── data/              # 子页面数据
    └── vite.config.ts     # Vite 配置
```

## 部署配置

### 构建命令
```bash
mkdir -p dist && cp index.html dist/ && mkdir -p dist/images && cp -r images/* dist/images/ && cd web_event_timelines && npm install && npm run build && mkdir -p ../dist/web_event_timelines && cp -r dist/* ../dist/web_event_timelines/ && cp -r data ../dist/web_event_timelines/ && mkdir -p ../dist/web_event_timelines/template/images && cp -r template/images/* ../dist/web_event_timelines/template/images/
```

### 构建输出目录
```
dist/
```

### Node.js 版本
```
16.0.0 或更高
```

## 常见问题解决

### 图片加载问题
如果遇到图片无法加载的情况，请检查以下几点：

1. **文件命名规范**
   - 使用英文名称（避免中文字符）
   - 使用小写字母
   - 单词间用连字符（-）连接
   - 保持文件扩展名不变

   示例：
   ```
   ✅ sunshine-code.png    ❌ 阳光码.png
   ✅ community-system.png ❌ 小区共建系统.png
   ✅ governance-flow.png  ❌ 阳光共治流程图.PNG
   ```

2. **图片路径检查**
   - 主页面图片路径：`images/xxx.png`
   - 子页面图片路径：`web_event_timelines/template/images/xxx.png`

3. **Vite 配置**
   ```typescript
   // web_event_timelines/vite.config.ts
   export default defineConfig({
     base: '/web_event_timelines/',
     build: {
       outDir: 'dist',
       emptyOutDir: true,
       assetsDir: 'assets',
       copyPublicDir: true
     }
   })
   ```

### 部署检查清单
- [ ] 所有图片使用英文命名
- [ ] HTML 文件中的图片路径已更新
- [ ] 构建命令正确设置
- [ ] 构建输出目录设置为 dist
- [ ] 清除构建缓存后重新部署

## 最佳实践建议

1. **文件命名规范**
   - 始终使用英文命名文件
   - 避免使用特殊字符和空格
   - 保持命名规范的一致性
   - 使用有意义的描述性名称

2. **目录结构管理**
   - 保持清晰的目录层次
   - 分离不同类型的资源
   - 主页面和子页面资源分开管理

3. **部署流程**
   - 每次重大更改后清除构建缓存
   - 部署前检查文件权限
   - 确保所有依赖都已正确安装

## 故障排除

如果部署后仍然遇到问题：

1. 检查 Cloudflare Pages 的部署日志
2. 验证构建输出目录结构
3. 确认图片文件是否正确复制
4. 测试图片 URL 是否可直接访问
5. 清除浏览器缓存后重新测试

## 更新记录

- 2024-03-21: 首次发布，解决图片加载问题
- 添加文件命名规范
- 更新部署配置说明 