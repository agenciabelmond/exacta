import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const whatsappNumber = "5521971033866"
  const whatsappMessage = "Olá! Vim pelo site e gostaria de mais informações."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen flex flex-col bg-black bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:3px_3px]">
      {/* Header */}
      <header className="bg-[#2e2c2c] px-8 py-6 flex items-center justify-center gap-3">
        <Image
          src="/logo.png"
          alt="Exacta Odontologia Logo"
          width={50}
          height={50}
          className="h-10 w-auto md:h-[50px]"
          priority
        />
        <h1 className="text-2xl md:text-[2rem] font-normal tracking-tight text-white">Exacta Odontologia</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-12 text-center">
        <p className="text-lg md:text-[1.1rem] font-normal mb-8 opacity-95 text-white leading-relaxed">
          Conecte-se agora com a equipe da Exacta Odontologia e <br className="hidden sm:block" />
          continue seu agendamento com segurança.
        </p>

        <h2 className="text-[1.90rem] md:text-[2.5rem] font-normal leading-snug mb-10 max-w-[800px] text-white text-balance">
          Clique no botão abaixo para prosseguir seu atendimento
        </h2>

        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 md:px-10 md:py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 hover:bg-[#20BA5A] hover:-translate-y-0.5 active:translate-y-0"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span>Entrar em contato</span>
        </Link>
      </main>

      {/* Footer */}
      <footer className="px-8 py-8 text-center bg-white text-[#333] flex items-center justify-center gap-2 text-sm">
        <Image src="/logo.png" alt="Exacta Odontologia Logo" width={27} height={26} className="h-[26px] w-[27px]" />
        <span>Exacta Odontologia ® Todos direitos reservados.</span>
      </footer>
    </div>
  )
}
