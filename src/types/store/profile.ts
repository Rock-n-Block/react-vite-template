import { User } from 'types/api/User';

export interface ProfileState extends User {
  balance?: string;
}
