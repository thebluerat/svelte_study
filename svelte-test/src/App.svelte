<!-- 디버그 -->

<script>
    let name = 'ttoobi'
    let index = 0
</script>

{@debug index, name}
<!-- 보간에 작성된 데이터가 변경될 때마다 콘솔에 해당하는 내용을 출력한다. -->

<h1 on:click={() => {index += 1}}>Hello {name}!</h1>