import { supabase } from '../../lib/client'

import type {
  CreateTaskInput,
  Task,
  UpdateTaskInput,
} from '../../foundation/types/task'

export async function getActiveTasks(): Promise<Task[]> {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .is('archived_at', null)

  if (error) {
    throw error
  }

  return data ?? []
}

export async function createTask(input: CreateTaskInput): Promise<Task> {
  const { data, error } = await supabase
    .from('tasks')
    .insert(input)
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}

export async function updateTask(
  id: string,
  input: UpdateTaskInput
): Promise<Task> {
  const { data, error } = await supabase
    .from('tasks')
    .update(input)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}

export async function completeTask(id: string): Promise<Task> {
  const now = new Date().toISOString()

  const { data, error } = await supabase
    .from('tasks')
    .update({
      status: 'done',
      completed_at: now,
      archived_at: now,
    })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}

export async function restoreTask(id: string): Promise<Task> {
  const { data, error } = await supabase
    .from('tasks')
    .update({
      status: 'todo',
      completed_at: null,
      archived_at: null,
    })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}

export async function deleteTask(id: string): Promise<void> {
  const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', id)

  if (error) {
    throw error
  }
}

export async function getArchivedTasks(): Promise<Task[]> {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .not('archived_at', 'is', null)

  if (error) {
    throw error
  }

  return (data ?? []) as Task[]
}