export async function copy(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        console.error(`Could not copy text to clipboard: ${error}`);
    }
}