import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.cursosutd.inf.br">
        <img src="https://www.cursosutd.inf.br/Digitalizacao/CMS/Imagem/30/30_F.png" alt="Logo UTD" />
      </a>
      <p>
        Orgulhosamente criado para o curso de interfaces web com javascript da <a href="https://www.cursosutd.inf.br">UTD</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
