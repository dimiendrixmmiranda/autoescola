interface Submenu {
    texto: string
    link: string
}
export default interface Menu {
    icone: React.ReactElement
    texto: string
    link: string
    submenu?: Submenu[]
}