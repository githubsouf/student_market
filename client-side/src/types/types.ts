export interface Products {
    id: number;
    title: string;
    imageUrl: string;
    price: number;
    description?: string;
    rating?: number;
    reviews?: number;
    discount?: number;
    category?: string
}

export interface CartItems {
    product: Products;
    quantity: number;
}

export interface Conversations {
    id: number;
    title: string;
    messages: Messages[];
    date: Date
}

export interface Messages {
    id: number;
    text: string;
    sender: 'user' | 'other';
    date: Date;
}
export interface Categories {
    id: string;        // L'ID peut être une chaîne de caractères si vous utilisez un identifiant plus descriptif comme un slug ou un code alphanumérique
    title: string;     // Le titre est une chaîne de caractères représentant le nom de la catégorie
    icon: string; // L'icône doit être un élément JSX, car vous utilisez des icônes react-icons
}