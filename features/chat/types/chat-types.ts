export interface GroupChatMessage {
  id: string;
  senderName: string;
  senderRole?: string;
  isOwner?: boolean;
  avatarColor?: string;
  avatarInitials?: string;
  content: string;
  timestamp: string;
  isUser?: boolean;
}
