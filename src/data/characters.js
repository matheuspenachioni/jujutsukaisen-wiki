
export const categories = [
    {
        id: "jujutsuStudents",
        label: "JUJUTSU STUDENTS",
        characters: [
            {
                id: "yuji",
                name: "Yuji Itadori",
                image: "./src/assets/images/character-yuji.png",
                preview: "./src/assets/previews/preview-yuji.png",
                status: "Vivo",
                description: "Yuji Itadori se tornou o hospedeiro de um objeto amaldiçoado após ingerir 1 dos 20 dedos de Ryomen Sukuna, depois disso, ele se tornou estudante na Escola Técnica de Jujutsu de Tokyo.",
                abilities: ["Divergent Fist"],
                domainExpasion: null
            },
            {
                id: "megumi",
                name: "Megumi Fushiguro",
                image: "./src/assets/images/character-megumi.png",
                preview: "./src/assets/previews/preview-megumi.png",
                description: "Megumi é um Feiticeiro Jujutsu e um usuário de shikigamis, ele é estudante na Escola Técnica de Jujutsu de Tokyo, além de ser amigo de Yuji Itadori e Nobara Kugisaki.",
                status: "Morto no Capítulo 237",
                abilities: ["Ten Shadows Technique"],
                domainExpasion: "Chimera Shadow Garden"
            },
            {
                id: "nobara",
                name: "Nobara Kugisaki",
                image: "./src/assets/images/character-nobara.png",
                preview: "./src/assets/previews/preview-nobara.png",
                status: "Morta no Capítulo 125",
                description: "Sempre confiante e orgulhosa, Nobara Kugisaki tem uma alta determinação em permanecer fiel a si mesma, ela também é estudante na Escola Técnica de Jujutsu de Tokyo.",
                abilities: ["Resonance, Hairpin"],
                domainExpasion: "Straw Doll Technique"
            },
            {
                id: "yuta",
                name: "Yuta Okkotsu",
                image: "./src/assets/images/character-yuta.png",
                preview: "./src/assets/previews/preview-yuta.png",
                status: "Vivo",
                description: "Yuta Okkotsu prometeu se casar com sua amiga de infância Rika, mas quando ela morreu diante de seus olhos, Yuta a almadiçoou sem saber e Rika se tornou uma maldição que o segue a qualquer lugar.",
                abilities: ["Copy", "Cursed Speech", "Shikigami", "Sky Manipulation", "Thin Ice Breaker"],
                domainExpasion: "Yuta Okkotsu já utilizou sua Expansão de Domínio, mas ela não tem nome..."
            },
            {
                id: "maki",
                name: "Maki Zen'in",
                image: "./src/assets/images/character-maki.png",
                preview: "./src/assets/previews/preview-maki.png",
                status: "Viva",
                description: "Uma das crianças do Clã Zenin, Maki não tem energia amaldiçoada e só consegue enxergar maldições com a ajuda de seus óculos especiais.",
                abilities: null,
                domainExpasion: null
            },
            {
                id: "panda",
                name: "Panda",
                image: "./src/assets/images/character-panda.png",
                preview: "./src/assets/previews/preview-panda.png",
                status: "Vivo",
                description: "Sempre otimista e brincalhão, Panda é um dos estudantes na Escola Técnica de Jujutsu de Tokyo, mas apesar das aparências, ele não é um urso panda de verdade e sim um corpo amaldiçoado com forma de um urso panda adulto.",
                abilities: ["Unblockable Drumming Beat", "Gorilla Mode", "Triceratops Mode"],
                domainExpasion: null
            }
        ]
    },
    { 
        id: "jujutsuSorceres",
        label: "JUJUTSU SORCERES",
        characters: [
            {
                id: "gojo",
                name: "Satoru Gojo",
                image: "./src/assets/images/character-satoru.png",
                preview: "./src/assets/previews/preview-satoru.png",
                status: "Morto no Capítulo 236",
                description: "Satoru Gojo é uma anomalia no mundo Jujutsu, seu nascimento fez com que mais maldições começassem a aparecer, ele foi o primeiro em 400 anos a nascer com as técnicas Inifnity e Limitless. Ele atua como professor na Escola Técnica de Jujutsu de Tokyo e é conhecido como Feiticeiro Jujutsu mais forte da Era Moderna.",
                abilities: ["Six Eyes", "Limitless", "Infinity", "Cursed Technique Lapse: Blue", "Cursed Technique Reversal: Red", "Hollow Technique: Purple"],
                domainExpasion: "Unlimited Void"
            },
            {
                id: "meimei",
                name: "Mei Mei",
                image: "./src/assets/images/character-meimei.png",
                preview: "./src/assets/previews/preview-meimei.png",
                status: "Viva",
                description: "Mei Mei está sempre disposta, mas desde que o serviço envolva sua única motivação: o dinheiro. Apesar de ser uma Feiticeira Jujutsu, Mei Mei gosta de trabalhar de forma independente e desde que isso lhe dê dinheiro, ela também está envolvida com o mercado de apostas do submundo Jujutsu.",
                abilities: ["Black Bird Manipulation", "Bird Strike"],
                domainExpasion: null
            },
            {
                id: "nanami",
                name: "Kento Nanami",
                image: "./src/assets/images/character-nanami.png",
                preview: "./src/assets/previews/preview-nanami.png",
                status: "Morto no Capítulo 120",
                description: "Nanami Kento é um homem calmo e reservado que trabalha como Feiticeiro Jujutsu, ele já deixou seu posto como Feiticeiro e tentou trabalhar em um emprego normal, mas acabou voltando ao mundo Jujutsu após 4 anos.",
                abilities: ["Ratio Technique", "Collapse"],
                domainExpasion: null
            },
        ]
    },
    {
        id: "curseUsers",
        label: "CURSE USERS",
        characters: [
            {
                id: "geto",
                name: "Suguru Geto",
                image: "./src/assets/images/character-suguru.png",
                preview: "./src/assets/previews/preview-suguru.png",
                status: "Morto no Capítulo -4",
                description: "Suguru Geto é um Feiticeiro Jujutsu e costumava ser estudante na Escola Técnica de Jujutsu de Tokyo, ele foi o melhor e o único amigo de Satoru Gojo, além de ser um exímio usuário de maldições. Suguru Geto acabou seguindo um caminho diferente de Satoru Gojo, se tornando alguém extremo e brutal devido a uma série de acontecimentos ruins em sua vida.",
                abilities: ["Cursed Spirit Manipulation", "Maximum: Uzumaki"],
                domainExpasion: null
            },
            {
                id: "junpei",
                name: "Junpei Yoshino",
                image: "./src/assets/images/character-junpei.png",
                preview: "./src/assets/previews/preview-junpei.png",
                status: "Morto no Capítulo 27",
                description: "Manipulado por Mahito, ele se tornou amigo de Yuji Itadori e eventualmente, quando não tinha mais utilidade para Mahito, Junpei foi transformado em uma maldição.",
                abilities: ["Moon Dregs"],
                domainExpasion: null

            }
        ]
    },
    {
        id: "cursedSpirits",
        label: "CURSED SPIRITS",
        characters: [
            {
                id: "mahito",
                name: "Mahito",
                image: "./src/assets/images/character-mahito.png",
                preview: "./src/assets/previews/preview-mahito.png",
                status: "Absorvido no Capítulo 133",
                description: "Mahito é um espírito amaldiçoado, ele é sádico por natureza e adora brincar com suas vítimas, ele não hesita em matar ou transfigurar humanos e acredita que nasceu do ódio deles.",
                abilities: ["Idle Transfiguration"],
                domainExpasion: "Self-Embodiment of Perfection"
            },
            {
                id: "jogo",
                name: "Jogo",
                image: "./src/assets/images/character-jogo.png",
                preview: "./src/assets/previews/preview-jogo.png",
                status: "Morto no Capítulo 116",
                description: "Jogo é um espírito amaldiçoado que está no grupo de Kenjaku.",
                abilities: ["Disaster Flames"],
                domainExpasion: "Coffin of the Iron Mountain"
            },
            {
                id: "hanami",
                name: "Hanami",
                image: "./src/assets/images/character-hanami.png",
                preview: "./src/assets/previews/preview-hanami.png",
                status: "Morta no Capítulo 85",
                description: "Hanami é um espírito amaldiçoado que está no grupo de Kenjaku.",
                abilities: ["Disaster Plants"],
                domainExpasion: "Ceremonial Sea of Light"
            }
        ]
    },
    {
        id: "cursedWombs",
        label: "CURSED WOMBS",
        characters: [
            {
                id: "choso",
                name: "Choso",
                image: "./src/assets/images/character-choso.png",
                preview: "./src/assets/previews/preview-choso.png",
                status: "Vivo",
                description: "Choso é um dos Fetos Amaldiçoados: Pinturas da Morte, ele traí Kenjaku após descobrir sua verdadeira identidade e se junta a Yuji Itadori.",
                abilities: ["Blood Manipulation", "Slicing Exorcism", "Convergence", "Piercing Blood", "Supernova", "Blood Edge", "Flowing Red Scale", "Blood Meteorite", "Maximum: Wing King"],
                domainExpasion: null
            },
            {
                id: "eso",
                name: "Eso",
                image: "./src/assets/images/character-eso.png",
                preview: "./src/assets/previews/preview-eso.png",
                status: "Morto no Capítulo 62",
                description: "Eso é um dos Fetos Amaldiçoados: Pinturas da Morte",
                abilities: ["Rot Technique", "Maximum: Wing King", "Decay"],
                domainExpasion: null
            },
            {
                id: "kechizu",
                name: "Kechizu",
                image: "./src/assets/images/character-kechizu.png",
                preview: "./src/assets/previews/preview-kechizu.png",
                status: "Morto no Capítulo 61",
                description: "Kechizu é um dos Fetos Amaldiçoados: Pinturas da Morte",
                abilities: ["Rot Technique", "Decay"],
                domainExpasion: null
            }
        ]
    },
    {
        id: "incarnatedSorcerers",
        label: "INCARNATED SORCERERS",
        characters: [
            {
                id: "sukuna",
                name: "Ryomen Sukuna",
                image: "./src/assets/images/character-sukuna.png",
                preview: "./src/assets/previews/preview-sukuna.png",
                status: "Vivo",
                description: "Ryomen Sukuna é um Feiticeiro Jujutsu encarnado da Era Heian, ele se tornou um objeto amaldiçoado e se dividiu em 20 partes, Sukuna é especialista em Expansões de Domínios e sabe usar Jujutsu com maestria, ele foi considerado o Feiticeiro Jujutsu mais forte da história e é conhecido como O Rei das Maldições.",
                abilities: ["Dismantle", "Cleave", "Cleave: Spiderweb", "Fire Arrow"],
                domainExpasion: "Malevolent Shrine"
            },
            {
                id: "kenjaku",
                name: "Kenjaku",
                image: "./src/assets/images/character-kenjaku.png",
                preview: "./src/assets/previews/preview-kenjaku.png",
                status: "Vivo",
                description: "Um antigo Feiticeiro Jujutsu especialista em barreiras, ele é um cérebro que se hospeda na cabeça de corpos que ele tenha interesse, a cicatriz na testa simboliza um vínculo entre ele e o hospedeiro, atualmente ele está no corpo do falecido Suguru Geto.",
                abilities: ["Cursed Spirit Manipulation", "Maximum: Uzumaki"],
                domainExpasion: "Womb Profusion"
            }
        ]
    },
];