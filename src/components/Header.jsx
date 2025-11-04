export default function Header({ userName, userDocument }) {
  return (
    <div
      className="w-full h-24 px-80 py-4 flex justify-between items-center relative"
      style={{
        background: 'radial-gradient(circle at 0% 50%, #005EB8 0%, #005EB8 27%, #8C0075 92%, #8C0075 100%)'
      }}
    >
      {/* Logo */}
      <img
        src="/Siembra/img/logo-siembra-white.png"
        alt="AFP Siembra"
        className="w-[130px] h-[56px] object-contain"
      />

      {/* Usuario */}
      <div className="flex items-center gap-2">
        <img
          src="/Siembra/img/circle-user.png"
          alt="Perfil"
          className="w-8 h-8"
        />
        <div className="w-6 h-0 rotate-90 border-t border-white" />
        <div className="flex flex-col gap-1">
          <span className="text-white text-sm font-bold leading-[14px]">
            {userName || 'Usuario'}
          </span>
          <span className="text-white text-[13px] leading-[13px]">
            {userDocument || '---'}
          </span>
        </div>
      </div>
    </div>
  )
}
