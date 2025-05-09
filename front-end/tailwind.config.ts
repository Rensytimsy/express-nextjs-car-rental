import { Config } from "tailwindcss";


const config: Config = {
    theme: {
        extend: {
            fontFamily: {
                lora: 'var(--lora-font)',
                stylish: 'var(--stylish-font)'
            },
            colors: {
                BrightOrange: "#FFAC1C"
            }
        }
    },
    plugins: []
}


export default config;