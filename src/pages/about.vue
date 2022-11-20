<script setup lang="ts">
const skillSet = [
    { name: "VBA", since: "2019年06月" },
    { name: "Python", since: "2020年01月" },
    { name: "Django", since: "2021年01月" },
    { name: "HTML / CSS / JavaScript", since: "2021年04月" },
    { name: "Vue.js", since: "2021年06月" },
    { name: "Nuxt.js", since: "2021年06月" },
    { name: "TypeScript", since: "2022年04月" },
    { name: "Django REST Framework", since: "2022年05月" },
    { name: "React", since: "2022年07月" },
    { name: "Next.js", since: "2022年07月" },
]
</script>

<template>
    <main class="main">
        <div class="image-area">
            <img src="../assets/images/myprof.jpeg" alt="Qlitre">
        </div>
        <div class="about-content" style="margin-top:20px;">
            <h2>
                Qlitre
            </h2>
            <p class="p">
                1989年生まれで株式会社で働いています。<br>
                趣味、プログラミング、音楽を聴く。<br>
                好きなアーティスト、柴田聡子さん。
            </p>
            <h2>
                このサイトについて
            </h2>
            <p>
                Pythonを中心にプログラミングの備忘録として書いています。<br>
                Nuxt.js　+ microCMS + Netlifyで作成。<br>
                2021年8月～
            </p>
            <h2>
                お問い合わせ先
            </h2>
            <p>
                <a href="https://twitter.com/kuri_tter" target="_blank" rel="noopener noreferrer">@kuri_tter</a>
            </p>
            <h2>
                Github
            </h2>
            <p>
                <a href="https://github.com/qlitre" target="_blank"
                    rel="noopener noreferrer">https://github.com/qlitre</a>
            </p>
            <h2>
                できること
            </h2>
            <ul>
                <li v-for="item in skillSet" :key="item.name">
                    <span>{{ item.since }}</span>
                    <span class="skill-name">{{ item.name }}</span>
                </li>
            </ul>
        </div>
        <div style="text-align:center">
            <TopToLink />
        </div>
    </main>
</template>
  

<style scoped lang="scss">
.main {
    position: relative;
    width: 720px;
    margin: 0 auto 0;
    padding-top: 112px;
    padding-bottom: 50px;
}

@media (max-width: 1024px) {
    .main {
        max-width: 600px;
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
}

.image-area {
    margin-top: 20px;
    text-align: center;
}

img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    text-align: center;
}


.about-content {
    position: relative;
    max-width: 600px;
    margin: 0 auto 0;
    padding: var(--qlitre-space-4) var(--qlitre-space-8);
}

.about-content {
    p {
        margin-top: 0;
        margin-bottom: 2rem;
        line-height: 1.8;
        font-size: 1.6rem;
        color: var(--qlitre-colors-gray-500);
    }

    h2 {
        font-size: 2.4rem;
        margin-top: 3rem;
        margin-bottom: 1rem;
    }

    a {
        color: var(--qlitre-colors-blue-500);
    }

    a:hover {
        opacity: .5;
    }

    ul {
        margin: 2rem 0;
        line-height: 2;
        font-size: 1.6rem;
        color: var(--qlitre-colors-gray-500);
        list-style-type: none;
    }
}

.skill-name {
    margin-left: 1rem;
}
</style>
  