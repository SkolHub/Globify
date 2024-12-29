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

export interface MapModel {
  name: string;
  icon: string;
  image: string;
  key: string;
}

export interface LayerModel {
  name: string;
  icon: string;
  key: string;
}
