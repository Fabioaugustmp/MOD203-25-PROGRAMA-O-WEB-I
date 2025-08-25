// 3. Selecionando os elementos do DOM
const orderButtons = document.querySelectorAll('.order-btn');
const modalOverlay = document.getElementById('order-modal');
const modalContent = document.querySelector('.modal-content');
const closeModalButton = document.querySelector('.close-modal');
const productNameSpan = document.getElementById('product-name');
const orderForm = document.getElementById('order-form');

// Função para abrir o modal
function openModal(productName) {
    productNameSpan.textContent = productName; // Define o nome do produto no modal
    modalOverlay.classList.add('show');
}

// Função para fechar o modal
function closeModal() {
    modalOverlay.classList.remove('show');
}

// Adiciona um Event Listener para cada botão "Pedir agora"
orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product'); // Pega o nome do produto do atributo data-*
        openModal(productName);
    });
});

// Event Listener para fechar o modal no botão 'X'
closeModalButton.addEventListener('click', closeModal);

// Event Listener para fechar o modal clicando fora dele (no overlay)
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

// Event Listener para o formulário de pedido
orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio real do formulário
    
    // Coleta os dados do formulário
    const formData = new FormData(orderForm);
    const size = formData.get('size');
    const milk = formData.get('milk');
    const productName = productNameSpan.textContent;

    // Simula a confirmação do pedido
    alert(`Pedido confirmado!\n\nCafé: ${productName}\nTamanho: ${size}\nLeite: ${milk}\n\nObrigado por sua preferência!`);

    closeModal(); // Fecha o modal após a confirmação
});