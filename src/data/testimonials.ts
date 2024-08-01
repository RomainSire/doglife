import { getRandomHueColor } from "@lib/colors";

export type TestimonialType = {
	author: string;
	authorSubtitle: string;
	color: string;
	stars: number;
	date: string;
	content: string;
};

export const testimonialsData: TestimonialType[] = [
	{
		author: "Lisa Combettes",
		authorSubtitle: "2 avis",
		color: getRandomHueColor(),
		stars: 5,
		date: "Juin 2024",
		content: `Je recommande vraiment Alexis, plusieurs dresseur on essayer de m’aider avec ma chienne mais il n’y que lui qui a réussi à lui donner confiance en elle et en l’être humain. Alors encore un grand merci pour tout son travail. Il est à l’écoute des maîtres et au bien être du chien. 👍👍👍👍`,
	},
	{
		author: "Ambre Noizat",
		authorSubtitle: "22 avis·4 photos",
		color: getRandomHueColor(),
		stars: 5,
		date: "Mars 2024",
		content: `Nous sommes vraiment  ravis avec mon copain de l’accompagnement d’Alexis pour notre chien Socrate
Nous ne savions pas comment faire comprendre certaines choses à Socrate, grâce à Alexis de réels progrès ont eu lieu, il suffit de bien écouter ses conseils et de les mettre en pratique
Il est très patient, a l’écoute et possède énormément de connaissances sur les chiens, ce qui en fait un excellent éducateur !`,
	},
	{
		author: "Isabelle Cervera",
		authorSubtitle: "Local Guide·25 avis·3 photos",
		color: getRandomHueColor(),
		stars: 5,
		date: "Janvier 2024",
		content: `Un éducateur très sympa qui prend son temps et des résultats rapides si on suit bien ses conseils. Il fait les séances dans l'environnement du chien (domicile, quartier, parc), ce qui est un vrai plus car on a besoin que ça se passe bien chez nous pas chez l'éducateur...`,
	},
	{
		author: "Marion Wallart",
		authorSubtitle: "4 avis",
		color: getRandomHueColor(),
		stars: 5,
		date: "Octobre 2023",
		content: `Alexis a accompagné mon chien Falko adopté à la SPA qui, suite à de mauvais traitements par le passé, était agressif avec les humains et ses congénères.
Alexis est un comportementaliste doux et à l'écoute qui a permis à Falko de prendre confiance en lui et réduire son stress. De gros progrès ont eu lieu, c'est un chien maintenant beaucoup plus apaisé qui se montre même plutôt avenant avec ses congénères. Merci Alexis!`,
	},
	{
		author: "Chloé Saby",
		authorSubtitle: "Local Guide·82 avis·5 photos",
		color: getRandomHueColor(),
		stars: 5,
		date: "Juillet 2023",
		content: `Alexis est un merveilleux éducateur. Très à l'écoute du chien, de ses signaux, mais aussi à l'écoute des "parents". Extrêmement pédagogue, on comprend ce qu'on fait, pourquoi on le fait & comment le faire pour aider notre animal à évoluer positivement.
	Nous avons pu voir une nette amélioration grâce à la méthode positive au clicker proposée. Vous pouvez lui faire confiance pour vous accompagner dans l'éducation de votre toutou, tout en douceur, en écoute & dans le respect.
	Chaque séance a été un plaisir pour nous comme pour Tsuki, qui est tombée folle amoureuse d'Alexis.`,
	},
	{
		author: "Anne-Sophie Dormont",
		authorSubtitle: "3 avis",
		color: getRandomHueColor(),
		stars: 5,
		date: "Novembre 2022",
		content: `A l'écoute, efficace, toujours dispo chercher pas y 'a pas mieux ! Pour nous une situation en plus compliquée avec un chien blessé et toujours oui toujours une solution !
	Recommandé à 500 %`,
	},
	{
		author: "Charlotte Lesigne",
		authorSubtitle: "3 avis·2 photos",
		color: getRandomHueColor(),
		stars: 5,
		date: "Juin 2022",
		content: `Un grand merci à Alexis pour son aide avec Pablo, croisé chasse arrivant de la SPA, car la promenade en laisse était vraiment un grand défi pour lui! Grâce à Alexis les sorties sont plus apaisées 😊 Nous avons beaucoup apprécié son écoute, sa disponibilité et sa patience 👍
	À nous maintenant de continuer le travail!`,
	},
	{
		author: "Matthieu Desachy",
		authorSubtitle: "2 avis",
		color: getRandomHueColor(),
		stars: 5,
		date: "Janvier 2022",
		content: `Alexis a su prendre la mesure de notre Athos, jeune beauceron de 18 mois ayant du mal à canaliser son énergie, en nous apprenant à tous humains et canin à gérer les situations de manière calme et ludique. Les progrès sont spectaculaires et si l'éducation reste à terminer, elle est sur les rails. Merci Alexis pour votre patience, votre disponibilité et votre professionnalisme !`,
	},
	{
		author: "Oilter Gbrt",
		authorSubtitle: "5 avis",
		color: getRandomHueColor(),
		stars: 5,
		date: "Novembre 2021",
		content: `Très Pro ! Nous avons pu apprendre à notre chienne de 2 ans venue de la SPA la plupart des bases comme le rappel, l'attention, la propreté, la patience. Nous continuons encore le travail en suivant les conseil d' Alexis qui nous a bien aidé à la comprendre pour mieux l'éduquer. Très à l'écoute de nos attentes et pro dans la psychologie des chiens. Je recommande !`,
	},
	{
		author: "Jé V",
		authorSubtitle: "9 avis",
		color: getRandomHueColor(),
		stars: 5,
		date: "Mai 2021",
		content: `Alexis est au top très sympa et très compétent, c'était un réel plaisir ;)
	Merci !!!`,
	},
	{
		author: "Joseph Calen",
		authorSubtitle: "3 avis",
		color: getRandomHueColor(),
		stars: 5,
		date: "Août 2021",
		content: `Très bon accompagnement. Très sympathique et professionnel. Disponible selon vos horaires et s'adapte à la demande.`,
	},
	{
		author: "Charlotte Dubois",
		authorSubtitle: "Local Guide·15 avis·2 photos",
		color: getRandomHueColor(),
		stars: 5,
		date: "Juin 2021",
		content: `Nous avons fait appel à Alexis pour l'arrivée de notre petite staffie à la maison. Grâce à lui, elle a appris très sereinement, sans punitions ni aucune forme de violence, toutes les bases de savoir-vivre à la maison et d'obéissance très rapidement. Alexis s'est montré très à l'écoute de nos questions, bienveillant et patient. Même quand les maîtres ne comprennent pas tout tout de suite on peut compter sur sa pédagogie ! Merci pour tout, et nous referons appel à Alexis sans hésitation si besoin dans le futur.`,
	},
	{
		author: "Sophie Sandres",
		authorSubtitle: "9 avis",
		color: getRandomHueColor(),
		stars: 5,
		date: "Juin 2021",
		content: `Je recommande vivement Alexis ! C'est un éducateur très à l'écoute, bienveillant, professionnel et qui s'adapte vraiment à votre chien et votre problématique. Amoureux des chiens, il créé un lien rapidement avec lui. Ca a été un vrai plaisir de partager ces moments d'éducation ensemble, et Fiona sa chienne est un vrai plus. Un grand merci et à très bientôt car Suki aura toujours besoin d'un petit rappel de temps en temps.`,
	},
	{
		author: "Christine Canto",
		authorSubtitle: "1 avis",
		color: getRandomHueColor(),
		stars: 5,
		date: "Avril 2021",
		content: `Elvis le golden remercie Alexis pour l'avoir aidé à grandir en sagesse ! Gentillesse, bon esprit et méthode efficace, ce fut très agréable de travailler avec Alexis, merci !`,
	},
	{
		author: "Valentin dv",
		authorSubtitle: "Local Guide·54 avis·2 photos",
		color: getRandomHueColor(),
		stars: 5,
		date: "Mars 2021",
		content: `Très satisfait des services d'Alexis. Notre Jack Russel a complètement changé depuis que nous avons fait appel à Dog Life. Il est devenu plus obéissant, il ne saute plus sur les invités à la maison. Faire appel à Alexis est la meilleure chose qu'on ait pu faire pour notre chien, je recommande à 100%`,
	},
];
