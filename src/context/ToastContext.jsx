import { createContext, useContext, useState, useCallback } from 'react'
import { CheckCircle, Info, AlertCircle, X } from 'lucide-react'

const ToastContext = createContext(null)

const ICONS = {
  success: CheckCircle,
  info: Info,
  error: AlertCircle,
}

const STYLES = {
  success: 'bg-coffee-800 text-white border-coffee-600',
  info: 'bg-white text-coffee-800 border-coffee-200',
  error: 'bg-red-600 text-white border-red-500',
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const showToast = useCallback((message, type = 'success', duration = 2800) => {
    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => dismiss(id), duration)
    return id
  }, [dismiss])

  return (
    <ToastContext.Provider value={{ showToast, dismiss }}>
      {children}
      <div className="pointer-events-none fixed left-1/2 top-4 z-[100] flex w-full max-w-md -translate-x-1/2 flex-col gap-2 px-4">
        {toasts.map((toast) => {
          const Icon = ICONS[toast.type] || CheckCircle
          return (
            <div
              key={toast.id}
              className={`pointer-events-auto flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-xl backdrop-blur-md animate-fade-in-up ${STYLES[toast.type]}`}
              role="status"
            >
              <Icon size={18} className="shrink-0" />
              <p className="flex-1 text-sm font-medium">{toast.message}</p>
              <button
                type="button"
                onClick={() => dismiss(toast.id)}
                className="shrink-0 rounded-lg p-1 opacity-70 transition hover:opacity-100"
                aria-label="Dismiss"
              >
                <X size={14} />
              </button>
            </div>
          )
        })}
      </div>
    </ToastContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
