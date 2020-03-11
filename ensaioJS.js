$(document).ready(function(){
    var indice= 1;
    var i=0;

    $("#open-modal").click(function() {
        $("#carregar-modal").show();
        $("#opacidade").show();
        $("#open-modal").css({"animation" :"rotacionar 2s normal"});
        setTimeout(function() {
            $("#modal").show();
        }, 3000);

    });

    $("#abrir-form").click(function () { 
        $("#form").show();
        $("#opacidade").show();
    });

    $("#opacidade").click(function () { 
        $("#modal").hide();
        $("#opacidade").hide();
        $("#carregar-modal").hide();
        $("#open-modal").css({"animation" :"none"});
        $("#form").css({"animation" : "aparecer 1s reverse 2"});
        $("#telaSucesso").hide();
        $("#telaErro").hide();
        $("#enviando-form").hide();
        setTimeout(function(){
            $("#form").hide();
            $("#form").css({"animation" : "fechar-form 2s reverse"});
        }, 1000)
    });

    $("#hover01, #aparecer-hover01").hover(function () {
        $("#aparecer-hover01").show();
        
    }, function () {
        $("#aparecer-hover01").hide();
    }
    );
    $("#hover02, #aparecer-hover02").hover(function () {
        $("#aparecer-hover02").show();
        
    }, function () {
        $("#aparecer-hover02").hide();
    }
    );
    $("#hover03, #aparecer-hover03").hover(function () {
        $("#aparecer-hover03").show();
        
    }, function () {
        $("#aparecer-hover03").hide();
    }
    );

    $("#direita").click(function() { 
        
            indice=indice+1;
        if(indice>3){
            indice=1;
        }       
    });
    $("#esquerda").click(function() { 
            indice=indice-1;

        if(indice<1){
            indice=3;
        }      
    });
    $("#esquerda, #direita").click(function () { 
        if(indice==1){
            $("#conteudo01").css({"display":"block"});
            $("#conteudo02").css({"display": "none"});
            $("#conteudo03").css({"display": "none"});
        }
        if(indice==2){
            $("#conteudo01").css({"display": "none" });
            $("#conteudo02").css({"display": "block"});
            $("#conteudo03").css({"display": "none" });
        }
        if(indice==3){
            $("#conteudo01").css({"display": "none" });
            $("#conteudo02").css({"display": "none" });
            $("#conteudo03").css({"display": "block"});
        }    
        
    });

    $("#enviar").click(function () { 
        var email= $("#input-email").val();
        var senha= $("#input-senha").val();
        var contador=0;
        if(senha.length<8){
            erroFormulario();
        }
        
        for(i=0; i<senha.length; i++){
            if(senha[i]== senha[i].toUpperCase() && isNaN(senha[i])){
                contador++;
            }
        
        }
        if(contador==0){
            erroFormulario();
        }
        if(contador>0){
            
            sucesso();
        }

    });
    function erroFormulario(){
        $("#telaErro").show();
        $("#form").hide();
        $("#form").css({"animation" : "fechar-form 2s reverse"});
    }
    function sucesso(){
        $("#enviando-form").show();
        setTimeout(function() {
            $("#telaSucesso").show();
        }, 3000);

        $("#form").hide();
        $("#form").css({"animation" : "fechar-form 2s reverse"});
    }
    
});