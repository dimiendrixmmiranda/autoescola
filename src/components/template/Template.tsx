import { ReactNode } from "react";
import Header from "./cabecalho/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

interface TemplateProps {
    children: ReactNode
}

export default function Template({ children }: TemplateProps) {
    return (
        <div className="bg-[--laranja-escuro] min-h-[100vh]" style={{display: 'grid', gridTemplateRows: 'auto 1fr auto'}}>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer></Footer>
        </div>
    )
}