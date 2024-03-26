//....

import { unstable_noStore as noStore } from 'next/cache';

export async function fetchRevenue() {
    try {
        // Add noStore() here to prevent the response from being cached.
        // This is equivalent to fetch(...., {cache: 'no-cache'}).
        console.log('Fetching revenue data...');
        await new Promise ((resolve) => setTimeout(resolve, 3000));

        const data = await sql<Revenue>`SELECT * FROM revenue`;

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data');
    }
}

export async function fetchLatestInvoices() {
    noStore();
}

export async function fetchCardData() {
    noStore();
}

export async function fetchFilteredInvoices(
    query: string,
    currentPage: number,
) {
    noStore();
}

export async function fetchInvoicesPage(query: string) {
    noStore();
}

export async function fetchFilteredCustomers(query: string) {
    noStore();
}

export async function fetchInvoiceById(query: string) {
    noStore();
}