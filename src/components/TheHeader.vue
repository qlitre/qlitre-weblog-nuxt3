<script setup lang="ts">
import { config } from '../settings/siteSettings'
const colorMode = useColorMode()


const isDarkMode = ref(false)
if (!isDarkMode.value) {
    colorMode.preference = 'light'
}
const toggleColorMode = () => {
    if (isDarkMode.value) {
        colorMode.preference = 'dark'
    } else {
        colorMode.preference = 'light'
    }
}
</script>

<template>
    <header class="header">
        <div class="container">
            <nuxt-link :to='`/`'>
                <h1 class="site-title">
                    {{ config.siteName }}
                </h1>
            </nuxt-link>
            <nav class="main-nav">
                <li class="nav-item">
                    <input id="toggle" class="toggle-input" type='checkbox' v-model="isDarkMode"
                        @change="toggleColorMode" />
                    <label for="toggle" class="toggle-label" />
                </li>
                <li class="nav-item">
                    <a :href="config.social.repos" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </li>
                <li class="nav-item">
                    <nuxt-link :to='`/about`'>
                        ABOUT
                    </nuxt-link>
                </li>
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
.header {
    padding: 2rem 4%;
    width: 100%;
    z-index: 10;
    position: fixed;
    top: 0;
    background-color: var(--qlitre-colors-gray-100);
}

.container {
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    vertical-align: baseline;
}

.site-title {
    font-size: 2.4rem;
    color: var(--qlitre-colors-black);
    margin: 0;
    padding: 0;
    letter-spacing: 1px;
}

.main-nav {
    list-style: none;
    margin: 0;
    display: flex;
    align-items: center;

    .nav-item {
        margin-right: 1.5rem;
        font-size: 1.8rem;
        font-weight: bold;
        letter-spacing: 1px;
    }

    a {
        color: var(--qlitre-colors-black);

        &:hover {
            opacity: 0.6;
        }
    }

    .toggle-input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 5;
        opacity: 0;
        display: none;
    }

    .toggle-label {
        margin-top: 5px;
        display: inline-block;
        width: 40px;
        height: 20px;
        background-color: #CBD5E0;
        position: relative;
        border-radius: 46px;
        transition: 0.4s;
        box-sizing: border-box;
        cursor: pointer;
    }

    .toggle-label::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        left: 0;
        top: 0;
        z-index: 2;
        background: #fff;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        transition: 0.4s;
    }

    .toggle-input:checked+.toggle-label {
        background-color: #718096;
    }

    .toggle-input:checked+.toggle-label::after {
        left: 20px;
    }
}

@media (max-width: 720px) {
    .site-title {
        font-size: 1.8rem;
    }

    a {
        font-size: 1.4rem;
    }
}

.dark-mode {
    header {
        background-color: var(--qlitre-colors-gray-900);
    }
    .site-title {
        color: var(--qlitre-colors-gray-400);
    }

    .main-nav {
        a {
            color: var(--qlitre-colors-gray-400)
        }
    }
}

</style>