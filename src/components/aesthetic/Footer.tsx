export const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 text-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center">
        <h2 className="text-3xl font-serif text-[#D4AF37]">Cicatrizes</h2>
        <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-400">
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
          <a href="https://wa.me/yournumber" className="hover:text-white transition-colors">Agendar</a>
        </div>
        <p className="text-xs text-gray-500">© 2026 Clínica Cicatrizes - Estética de Luxo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
