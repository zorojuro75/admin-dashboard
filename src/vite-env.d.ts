/// <reference types="vite/client" />
type Item = {
  name: string;
  icon: string;
};
type SidebarItem = {
  name: string;
  items: Item[];
};
