<script setup lang="ts">
import { config } from '../settings/siteSettings'

type Props = {
  id: string;
  title: string;
}
const { id, title } = defineProps<Props>()

const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${config.siteUrl}/${id}/&hashtags=qlitreweblog&via=kuri_tter`;
const facebookLink = `https://www.facebook.com/sharer.php?u=${config.siteUrl}/${id}/`;
const hatenaLink = `https://b.hatena.ne.jp/entry/https://${config.siteUrl}/${id}/`;

</script>

<template>
  <div class="share">
    <ul class="shareLists">
      <li class="shareList">
        <a class="button" :href="twitterLink" target="_blank" rel="noopener noreferrer">
          <img src="../assets/images/icon_twitter.svg" alt="Twitter" />
        </a>
      </li>
      <li class="shareList">
        <a :href="facebookLink" target="_blank" rel="noopener noreferrer">
          <img src="../assets/images/icon_facebook.svg" alt="Facebook" />
        </a>
      </li>
      <li class="shareList">
        <a :href="hatenaLink" target="_blank" rel="noopener noreferrer">
          <img src="../assets/images/icon_hatena.svg" alt="はてなブックマーク" />
        </a>
      </li>
      <li class="shareList">
        <a :href="config.social.buyMeACoffee" target="_blank" rel="noopener noreferrer">
          <img height="40" alt="Buy Me A Coffee" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            class="img-buymeacoffee">
        </a>
      </li>
    </ul>
  </div>
</template>



<style scoped>
.share {
  margin-top: 4rem;
}

img {
  max-width: 24px;
  max-height: 24px;
}

.shareLists {
  display: flex;
  position: relative;
  align-items: center;
}

.shareList {
  text-align: center;
  display: inline-block;
  margin-right: 3rem;
  vertical-align: middle;
}

.img-buymeacoffee {
  max-width: 150px;
  max-height: 40px;
}
</style>
