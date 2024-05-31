// src/services/deletePurrfectPetsData.js
import config from '../config';

export async function deleteToyById(id) {
  const response = await fetch(`${config.apiUrl}/toys/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to delete toy');
  }
  return await response.json();
}