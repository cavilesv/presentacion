export type EstadoHover = { [index: number]: boolean; };

export type Accion = | { type: 'HOVER_IN'; index: number } | { type: 'HOVER_OUT'; index: number };