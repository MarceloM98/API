class AppError {
  message;
  statusCode; //definindo variáveis em uma classe

  constructor(message, statusCode = 400){
    this.message = message;
    this.statusCode = statusCode
  } 
}

module.exports = AppError;