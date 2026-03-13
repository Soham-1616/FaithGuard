"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface LostItem {
    id: number;
    name: string;
    description: string;
    location: string;
    time: string;
    status: "Active" | "Claimed";
    category: string;
}

export interface FoundItem {
    id: number;
    name: string;
    location: string;
    time: string;
}

interface ItemsContextType {
    lostItems: LostItem[];
    foundItems: FoundItem[];
    addLostItem: (item: Omit<LostItem, "id" | "time" | "status">) => void;
    addFoundItem: (item: Omit<FoundItem, "id" | "time">) => void;
}

const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

export function ItemsProvider({ children }: { children: ReactNode }) {
    const [lostItems, setLostItems] = useState<LostItem[]>([]);
    const [foundItems, setFoundItems] = useState<FoundItem[]>([]);

    const addLostItem = (item: Omit<LostItem, "id" | "time" | "status">) => {
        const newItem: LostItem = {
            ...item,
            id: Date.now(),
            time: "Just now",
            status: "Active",
        };
        setLostItems((prev) => [newItem, ...prev]);
    };

    const addFoundItem = (item: Omit<FoundItem, "id" | "time">) => {
        const newItem: FoundItem = {
            ...item,
            id: Date.now(),
            time: "Just now",
        };
        setFoundItems((prev) => [newItem, ...prev]);
    };

    return (
        <ItemsContext.Provider
            value={{ lostItems, foundItems, addLostItem, addFoundItem }}
        >
            {children}
        </ItemsContext.Provider>
    );
}

export function useItems() {
    const context = useContext(ItemsContext);
    if (!context) {
        throw new Error("useItems must be used within an ItemsProvider");
    }
    return context;
}
