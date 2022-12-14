<!-- tick: 라이프사이클. 데이터가 갱신되고 나서 화면이 바뀌는 반응성을 가질 때까지 잠시 기다리게 해주는 능력이다. 실행 위치가 자유롭다. -->

<script>
    import { tick } from 'svelte'
    let name= 'world'

    async function handler() {
        name = 'ttoobi'
        await tick()
        const h1 = document.querySelector('h1')
        console.log(h1.innerText)
    }
    // tick을 쓰기 전: Svelte의 최적화 방법으로 내부의 로직을 전부 다 실행하고 나서 화면을 갱신한다. 따라서 클릭을 한 후에도 log에는 Hello world!가 뜬다.
    // tick이라는 함수는 promise 객체를 반환한다. 따라서 await를 붙여서 비동기로 실행해줘야 하고, 그러면 함수 앞에 async를 붙여줘야 한다.
</script>

<h1 on:click={handler}>Hello {name}!</h1>