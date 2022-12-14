<!-- 보간법 -->

<script>
    let href = 'https://ttoobi.blog'
    let name = 'ttoobi' 
    let value = 'New input value!'
    let isUpperCase = false
</script>

<!-- <a href = "https://ttoobi.blog">ttoobi</a> -->
<a {href}>{name}</a>
<!-- 단방향 데이터에서는 속성과 데이터 이름이 같으면 속성을 생략할 수 있다 -->

<!-- <input type = "text" value = "Default value"/> -->
<input {value} on:input={e => value = e.target.value} />
<!-- 화살표 함수는 인수가 하나이면 소괄호와 뒤의 중괄호를 생략할 수 있다. -->
<input bind:value />
<!-- 양방향 데이터는 속성과 데이터 이름이 같으면 데이터를 생략한다. -->