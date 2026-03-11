// src/styles/common.js
// Theme: Apple Light — white/f5f5f7 background, #1d1d1f text, #0066cc accent
// Inspired by apple.com — no gradients, no shadows, pure typography & spacing

// ─── Layout ───────────────────────────────────────────
export const pageBackground = "bg-white min-h-screen"
export const pageWrapper    = "max-w-5xl mx-auto px-6 py-16"
export const section        = "mb-14"

// ─── Cards ────────────────────────────────────────────
export const cardClass      = "bg-[#f5f5f7] rounded-2xl p-7 hover:bg-[#ebebf0] transition-colors duration-200 cursor-pointer"

// ─── Typography ───────────────────────────────────────
export const pageTitleClass = "text-5xl font-bold text-[#1d1d1f] tracking-tight leading-none mb-2"
export const headingClass   = "text-4xl font-semibold text-[#1d1d1f] tracking-tight text-center p-2 text-blue-500 "
export const subHeadingClass= "text-2xl font-semibold text-[#1d1d1f] tracking-tight text-center p-2 text-blue-500 "
export const bodyText       = "text-[#6e6e73] leading-relaxed p-2 m-3"
export const mutedText      = "text-sm text-[#a1a1a6]"
export const linkClass      = "text-[#0066cc] hover:text-[#004499] transition-colors"

// ─── Buttons ──────────────────────────────────────────
export const primaryBtn     = "bg-[#0066cc] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#004499] transition-colors cursor-pointer text-sm tracking-tight"
export const secondaryBtn   = "border border-[#d2d2d7] text-[#1d1d1f] font-medium px-5 py-2 rounded-full hover:bg-[#f5f5f7] transition-colors cursor-pointer text-sm"
export const ghostBtn       = "text-[#0066cc] font-medium hover:text-[#004499] transition-colors cursor-pointer text-sm"

// ─── Forms ────────────────────────────────────────────
export const formCard       = "bg-[#f5f5f7] rounded-2xl p-10 max-w-md mx-auto m-6"
export const formTitle      = "text-2xl font-bold text-[#1d1d1f] tracking-tight text-center mb-7"
export const labelClass     = "text-xs font-medium text-[#6e6e73] mb-1.5 block"
export const inputClass     = "w-full bg-white border border-[#d2d2d7] rounded-xl px-4 py-2.5 text-[#1d1d1f] text-sm placeholder:text-[#a1a1a6] focus:outline-none focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/10 transition"
export const formGroup      = "mb-4"
export const submitBtn      = "w-full bg-[#0066cc] text-white font-semibold py-2.5 rounded-full hover:bg-[#004499] transition-colors cursor-pointer mt-2 text-sm tracking-tight"

// ─── Navbar ───────────────────────────────────────────
export const navbarClass        = "bg-white/85 backdrop-blur-xl backdrop-saturate-150 border-b border-[#e8e8ed] px-8 h-[52px] flex items-center sticky top-0 z-50"
export const navContainerClass  = "max-w-5xl mx-auto w-full flex items-center justify-between"
export const navBrandClass      = "text-base font-semibold text-[#1d1d1f] tracking-tight"
export const navLinksClass      = "flex items-center gap-7"
export const navLinkClass       = "text-[0.8rem] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors font-normal"
export const navLinkActiveClass = "text-[0.8rem] text-[#0066cc] font-medium"


// ─── Feedback ─────────────────────────────────────────
export const errorClass         = "bg-[#ff3b30]/[0.06] text-[#cc2f26] border border-[#ff3b30]/[0.18] rounded-xl px-4 py-3 text-sm"
export const successClass       = "bg-[#34c759]/[0.07] text-[#248a3d] border border-[#34c759]/20 rounded-xl px-4 py-3 text-sm"
export const loadingClass       = "text-[#0066cc]/60 text-sm animate-pulse text-center py-10"
export const emptyStateClass    = "text-center text-[#a1a1a6] py-16 text-sm"

// ___________________________________________________________________________

export const userGrid        = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5  border border-[#e8e8ed] rounded-2xl overflow-hidden m-2 p-5 "