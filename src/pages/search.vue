<script setup lang="ts">
import { PostList } from '../types/blog';
import { BLOG_PER_PAGE } from '../settings/siteSettings';

const limit = BLOG_PER_PAGE
const route = useRoute()
const page = Number(route.query.page || 1)
const query = String(route.query.q)
const params = {
  q: query,
  limit: limit,
  offset: (page - 1) * limit
}
const { data: posts, pending, error, refresh } = await useAsyncData<PostList>(
  'post-list-w-search', () => $fetch('/api/postList', { params: params }),
  {
    initialCache: false
  })

const numPages = Math.ceil(posts.value.totalCount / limit)

// queryが変化した場合にページをリロードする
watch(() => route.query, () => location.reload())

</script>

<template>
  <div class="wrapper">
    <SearchForm :keyword="query" />
    <ArticleList :posts="posts.contents" />
    <Pagination :numPages="numPages" :current="page" :keyword="query" />
  </div>
</template>

<style scoped>
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

.search-form {
  margin-top: 2rem;
  position: relative;
  margin-bottom: 2rem;
}

input[type=text] {
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  height: 30px;
  font-size: 16px;
  padding-left: 10px;
  box-shadow: none;
  transition: box-shadow 0.2s ease;
}

input[type=text]:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
</style>
