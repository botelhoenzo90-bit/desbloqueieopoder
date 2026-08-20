import { createFileRoute } from "@tanstack/react-router";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6 bg-background text-foreground">
      <pre className="whitespace-pre-wrap max-w-4xl font-sans">
        CONSTRUA UM APLICATIVO WEB MOBILE-FIRST PREMIUM, RESPONSIVEL QUE FUNCIONA EM CELULARES,NOTEBOOKS,TABLET ETC ..CHAMADO:

        DESBLOQUEIE O PODER DA SUA MENTE

        Subtítulo:

        7 dias para sair do piloto automático, perceber os padrões que governam sua experiência e descobrir novas possibilidades de resposta.

        OBJETIVO:

        Criar uma jornada interativa de 7 dias de desenvolvimento pessoal, baseada em:

        PERCEBER → DECODIFICAR → REENQUADRAR → ESCOLHER → CONSOLIDAR.

        1. LOGIN

        Criar cadastro com NOME e SENHA.

        Salvar localmente.

        Personalizar a experiência usando o nome cadastrado.

        Criar botão REINICIAR JORNADA para apagar progresso, respostas, missões, protocolos e conclusões.

        TELA DE BOAS VINDAS 

        Apos fazer o login abrir uma tela e inserir essa aula de boas vindas com texto abaixo da aula incentivando a clicar no botão para acessar a jornada 

        Link da aula

        https://youtu.be/DWzyXrmr6kY?is=6pGkKMoaeWvXMLSe

        2. HOME

        Criar interface premium estilo Netflix, mobile-first.

        Capas horizontais1080 x 1350 pixels (proporção 4:5) 

        Mostrar progresso geral da jornada.

        Criar navegação sonora: cada clique, interação e conclusão deve produzir efeitos sonoros discretos.

        3. JORNADA DE 7 DIAS

        Criar 12 cards desbloqueados progressivamente:

        SEJA BEM VINDOS 

        LINK DA AULA 

        https://youtu.be/7SSS9Ev7LSc?is=Tc3OzEcaey4qCThD

        CARD DIA 1 — A MENTE QUE VOCÊ NÃO ESTÁ PERCEBENDO

        Link da aula 

        https://youtu.be/0qKbe2jMRV0?is=ZwVm_k4y7sRzD5E-

        CARD DIA 2 — QUANDO O PENSAMENTO COMEÇA A DIRIGIR VOCÊ

        https://youtu.be/jFp_ae_kp7g?is=fcL2Nn7TgKis-KDw

        CARD DIA 3 — O CÓDIGO POR TRÁS DOS SEUS PADRÕES

        CARD DIA 4 — O CONFRONTO COM A MENTE QUE CRIOU SEUS LIMITES

        CARD DIA 5 — A MUDANÇA COMEÇA QUANDO VOCÊ ENXERGA OUTRA POSSIBILIDADE

        CARD DIA 6 — QUANDO CONSCIÊNCIA VIRA ESCOLHA

        CARD DIA 7 — VOCÊ NÃO PRECISA SER REFÉM DA SUA MENTE

        O próximo dia só desbloqueia após concluir o anterior.

        Cada dia deve conter:

        AULA EM VÍDEO

        PROTOCOLO

        QUIZ

        DIAGNÓSTICO

        EXERCÍCIOS

        MISSÃO

        CONCLUSÃO.

        Os vídeos serão adicionados gradativamente. Criar campos internos para receber os links posteriormente e reproduzir os vídeos dentro do aplicativo, sem redirecionar o usuário para o YouTube.

        QUIZ E DIAGNÓSTICO

        Após assistir à aula, liberar um quiz com 9 perguntas.

        Cada pergunta possui 3 respostas.

        As respostas devem gerar um diagnóstico personalizado de aproximadamente 2.700 caracteres, utilizando o nome do usuário.

        Depois apresentar:

        PROTOCOLO DE IMPLEMENTAÇÃO

        EXERCÍCIOS PRÁTICOS

        MISSÃO DO DIA.

         CONCLUSÃO

        Ao concluir cada dia:

        mostrar banner:

        “PARABÉNS, [NOME]! VOCÊ CONCLUIU O DIA X.”

        Tocar som de conclusão e criar efeito visual de faíscas/luz.

        Mostrar o próximo dia desbloqueado.

        Ao concluir os 7 dias:

        emitir CERTIFICADO DIGITAL DE CONCLUSÃO DA JORNADA E ABRIR O VÍDEO DE APRESENTAÇÃO DO INSTITUTO NEUROCONSCIÊNCIA MASTER O PRÓXIMO PASSO (o link do vídeo será enviado no Lovable posteriormente)

        CARD 8. CENTRAL DE COMANDO 

        criar card:

        CENTRO DE COMANDO OPERACIONAL 

        Link da aula (será enviado posteriormente ao Lovable)

        Link para acessar:

        https://mentor-primario.lovable.app/

        CARD 9. LIVROS

        Criar card:

        ROBÔ DECODIFICADOR DE LIVROS

        Abrir:

        https://neuroleitor.lovable.app/

        Também criar área visual:

        E-BOOKS E AUDIOBOOKS.

        CARD 10. COMUNIDADE

        Criar card:

        COMUNIDADE NEUROCONSCIÊNCIA(esse card deve ser o primeiro)

        Abrir:

        https://comunidade-gratuito.lovable.app/

        CARD 11. MÉTODO NEUROLEITURA

        criar card:

        Absorva os conhecimentosdos livros sem precisar ler centenas de páginas(O vídeo da aula será enviado no Lovable posteriormente)

        CARD 12. INSTITUTO NEUROCONSCIÊNCIA DE DESENVOLVIMENTO HUMANO 

        Criar card:

        Conheça o próximo passo da sua jornada 

        (O vídeo da aula será enviado no Lovable posteriormente)

        11. METÁFORA DO DIA — EXPERIÊNCIA INDEPENDENTE

        Criar uma seção permanente chamada:

        METÁFORA DO DIA

        IMPORTANTE:

        A metáfora NÃO pertence aos 7 dias e NÃO deve ser desbloqueada junto com eles.

        Ela é uma experiência diária independente.

        A cada novo dia de acesso, identificar automaticamente a DATA ATUAL e mostrar:

        METÁFORA DO DIA

        [DATA]

        Exemplo:

        METÁFORA DO DIA

        18 DE AGOSTO DE 2026

        Gerar uma metáfora original de aproximadamente 2.700 caracteres, personalizada com o nome do usuário.

        A metáfora deve funcionar como CONFRONTO MENTAL:

        não criar uma história bonita ou motivacional.

        Deve provocar reconhecimento:

        “isso está acontecendo comigo.”

        Utilizar imagens mentais para revelar padrões de pensamento, emoções e comportamentos.

        Após a metáfora, apresentar:

        REFLEXÃO

        EXERCÍCIO

        MISSÃO DE IMPLEMENTAÇÃO.

        Registrar a metáfora recebida, data, reflexão, exercício e missão.

        No mesmo dia, o usuário deve visualizar a mesma metáfora ao retornar ao aplicativo.

        No dia seguinte, gerar uma nova metáfora.

        12. BÔNUS PREMIUM 

        Criar seção:

        Criar sessão de bônus premium 

        APLICATIVO 12 CONFRONTO 

        https://metodoneuroconfronto.lovable.app/

        APLICATIVO FORTALEZA INTERIOR 

        https://inner-fortress-mind-forge.lovable.app/challenge

        APLICATIVO REVELE SEU DESTINO 


        https://destiny-unlocked-app.lovable.app/


        13. GAMIFICAÇÃO

        Criar seção sistema de pontos:

        acesso diário = pontos

        aula concluída = pontos

        quiz concluído = pontos

        metáfora recebida = pontos

        missão concluída = pontos

        dia concluído = pontos.

        Criar nível, progresso e ranking com os nomes cadastrados localmente.

        14. DESIGN

        Interface:

        premium

        cinematográfica

        minimalista

        sofisticada

        mobile-first.

        Usar a imagem anexada ao projeto como base das capas dos 7 dias.

        Não criar novas imagens para as capas.

        Para outras telas, utilizar recursos visuais internos do Lovable.

        15. RODAPÉ

        Exibir:

        © Instituto NeuroConsciência de Desenvolvimento Humano

        Criador: Jöweslëy

        REGRA FINAL:

        Não criar uma área tradicional de curso.

        Criar um APLICATIVO INTERATIVO DE JORNADA E TRANSFORMAÇÃO PESSOAL.

        Não inventar links de aulas.

        Os links serão adicionados gradativamente.

        Deixar a estrutura preparada para receber novos links sem alterar a arquitetura.

        Usar esse código para remover a marca d"agua 

        #lovable-badge {"{"}

        display: none !important;

        {"}"}
      </pre>
    </div>
  );
}
