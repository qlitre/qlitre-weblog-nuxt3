<script setup lang="ts">
const error = useError()
</script>
    
<template>
    <div>
        <ul>
            <li>{{ error.message }}</li>
        </ul>
    </div>
</template>