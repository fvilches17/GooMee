export function isClipboardApiSupported() {
    return navigator.clipboard !== undefined;
};

export async function writeToClipboard(text) {
    await navigator.clipboard.writeText(text);
};