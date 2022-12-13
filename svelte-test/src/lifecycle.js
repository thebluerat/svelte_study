import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte'
import {writable} from 'svelte/store'

export function lifecycle() {
    onMount(() => {
        console.log('Mounted!')
    })
    onDestroy(() => {
        console.log('Before destroy!')
    })
    beforeUpdate(() => {
        console.log('Before update!')
    })
    afterUpdate(() => {
        console.log('After update!')
    })
}

export function delayRender(delay = 3000) { //인수가 없으면 3초
    let render = writable(false)
    onMount(() => {
        setTimeout(() => {
            // $render = true $표시는 .svelte로 끝나는 파일에서만 알아볼 수 있음
            console.log(render) // set, update, subscribe
            render.set(true)
        }, delay)
    })
    return render
}