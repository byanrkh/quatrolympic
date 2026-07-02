export type Competition = {
  title: string;
  icon: React.ReactNode;
  color: string;
  contactPhone: string;
  contactName: string;
  category: string;
  form: string;
};

type CategoryResult = {
  category: string;
  champion: string;
  runnerUp: string;
};

export type YearData = {
  edition: string;
  year: string;
  results: CategoryResult[];
};