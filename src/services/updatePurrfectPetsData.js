import config from '../config';

export async function updateToyById(id, updatedToy) {
  const response = await fetch(`${config.apiUrl}/toys/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedToy),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to update toy');
  }
  return await response.json();
}