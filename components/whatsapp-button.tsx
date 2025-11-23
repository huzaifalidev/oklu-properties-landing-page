"use client"

export default function WhatsAppButton() {
  const phoneNumber = "+1234567890" // Replace with actual WhatsApp number
  const message = "Hi OKLU Properties, I would like to inquire about your services."
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BA5A] transition-colors duration-300 z-40 animate-bounce"
      aria-label="Chat with us on WhatsApp"
    >
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949l-.305.149-3.158-.829.845 3.075c-.635 1.307-.963 2.766-.963 4.332 0 5.304 4.334 9.604 9.645 9.604 2.812 0 5.456-1.031 7.469-2.914 1.913-1.883 2.973-4.531 2.973-7.391 0-5.315-4.334-9.626-9.645-9.626m8.296 0c-3.89 0-7.065-3.169-7.065-7.066C5.23 3.169 8.405 0 12.296 0s7.065 3.169 7.065 7.066c0 3.897-3.175 7.066-7.065 7.066Z" />
      </svg>
    </a>
  )
}
