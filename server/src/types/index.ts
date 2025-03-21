export interface IUser {
    id: string;
    firebaseId: string;
    email: string;
    name: string | null;
    phone: string | null;
    city: string | null;
    state: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserUpdateInput {
    name: string;
    phone: string;
    city: string;
    state: string;
    firebaseId: string;
    email: string;
    updatedAt: Date;
}

export interface PaginationParams {
    page?: number;
    limit?: number;
}

export type TrashReport = {
    id: number;
    latitude: number;
    longitude: number;
    trashType?: string;
    severity: number;
    image?: string;
    userId?: string;
};
export interface HotspotData {
    latGroup: number;
    lngGroup: number;
    reportCount: number;
    severitySum: number;
    reports: {
        id: number;
        trashType: string;
        severity: number;
        timestamp: Date;
    }[];
}
