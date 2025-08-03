exports.dividir = (numeroUno, numeroDos) => {
    const numeroUnoCasteado = Number(numeroUno);
    const numeroDosCasteado = Number(numeroDos);
    
    if (isNaN(numeroUnoCasteado) || isNaN(numeroDosCasteado)) {
        throw new Error('No son números válidos');
    }
    
    if (numeroDosCasteado === 0) {
        throw new Error('No se puede dividir por cero');
    }
    
    return numeroUnoCasteado / numeroDosCasteado;
};