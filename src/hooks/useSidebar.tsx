'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

type SidebarContextType = {
  collapsed: boolean
  setCollapsed: (v: boolean) => void
  toggle: () => void
  mobileOpen: boolean
  setMobileOpen: (v: boolean) => void
  toggleMobile: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    try {
      return localStorage.getItem('az:sidebar:collapsed') === '1'
    } catch {
      return false
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('az:sidebar:collapsed', collapsed ? '1' : '0')
    } catch {}
  }, [collapsed])

  const [mobileOpen, setMobileOpen] = useState(false)

  const toggle = () => setCollapsed((s) => !s)
  const toggleMobile = () => setMobileOpen((s) => !s)

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed, toggle, mobileOpen, setMobileOpen, toggleMobile }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const ctx = useContext(SidebarContext)
  if (!ctx) throw new Error('useSidebar must be used within SidebarProvider')
  return ctx
}
