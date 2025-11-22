export default function Cabecalho() {
  return (
    <header className="cabecalho-topo">
      <a 
        href="https://uniube.br" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Visitar site da Uniube"
      >
        {/* IMPORTANTE:
           1. A imagem deve estar dentro da pasta "public" na raiz do projeto.
           2. O caminho começa com "/" que representa a pasta public.
           3. Se sua imagem tiver outro nome, altere "logo-uniube.png" abaixo.
        */}
        <img 
          src="/uniube.png" 
          alt="Logo Uniube" 
          className="logo-img"
        />
      </a>
    </header>
  );
}