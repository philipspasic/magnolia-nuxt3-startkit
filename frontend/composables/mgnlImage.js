export function useMgnlImage(image) {
    if (!image || !image['@link']) return "";
    const runtimeConfig = useRuntimeConfig();
    return runtimeConfig.MGNL_HOST + image['@link'];
}