export const validateForm = (formData) => {
  const errors = {};
  
  // Validation du nom (minimum 2 caractères, pas de chiffres uniquement)
  if (formData.name.trim().length < 2) {
    errors.name = 'Le nom doit contenir au moins 2 caractères';
  }
  if (/^\d+$/.test(formData.name)) {
    errors.name = 'Le nom ne peut pas contenir uniquement des chiffres';
  }
  
  // Validation de l'email (format strict)
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(formData.email)) {
    errors.email = 'Format d\'email invalide';
  }
  
  // Validation du téléphone si renseigné (format français)
  if (formData.phone && !/^(?:(?:\+|00)33|0)[1-9](?:[0-9]{8})$/.test(formData.phone.replace(/[\s.-]/g, ''))) {
    errors.phone = 'Format de téléphone invalide';
  }
  
  // Validation du message (minimum 10 caractères, maximum 2000)
  if (formData.message.trim().length < 10) {
    errors.message = 'Le message doit contenir au moins 10 caractères';
  }
  if (formData.message.trim().length > 2000) {
    errors.message = 'Le message ne peut pas dépasser 2000 caractères';
  }
  
  // Détection de spam basique (trop de liens)
  const linkCount = (formData.message.match(/https?:\/\//g) || []).length;
  if (linkCount > 2) {
    errors.message = 'Trop de liens détectés dans le message';
  }
  
  return errors;
};
