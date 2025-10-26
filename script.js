class SlideShow {
    constructor(slideId, imagesArray) {
        this.slide = document.getElementById(slideId);
        this.images = imagesArray;
        this.currentIndex = 0;
        
        // 🔥 NOVO: Mostra a primeira imagem IMEDIATAMENTE
        this.slide.src = this.images[0];
        
        this.start();
    }

    start() {
        // 🔥 Mostra a primeira imagem antes do intervalo
        this.nextImage();
        
        // Depois continua normal
        setInterval(() => {
            this.nextImage();
        }, 3000);
    }

    nextImage() {
        this.slide.style.opacity = 0;
        
        setTimeout(() => {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
            this.slide.src = this.images[this.currentIndex];
            this.slide.style.opacity = 1;
        }, 800);
    }
}
        // Inicia quando a página carregar
        window.addEventListener('load', () => {
            new SlideShow();
        });

        function agendar() {
        
           
                 window.location.href = "../html/agendar.html";
     
          
        }
      function agendarWhatsApp(servico) {
    // Objeto com mensagens para cada serviço
    const mensagens = {
        'consulta': 'Olá! Gostaria de agendar uma consulta geral.',
        'cirurgia': 'Olá! Gostaria de um orçamento para cirurgia.',
        'oncologia': 'Olá! Gostaria de agendar consulta de oncologia.',
        'dermatologia': 'Olá! Gostaria de agendar consulta de dermatologia.',
        'silvestres': 'Olá! Gostaria de agendar consulta para animal silvestre.',
        'vacinacao': 'Olá! Gostaria de informações sobre vacinação.',
        'ultra': 'Olá! Gostaria de saber mais sobre o exame de ultrassonografia.',
        'radiografia': 'Olá! Gostaria de saber mais sobre o exame de radiografia.',
        'hemograma': 'Olá! Gostaria de saber mais sobre o exame de hemograma.',
        'urina-fezes': 'Olá! Gostaria de saber mais sobre exames de urina e fezes.'
    };
    
    // Pega a mensagem correta baseada no serviço clicado
    const mensagem = mensagens[servico];
    const numero = '5535998181384';
    
    // Cria a URL do WhatsApp
    const url = `https://wa.me/${'5535998181384'}?text=${encodeURIComponent(mensagem)}`;
    
    // Abre em nova aba
    window.open(url, '_blank');
}
function sobre(){
    window.location.href = "../html/Sobre.html";
}
function contatos(){
    window.location.href = "../html/Contato.html";
}