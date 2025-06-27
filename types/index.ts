/**
 * Central export file for all TypeScript types
 * Import types from here: import { Profile, Database } from '@/types'
 */

// Profile types
export type {
  Profile,
  ProfileInsert,
  ProfileUpdate,
  ProfileFormData,
  ProfileRow,
  ProfileInsertData,
  ProfileUpdateData,
} from './profile';

// Database types
export type { Database } from './database-generated'; 