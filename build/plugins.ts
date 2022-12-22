import vue from '@vitejs/plugin-vue'
import { configCompressPlugin } from './compress'

export function getPluginsList(VITE_COMPRESSION: ViteCompression) {
  return [vue(), configCompressPlugin(VITE_COMPRESSION)]
}
