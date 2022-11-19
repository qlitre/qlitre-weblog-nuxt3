<template>
    <footer class="footer">
        <div class="wrapper">
            <p class="text"><small>© 2022 qlitre</small></p>
        </div>
    </footer>
</template>


<style scoped lang="scss">
.footer {
    text-align: center;
    padding: 2rem 0;
}

.wrapper {
    max-width: 1100px;
    margin: 0 auto;
}

.text {
    color: var(--qlitre-colors-gray-500);
    font-size: 1.2rem;
}

.dark-mode .text {
    color: var(--qlitre-colors-whiteAlpha-700);
}
</style>