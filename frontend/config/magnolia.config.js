import Basic from "../components/pages/Basic.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Cover from "../components/Cover.vue";
import TextAndImage from "../components/TextAndImage.vue";

const config = {
    componentMappings: {
        "app-lm:pages/basic": Basic,
        "app-lm:pages/index": Basic,
    
        "app-lm:components/header": Header,
        "app-lm:components/footer": Footer,
        "app-lm:components/text-and-image": TextAndImage,
        "app-lm:components/cover": Cover
    }
};

export default config;