import 'tailwindcss/tailwind.css';

window.Buffer = window.Buffer || require("buffer").Buffer

export const onClientEntry = () => {
    window.onload = () => { console.log('© 2021 | Developed by George Barbu') }
}

