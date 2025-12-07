import Papa from 'papaparse';

const SPREADSHEET_ID = '1OivkE-rr1U_AlgmHQMqO32r8N5B81rHeVjxE5tWO14o';

/**
 * Fetches data from a specific tab in the Google Sheet.
 * @param {string} sheetName - The name of the tab (e.g., "Staff", "Resources", "Events").
 * @returns {Promise<Array>} - A promise that resolves to an array of objects (rows).
 */
export const fetchSheetData = (sheetName) => {
    const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch sheet "${sheetName}": ${response.statusText}`);
                }
                return response.text();
            })
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        if (results.errors && results.errors.length > 0) {
                            console.warn(`Parse warnings for sheet "${sheetName}":`, results.errors);
                        }
                        resolve(results.data);
                    },
                    error: (err) => {
                        reject(err);
                    },
                });
            })
            .catch((err) => {
                reject(err);
            });
    });
};
