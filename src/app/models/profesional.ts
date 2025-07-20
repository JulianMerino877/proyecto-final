export interface profesional {
    id: string;
    nombre: string;
    especialidad: string;
    honorarios: number;
    imagen: string;
    experiencia?: string; // años o descripción
    correo?: string;
    telefono?: string;
    ubicacion?: string;
    historial?: string;
}