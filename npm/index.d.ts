declare module '@apiverve/websitetotext' {
  export interface websitetotextOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface websitetotextResponse {
    status: string;
    error: string | null;
    data: WebsitetoTextData;
    code?: number;
  }


  interface WebsitetoTextData {
      date:        null;
      description: string;
      title:       string;
      titleAlt:    string;
      text:        string;
      language:    string;
      publisher:   null;
      url:         string;
  }

  export default class websitetotextWrapper {
    constructor(options: websitetotextOptions);

    execute(callback: (error: any, data: websitetotextResponse | null) => void): Promise<websitetotextResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: websitetotextResponse | null) => void): Promise<websitetotextResponse>;
    execute(query?: Record<string, any>): Promise<websitetotextResponse>;
  }
}
