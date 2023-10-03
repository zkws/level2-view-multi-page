import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
       input: {
          // 配置所有页面路径，使得所有页面都会被打包
          portfolio: resolve(__dirname, 'portfolio/index.html'),
          portfolio20: resolve(__dirname, 'portfolio20/index.html'),
          portfolioBought: resolve(__dirname, 'portfolioBought/index.html'),
          sector_class1: resolve(__dirname, 'sector_class1/index.html'),
          sector_class2: resolve(__dirname, 'sector_class2/index.html'),
          sector_class3: resolve(__dirname, 'sector_class3/index.html'),
          cScoreRank: resolve(__dirname, 'cScoreRank/index.html'),
          cScoreRank20Per: resolve(__dirname, 'cScoreRank20Per/index.html'),
          cScoreRankBought: resolve(__dirname, 'cScoreRankBought/index.html'),
          cScoreRankSelected: resolve(__dirname, 'cScoreRankSelected/index.html'),
          cScoreRankTail: resolve(__dirname, 'cScoreRankTail/index.html'),
          cScoreRankOverall: resolve(__dirname, 'cScoreRankOverall/index.html'),
          cScoreRankTailOverall: resolve(__dirname, 'cScoreRankTailOverall/index.html'),
          marketCScoreTop: resolve(__dirname, 'marketCScoreTop/index.html'),
          marketCScoreTail: resolve(__dirname, 'marketCScoreTail/index.html')
       }
    }
 },
server: {
  host: 'localhost',
  port:5173,
  https:false,
  proxy: {
    '/getSecondData': {
        target: 'http://localhost:6024/',
        changeOrigin:true
    },
    '/getPortfolioInfo': {
      target: 'http://localhost:6024/',
      changeOrigin:true
    },
    '/getSelectPortfolioInfo': {
      target: 'http://localhost:6024/',
      changeOrigin:true
    },
    '/getPortfolioBought': {
      target: 'http://localhost:6024/',
      changeOrigin:true
    },
    '/getSectorInfo': {
      target: 'http://localhost:6024/',
      changeOrigin:true
    },
    '/getCScoreRank': {
      target: 'http://localhost:6024/',
      changeOrigin:true
    },
    '/getCScoreRankByOverallRating': {
      target: 'http://localhost:6024/',
      changeOrigin:true
    },
    '/getCScoreRankTail': {
      target: 'http://localhost:6024/',
      changeOrigin:true
    },
    '/getMarketCSocreRank': {
      target: 'http://localhost:6024/',
      changeOrigin:true
    }
  }
  // proxy: {
  //   '/': {
  //       target: 'http://localhost:8080/',
  //       changeOrigin:true
  //   }
  // }
},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
