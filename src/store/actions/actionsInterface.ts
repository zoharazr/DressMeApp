export interface DataItem {
  id: number;
  type: string;
  name: string;
  colors: string[];
  sizes: any[];
  brand: string;
}

export interface SelectedItem {
  type: string;
  color: string;
  size: string | number;
  name: string;
  brand: string;
}

export interface SelectedClothing {
  shoes: SelectedItem;
  shirt: SelectedItem;
  pants: SelectedItem;
}

export interface RootReducer {
  selectedClothing: SelectedClothing;
  savedItems: number;
  shoes: DataItem[];
  pants: DataItem[];
  shirt: DataItem[];
  startSession: Date | null;
}
