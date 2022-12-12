<script>
    import {onMount, onDestroy, beforeUpdate, afterUpdate} from 'svelte'

    let name = 'Something..'
    let h1

    function moreDot() {
        name += '.'
    }

    //화면 바뀌기 전에 실행
    beforeUpdate(() => {
        console.log('Before Update!')
        console.log(h1 && h1.innerText)
        //&&(그리고) - h1 태그가 존재하는 경우에만 h1의 innertext 출력
    })
    //화면 바뀌고 난 후 실행
    afterUpdate(() => {
        console.log('After update!!!')
        console.log(h1.innerText)
    })
    //반응성을 가지는 데이터의 갱신 로직은 beforeUpdate, afterUpdate 안에 넣으면 무한 루프에 빠질 수 있으니 안에 넣지 않는 게 좋다.

    onMount(() => {
        console.log('Mounted!')
        // return () => {
        //     console.log('Destroy in mount')
        // }
        // onDestroy와 같음
        h1 = document.querySelector('h1')
    })
    onDestroy (() => {
        console.log('before destroyed')
        //const h1 = document.querySelector('h1')
        //console.log(h1.innerText)
        //화면에서 사라지기 전에 처리됨
    })
</script>

<h1 on:click={moreDot}>{name}</h1>