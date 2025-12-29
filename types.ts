export interface Experience {
  title: string;
  description: string;
  image: string;
}

export interface Partner {
  id: number;
  name: string;
  logoUrl: string;
  category: 'institucional' | 'privado';
  logoColor?: string;
  textColor?: string;
}