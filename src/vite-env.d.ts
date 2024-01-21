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
type CompanyRequest = {
  id: number;
  companyName: string;
  clientName: string;
  status: string;
};
type Events = {
  id: number;
  name: string;
  date: string;
};
type Notice = {
  id: number;
  type: string;
  event: Events[];
};
