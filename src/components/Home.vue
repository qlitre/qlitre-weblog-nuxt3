<script setup lang="ts">
import { BLOG_PER_PAGE } from '../settings/siteSettings'
import { PostList } from '../types/blog';
import { MicroCMSQueries } from 'microcms-js-sdk'

type Props = {
    page: number,
    tagId?: string
}

const { page, tagId } = defineProps<Props>()

const limit = BLOG_PER_PAGE
const queries: MicroCMSQueries = { limit: limit, offset: (page - 1) * limit }
if (tagId) {
    queries.filters = `tag[contains]${tagId}`
}

const { data: posts } = await useAsyncData<PostList>('post-list', () =>
    $fetch(
        '/api/postList',
        { method: 'GET', params: queries }
    ),
)


const numPages = Math.ceil(posts.value.totalCount / limit)

</script>
            
<template>
    <div class="wrapper">
        <div class="mb-2">
            <SearchForm />
        </div>
        <div class="mb-2">
            <TagInline :selectedTagId="tagId" />
        </div>
        <div class="post-wrapper">
            <div class="posts">
                <ArticleList :posts="posts.contents" />
            </div>
            <div class="aside">
                <adsbygoogle adSlot="3796995428"/>
            </div>
        </div>
        <Pagination :numPages="numPages" :current="page" :tagId="tagId" />
    </div>
</template>
        
<style scoped lang="scss">
.mb-2 {
    margin-bottom: 2rem;
}

.wrapper {
    padding-top: 112px;
    position: relative;
    width: 960px;
    margin: 0 auto 0;
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
</style>
            