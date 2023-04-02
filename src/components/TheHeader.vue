<script setup lang="ts">

import { config } from '../settings/siteSettings'

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
    padding: 1rem 4%;
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
    font-size: var(--font-size-xl);
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
        font-size: var(--font-size-base);
        font-weight: bold;
        letter-spacing: 1px;
    }

    a {
        color: var(--qlitre-colors-black);

        &:hover {
            opacity: 0.6;
        }
    }
}
</style>