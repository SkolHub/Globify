export type SidebarData = {
  title: string;
  subtitle?: string;
  categories: Category[];
};

export type Category =
  | {
      'content-type': 'items';
      title: string;
      items: {
        title: string;
        icon: string;
        text: string;
        'text-color': string;
      }[];
    }
  | {
      'content-type': 'text';
      title: string;
      text: string;
      images: {
        src: string;
        title: string;
      }[];
    };
