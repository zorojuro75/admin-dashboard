/// <reference types="vite/client" />
type Item = {
  id: number;
  name: string;
  icon: string;
};
type SidebarItem = {
  id: number;
  name: string;
  items: Item[];
};
