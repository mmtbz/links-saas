import { create } from "zustand";

type UrlItem = {
  id: number;
  label: string;
  link: string;
};

type UrlStore = {
  urls: UrlItem[];
  addUrl: (url: UrlItem) => void;
  setLabel: (id: number, label: string) => void;
};

export const useUrlStore = create<UrlStore>((set) => ({
  urls: [],

  addUrl: (url) => {
    set((state) => ({ urls: [...state.urls, url] }));
  },

  setLabel: (id, label) => {
    set((state) => ({
      urls: state.urls.map((url) => (url.id === id ? { ...url, label } : url)),
    }));
  },
}));

type ProfileItem = {
  name?: string;
  description?: string;
  photoUrl?: string;
};

type ProfileStore = {
  profile: ProfileItem;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setPhotoUrl: (photoUrl: string) => void;
};

export const useProfileStore = create<ProfileStore>((set) => ({
  profile: {},

  setName: (name) => {
    set((state) => ({ profile: { ...state.profile, name } }));
  },

  setDescription: (description) => {
    set((state) => ({ profile: { ...state.profile, description } }));
  },

  setPhotoUrl: (photoUrl) => {
    set((state) => ({ profile: { ...state.profile, photoUrl } }));
  },
}));
