import {writable} from 'svelte/store';

let initialValue = localStorage.getItem('documents') ? JSON.parse(localStorage.getItem('documents')) : []  
export const documentList = writable(initialValue);

documentList.subscribe(
    (value) => {
        localStorage.setItem('documents',JSON.stringify(value))
    }
)  

export const delete_item = (name) => {
    documentList.update(
        (documents) => {
            return documents.filter(
                (document) => document.documentName !== name 
            )
        }
    )
} 