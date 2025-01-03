import Menu from "../menu/Menu";
import { FaHouse } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { MdOutlineHelp } from "react-icons/md";

const listaDeMenus: Menu[] = [
    {
        icone: <FaHouse />,
        link: '/',
        texto: 'Início',
    },
    {
        icone: <FaBookOpen />,
        link: '/',
        texto: 'Categorias',
        submenu: [
            {
                texto: 'Legislação de Trânsito',
                link: '/',
            },
            {
                texto: 'Sinalização',
                link: '/',
            },
            {
                texto: 'Direção Defensiva',
                link: '/',
            },
            {
                texto: 'Mecânica Básica',
                link: '/',
            },
            {
                texto: 'Primeiros Socorros',
                link: '/',
            },
        ]
    },
    {
        icone: <FaTrophy />,
        link: '/',
        texto: 'Resultados',
    },
    {
        icone: <FaLightbulb />,
        link: '/',
        texto: 'Dicas',
    },
    {
        icone: <MdOutlineHelp />,
        link: '/',
        texto: 'Ajuda',
    },
]

export default listaDeMenus