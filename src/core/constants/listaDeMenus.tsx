import { FaBookOpen, FaHouse, FaLightbulb, FaTrophy } from "react-icons/fa6";
import { MdOutlineHelp } from "react-icons/md";
import Menu from "../menu/Menu";
import { createSlugWithId } from "@/utils/createSlug";

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
                link: `/categorias/${createSlugWithId('legislacao', 1)}`,
            },
            {
                titulo: 'Sinalização',
                link: `/categorias/${createSlugWithId('sinalizacao', 2)}`,
            },
            {
                titulo: 'Direção Defensiva',
                link: `/categorias/${createSlugWithId('direcao-defensiva', 3)}`,
            },
            {
                titulo: 'Mecânica Básica',
                link: `/categorias/${createSlugWithId('mecanica-basica', 4)}`,
            },
            {
                titulo: 'Primeiros Socorros',
                link: `/categorias/${createSlugWithId('primeiros-socorros', 5)}`,
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