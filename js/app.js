$(document).ready(function() {
	
var qna = {};
$.getJSON('https://www.dev.dabee.com/si/json/qna.json', function(data){
     $.each(data, function(indx, json){
   qna = json;
   });
    });

// var qna = [	{	Topic: "MercadoLibre", 
// 				QuestionAnswers: [
// 					{Question: "What is MercadoLibre?", Answer: "MercadoLibre is the largest e-commerce ecosystem in Latin America. We offer a wide range of services to our sellers and buyers throughout the region including marketplace, payments, advertising and e-building solutions. We operate in 13 countries including Argentina, Brazil, Chile, Colombia, Mexico, Peru, and Venezuela. Based on unique visitors and page views, we are market leaders in the major countries where we are present. With a market of over 550 million people and in a region with one of the world’s fastest-growing Internet penetration rates, we provide buyers and sellers a robust online trading environment that fosters the development of a large and growing e-commerce community. We offer a complete technological and commercial solution that addresses the distinctive cultural and geographic challenges of operating an online trading platform in Latin America."},
// 					{Question: "What is MELI CBT?",Answer: "Meli CBT is the department that is in charge of Cross-Border trade for MercadoLibre."},
// 					{Question: "What countries are enabled for MELI CBT?",Answer: "Currently Cross-Border Trade (CBT) is enabled in Brazil and Mexico. In a few months, we will be enabling Chile and Colombia. Other countries will follow, but our goal is to enable cross-border trade in all MercadoLibre countries."	},
// 					{Question: "What is Dabee?",Answer: "Dabee is a fully owned subsidiary of Mercado Liber in the United States. You might find references of Dabee in our documentation and/or legal documents."}
// 				],
// 			},

// 			{	Topic: "Registration",
// 				QuestionAnswers: [
// 					{Question: "Where do I register to be part of MELI CBT?", Answer: "You can register at: https://www.dabee.com/merchant/registration. During the registration flow, seller shall provide basic information such as email, address, desired display name, etc. as well as banking information for payments to be sent to. You will also be required to accept MELI CBT Platform terms & conditions."},
// 					{Question: "Do I need to register on MELI specific sites like Brazil, Mexico, etc?",Answer: "No, MELI’s CBT will create multiple local accounts (Brazil, Mexico, etc.) on behalf of the seller. These accounts are linked to the main account."},
// 					{Question: "What is display name?",Answer: "It is your username for MELI CBT Platform. When we create multiple accounts (one per country) on your behalf, we try to match that username as close as possible."	},
// 					{Question: "What are the requirements for selling on MercadoLibre?",Answer: "Answer not available yet."},
// 					{Question: "Can I upload a logo?",Answer: "Yes, you can upload a logo to be displayed in your listings. In order to upload the logo, login to your MELI CBT account (Merchant Portal) and go to Listing Template from the left nav. There you will be able to edit or add a logo. We accept the following formats: jpg, jpeg and png. Your logo will be resized to fit the template which has max width = 300px and max length = 200px."},
// 					{Question: "Can I use my US phone number?",Answer: "Answer not available yet."},
// 					{Question: "Can I get an account manager?",Answer: "Our Cross-Border Trade Program (MELI CBT) is relatively new and we do not have an account management team yet. Please be patient with us as we build the team. We are working on it."		},
// 					{Question: "Is there a number I can call to ask a few questions?",Answer: "We don't have phone support, but feel free to email us at XXX@mercadolibre.com."	},
// 					{Question: 'I registered, but I am getting an error message that says: "Attention Needed!!  Account has not been activated.  Please contact MELI CBT.',Answer: "This happened because we still need to do some account setup for you. Please email XXX@dabee.com to get this resolved."}
// 				],
// 			},

// 			{	Topic: "Fees",
// 				QuestionAnswers: [
// 					{Question: "How much do you charge?",Answer: "If you list your product for $100 and it sells, you will get $100. We add MELI fees which are about 15% all inclusive to the final price shown to buyers in local currency. "	},
// 					{Question: "Is there any fee to list items?",Answer: "No, under the Cross-Border Trade Program, there are no fees to list items."	},
// 					{Question: "Is there a fee to sell items?",Answer: "No, if you list your product for $100 and it sells, you will get $100. We add MELI fees which are about 15% all inclusive to the final price shown to buyers in local currency."	},
// 					{Question: "Do you charge the buyer?",Answer: "No, technically, we are charging the seller in each local market where the sale happens. So, when an item sells in Brazil, for example, we deduct MELI fees from the amount paid in local currency while the money is in Brazil. When the money is brought back to your country (ex. US or China), we will bring the net."		},
// 					{Question: "If I tell you my product is $100. How much do I get?",Answer: "You will get $100. The buyer will be shown prices in local currency that reflect this price + any associated extra cost related to the sale of that item (ex. intl' shipping, MELI fees, etc)"	}
// 				]
// 			}
// 			];


console.log(qna[1]["QuestionAnswers"][4]["Answer"]);
for (var i=0;i<qna.length;i++)	{
	$('.questions-answers').append('<div class = "section-title">'+qna[i]["Topic"]+'</div>');
		for (var w=0;w<qna[i]["QuestionAnswers"].length;w++) 	{
			$('.questions-answers').append('<div class="question"><ul class = "test-block"><li class = "items-list"><i class="fa fa-caret-right"></i><span class="question-text">'+qna[i]["QuestionAnswers"][w]["Question"]+'</span></li></ul></div><div class="answer">'+qna[i]["QuestionAnswers"][w]["Answer"]+'</div>');
						}
						};

    $('.question').on('click', function() {
    	// console.log("venha");
    	$(this).find("i").toggleClass("fa-caret-right fa-caret-down");
    	$(this).next('.answer').toggle();    		
    });

console.log(qna[1]["QuestionAnswers"].length);
console.log(qna.length);

});