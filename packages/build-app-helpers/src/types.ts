export interface IEntry {
  entryPath: string;
  entryName: string;
  pageName?: string;
  source?: string;
  path?: string;
  url?: string;
  window?: {
    title?: string;
    [key: string]: string
  }
}

export interface IPageHeader extends IRoute {
  height: number;
  position?: string;
}

export interface IRoute {
  targets?: string[];
  source?: string;
  path?: string;
  url?: string;
  name?: string;
  pageSource?: string;
  window?: {
    title?: string;
    [key: string]: string
  }
  frames?: IRoute[];
  pageHeader?: IPageHeader;
}
