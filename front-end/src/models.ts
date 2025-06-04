export interface Notice {
  id: number;
  title: string;
  description: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface SavedNoticeUser {
  notice: Notice;
  user_id: string;
}

export type NoticesResponse = {
  [category: string]: Notice[];
};

export type Props = {
  notice: {
    title: string;
    description?: string;
  };
  isExpanded: boolean;
  onToggle: () => void;
  onSave?: () => void;
  onDelete?: () => void;
  btn_text: string;
};
