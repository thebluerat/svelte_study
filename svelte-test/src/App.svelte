<script>
    import {lifecycle, delayRender} from './lifecycle.js'
    import Something from './Something.svelte'

    let done = delayRender()
    lifecycle()
</script>

{#if $done}
    <h1>Hello Lifecycle!</h1>
{/if}

<Something /> 
<!-- Something을 별도의 컴포넌트로 선언함 -->