export interface Thing {
  id: string;
  name: string;
  last_update: number;
  type: string;
  status: boolean;
  lastUpdateText: string;
  controls: string[];
  controls_formated: string[];
}
