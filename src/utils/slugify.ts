// src/utils/slugify.ts
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // Descompone los acentos de las letras (ej. á -> a + ´)
    .replace(/[\u0300-\u036f]/g, '') // Elimina los acentos aislados
    .trim() // Limpia espacios al inicio y final
    .replace(/\s+/g, '-') // Reemplaza espacios en blanco con guiones
    .replace(/[^\w-]+/g, '') // Elimina caracteres no alfanuméricos
    .replace(/--+/g, '-'); // Evita guiones múltiples consecutivos
}
