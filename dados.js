let dados = [
    {
        nome:"Bruno Zapelli",
        titulo:"Uma Joia Argentina no Athletico Paranaense",
        descricao:"Bruno Zapelli é um jovem talento argentino que tem se destacado no Athletico Paranaense por sua habilidade, visão de jogo e potencial técnico. Sua chegada ao futebol brasileiro trouxe uma nova esperança para a torcida rubro-negra, que vê em Zapelli um jogador capaz de marcar época no clube.",
        link:"https://www.transfermarkt.com.br/bruno-zapelli/profil/spieler/711600",
        tags:"athletico",
        imagem:"https://static.ric.com.br/uploads/2024/02/ricfutebol59-1.jpg"
    },
    {
        nome:"Shaylon",
        titulo:"O Meia-Atacante do Atlético Goianiense",
        descricao:"Shaylon é um jogador talentoso e versátil que tem se destacado no futebol brasileiro. Sua habilidade, visão de jogo e capacidade de decidir partidas o tornam um dos principais jogadores do Atlético Goianiense.",
        link:"https://www.transfermarkt.com.br/shaylon/profil/spieler/480274",
        tags:"atletico goianiense",
        imagem:"https://uploads.maisgoias.com.br/2024/03/756af932-whatsapp-image-2024-03-28-at-11.34.31-am.jpeg"
    },
    {
        nome:"Paulinho",
        titulo:"A Promessa do Galo",
        descricao:"Paulinho é um jovem talento do futebol brasileiro que tem se destacado por sua velocidade, habilidade e potencial de crescimento. Com a camisa do Atlético Mineiro, o atacante busca se consolidar como um dos principais jogadores do futebol nacional e alcançar ainda mais títulos.",
        link:"https://www.transfermarkt.com.br/paulinho/profil/spieler/428791",
        tags:"atletico mineiro",
        imagem:"https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/07/03/1061494184-52720910373a9001e7007c.jpg"
    },
    {
        nome:"Everton Ribeiro",
        titulo:"O Maestro do Esquadrão de Aço",
        descricao:"",
        link:"https://www.transfermarkt.com.br/everton-ribeiro/profil/spieler/52896",
        tags:"bahia",
        imagem:"https://www.gaveanews.com/wp-content/uploads/evertonribeiro.webp"
    },
    {
        nome:"Jeferson Savarino",
        titulo:"A Joia Venezuelana do Botafogo",
        descricao:"Jefferson Savarino é um jogador completo, com grande potencial e que já se tornou um dos ídolos da torcida do Botafogo. Sua habilidade, versatilidade e experiência são fundamentais para o sucesso da equipe nas diversas competições que disputa.",
        link:"https://www.transfermarkt.com.br/jefferson-savarino/profil/spieler/309193",
        tags:"botafogo",
        imagem:"https://i.fogaonet.com/crop/rs:fill:1200:1200:1/g:ce/plain/wp-content/uploads/2022/04/savarino.jpg"
    },
    {
        nome:"Lincoln",
        titulo:"Uma Promessa Brasileira no RB Bragantino",
        descricao:"Lincoln Henrique é um meia-atacante brasileiro que atualmente defende as cores do Red Bull Bragantino. Revelado pelo Grêmio, o jogador chamou atenção por sua habilidade e técnica apurada, sendo considerado uma das grandes promessas do futebol brasileiro.",
        link:"https://www.transfermarkt.com.br/lincoln/profil/spieler/351738",
        tags:"bragantino",
        imagem:"https://s2-ge.glbimg.com/1Lbz-OH0rfVtXTtaKFpc2_0Ryn0=/0x0:976x1280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/R/U/29ssUBS7AIWxfKhAncxA/whatsapp-image-2024-02-08-at-17.14.11.jpeg"
    },
    {
        nome:"Rodrigo Garro",
        titulo:"O Maestro do Timão",
        descricao:"Rodrigo Garro é um meia-atacante argentino que atualmente atua no Corinthians. O meia contratado está temporada tem sido um dos pilares do corinthians na luta contra o rebaixamento.",
        link:"https://www.transfermarkt.com.br/rodrigo-garro/profil/spieler/565009",
        tags:"corinthians",
        imagem:"https://tntsports.com.br/__export/1717861529898/sites/esporteinterativo/img/2024/06/08/rodrigo_garro_-_20240608-122917_2049398_2871.jpg_423682103.jpg"
    },
    {
        nome:"Marquinhos Gabriel",
        titulo:"Um Talento Atuando no Tigre",
        descricao:"Marquinhos Gabriel, nome completo Marcos Gabriel do Nascimento, é um experiente meia-atacante brasileiro que atualmente veste a camisa do Criciúma Esporte Clube. Conhecido por sua habilidade com a bola e visão de jogo, o atleta já passou por grandes clubes do futebol brasileiro, como Internacional, Palmeiras, Santos e Corinthians.",
        link:"https://www.transfermarkt.com.br/marquinhos-gabriel/profil/spieler/100091",
        tags:"criciuma",
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5CCmz7y2fyR8ZIhHrstbfxb3TFtS-fonqOw&s"
    },
    {
        nome:"Matheus Pereira",
        titulo:"Um Talento em Ascensão no Cruzeiro",
        descricao:"Matheus Pereira é um talentoso meio-campista brasileiro que, após superar diversos obstáculos, tem se destacado no Cruzeiro. Sua habilidade, visão de jogo e liderança fazem dele um dos principais jogadores do futebol brasileiro.",
        link:"https://www.transfermarkt.com.br/matheus-pereira/profil/spieler/225984",
        tags:"cruzeiro",
        imagem:"https://s2-ge.glbimg.com/1Y3VQ40Wcrq5sVjkyW-K_5zUPoU=/0x0:1638x2048/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/D/V/LVOlBbQYqbKIA9z8kY9Q/53842599443-ae9bf480e2-k.jpg"
    },
    {
        nome:"Max",
        titulo:"Uma Promessa Cuiabana",
        descricao:"Max Alves é um jovem talento do futebol brasileiro que tem se destacado com a camisa do Cuiabá. Sua habilidade técnica, visão de jogo e potencial o colocam como uma das promessas do futebol nacional.",
        link:"https://www.transfermarkt.com.br/maxtm/profil/spieler/876343",
        tags:"cuiaba",
        imagem:"https://www.olhardireto.com.br/imgsite/noticias/WhatsApp-Image-2024-01-09-at-10.26.51.jpeg"
    },
    {
        nome:"Não possui",
        titulo:"Faz Falta o Camisa 10",
        descricao:"O Flamengo atualmente não possui nenhum jogador que utilize a camisa 10.",
        link:"https://www.transfermarkt.com.br/flamengo-rio-de-janeiro/startseite/verein/614",
        tags:"flamengo nao",
        imagem:"https://a-static.mlcdn.com.br/450x450/camisa-flamengo-1995-n-10-edicao-limitada-masculina-braziline/netshoes/d40-1294-012-02/f3d085b109c8e82bd291d83ab031af85.jpeg"
    },
    {
        nome:"Ganso",
        titulo:"O Regente Fluminense",
        descricao:"Paulo Henrique Ganso é um meia talentoso e experiente, que encanta a torcida com seu futebol elegante e visão de jogo. Sua importância para o Fluminense é inegável, e o jogador é considerado um dos maiores ídolos da história recente do clube",
        link:"https://www.transfermarkt.com.br/ganso/profil/spieler/67920",
        tags:"fluminense",
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT80YZYbAD6zPG4V4SWW2KR9in8FWrRmtIEiA&s"
    },
    {
        nome:"Calebe",
        titulo:"A Promessa Tricolor",
        descricao:"Com seu talento e potencial, Calebe tem tudo para se tornar um dos grandes nomes do futebol brasileiro nas próximas temporadas. Muitos clubes já demonstram interesse no jogador, mas o Fortaleza busca renovar seu contrato e manter o atleta em seu elenco.",
        link:"https://www.transfermarkt.com.br/calebe/profil/spieler/798114",
        tags:"fortaleza",
        imagem:"https://www.opovo.com.br/_midias/jpg/2023/08/06/800x600/1_calebe_fortaleza_jogo_rb_bragantino_brasileirao_serie_a-22905551.jpg"
    },
    {
        nome:"Franco Cristaldo",
        titulo:"O Motor Gremista",
        descricao:"Franco Cristaldo se tornou uma das grandes surpresas do futebol brasileiro em 2023, defendendo as cores do Grêmio. O meia argentino, com sua técnica apurada, visão de jogo e faro de gol, rapidamente conquistou a torcida tricolor e se tornou peça fundamental no esquema do time.",
        link:"https://www.transfermarkt.com.br/franco-cristaldo/profil/spieler/332259",
        tags:"gremio",
        imagem:"https://tmssl.akamaized.net//images/foto/galerie/cristaldo-gremio-2023-1702046067-123530.jpg?lm=1702046089"
    },
    {
        nome:"Alan Patrick",
        titulo:"O Maestro Colorado",
        descricao:"Alan Patrick é um nome que evoca paixão e admiração na torcida colorada. O meia, com sua técnica refinada, visão de jogo privilegiada e capacidade de ditar o ritmo das partidas, se tornou um dos principais jogadores do Internacional e um dos maiores ídolos da torcida nos últimos anos.",
        link:"https://www.transfermarkt.com.br/alan-patrick/profil/spieler/104505",
        tags:"internacional",
        imagem:"https://conteudo.imguol.com.br/c/esporte/91/2022/05/14/alan-patrick-comemora-gol-do-inter-sobre-o-corinthians-em-jogo-valido-pelo-campeonato-brasileiro-1652571060520_v2_4x3.jpg"
    },
    {
        nome:"Nenê",
        titulo:"O Eterno",
        descricao:"Nenê é um dos nomes mais experientes e respeitados do futebol brasileiro. Aos 42 anos, o meia continua demonstrando uma qualidade técnica impressionante e uma visão de jogo que poucos jogadores possuem. No Juventude, o veterano encontrou um novo lar e se tornou um dos principais jogadores da equipe.",
        link:"https://www.transfermarkt.com.br/nene/profil/spieler/29091",
        tags:"juventude nene",
        imagem:"https://www.rbsdirect.com.br/filestore/3/5/9/4/3/7/4_2baee639a9f2683/4734953_f3f071c3ebd34c9.jpg?w=1024&h=1024&a=c"
    },
    {
        nome:"Rony",
        titulo:"O Rústico",
        descricao:"Rony é um dos nomes mais importantes do futebol brasileiro atual e um dos principais pilares do sucesso recente do Palmeiras. O atacante, com sua velocidade, dribles e faro de gol, se tornou um dos artilheiros do Verdão e um dos jogadores mais queridos pela torcida.",
        link:"https://www.transfermarkt.com.br/rony/profil/spieler/371009",
        tags:"palmeiras",
        imagem:"https://conteudo.imguol.com.br/c/esporte/96/2021/04/27/rony-comemora-o-gol-do-palmeiras-contra-o-independiente-del-valle-1619572630051_v2_1278x1920.jpg"
    },
    {
        nome:"Luciano",
        titulo:"O Espirito Tricolor",
        descricao:"Luciano é um dos nomes mais importantes do ataque do São Paulo nos últimos anos. O atacante, com sua velocidade, finalização precisa e habilidade para jogar em diversas posições, se tornou um dos artilheiros do Tricolor e um dos jogadores mais queridos pela torcida.",
        link:"https://www.transfermarkt.com.br/luciano/profil/spieler/223560",
        tags:"sao paulo",
        imagem:"https://upload.wikimedia.org/wikipedia/commons/4/48/Luciano-Sao-Paulo-Juventude-jun-2022.jpg"
    },
    {
        nome:"Dimitri Payet",
        titulo:"O Maestro Cruz Maltino",
        descricao:"Dimitri Payet é um nome que despertou grande expectativa na torcida do Vasco da Gama quando chegou ao clube. O meia francês, com sua vasta experiência em grandes clubes europeus e seleção francesa, prometia trazer um toque de classe e liderança ao time.",
        link:"https://www.transfermarkt.com.br/dimitri-payet/profil/spieler/37647",
        tags:"vasco",
        imagem:"https://conteudo.imguol.com.br/c/esporte/89/2024/03/09/dimitri-payet-na-partida-entre-vasco-da-gama-e-corinthians-em-sao-januario-1710011954727_v2_450x600.jpg"
    },
    {
        nome:"Jean Mota",
        titulo:"O Regresso Triunfal ao Futebol Brasileiro",
        descricao:"Jean Mota é um nome familiar para os amantes do futebol brasileiro, especialmente para os torcedores do Santos. O meia, conhecido por sua técnica apurada, visão de jogo e versatilidade, retornou ao futebol brasileiro em 2024, defendendo as cores do Vitória.",
        link:"https://www.transfermarkt.com.br/jean-mota/profil/spieler/215212",
        tags:"vitoria",
        imagem:"https://midias.correio24horas.com.br/2024/06/25/jean-mota-foi-contratado-com-expectativa-de-se-tornar-titular-do-vitoria-2145825.png"
    },
    {
        nome:"Martín Benítez",
        titulo:"Um Grande Talento do América",
        descricao:"Martín Benítez é um nome que vem ganhando destaque no futebol brasileiro, especialmente desde sua chegada ao América Mineiro. O meia-atacante argentino, com sua técnica refinada, dribles elegantes e visão de jogo, tem se mostrado uma peça fundamental no esquema do Coelho.",
        link:"https://www.transfermarkt.com.br/martin-benitez/profil/spieler/189418",
        tags:"america mineiro martin benitez",
        imagem:"https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2023/07/16/1890597835-martin.jpg"
    },
    {
        nome:"Rafael Tavares",
        titulo:"Um Destaque no Amazonas FC",
        descricao:"Rafael Tavares tem se destacado como um dos principais jogadores do Amazonas FC. O meia, com sua experiência e qualidade técnica, tem sido fundamental para o bom desempenho da equipe na Série B do Campeonato Brasileiro.",
        link:"https://www.transfermarkt.com.br/rafael-tavares/profil/spieler/307289",
        tags:"amazonas",
        imagem:"https://s2-ge.glbimg.com/12F2mqP31rH5NDikBUr4AV2UZ-8=/0x0:1600x1066/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/Q/5/x4HGkITTAyvzTewfKdGA/f8am3yzxmaagj6z.jfif"
    },
    {
        nome:"Não possui",
        titulo:"Faz Falta o Camisa 10",
        descricao:"O Avaí não possui um jogador vestindo a camisa 10 no momento.",
        link:"https://www.transfermarkt.com.br/avai-fc-sc-/startseite/verein/2035",
        tags:"avai nao",
        imagem:"https://http2.mlstatic.com/D_NQ_NP_695462-MLB74269185642_022024-O.webp"
    },
    {
        nome:"Douglas Baggio",
        titulo:"Um Atacante com Passado de Destaque na Série B",
        descricao:"Douglas Baggio é um atacante brasileiro que atualmente defende o Botafogo-SP. Conhecido por sua habilidade e gols, o jogador já teve passagens por diversos clubes do Brasil, se destacando principalmente na Série B do Campeonato Brasileiro.",
        link:"https://www.transfermarkt.com.br/douglas-baggio/profil/spieler/191872",
        tags:"botafogo-sp",
        imagem:"https://s2-ge.glbimg.com/ow5F-urQXv_5jqxRZcakhMapC8I=/0x0:3622x2690/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/t/v/lG9JfcTZAJBslsM2D0Kw/ghnslskxqaaeq1e.jfif"
    },
    {
        nome:"Agustín González",
        titulo:"O Meia Uruguaio que Brilha no Brusque",
        descricao:"Agustín González é um nome que tem ganhado destaque no futebol brasileiro, mais especificamente defendendo as cores do Brusque. O meia uruguaio, com sua técnica apurada e visão de jogo, tem sido fundamental para o bom desempenho do Quadricolor.",
        link:"https://www.transfermarkt.com.br/agustin-gonzalez/profil/spieler/438000",
        tags:"brusque agustin gonzalez",
        imagem:"https://araguaiabrusque.com.br/wp-content/uploads/2024/09/IMAGEM-12-3.jpg"
    },
    {
        nome:"Lucas Mugni",
        titulo:"O Maestro do Meio-campo do Ceará",
        descricao:"Lucas Mugni é um nome que se tornou sinônimo de qualidade e experiência no futebol brasileiro, especialmente desde sua chegada ao Ceará Sporting Club. O meia argentino, com sua técnica apurada e visão de jogo, tem sido um dos principais jogadores do Vozão e uma referência no meio-campo do futebol nacional.",
        link:"https://www.transfermarkt.com.br/lucas-mugni/profil/spieler/148231",
        tags:"ceara",
        imagem:"https://s2-ge.glbimg.com/3mKLFz4J7A0OSgj2Tgud5voBIW4=/0x0:870x580/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/Q/U/f5igt7RmqlQqfwnTjZlg/cam.jpg"
    },
    {
        nome:"Giovanni Augusto",
        titulo:"Um Nome Experiente para a Chapecoense",
        descricao:"Giovanni Augusto é um nome conhecido no futebol brasileiro, com passagens por grandes clubes e uma vasta experiência em diversas competições. Atualmente, o meia defende as cores da Chapecoense, onde tem se destacado pela sua qualidade técnica e liderança dentro de campo.",
        link:"https://www.transfermarkt.com.br/giovanni-augusto/profil/spieler/125513",
        tags:"chapecoense",
        imagem:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1kXuHG.img?w=768&h=485&m=6&x=406&y=139&s=206&d=206"
    },
    {
        nome:"Matheus Frizzo",
        titulo:"Um Nome em Ascensão no Coritiba",
        descricao:"Matheus Frizzo é um meio-campista que tem se destacado no cenário do futebol brasileiro, principalmente desde sua chegada ao Coritiba. Com sua técnica apurada, visão de jogo e habilidade para marcar gols, Frizzo tem se mostrado um jogador fundamental para o Coxa.",
        link:"https://www.transfermarkt.com.br/matheus-frizzo/profil/spieler/688878",
        tags:"coritiba",
        imagem:"https://conteudo.imguol.com.br/c/esporte/a8/2024/06/07/matheus-frizzo-comemora-gol-do-coritiba-em-jogo-do-campeonato-paranaense-1717812170669_v2_450x450.jpg"
    },
    {
        nome:"Rafael Bilú",
        titulo:"Rafael Bilu: A Promessa em Ascensão no CRB",
        descricao:"Rafael Bilu é um nome que tem ganhado destaque no cenário futebolístico brasileiro, especialmente após sua chegada ao CRB. O jovem atacante, com sua velocidade, dribles e habilidade de finalização, tem se mostrado uma promessa para o futuro do futebol nacional.",
        link:"https://www.transfermarkt.com.br/rafael-bilu/profil/spieler/625333",
        tags:"crb bilu",
        imagem:"https://img.tribunahoje.com/cdD3pL84GmJwfvpabHCI4JyuwRc=/840x520/smart/s3.tribunahoje.com/uploads/imagens/bilu-2.jpg"
    },
    {
        nome:"Régis",
        titulo:"O Maestro do Meio-campo Esmeraldino",
        descricao:"Régis Augusto Salmazzo, mais conhecido como Régis, é um nome que se destaca no meio-campo do Goiás Esporte Clube. Com sua técnica apurada, visão de jogo e habilidade para criar jogadas, o meia tem sido um dos principais jogadores do Esmeraldino e uma referência no futebol brasileiro.",
        link:"https://www.transfermarkt.com.br/regis/profil/spieler/272554",
        tags:"goias regis",
        imagem:"https://s2-ge.glbimg.com/1VwYTgzuTFDxZ1nCoT0nzWrjlxA=/0x0:3248x3002/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/A/p/HebB3fS6yh8zmxSP8Alg/08-2-.jpg"
    },
    {
        nome:"Luan Dias",
        titulo:"O Meia que Brilha no Guarani",
        descricao:"Luan Dias é um nome que tem ganhado destaque no cenário do futebol brasileiro, especialmente desde sua chegada ao Guarani Futebol Clube. Com sua técnica apurada, visão de jogo e habilidade para marcar gols, Luan Dias tem se mostrado um jogador fundamental para o Bugre.",
        link:"https://www.transfermarkt.com.br/luan-dias/profil/spieler/739218",
        tags:"guarani",
        imagem:"https://portalcbncampinas.com.br/wp-content/uploads/2024/08/portalcbncampinas.com.br-salustiano-e-luan-dias-desfalcam-o-guarani-no-duelo-contra-chapecoense-53919636726-9c7ccb69aa-k.jpg"
    },
    {
        nome:"José Aldo",
        titulo:"O Maestro do Meio-campo do Ituano",
        descricao:"José Aldo é um nome que tem ganhado destaque no cenário do futebol brasileiro, especialmente desde sua chegada ao Ituano Futebol Clube. Com sua técnica apurada, visão de jogo e habilidade para criar jogadas, José Aldo tem se mostrado um jogador fundamental para o Galo de Itu.",
        link:"https://www.transfermarkt.com.br/jose-aldo/profil/spieler/644204",
        tags:"ituano Jose",
        imagem:"https://tntsports.com.br/__export/1720468880701/sites/esporteinterativo/img/2024/07/08/aldo-20_crop1720467932031.jpg_1440874535.jpg"
    },
    {
        nome:"Chico Kim",
        titulo:"O Talentoso Meia do Mirassol",
        descricao:"Francisco Hyun-sol Kim, mais conhecido como Chico, é um meio-campista com uma trajetória interessante e que atualmente defende as cores do Mirassol Futebol Clube. Com sua técnica apurada, visão de jogo e habilidade para criar jogadas, Chico tem se destacado no futebol brasileiro.",
        link:"https://www.transfermarkt.com.br/chico-kim/profil/spieler/349166",
        tags:"mirassol",
        imagem:"https://s2-ge.glbimg.com/WE7fyGuZFfN8O89nR2KjaIwwRGU=/0x0:2048x1365/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/f/M/jxmGCxRnWMeWBDQGteaA/53347876662-a032af295b-k.jpg"
    },
    {
        nome:"Não possui",
        titulo:"Faz Falta o Camisa 10",
        descricao:"O Novorizontino não possui nenhum jogador vestindo a camisa 10 neste momento.",
        link:"https://www.transfermarkt.com.br/gremio-novorizontino-sp-/startseite/verein/37474",
        tags:"novorizontino nao",
        imagem:"https://acdn.mitiendanube.com/stores/002/523/759/products/003-219503a18ad47a8f1617092302065834-1024-1024.png"
    },
    {
        nome:"Marco Antônio",
        titulo:"O Maestro do Meio-campo Fantasma",
        descricao:"Marco Antônio é um nome que tem ganhado destaque no cenário do futebol brasileiro, especialmente desde sua chegada ao Operário Ferroviário. Com sua técnica apurada, visão de jogo e habilidade para criar jogadas, Marco Antônio tem se mostrado um jogador fundamental para o Fantasma.",
        link:"https://www.transfermarkt.com.br/marco-antonio/profil/spieler/371997",
        tags:"operario",
        imagem:"https://www.ogol.com.br/img/jogadores/65/978065_med__20230204154004_marco_antonio.png"
    },
    {
        nome:"Juan Cazares",
        titulo:"Um Nome de Peso no Papão",
        descricao:"Juan Ramón Cazares Sevillano, mais conhecido como Juan Cazares, é um meia equatoriano que chegou ao Paysandu Sport Club em 2024, trazendo consigo uma vasta experiência no futebol brasileiro e internacional. Com sua técnica refinada, visão de jogo e habilidade para criar jogadas, Cazares se tornou um dos principais jogadores do Papão e uma referência no futebol paraense.",
        link:"https://www.transfermarkt.com.br/juan-cazares/profil/spieler/146367",
        tags:"paysandu",
        imagem:"https://s2-ge.glbimg.com/YGcjnAN7iFVIWaWltluqPip72PM=/0x0:2047x1638/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/1/N/HAN58hRxejb79NyD749w/53853911321-9a9001618e-k.jpg"
    },
    {
        nome:"Elvis",
        titulo:"O Maestro da Macaca",
        descricao:"Élvis Vieira Araújo, mais conhecido simplesmente como Élvis, é um nome que se destaca no meio-campo da Ponte Preta. Com sua experiência, técnica apurada e visão de jogo, o meia tem sido um dos principais jogadores da Macaca e uma referência no futebol brasileiro.",
        link:"https://www.transfermarkt.com.br/elvis/profil/spieler/76135",
        tags:"ponte preta",
        imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg9KUKjLVZk3FkDVdK7gO7d4vD7nE5oPXL3g&s"
    },
    {
        nome:"Não possui",
        titulo:"Faz Muita Falta o Camisa 10",
        descricao:"A camisa 10 mais pesada do mundo atualmente não possui nenhum representante no elenco do Santos.",
        link:"https://www.transfermarkt.com.br/fc-santos/startseite/verein/221",
        tags:"santos santosfc nao",
        imagem:"https://lncimg.lance.com.br/uploads/2023/12/Pele_Santos_camisa_10-1-1-aspect-ratio-512-320.jpeg"
    },
    {
        nome:"Luciano Naninho",
        titulo:"O Armador do Tigre Goiano",
        descricao:"Luciano Naninho tem sido fundamental para o Vila Nova na briga pelo acesso para a Serie A do campeonato brasileiro.",
        link:"https://www.transfermarkt.com.br/luciano-naninho/profil/spieler/681813",
        tags:"vila nova",
        imagem:"https://s2-ge.glbimg.com/C3Teqsw-xMlCK73ej2ww3inpsUo=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/e/0/3lFDCyS8yxBshOziTRBA/naninho2.jpg"
    }
];