<template>
    <button class="button"
        @click="$emit('onClick', label)"
        :class="{ double, triple, operation }">
        {{ label }}
    </button>
</template>

<script>
export default {
    props: {
        label: {},
        operation: { type: Boolean },
        double: { type: Boolean },
        triple: { type: Boolean }
    }
}
</script>

<style>
:root {
    --bg-button: #f0f0f0;
    --border-button: solid 1px #888;
}

.button {
    font-size: 1.4rem;
    background-color: var(--bg-button);
    border: none;
    border-right: var(--border-button);
    border-bottom: var(--border-button);
    border-radius: 5px;
    outline: none;
    margin: 0.1rem;
}

.button:active {
    background-color: #c58787;
}

.button.double{
    grid-column: span 2;
}

.button.triple {
    grid-column: span 4;
}

.button.operation {
    background-color: rgba(121,9,88,1);
    color: #fff;
}

.button.operation:active {
    background-color: #fa8231cc;
}
</style>