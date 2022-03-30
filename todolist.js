
const JSONweb = sessionStorage.getItem('logado')
const logado = JSON.parse(JSONweb)
console.log(logado)

if(!logado){
window.location = 'login.html';
}
else{

  const encerrar = document.querySelector('#sair')

  const botaoadd = document.querySelector('.todo-button');
  let botao1 = document.createElement('button');
  let botao2 = document.createElement('button');
  let submit = document.querySelector('.todo-input');
  let contsubimit = document.querySelector('#captura');
  let select = document.querySelector('.filter-todo');
  const submitlista = []
  
  // LocalStorage
  /*const dados = localStorage.getItem('tarefas');
  if(dados){
    submitlista = JSON.parse(dados)
  }

  const dadosJASON = JSON.stringify(submitlista)
  localStorage.setItem ('tarefas', dadosJASON);*/  
            
  
  encerrar.addEventListener('click', function(){
        
    sessionStorage.setItem("logado", JSON.stringify(false))
    window.location = 'login.html'

  })
  
  
  botaoadd.addEventListener('click',function (event){

    event.preventDefault()
  
      let submitItem = {
          id:submitlista.length + 1,
          task:submit.value,
          completed:false
      }

      
      if (submit.value == ''){ 
          alert("Receba! Obrigado Pai,obg Deus")
      }
          
          else { 
              
            submitlista.push(submitItem); 
  
              let div = document.createElement('div');
              div.classList.add('todo')
              div.id = 'div'+ submitlista.length
              
              let li = document.createElement('li');
              li.classList.add('todo-item') 
              li.id = 'li'+ submitlista.length 
              li.innerHTML = submitItem.task
      
              let botao1 = document.createElement('button');
              botao1.classList.add('check-btn');
              botao1.id = submitlista.length 
              botao1.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>'
              
              let botao2 = document.createElement('button');
              botao2.classList.add('trash-btn')
              botao2.id = submitlista.length 
              botao2.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>'

            

              contsubimit.append(div) 
              div.append(li) 
              div.append(botao1) 
              div.append(botao2)   
              console.log (contsubimit)

              for (let i=0; i<submitlista.length;i++){
    
                botao1.onclick = function() {
                li.classList.add('completed')
                submitlista[i].completed = true
                console.log(submitlista)

                 }}

              for (let i=0; i<submitlista.length;i++){
                  
                botao2.onclick = function () {
                filtragem = document.getElementById('div' + (i+1))
                contsubimit.removeChild(filtragem)

                }}




                function Completas(){
      
                for(i=0;i<submitlista.length;i++){
                let filtragem = document.getElementById('div' + (i+1))
                filtragem.classList.remove('sumir') 
                if(submitlista[i].completed !== true){
                console.log(submitlista[i])
                filtragem = document.getElementById('div' + (i+1))
                filtragem.classList.add('sumir')}
                else {}
                          
                }}

                function Incompletas(){
      
                for(i=0;i<submitlista.length;i++){
                let filtragem = document.getElementById('div' + (i+1))
                filtragem.classList.remove('sumir')
                if(submitlista[i].completed == true){
                console.log(submitlista[i])
                filtragem = document.getElementById('div' + (i+1))
                filtragem.classList.toggle('sumir')}
                else {}
                        
                }}
                
                function Todas (){
                for(i=0;i<submitlista.length;i++){
                let filtragem = document.getElementById('div' + (i+1))
                filtragem.classList.remove('sumir') 

                }}

                select.addEventListener('change',function(){
                selecionar = select.value
                switch(selecionar){
                case 'completed': Completas();
                break;
                case 'uncompleted':Incompletas();
                break;
                case 'all': Todas();
                break;
                default:''
                
                }})}

                    })  

}
  
  
  
  
  
  
  
  
  
        
            
                    

             
                  
                  
                
          

  
  
  
  
  
      
      