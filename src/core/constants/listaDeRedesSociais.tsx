import { AiFillTikTok } from "react-icons/ai";
import RedesSociais from "../redesSociais/RedesSociais";
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";

const listaDeRedesSociais:RedesSociais[] = [
    {
        icone: <FaFacebookSquare />,
        texto: 'Facebook',
        link:'/'
    },
    {
        icone: <FaInstagramSquare />,

        texto: 'Instagram',
        link:'/'
    },
    {
        icone: <AiFillTikTok />,
        texto: 'TikTok',
        link:'/'
    },
    {
        icone: <FaWhatsappSquare />,
        texto: 'WhatsApp',
        link:'/'
    },
]

export default listaDeRedesSociais