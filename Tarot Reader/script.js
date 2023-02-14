const cards = document.querySelectorAll('.button')
const main = document.querySelectorAll('.main')
const c1 = document.getElementById('first')
const c2 = document.getElementById('second')
const c3 = document.getElementById('third')
var count = [0,0]
cards.forEach(card => {
    card.onclick = () => {
            card.classList.remove('button');
            var a = card.id
        if (count[0]<1 && a=='b1'){
            c = future(list1, random)
            y = list1.indexOf(c)
            card.innerHTML = `<img src='${"cards/"+c + ".jpg"}' height=300 width=200/>`         
            c1.innerText=list2[y]
            count[0]+=1
        }else if (count[0]<1 && a=='b2'){
            c = future(list1, random)
            y = list1.indexOf(c)
            card.innerHTML = `<img src='${"cards/"+c + ".jpg"}' height=300 width=200/>`
            c2.innerText=list2[y]
            count[0]+=1
        }else if (count[0]<1 && a=='b3'){
            c = future(list1, random)
            y = list1.indexOf(c)
            card.innerHTML = `<img src='${"cards/"+c + ".jpg"}' height=300 width=200/>`
            c3.innerText=list2[y]
            count[0]+=1
        }
        else{
            return 0;
        }
    }
})
main.forEach(m => {
    m.onclick = () =>{
        if (count[1]<1){
        var a = m.id
        if (a==='card1'){
            cards[1].classList.add('specialgate');
            cards[2].classList.add('specialgate');
            m.classList.add('special');
            count[1]+=1;
        }else if (a==='card2'){
            cards[0].classList.add('specialgate');
            cards[2].classList.add('specialgate');
            m.classList.add('special');
            count[1]+=1
        }else {
            cards[0].classList.add('specialgate');
            cards[1].classList.add('specialgate');
            m.classList.add('special');
            count[1]+=1
        }}else{
            return 0;
        }
        }})
