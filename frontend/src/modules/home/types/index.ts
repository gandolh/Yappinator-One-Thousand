export type DashboardData = {
    comparisons: {
      title: string;
      icon: string;
      youValue: string;
      otherValue: string;
      youLabel: string;
      otherLabel: string;
    }[];
    topWords: {
      you: {word: string; count: number}[];
      other: {word: string; count: number}[];
    };
    messagesPerMonth: {
        months: string[];
     you: number[]
     other: number[]
    };
    redFlags: string[];
  };
  