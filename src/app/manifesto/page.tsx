import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Manifesto() {
  const messageTitle = `ARMY, a história do mundo é a história da luta de classes.`
  const message = `
  E você sabia que nós não estamos, enquanto seres sociais, descolados dela? Nem você, nem Kim Namjoon, Kim Seokjin, Min Yoongi, Jung Hoseok, Park Jimin, Kim Taehyung e Jeon Jungkook!
  Curiosamente, o fandom Army é um dos maiores e mais organizados grupos-fãs de artistas musicais, do Brasil e do mundo. Diversas vezes, fomos reconhecidos por mobilizações em prol de uma causa social, unidos pelo bem comum e em respeito a diversidade étnica, cultural e, principalmente, musical.
  A Liga Comunarmy nasce, portanto, das inquietações e da urgência da juventude diante das mazelas e da opressão violenta do capitalismo sob nossas vidas. A Liga Comunarmy é um sopro de esperança, um desejo intrínseco de sentir-se combatente ao sistema dominante, que tanto nos aniquila diariamente, nos transforma em pura mercadoria e explora a nossa força de trabalho, enquanto uma pequena classe é beneficiada pelo que é produzido pelas nossas mãos. Nós, classe trabalhadora, somos quem produzimos essa riqueza e quem reproduz a vida social em sociedade.
  Por isso, nosso intuito quanto fanbase organizada socialmente é democratizar o acesso à informação qualificada e disseminar conhecimento a respeito das pautas da classe trabalhadora ao fandom Army, a fim de unidos nos politizarmos e reconfigurarmos o sistema em que vivemos.
  Ei, ARMY, aprendemos com BTS que o coletivo move montanhas, que com a força de milhões escrevemos a história. A Liga Comunarmy é sobretudo, um convite honesto e esperançoso ao futuro que merecemos e desejamos ao mundo. A Liga Comunarmy deseja reunir e desenvolver a consciência política e social de cada um que entendeu em 'Baepsae' e o que Agust D e RM declararam ao mundo em 'Strange':
  "O capital injeta a morfina chamada Esperança com os sonhos como garantia
  A riqueza gera riqueza e testa a ganância
  [...]
  Não importa quanto dinheiro alguém tenha
  Todo mundo é escravo deste sistema".
  `

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Manifesto
        </p>
        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="mb-32 grid text-center">
        <h1 className="mb-3 text-2xl font-semibold">{messageTitle}</h1>
        <p>{message}</p>
      </div>
    </main>
  )
}
