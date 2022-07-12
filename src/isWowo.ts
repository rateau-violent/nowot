export function isWowo(messageContent: string): boolean {
    let i = 0;
    let w = 0;
    let o = 0;

    for (i; i < messageContent.length; i++) {
        if (messageContent[i] == 'w' || messageContent[i] == 'ω')
            w++;
        if (messageContent[i] == 'o' || messageContent[i] == '0')
            o++;
    }
    if (o > 1 && w > 1)
        return true;
    return false;
}