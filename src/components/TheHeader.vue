<template>
    <header class="header">
        <div class="container">
            <nuxt-link :to='`/`'>
                <h1 class="site-title">
                    Qlitre's Blog
                </h1>
            </nuxt-link>
            <nav class="main-nav">
                <li class="nav-item">
                    <a href="https://github.com/qlitre/qlitre-weblog-nuxt3" target="_blank"
                        rel="noopener noreferrer">GitHub</a>
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
}
</style>