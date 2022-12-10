export function _handleError(status) {
    if (status === 404) {
        throw new NotFoundError();
    }
    if (status === 500) {
        throw new ServerError();
    }
    if (status === 429) {
        throw new RateLimit();
    }
}

export function _throwSpecificError(err) {
    if (err instanceof ServerError || err instanceof NotFoundError || err instanceof RateLimit) {
        throw err;
    }
    throw new NetworkError();
}

class NetworkError extends Error {
    constructor(){
        super('Ha ocurrido un error de red');
    }
}

class NotFoundError extends Error {
    constructor() {
        super('No se encontró el recurso que solicitó')
    }
}

class ServerError extends Error {
    constructor() {
        super('Ha ocurrido error en el servidor')
    }
}

class RateLimit extends Error {
    constructor() {
        super('Demasiadas solicitudes, supero el limite de tarifa.');
    }
}
