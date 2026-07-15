declare module '@apiverve/websitetotext' {
  export interface websitetotextOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface websitetotextResponse {
    status: string;
    error: string | null;
    data: WebsitetoTextData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface WebsitetoTextData {
      date:        null;
      description: null | string;
      title:       null | string;
      titleAlt:    null | string;
      text:        null | string;
      language:    null | string;
      publisher:   null;
      url:         null | string;
  }

  export default class websitetotextWrapper {
    constructor(options: websitetotextOptions);

    execute(callback: (error: any, data: websitetotextResponse | null) => void): Promise<websitetotextResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: websitetotextResponse | null) => void): Promise<websitetotextResponse>;
    execute(query?: Record<string, any>): Promise<websitetotextResponse>;
  }
}
