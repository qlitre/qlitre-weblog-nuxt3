<template>
    <div class="container">
        <slot />
    </div>
</template>

<style scoped lang="scss">
.container {
    margin-top: var(--spacing-16);
    margin-bottom: var(--spacing-16);

    @include appContainer;
}
</style>