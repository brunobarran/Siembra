export default function Header({ userName, userDocument }) {
  return (
    <div
      className="w-full h-auto lg:h-24 px-4 lg:px-80 py-4 flex justify-between items-center relative"
      style={{
        background: 'radial-gradient(circle at 0% 50%, #005EB8 0%, #005EB8 27%, #8C0075 92%, #8C0075 100%)'
      }}
    >
      {/* Logo */}
      <img
        src="/Siembra/img/logo-siembra-white.png"
        alt="AFP Siembra"
        className="w-[80px] lg:w-[130px] h-auto object-contain"
      />

      {/* Usuario */}
      <div className="flex items-center gap-1 lg:gap-2 flex-shrink-0">
        <img
          src="/Siembra/img/circle-user.png"
          alt="Perfil"
          className="w-6 lg:w-8 h-6 lg:h-8"
        />
        <div className="w-6 h-0 rotate-90 border-t border-white hidden lg:block" />
        <div className="flex flex-col gap-0.5 lg:gap-1 min-w-0">
          <span className="text-white text-xs lg:text-sm font-bold leading-[12px] lg:leading-[14px] truncate">
            {userName || 'Usuario'}
          </span>
          <span className="text-white text-[11px] lg:text-[13px] leading-[11px] lg:leading-[13px] truncate">
            {userDocument || '---'}
          </span>
        </div>
      </div>
    </div>
  )
}
