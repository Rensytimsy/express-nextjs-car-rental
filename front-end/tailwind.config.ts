import { Config } from "tailwindcss";


const config: Config = {
    theme: {
        extend: {
            fontFamily: {
                lora: 'var(--lora-font)',
                stylish: 'var(--stylish-font)'
            }
        }
    },
    plugins: []
}


export default config;