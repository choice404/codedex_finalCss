export interface Directory{
    name: string,
    dirList: Directory[],
    fileList: File[]
    isFinal?: boolean
}

interface File
{
    name: string,
    link: string
    isFinal?: boolean
}
