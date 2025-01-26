import { FaBookOpen, FaHouse, FaLightbulb, FaTrophy } from "react-icons/fa6";
import { MdOutlineHelp } from "react-icons/md";
import Menu from "../menu/Menu";

export const listaDeMenus: Menu[] = [
    {
        titulo: 'Início',
        icone: <FaHouse />,
        link: '/',
        submenu: null
    },
    {
        icone: <FaBookOpen/>,
        link: '',
        titulo: 'Categorias',
        submenu: [
            {
                titulo: 'Legislação de Trânsito',
                link: `/categoria`,
            },
            {
                titulo: 'Sinalização',
                link: `/categoria/`,
            },
            {
                titulo: 'Direção Defensiva',
                link: `/categoria/`,
            },
            {
                titulo: 'Mecânica Básica',
                link: `/categoria/`,
            },
            {
                titulo: 'Primeiros Socorros',
                link: `/categoria/`,
            },
        ]
    },
    {
        icone: <FaTrophy />,
        link: '/',
        titulo: 'Resultados',
        submenu: null
    },
    {
        icone: <FaLightbulb />,
        link: '/',
        titulo: 'Dicas',
        submenu: null
    },
    {
        icone: <MdOutlineHelp />,
        link: '/',
        titulo: 'Ajuda',
        submenu: null
    },
]