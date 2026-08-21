# Plano de Refinamento e Correção do Aplicativo "Desbloqueie o Poder da Sua Mente"

O objetivo é corrigir erros estruturais, completar o conteúdo da jornada de 7 dias, implementar a lógica detalhada de gamificação e sons, e refinar a experiência da metáfora diária para seguir fielmente o prompt original.

## Refinamentos Técnicos

- **Autenticação**: Adicionar campo de SENHA no login e persistência local refinada.
- **Estrutura de Conteúdo**: Expandir `JOURNEY_DATA` para incluir os 12 cards (Seja Bem-Vindo, 7 dias, Comando, Livros, Neuroleitura, Instituto) com links de vídeo específicos.
- **Lógica de Quiz e Diagnóstico**: Implementar o diagnóstico personalizado de ~2.700 caracteres baseado nas respostas do quiz (9 perguntas por dia).
- **Gamificação**: Implementar o sistema de pontos granular (acesso, aula, quiz, metáfora, missão, conclusão) e o ranking local.
- **Navegação Sonora**: Criar utilitário para reproduzir efeitos sonoros discretos em interações.
- **Metáfora do Dia**: Implementar gerador de metáforas de confronto mental de ~2.700 caracteres baseado na data atual.

## Etapas de Implementação

### 1. Sistema Base e Sons
- Criar `src/lib/audio.ts` para gerenciar os efeitos sonoros (clique, conclusão, desbloqueio).
- Atualizar `src/lib/store.ts` para incluir senhas, missões concluídas e histórico de metáforas.

### 2. Jornada de 7 Dias (Conteúdo)
- Atualizar `src/routes/day.$dayId.tsx` para incluir as 9 perguntas por dia e a lógica de geração de texto longo para o diagnóstico.
- Adicionar os estados de "Exercícios" e "Missão" no fluxo do dia.
- Implementar o banner de conclusão com efeitos visuais e sonoros específicos.

### 3. Home e Cards (Netflix Style)
- Reorganizar a Home para mostrar os 12 cards na ordem correta, começando pela Comunidade.
- Garantir a proporção 4:5 nas capas e o desbloqueio progressivo.
- Adicionar a seção de "Bônus Premium" com links externos.

### 4. Metáfora Independente
- Refinar `src/routes/metaphor.tsx` para gerar o texto de confronto mental personalizado e salvar o estado por data.

### 5. Gamificação e Finalização
- Adicionar tela/seção de Ranking.
- Implementar a lógica de emissão do Certificado Digital após o Dia 7.
- Aplicar o CSS para remover a marca d'água conforme solicitado.
