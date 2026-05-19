"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown, Folder, FileText, Plus, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

interface FolderItem {
  id: string
  name: string
  type: "folder" | "file"
  children?: FolderItem[]
}

const mockData: FolderItem[] = [
  {
    id: "1",
    name: "Research Papers",
    type: "folder",
    children: [
      { id: "1a", name: "Machine Learning", type: "folder", children: [
        { id: "1a1", name: "Neural Networks.pdf", type: "file" },
        { id: "1a2", name: "Deep Learning Fundamentals.pdf", type: "file" },
      ]},
      { id: "1b", name: "Quantum Computing.pdf", type: "file" },
    ],
  },
  {
    id: "2",
    name: "Lecture Notes",
    type: "folder",
    children: [
      { id: "2a", name: "Week 1 - Introduction.md", type: "file" },
      { id: "2b", name: "Week 2 - Core Concepts.md", type: "file" },
      { id: "2c", name: "Week 3 - Advanced Topics.md", type: "file" },
    ],
  },
  {
    id: "3",
    name: "Projects",
    type: "folder",
    children: [
      { id: "3a", name: "Thesis Draft.docx", type: "file" },
      { id: "3b", name: "Bibliography.bib", type: "file" },
    ],
  },
  { id: "4", name: "Quick Notes.md", type: "file" },
]

interface FolderTreeItemProps {
  item: FolderItem
  level: number
  selectedId: string | null
  onSelect: (id: string) => void
}

function FolderTreeItem({ item, level, selectedId, onSelect }: FolderTreeItemProps) {
  const [isExpanded, setIsExpanded] = useState(level === 0)
  const isFolder = item.type === "folder"
  const isSelected = selectedId === item.id

  return (
    <div>
      <button
        onClick={() => {
          if (isFolder) {
            setIsExpanded(!isExpanded)
          }
          onSelect(item.id)
        }}
        className={cn(
          "w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-xl transition-colors text-grain",
          "hover:bg-accent/50",
          isSelected && "bg-accent text-accent-foreground"
        )}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
      >
        {isFolder ? (
          <>
            {isExpanded ? (
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            ) : (
              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            )}
            <Folder className="h-4 w-4 text-muted-foreground shrink-0" />
          </>
        ) : (
          <>
            <span className="w-3.5" />
            <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
          </>
        )}
        <span className="truncate">{item.name}</span>
      </button>
      {isFolder && isExpanded && item.children && (
        <div>
          {item.children.map((child) => (
            <FolderTreeItem
              key={child.id}
              item={child}
              level={level + 1}
              selectedId={selectedId}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function FolderSidebar() {
  const [selectedId, setSelectedId] = useState<string | null>("1a1")

  return (
    <div className="h-full flex flex-col bg-sidebar grainy">
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-end gap-1">
          <button className="p-1.5 rounded-xl hover:bg-accent/50 transition-colors">
            <Plus className="h-4 w-4 text-muted-foreground" />
          </button>
          <button className="p-1.5 rounded-xl hover:bg-accent/50 transition-colors">
            <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-2">
        {mockData.map((item) => (
          <FolderTreeItem
            key={item.id}
            item={item}
            level={0}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        ))}
      </div>
    </div>
  )
}
