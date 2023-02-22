import Basic from "../templates/pages/Basic.vue";

import PageHeader from "../templates/layout/PageHeader.vue";
import PageFooter from "../templates/layout/PageFooter.vue";
import Cover from "../components/Cover/Cover.vue";
import TextAndImage from "../components/TextAndImage/TextAndImage.vue";

const config = {
    componentMappings: {
        "app-lm:pages/basic": Basic,
        "app-lm:pages/index": Basic,
    
        "app-lm:components/header": PageHeader,
        "app-lm:components/footer": PageFooter,
        "app-lm:components/text-and-image": TextAndImage,
        "app-lm:components/cover": Cover
    }
};

export default config;