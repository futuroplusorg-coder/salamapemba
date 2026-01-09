import { Partner } from './types';

// Lista final de parceiros com ordenação e categorização específica
// Institucionais: (1) JPG, (1) PNG, (2), (3), (4), (16)
// Privados: (17) - Primeiro, seguido por (5) e os restantes (6-15)
export const FINAL_PARTNERS: Partner[] = [
  // --- INSTITUCIONAIS ---
  { id: 1, name: 'P1-JPG', category: 'institucional', logoUrl: 'https://i.postimg.cc/Z080rfbp/Parceiros-1.jpg' },
  { id: 2, name: 'P1-PNG', category: 'institucional', logoUrl: 'https://i.postimg.cc/Yj6j1Xr3/Parceiros-1.png' },
  { id: 11, name: 'P2', category: 'institucional', logoUrl: 'https://i.postimg.cc/14G4pWmB/Parceiros-2.png' },
  { id: 12, name: 'P3', category: 'institucional', logoUrl: 'https://i.postimg.cc/rKgmHKtz/Parceiros-3.png' },
  { id: 13, name: 'P4', category: 'institucional', logoUrl: 'https://i.postimg.cc/w1GB6ZVb/Parceiros-4.png' },
  { id: 9, name: 'P16', category: 'institucional', logoUrl: 'https://i.postimg.cc/SYfskKT5/Parceiros-16.png' },
  { id: 8, name: 'P15', category: 'privado', logoUrl: 'https://i.postimg.cc/kRv4q51N/Parceiros-15.png' },
  
  // --- PRIVADOS ---
  { id: 10, name: 'P17', category: 'privado', logoUrl: 'https://i.postimg.cc/6yBqzdqr/Parceiros-17.png' }, // LOGO 17 - PRIMEIRA DOS PRIVADOS
  { id: 14, name: 'P5', category: 'privado', logoUrl: 'https://i.postimg.cc/Z080rfb0/Parceiros-5.png' },   // LOGO 5 - MOVIDA PARA PRIVADOS
  { id: 15, name: 'P6', category: 'privado', logoUrl: 'https://i.postimg.cc/bsLJ5s2c/Parceiros-6.png' },
  { id: 16, name: 'P7', category: 'privado', logoUrl: 'https://i.postimg.cc/PPdJKmNj/Parceiros-7.png' },
  { id: 17, name: 'P8', category: 'privado', logoUrl: 'https://i.postimg.cc/v4BBwbWj/Parceiros-8.png' },
  { id: 18, name: 'P9', category: 'privado', logoUrl: 'https://i.postimg.cc/FYBK98ZG/Parceiros-9.png' },
  { id: 3, name: 'P10', category: 'privado', logoUrl: 'https://i.postimg.cc/64f3tQjG/Parceiros-10.png' },
  { id: 4, name: 'P11', category: 'privado', logoUrl: 'https://i.postimg.cc/30FRYwSX/Parceiros-11.png' },
  { id: 5, name: 'P12', category: 'privado', logoUrl: 'https://i.postimg.cc/DSMz2Hg6/Parceiros-12.png' },
  { id: 6, name: 'P13', category: 'privado', logoUrl: 'https://i.postimg.cc/k244PqxH/Parceiros-13.png' },
  { id: 7, name: 'P14', category: 'privado', logoUrl: 'https://i.postimg.cc/LJbsHwTb/Parceiros-14.png' },
];
