export interface PvPEntry {
    character: {
      name: string;
      id: number;
      realm: {
        key: {
          href: string;
        };
        id: number;
        slug: string;
      };
    };
    faction: {
      type: string;
    };
    rank: number;
    rating: number;
    season_match_statistics: {
      played: number;
      won: number;
      lost: number;
    };
    tier: {
      key: {
        href: string;
      };
      id: number;
    };
  }