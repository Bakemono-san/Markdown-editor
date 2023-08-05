import {writable} from 'svelte/store';

export const isLight = writable(false);

export const toggle_theme = () =>{
    isLight.update(
        (n) => n = !n
    )
}
