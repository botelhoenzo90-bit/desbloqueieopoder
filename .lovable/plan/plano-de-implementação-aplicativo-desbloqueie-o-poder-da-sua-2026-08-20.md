# Plano de Implementação - Aplicativo "Desbloqueie o Poder da Sua Mente"

Desenvolvimento de um aplicativo web mobile-first premium para uma jornada de 7 dias de transformação pessoal.

## 1. Fundação e Design System
- Configurar `src/styles.css` com tokens OKLCH para um tema "Cinematográfico Premium" (fundo escuro, tipografia elegante, acentos de luz).
- Implementar utilitários para animações de "faíscas/luz" (framer-motion) e efeitos sonoros.
- Criar componentes base: `PremiumCard` (estilo Netflix 4:5), `VideoPlayer` (YouTube embed), `SoundManager`.

## 2. Autenticação Local e Estado Global
- Implementar sistema de cadastro/login salvo no `localStorage`.
- Criar hook `useJourneyStore` para gerenciar:
  - Progresso dos 7 dias e pontos.
  - Respostas do quiz e diagnósticos.
  - Metáfora do dia (persistente por data).
- Adicionar função "Reiniciar Jornada".

## 3. Arquitetura de Rotas
- `__root.tsx`: Header/Footer e `SoundManager`.
- `/login`: Tela de cadastro/login.
- `/welcome`: Vídeo de boas-vindas e introdução.
- `/`: Home estilo Netflix com cards desbloqueáveis e navegação por seções (Jornada, Livros, Bônus).
- `/day/$dayId`: Interface da jornada diária contendo: Aula, Protocolo, Quiz, Diagnóstico, Missão.
- `/metaphor`: Seção da Metáfora do Dia independente.

## 4. Funcionalidades Principais
- **Jornada 7 Dias**: Lógica de desbloqueio progressivo e geração de diagnósticos personalizados (~2700 caracteres).
- **Metáfora do Dia**: Sistema que gera conteúdo baseado na data atual com tom de "confronto mental".
- **Gamificação**: Sistema de pontos e ranking local.
- **Integração Externa**: Links para Central de Comando, Comunidade e Apps Bônus.
- **Certificado**: Geração de PDF/Imagem de conclusão após o Dia 7.

## Detalhes Técnicos
- **Framework**: TanStack Start (React 19).
- **Estilização**: Tailwind CSS v4.
- **Animações**: Framer Motion.
- **Persistência**: `localStorage` (Lovable Cloud opcional se solicitado persistência multi-device).
- **Assets**: Utilizar `thumbnail.jpeg` enviado para as capas da jornada.
