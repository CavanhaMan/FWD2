    $(document).ready(function(){
        var grupo = ['Joao','Matheus','Gabriel','Maclopes','Breno','Keylane','Jordana','Cavanha','Cavanha','Eloah','Roberto'];
        var gruposorteado = [];
        var sorteado;
        var x = grupo.length; //qual o tamanho do grupo
        for(var i=x ; i>0 ; i--){
            x--; //Atualiza o tamanho do grupo (sem o que ja foi sorteado)
            console.log('x= ',x);
            sorteado = Math.floor(Math.random()*(x));//sorteia entre 0 e o numero de participantes
            console.log('sorteado= ',sorteado);
			if (gruposorteado.includes(grupo[sorteado])) i--; //se o nome for repetido, volta uma posição (exemplo: Cavanha)
            else gruposorteado.push(grupo[sorteado]);//se nao for repetido, insere o nome sorteado no novo grupo de resultado
            console.log('grupo novo= ',gruposorteado);
            grupo.splice(sorteado,1); //retira o nome sorteado do grupo para não repetir
            console.log('grupo velho= ',grupo);
            console.log('----------------------------------------------------');
        }
        document.write(gruposorteado);
    });
