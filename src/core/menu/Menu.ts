interface Submenu{
    titulo: string
    link: string
}

export default interface Menu{
    titulo: string
    icone: React.ReactElement
    link: string
    submenu: null | Submenu[]
}