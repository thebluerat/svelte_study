<script>
    import {delayRender} from './lifecycle.js'

    let done = delayRender(1000) // 1초 뒤에 렌더링
</script>

{#if $done}
    <h1>Something...</h1>
{/if}