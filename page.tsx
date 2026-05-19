"use client"

import { useState, useCallback } from "react"
import { FolderSidebar } from "@/components/folder-sidebar"
import { DocumentViewer } from "@/components/document-viewer"
import { ChatPanel } from "@/components/chat-panel"
import { BookOpen, Settings, Search } from "lucide-react"

export default function ContextApp() {
  const [chatWidth, setChatWidth] = useState(320)
  const [isResizing, setIsResizing] = useState(false)

  const handleMouseDown = useCallback(() => {
    setIsResizing(true)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isResizing) return
    const newWidth = window.innerWidth - e.clientX
    setChatWidth(Math.min(Math.max(newWidth, 280), 600))
  }, [isResizing])

  const handleMouseUp = useCallback(() => {
    setIsResizing(false)
  }, [])

  return (
    <div 
      className="h-screen flex flex-col bg-background"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between px-4 py-2 border-b border-border bg-card grainy">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-foreground" />
            <span className="text-lg font-semibold tracking-tight text-grain">Context</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1">
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground rounded-md hover:bg-accent/50 transition-colors">
            <Search className="h-4 w-4" />
            <span className="text-grain">Search</span>
            <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border bg-muted px-1.5 text-[10px] text-muted-foreground">
              ⌘K
            </kbd>
          </button>
          <button className="p-2 rounded-md hover:bg-accent/50 transition-colors">
            <Settings className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </header>

      {/* Main Content Area - 3 Column Layout */}
      <div className="flex-1 flex overflow-hidden p-3 gap-3">
        {/* Left Sidebar - Folder Directory */}
        <aside className="w-64 border border-border rounded-2xl shrink-0 overflow-hidden bg-card">
          <FolderSidebar />
        </aside>

        {/* Center - Document Viewer */}
        <main className="flex-1 min-w-0 border border-border rounded-2xl overflow-hidden bg-card">
          <DocumentViewer />
        </main>

        {/* Resize Handle */}
        <div 
          className="w-1 cursor-col-resize hover:bg-primary/20 active:bg-primary/30 transition-colors shrink-0 rounded-full"
          onMouseDown={handleMouseDown}
        />

        {/* Right Panel - AI Chat */}
        <aside 
          className="shrink-0 overflow-hidden border border-border rounded-2xl bg-card"
          style={{ width: chatWidth }}
        >
          <ChatPanel />
        </aside>
      </div>
    </div>
  )
}
