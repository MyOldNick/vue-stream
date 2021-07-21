<template>
    <input class="input"/>
</template>

<script>
export default {
    name: "DefaultInput",
}
</script>

<style lang="scss" scoped>
.input {
    width: 100%;
    height: 60px;
    border: 2px solid rgb(211, 208, 208);
    transition: .3s;

    &:focus {
        border: 2px solid #6300ee;
        outline: none;
    }
}

</style>