const list1 = ['the-fool-tarot-card','the-empress-tarot-card','the-emperor-tarot-card','the-hierophant-tarot','the-high-priestess-tarot-card','the-lovers-tarot-card','the-magician-tarot-card','the-chariot-tarot-card','strength-tarot-card','the-hermit-tarot-card-meaning-rider-waite','wheel-of-fortune-tarot-card','justice-tarot-card-meaning','the-hanged-man-tarot-card-1','death-tarot-card-image','temperance-card-in-tarot','the-devil-card-upright','the-tower-tarot-card-meaning','the-star-card-in-tarot','the-moon-tarot-card-original','the-sun-card-tarot-reading','judgement-tarot-card-design','the-world-tarot-card']
const list2 = ['The Fool tarot card is the number 0 of the Major Arcana, which stands for the number of unlimited potentials. To see the Fool tarot card generally indicates that you are on the verge of an unexpected and exciting new adventure. This may require you to take a blind leap of faith.','The upright Empress tarot card in a reading calls on you to connect with your feminine side. This can be translated in many ways think of creativity, elegance, sensuality, fertility, and nurturing. She tells you to be kind to yourself and search for beauty and happiness in your life.','As the counterpart of the Empress, the Emperor signifies the husband who is constant and trustworthy. He is confident, in control of his emotions, and an example of masculine energy. He is the paternal figure in life that brings structure and security, creates rules and systems, and conveys knowledge.','The Hierophant tarot card embodies a customary set of spiritual beliefs and is frequently associated with religion and other formal ideologies. Thus, this card suggests that you learn the necessary values from a trusted source such as a mentor or a spiritual counselor.','Often being considered as the gatekeeper at the ancient temples, the High Priestess can also show up in a tarot reading when you are facing a “gatekeeper” in your daily life. Her advice is to stop worrying about the outcome and trust the decision of the gatekeepers.','The Lovers tarot card in the upright position can imply that you have major life-changing choices to make or are faced with a dilemma. Temptation is often part of that choice or dilemma.,You may feel unsure about what direction you should take or who to trust. Or you may have to choose between contradicting and equally unifying options. The Lovers in tarot advises you to dont automatically go for the easy road (temptation).','The Magician tarot card reveals how your wishes and desires can be realized through determination and willpower. When this card shows up in your reading, you can be assured that you have the drive to make your dreams happen.','The Chariot tarot card is all about overcoming obstacles and achieving your goal through determination, focus, and willpower. You will feel motivated, ambitious, and in control.','The Strength tarot card indicates that you are a very persevering person and that you can achieve anything you set your mind to. You are confident and do not have problems being yourself and speaking up. You are committed to what you need to do, and you go about it in a very balanced and mature way. Keep behaving this way and you will be successful in anything you want to accomplish.','In the upright position, the Hermit is a compelling card. Just as beacons of light often guide ships to the shore, this sage is ushering in a period of personal growth and exploration. The Hermit represents wisdom earned by seeking the highest truth. Although this can seem a little scary at first, committing to a personal quest for truth can be one of the most rewarding experiences of life.','The Wheel of Fortune tarot card can also reveal psychic abilities, either within you or someone close. Consider this as a chance to discover more about yourself and to listen to your gut.','In the upright position, the Justice tarot card represents cause and effect as well as balanced thought and action.There are times when we find ourselves the victims of someone elses malicious intent. If you have been wronged in any way, Justice \arrives to restore balance and order.','The Hanged Man tarot card wants you to know that sometimes, we have to accept a loss for the greater good. Acceptance and letting go are key if you ever want to move forward.','One of the reasons that the Death card is such a powerful one in the Upright position is because it carries so many different meanings.For many readings, the Death tarot card signifies completing a chapter, putting the past behind you, and cutting out what is unnecessary. It can also signify a transition or middle ground between one phase of life and the next.','Avoid all extreme situations when pulling the Temperance card in your reading. Although there are times to ‘go for the jugular,’ this is not the angel’s message. Some situations are complicated and require patience and special care, even when your emotions are telling you to react.Temperance is actually a skill, and like any other skill, practice makes perfect. Hold back from quick judgment. Resist the temptation to react immediately.','The Devil is the card of illusion. Although you have total control of your life, beliefs, and choices, the Devil card symbolizes how addiction, depression, and unhealthy bonds can make you feel out of control.Even social media, exercise, and work can be embodied by the Devil when in excess. Regardless of the nature of your particular problem, the message of the Devil is clear: redirect your attention away from the satisfaction of desires and toward the things that really matter.','The Tower signifies total destruction. If you’ve received the Upright Tower tarot card, prepare for things to be leveled and dismantled. As with all losses, this will probably be a painful process. It can also lead to a fresh start. Before you are able to make these positive changes, you’ll have first to face the truth about a situation.','The universe abundantly blesses you (we). We are continually attracting what we desire through our beliefs and thoughts. When the Star arrives in the upright position, it usually follows a difficult change or traumatic event.Going through something challenging can take the wind out of our sails and cause us to feel like things will never be the same. This might be true.','The upright Moon can also be some illusion. There may be a hidden truth in your life that you need to uncover. The Moon cautions you from accepting what things seem to be. It may be time to dig a little deeper and allow the light to shine upon the fallacies in your life.','The Sun reminds us to look at the bright side of things and remind ourselves that hard times don’t last forever. Even when we are faced with difficulties, we can choose to ‘make lemonade out of lemons’ and embrace life lessons for what they are: learning tools.','Now is the perfect time to weigh your actions and see to it that they are in line with your values and beliefs.The things that you did in the past or are doing today – do they reflect your core values and belief? Do they direct you to your goals and purpose?','Despite the difficulties and hardships you’ve encountered, you stood strong and persevered. The seeds you have planted are now blooming and you are reaping the fruit of your labor. Everything has come together, and you are in the right place, doing the right thing, achieving what you have envisioned.Be proud of what you’ve learned along the way, the progression you’ve made, and your achievements so far. Reflecting on what you’ve already accomplished, may just be what you need to bring your project to completion.']
var random = []
function future(x, y) {
    do{
        var rand = Math.floor(Math.random() * list1.length)
    }
    while (y.includes(rand))
    y.push(rand)
    return x[rand]}
function redraw() {
    cards.forEach(card => {
        card.classList.add('button');
        card.innerHTML = `<img src='${"tarot.jpg"}'>`         
        c1.innerText=''
        c2.innerText=''
        c3.innerText=''
        count[0]=0
        count[1]=0})
        main.forEach(m => {
                m.classList.remove('special')})
        cards.forEach(card => {
                card.classList.remove('specialgate')})
        window.scrollTo({top: 0, behavior: 'smooth'});
}