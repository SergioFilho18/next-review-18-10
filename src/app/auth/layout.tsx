import { ReactNode } from "react";
import "./globals.css";

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
        <h2>Área de Autenticação</h2>
        <div>
            {children}
        </div>
        <div>
            Login ou Cadastro
        </div>
    </div>
  );
}

export default Layout;