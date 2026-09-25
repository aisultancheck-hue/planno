import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import { useAuth } from '../auth/AuthProvider'
import {
  createWorkspace as createWorkspaceInDatabase,
  getUserWorkspaces,
  type Workspace,
} from './workspaceService'

type WorkspaceContextValue = {
  workspaces: Workspace[]
  currentWorkspace: Workspace | null
  loading: boolean
  setCurrentWorkspace: (workspace: Workspace) => void
  refreshWorkspaces: () => Promise<void>
  createWorkspace: (workspaceName: string) => Promise<Workspace>
}

const WorkspaceContext =
  createContext<WorkspaceContextValue | undefined>(undefined)

type WorkspaceProviderProps = {
  children: ReactNode
}

export function WorkspaceProvider({
  children,
}: WorkspaceProviderProps) {
  const { user, loading: authLoading } = useAuth()

  const [workspaces, setWorkspaces] = useState<Workspace[]>([])
  const [currentWorkspace, setCurrentWorkspace] =
    useState<Workspace | null>(null)

  const [loading, setLoading] = useState(true)

  async function refreshWorkspaces() {
    if (!user) {
      setWorkspaces([])
      setCurrentWorkspace(null)
      setLoading(false)
      return
    }

    setLoading(true)

    try {
      const data = await getUserWorkspaces()

      setWorkspaces(data)

      setCurrentWorkspace((previousWorkspace) => {
        if (
          previousWorkspace &&
          data.some(
            (workspace) =>
              workspace.id === previousWorkspace.id,
          )
        ) {
          return previousWorkspace
        }

        return data[0] ?? null
      })
    } catch (error) {
      console.error('Failed to load workspaces:', error)

      setWorkspaces([])
      setCurrentWorkspace(null)
    } finally {
      setLoading(false)
    }
  }

  async function createWorkspace(
    workspaceName: string,
  ): Promise<Workspace> {
    const newWorkspace =
      await createWorkspaceInDatabase(workspaceName)

    await refreshWorkspaces()

    setCurrentWorkspace(newWorkspace)

    return newWorkspace
  }

  useEffect(() => {
    if (authLoading) {
      return
    }

    void refreshWorkspaces()
  }, [user, authLoading])

  const value: WorkspaceContextValue = {
    workspaces,
    currentWorkspace,
    loading,
    setCurrentWorkspace,
    refreshWorkspaces,
    createWorkspace,
  }

  return (
    <WorkspaceContext.Provider value={value}>
      {children}
    </WorkspaceContext.Provider>
  )
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext)

  if (!context) {
    throw new Error(
      'useWorkspace must be used inside WorkspaceProvider',
    )
  }

  return context
}