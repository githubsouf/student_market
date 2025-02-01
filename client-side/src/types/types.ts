export interface Products {
    produitId: number;            // Identifiant unique du produit
    categories: string;           // Catégorie du produit
    productImg: string;          // Lien de l'image du produit
    productName: string;         // Nom du produit
    productPrice: number;        // Prix du produit
    baseColor?: string;           // Couleur principale (optionnelle)
    description: string;          // Description du produit
    gender: string;               // Genre (Homme, Femme, Unisexe)
    subCategory?: string;         // Sous-catégorie (optionnelle)
    vendeurId: number;            // Identifiant du vendeur
}


export interface CartItems {
    product: Products;
    quantity: number;
}

export interface User {
    id: number;
    username: string;
    avatar: string;  // URL de l'avatar
}

export interface ForumMessage {
    id: number;
    contenu: string;
    sendDate: Date;
    me: boolean;
    deleted: boolean;
    user: User;
    parentMessageId?: number;
    replies?: ForumMessage[];
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