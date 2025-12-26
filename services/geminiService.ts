const createHardcodedDescriptions = (titles: string[]): Record<string, string> => {
  const descriptions: Record<string, string> = {
    "Passeio de Barco às Ilhas Quirimbas": "Navegue por águas azul-turquesa e descubra ilhas paradisíacas com areia branca e coqueiros. Um refúgio de paz e beleza natural.",
    "Aventura de Snorkeling nos Recifes": "Mergulhe num mundo subaquático vibrante. Explore corais coloridos e nade com peixes exóticos nos espetaculares recifes de Pemba.",
    "Tour Cultural pela Cidade de Pemba": "Sinta o pulso da vida moçambicana. Conheça os mercados locais, a arquitetura histórica e os sorrisos contagiantes do povo de Pemba.",
    "Cruzeiro ao Pôr do Sol em Dhow": "Viva um momento mágico a bordo de um dhow tradicional. Deixe-se levar pelo vento enquanto o sol pinta o céu com cores de fogo.",
    "Excursão Aldeia de Namau": "Descubra a Aldeia de Namau, um lugar onde a cultura e tradições de Cabo Delgado ganham vida. Conecte-se com a comunidade e vivencie a essência de uma aldeia costeira autêntica.",
    "Dia de Relax na Praia do Wimbe": "Relaxe sob o sol na famosa Praia do Wimbe. Desfrute da areia dourada, das águas calmas e da atmosfera descontraída deste paraíso.",
  };
  const defaultDescription = "Descubra a magia de Pemba connosco. Uma aventura inesquecível espera por si, cheia de cultura, natureza e hospitalidade moçambicana.";
  
  const result: Record<string, string> = {};
  titles.forEach(title => {
      result[title] = descriptions[title] || defaultDescription;
  });
  return result;
}

export const generateDescriptions = async (titles: string[]): Promise<Record<string, string>> => {
  // To resolve the potential white screen issue as requested, the external API call has been removed.
  // The application now uses predefined, rich descriptions for the experiences,
  // ensuring the site loads quickly and reliably without external dependencies.
  return new Promise(resolve => {
    // Simulate a small network delay for a better UX, so loading skeleton is visible briefly
    setTimeout(() => {
        resolve(createHardcodedDescriptions(titles));
    }, 500);
  });
};