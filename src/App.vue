<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
export default {
    created() {},
};
</script>
<style>
#app {
    background: #fff;
    /* min-width: 1200px; */
    height: 100%;
}
html,
body {
    width: 100%;
    height: 100%;
    margin: 0;
}
* {
    box-sizing: border-box;
}
</style>
