const masks = {
    phone(value) {
        const cleanedValue = value.replace(/\D+/g, '');
        const formattedValue = cleanedValue.replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            .replace(/(-\d{4})\d+?$/, '$1');
        return formattedValue;
    },
    cpf(value) {
        const cleanedValue = value.replace(/\D+/g, '');
        const formattedValue = cleanedValue.replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
        return formattedValue;
    },
    email(value) {
        return value; // Validação de email pode ser feita no envio do formulário
    }
}
  
document.querySelectorAll('input').forEach($input => {
const field = $input.dataset.js

$input.addEventListener('input', e => {
    e.target.value = masks[field](e.target.value)
}, false)
})

  
