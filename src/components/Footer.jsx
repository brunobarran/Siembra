export default function Footer() {
  return (
    <div className="w-full h-[100px] bg-white flex flex-wrap items-center justify-center gap-2.5 px-4 text-center">
      <span className="text-[#949494] text-sm leading-[18.2px]">Términos & condiciones</span>
      <span className="text-[#949494] text-sm hidden md:inline">•</span>
      <span className="text-[#949494] text-sm leading-[18.2px]">© 2025 AFP Siembra. Todos los derechos reservados.</span>
      <span className="text-[#949494] text-sm hidden md:inline">•</span>
      <span className="text-[#949494] text-sm hidden lg:inline leading-[18.2px]">
        Su información está protegida y será utilizada únicamente para generar su plan de pensiones personalizado
      </span>
    </div>
  )
}
