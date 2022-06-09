module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env"
    }]
    ]
  }; // esto es para que se pueda conectar .env con el resto de la aplicacion
};
