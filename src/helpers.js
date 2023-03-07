const colors = {
    grass: '#7AC74C',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    normal: '#A8A77A',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD'
  };
  
  const getColor = (item) => {
    const typeName = item.types[0].type.name;
    return colors[typeName] || null;
  }

  module.exports = { getColor}