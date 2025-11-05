import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function AIPhotoModal({ isOpen, onClose, onUpload, data }) {
  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef(null)

  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  // Prevenir scroll cuando modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const validateFile = (file) => {
    const validTypes = ['image/jpeg', 'image/png']
    const maxSize = 5 * 1024 * 1024 // 5MB

    if (!validTypes.includes(file.type)) {
      return 'Solo se permiten archivos JPG o PNG'
    }

    if (file.size > maxSize) {
      return 'El archivo debe pesar menos de 5 MB'
    }

    return null
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const validationError = validateFile(file)
    if (validationError) {
      setError(validationError)
      setSelectedFile(null)
      return
    }

    setError('')
    setSelectedFile(file)
  }

  const handleUploadClick = async () => {
    if (!selectedFile) {
      setError('Por favor selecciona una foto primero')
      return
    }

    setIsUploading(true)
    try {
      await onUpload(selectedFile)
      // Modal se cierra automáticamente después de upload exitoso
      onClose()
    } catch (err) {
      setError('Error al subir la imagen. Intenta de nuevo.')
    } finally {
      setIsUploading(false)
    }
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/60 backdrop-blur-3xl"
      onClick={handleOverlayClick}
    >
      {/* Modal */}
      <div className="w-full max-w-[600px] mx-4 lg:mx-0 p-6 lg:p-10 bg-white rounded-2xl shadow-[0px_0px_24px_rgba(0,0,0,0.25)] flex flex-col gap-8">
        {/* Contenido */}
        <div className="flex flex-col gap-3">
          {/* Botón Cerrar */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-black text-base font-black hover:text-gray-600 transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>

          {/* Profile + Medal Badge */}
          <div className="flex justify-center mb-2">
            <div className="relative w-24 h-24">
              <img
                src="/Siembra/img/profile.png"
                alt="Perfil"
                className="w-full h-full object-contain"
              />
              <img
                src="/Siembra/img/medal.png"
                alt="Medalla"
                className="absolute object-contain"
                style={{
                  width: '4rem',
                  height: '4rem',
                  right: '-1rem',
                  bottom: '-1rem'
                }}
              />
            </div>
          </div>

          {/* Título */}
          <h2 className="text-black text-xl lg:text-2xl font-bold leading-6 text-center">
            ¿Quieres ver el resultado de tus decisiones?
          </h2>

          {/* Descripción */}
          <p className="text-[#4C4C4C] text-base leading-5 text-center">
            Sube una foto y nuestra IA te mostrará cómo luciría tu "Yo del Futuro" al momento de tu retiro.
          </p>

          {/* Campo Upload */}
          <div className="flex flex-col gap-1">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png"
              onChange={handleFileChange}
              className="hidden"
              aria-label="Subir foto"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full p-4 bg-white rounded-lg border border-gray-200 flex items-center gap-2.5 hover:border-orange-400 transition-colors cursor-pointer"
            >
              <span className="flex-1 text-left text-[#949494] text-sm leading-5">
                {selectedFile ? selectedFile.name : 'Sube tu foto'}
              </span>
              <span className="text-black text-lg">📤</span>
            </button>

            {/* Error message */}
            {error && (
              <p className="text-red-600 text-sm mt-2">{error}</p>
            )}
          </div>

          {/* Nota sobre archivos */}
          <p className="text-[#4C4C4C] text-base leading-4 text-center">
            Tipo de archivo: jpg, png. Con un peso menor o igual a 5 MB
          </p>
        </div>

        {/* Botones */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch lg:items-center gap-4 lg:gap-8 w-full">
          <button
            onClick={onClose}
            className="px-4 lg:px-6 py-4 lg:py-6 rounded-[100px] border border-orange-400 text-orange-400 text-lg lg:text-xl font-bold leading-5 hover:bg-orange-50 transition-colors cursor-pointer"
          >
            Saltar
          </button>
          <button
            onClick={handleUploadClick}
            disabled={isUploading || !selectedFile}
            className="px-4 lg:px-6 py-4 lg:py-6 bg-orange-400 rounded-[100px] text-white text-lg lg:text-xl font-bold leading-5 hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isUploading ? 'Subiendo...' : 'Subir imagen'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
