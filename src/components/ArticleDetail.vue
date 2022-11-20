<script setup lang="ts">
import * as cheerio from 'cheerio';
import hljs from 'highlight.js'
import 'highlight.js/styles/hybrid.css'
import { Post } from '../types/blog'

type Props = {
    slug: string;
}

const { slug } = defineProps<Props>()

const { data: article, pending, error, refresh } = await useAsyncData<Post>('article',
    () => $fetch('/api/postDetail', { params: { slug: slug } }))

if (!article.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const $ = cheerio.load(article.value.text);
$('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
});
const body = $.html()

const $toc = cheerio.load(body);
const headings = $toc("h1,h2,h3").toArray();

const toc = headings.map(item => ({
    /**@ts-ignore */
    text: item.children[0].data,
    id: item.attribs.id,
    name: item.name,
}));

</script>
        
<template>
    <div class="wrapper">
        <div class="article-header">
            <TagLabel v-for="tag in article.tag" :key="tag.id" :tag="tag" :colorClass="`active`"></TagLabel>
            <h1 class="title">
                {{ article.title }}
            </h1>
            <p class="published">公開日：{{ $formatDate(article.publishedAt) }}</p>
        </div>
        <div class="post-wrapper">
            <div class="posts">
                <MarkdownBody :body="body" />
            </div>
            <div class="aside">
                <Toc :toc="toc" />
            </div>
        </div>
        <TopToLink />
    </div>
</template>
    
<style scoped lang="scss">
.wrapper {
    padding-top: 112px;
    position: relative;
    width: 960px;
    margin: 0 auto 0;
}

.post-wrapper {
    margin-top: 3rem;
}

.article-header {
    padding-bottom: 30px;
}

@media (max-width: 1024px) {
    .wrapper {
        max-width: 600px;
        position: relative;
        width: 100%;
        padding-right: 1rem;
        padding-left: 1rem;
        margin-right: auto;
        margin-left: auto;
    }

    .post-wrapper {
        display: flex;
        flex-direction: column-reverse;
        gap: 30px;
    }
}

@media (min-width: 1024px) {
    .post-wrapper {
        display: grid;
        grid-template-columns: 600px 300px;
        -moz-column-gap: 60px;
        column-gap: 60px;
        grid-template-rows: 1fr;
    }
}


.published {
    margin-top: 1rem;
    font-size: 1.6rem;
    color: var(--qlitre-colors-gray-700);
}

.title {
    margin-top: 1rem;
    font-size: 3rem;
    color: var(--qlitre-colors-black);
    line-height: 1.8;
    font-weight: bold;
}
</style>