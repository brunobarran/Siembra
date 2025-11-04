export default function ChatBubble() {
  return (
    <div className="
      fixed
      bottom-4 right-4 lg:bottom-[100px] lg:right-[32px]
      w-[60px] h-[60px] lg:w-[73px] lg:h-[73px]
      bg-[#FDB216] rounded-full
      flex items-center justify-center
      cursor-pointer hover:bg-[#FCA500]
      transition-colors shadow-lg
      z-50
    ">
      <span className="text-white text-lg lg:text-[22px]">💬</span>
    </div>
  )
}
