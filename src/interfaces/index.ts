export interface UserGist {
  files: GistFile[];
  forks_url: string;
  url: string;
}

export interface GistFile {
  filename: string;
  language: string;
  raw_url: string;
}
