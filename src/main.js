/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// AOS Animation
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({once: true})

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
