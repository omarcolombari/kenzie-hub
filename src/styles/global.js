import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
body, input, button {
    font-family: 'Inter', sans-serif;
}

body {
    background-color: var(--grey-4);
    height: 100vh;
}

button {
    cursor: pointer;
}

button, input {
    border-radius: 5px;
}

a {
    text-decoration: none;
}

:root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --sucess: ##3FE864;
    --negative: #E83F5B;

    --title-1: 1rem;
    --title-2: calc(var(--title-1) - 0.25);
    --title-3: calc(var(--title-2) - 0.25);

    --radius-inputs-buttons: 1px;
}

`;