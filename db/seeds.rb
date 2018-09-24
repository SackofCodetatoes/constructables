# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: 'demo', email: "demo@demo.com", password: 'password', age: 21)
Project.create(title: "Project: Rad", description: "One Rad Project that combines all the awesome projects into one.", user_id: 1)
Step.create(project_id: 1, title: 'Acquire materials', body: 'some filler text should go here', step_index: 0)
Step.create(project_id: 1, title: 'use amterials', body: 'some filler text should go here!!!!!', step_index: 1)

User.create(username: 'Alfred', email: "demo2@demo.com", password: 'password', age: 21)
Project.create(title: "Basket Weaving", description: "A tutorial about basketweaving for the uninitiated. Now wait! Before you say' why would i ever need to learn how to basket weave', its not a very useful trait, i ask you when is a basket not handy?", user_id: 1)
Step.create(project_id: 2, title: 'Acquire materials', body: 'find a suitable material that you wish to create a basket from. I shall be using fiberglass to create a sturdy basket', step_index: 0)
Step.create(project_id: 2, title: 'Weave it up!', body: 'Assuming you know basic weavmenship, this should be a sinch as I forgot to mention this is an advanced tutorial for master weavesmen, meaning this step is self explainatory', step_index: 1)

User.create(username: 'Nemo', email: "demo3@demo.com", password: 'password', age: 21)
Project.create(title: "Creating a coral home", description: "Today I will be teaching you how to build your own home with just coral and coral accessories! Why you ask? Because coral is a strong structure that can also be your lifelong friend! Also it acts as a backsracther", user_id: 3)
Step.create(project_id: 3, title: 'Acquire materials', body: 'First off, find yourself a coral reef to supply yourself with the neccesary materials. You can just ask them nicely to come along, and they will! If they dont, nudge them a lil, talk to them about their day and then they will!', step_index: 0)
Step.create(project_id: 3, title: 'Build!!', body: 'Bring all your new found friends back to a desired location and let them rest, they have had a long day and need the rest, your home is now done!', step_index: 1)

User.create(username: 'Site Admin', email: "admin3@demo.com", password: 'password123', age: 21)
Project.create(title: "Creating a FullStack Project", description: "You might be wondering, Oh boy, all these jobs I want all seem to want a person with fullstack experience, but I have no idea how to do that! Well you're in luck today because I will outline some neccesary steps to creating a great fullstack project!", user_id: 4)
Step.create(project_id: 4, title: "Finding a project", body: "First step is to find yourself a nice lil sample project to clone, for example, thus fancy smancy site might be a good candidate", step_index: 0)
Step.create(project_id: 4, title: 'Contemplate your life decisions', body: "Unfortunately due to the lack of time, I will be concluding this guide here and will create updates in the future!", step_index: 1)

# user 5
User.create(username: 'Michael Scott', email: "mscott@dunder.mifflin", password: 'babiespassword', age: 46)
Project.create(title: "Somehow I Manage", description: "Nice to meet you all, I am Michael Scott, Regional Manager of Dunder Mifflin Paper Company, and I am excited to bring to you an exclusive never before seen world preview of 'Somehow I Manage', written by your's truly. First off, you might be asking yourself this, 'Michael, how can I trust an article written by technology, after it nearly killed you?' To that I say, everyone deserves a second-second chance. I gave Ryan a second-second chance and look at where he is now. He's my best friend, and that is a wonderful position. But, yes, while technology can steer us in the wrong direction, quite latterally, if it weren't for technology, we wouldn't have Wikipedia, and that is the best thing ever. Anyone in the world can write anything they want about any subject. So you know you are getting the best possible information. So the internet is quite possibly the truest source of information you're going to get, and quite honestly, should be your only source of information. The information is so true, that college papers have been written using Wikipedia! How crazy is that? Oh and that brings me back to somehow I manage. So in no particular order here is a sneak peak at how you can become just like me, a successful manager.", user_id: 5)

Step.create(project_id: 5, title: "Trust Your Instincts", body: " Nobody wants to be wrong, and quite frankly you should always follow your instincts, no matter how much everyone tells you not to. I followed my insincts once, and lets just say, someone was very lucky. Until everyone kept telling that someone he was doing something wrong. I mean, it was love at first sight. Actually it was ... No, it was when I heard her voice. It was love at first see with my ears. I mean, you dont even need to know what to say. I leave my speaches up to instinct. Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way, and usually it does, all because I trusted my insincts. Yes.", step_index: 0)

Step.create(project_id: 5, title: "Be the cool boss", body: " I love inside jokes. I'd love to be part of one someday. That is why you should always be the cool boss, no matter what. I mean, you're already their boss, so all you need to do is do as many cool things as you can to make your workers think, 'wow, I work for the coolest boss in the world', and they'll work ten times harder, trying to be like you. But that doesn't mean you let things slide. You have to have get enough respect from your employees so that you can say dance, and they say 'How high?' It's a matter of coolness and once you have enough of it, like I do, then you're one step closer to being one of the best bosses, after me. I mean, do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked, but it's not like this compulsive need to be liked, like my need to be praised. In the end, I rather be both feared and loved. I want people to be afraid of how much they love me.", step_index: 1)

Step.create(project_id: 5, title: "Get along with your workers", body: "  There is nothing more important than getting along with your coworkers. It's like I always say, the office Is like a home, and everyone here is family. An office is for not dying. An office is a place to live life to the fullest, to the max. An office is a place where dreams come true. So always Make friends first, make sales second, make love third. In no particular order. If you don't have enough friends, you go to jail. I've seen it on television, and you dont want me to get started on prison. Prison Mike just got out of there and the worst thing about prison was the dementors. I'm not superstitious but I am a little stitious. You don't want to go to prison. But just because everyone's friends in the office doesn't mean you can't be lovers. Some of the best relationships started in my very office. I just have a magical love aura that just brings people together. I don't use it for myself because I would say I kind of have an unfair advantage, because I watch reality dating shows like a hawk, and I learn. I absorb information from the strategies of the winners and the losers. Actually, I probably learn more from the losers. Oh, and Toby is in HR which technically means he works for corporate. So he's not really a part of our family. Also he's divorced, so he's not really a part of his family.", step_index: 2)

Step.create(project_id: 5, title: "Have Passion", body: " I can't stress this enough, in the end, its all about the passion to doing what you love. I love being a manager and being in sales. When I had no other option, I created my own paper company. I knew my ins and outs with paper and I knew it was what I wanted to do. So when I didn't have a job, I started my own paper company, Michael Scott's Paper Company. And even then, it was a tough start. None of my friends believed in me, I didn't know how I was going to get started, and I was broke like a joke. It was hard. That's what she said. But through passion, and customer experience, my team was able to make sales, turn things around, and make a dent in the big guys. It was our passion that brought us our success and thats the only thing you need to be a salesman.", step_index: 3)

# user 6
User.create(username: 'makerdave', email: "m@dave.com", password: 'omgizdave', age: 21)
Project.create(title: "Building your own fan", description: "Ever wanted to get into mechcanical engineering, material sciences, and computer engineering all at once? If thats a yes, then welcome aboard to technical engineering! Here you'll learn how to start the fundamental thinking process that'll seperate you from the crowd. Become a thinking think person instead of thinking science person. Science can only cover so many topics, which is why you should be going over the technical engineering where you learn all of them all at once! Who says you need some fancy degree to a verified engineer, just do everything at the secrecy of your own home amd you'll be just as qualified an engineer as those with degrees! Just remember, you're on your own and I hold no responsibility for whatever damage you may or may not cause due to following this guide. With the formalities out of the way, let us begin.", user_id: 6)

Step.create(project_id: 6, title: "Finding the right parts", body: "First steps first, find the appropriate materials to build your snazzy new fan. For a budget build, you can constuct everything with the basic essentials: Whatever you can find. This can mean you grab cardboard, rubber bands, and straws. But for the fancier people out there, feel free to grab some cardstock or industrial printed ABS frames for the shell of our fan and some type of rotatary motor, like the ones you see on remote controlled cars. You know, it would be easier to just take a remote controlled car and use that. Yeah, go do that instead. I'll wait.", step_index: 0)

Step.create(project_id: 6, title: "Oh, you're back?", body: "That was fast. I was in the middle of baking a pie. I told you to take your time. I was trying to be considerate of how long things can take people and now suddenly I'M the bad guy just because I went ahead and opened up time for you. You know you could've just got your remote car. Well anyways, now that you have that, we'll attach a spoon onto the wheel. Once attached put it into the pie tin and start. What do you mean fan? We were never making a fan, it was always going to be a pie. Look, first you didn't follow instructions, and now you're getting all confused about not building some technical monstrosity, I mean, its getting close to winter, why would you even need a rotating spinner thing that blows wind at a specified direction? I'm not sure why you chose this guide, but I'm sure you're no longer a 'fan'. ", step_index: 1)

Step.create(project_id: 6, title: "Conclusion", body: "And that is how you make a fan. Simple wasn't it? Up until nothing made any sense.", step_index: 2)

# proj 7
Project.create(title: "Building an effective JavaScript Project", description: "Need a fancy JavaScript to impress your friends, family, coworkers, teachers, or anyone else within the general vicinity? Well here's your guy-ed! *ba dum tss* Your JavaScript project will be a free sort of experience for you to explore. Some will make games, others will make data visualization. Your job is to make something interesting and interacting to wow people with your JavaScript. So here are some ideas and why you should consider them in your JavaScript project.", user_id: 4)

Step.create(project_id: 7, title: "Interactiveness", body: "First soff, don't even THINK about difficulty. All of life's challenges are difficult, otherwise it wouldn't be a challenge. Thus, when planning to create a JavaScript project, go with your most difficult idea that you can come up with, for JavaScript project will be an exercise in futility. You will bang your head on this project trying to figure out how exactly JavaScript works and by the end of the day, you'll think you're a bit of a master at this and think you know what you're generally doing. While that may be the case, you'd be incredibly wrong. You only touched the tip of the iceberg of this mountain of a JavaScript project. Assuming you chose the most difficult concept you can mortally think of, you probably have fulfilled the Interactiveness requirement. Fact: All interactive things are immediately challenging. Take Calculus. That's difficult and the tortured soul would most likely be writting out possible solutions and raking their brain trying to figure out exactly how it all works. THAT, is interactive. Engaged and attentive. Make your JavaScript about calculus. Done. Next Topic.", step_index: 0)

Step.create(project_id: 7, title: "Interest", body: "Is your JavaScript idea intriguing? Is it going to blow my socks off at the thought of thinking about what your project can possibly do? Ohhh I hope so, Otherwise it wont be interesting. The number one killer of user interest is the lack of interesting content on their day to day interactions. That is why you should put lots of clickers on your JavaScript project to hide and mystify your content. Something like multiple moving adds that the user will have to click through to discover the real content. This is a guranteed surfire way to hook someone's interest. How do I know this? Well if you cover something up, like a webpage's main content with lots of filler content, like pop-ups, people will irrationally want to know what sort of content you created. It's like saying don't open the box to a group of kids. That is why you should always cover your projects with as many ad's as possible to hide the real content under a blanket of crap, and when the user finally gets to your project, it'le be nearly 100x better than all the ad's they had to deal with getting to it. Additionally, it will be a one way ticket to interet town, so definely do it. Don't just take my word for it, take the word of millions of doctors who hate one specific individual who has discovered the secret to losing weight.", step_index: 1)

Step.create(project_id: 7, title: "Wow factor", body: "Another part of your JavaScript project will be attaining a certain wow factor. You have to ask yourself, what would make someone say, 'awesome' or 'that's so cool!' Assuming you've followed the first two steps, your project should already be close to there. An interesting and interactive project is a recipe for wow. Some ideas to add big wow factors is adding elements that can connect to an individual's general interest. Something that can catch a person off guard and utilize that moment to sell them on how amazing your project is is what you want to do. Other wow factors can include big data. Unexpectedly large data can shock people, especially if its data relevant to the user. For example, information about Spotify listeners or numbers about a specific genre that people listen to can have a certain level of wow factor that makes them think your application is pretty cool.", step_index: 2)

Step.create(project_id: 7, title: "Conclusion", body: "Once you have your topic ideas down, start creating all the moving parts. Plan out your project and create a timeline of how long you expect your parts will take to create and start creating! This part is self explainatory as you just projects can vary from person to person, thus I cant say much. Good luck!", step_index: 1)

# user 7, project 8
User.create(username: 'jhalpert', email: "jhalp@ert.com", password: 'pambeesly', age: 21)
Project.create(title: "Making Jell-O", description: "Simple guide on how to make jell-o. Why jell-o? Why not?", user_id: 7)
Step.create(project_id: 8, title: "Acquire the ingredients", body: "You will need, several boxes of jell-o, and some water. Optionally you can some fresh fruits, but for the purposes of our creation, we will not be using any fruits. You will want lots of jell-o packets, somewhere around 10 3-ounce packets of jell-o. You'll also want a magnitude of 30 cups of hot nd cold water.", step_index: 0)
Step.create(project_id: 8, title: "Starting from the the packet", body: "Pour out the contents of all your jell-o packets into a large mixing bowl with the hot water. You might want to use a large pot for this. The bigger the better. Once you've pour all your contents into the container, start whisking away. Whisk together the jell-o and hot water until no powdery granules remain. wikihow says it'e take about 2-3 minutes, so on a factor of 10, this will probably take you 20-30 minutes. Good luck.", step_index: 1)
Step.create(project_id: 8, title: "Cold on hot", body: "Continue your cooking recipe by adding cold water to your mixture. If you'd like to make the jell-o set faster, use enough ice cubes to fill the cup. Keep in mind that jell-o will start to set rapidly, so you need to work quick. Since we're using more than 6 ounces, use 30 cups of cold water for our mixture.", step_index: 2)
Step.create(project_id: 8, title: "Not according to plan", body: "Pour the mxiture into your desired mold and wait. Once poured, stir your jell-o to clear it of bubbles which will give you the perfect crystal appearance that just look amazing. Remember, you want the recipient to see clearly what is in the jell-o. Feel free to use whatever jell-o mold you would like. The taller the better. You can use a baking pan or bowl. Since our product is going to be enormous, I would suggest getting the fancier of bowls. ", step_index: 3)
Step.create(project_id: 8, title: "Refridgerate", body: "Next up is to cool down your drinks. Stick em in the fridge for at least 2 - 3 days for it to properly solidify. Depending on how cold your fridge or walk-in freezer is, this may even take a week. You can test the jell-o if it's ready by pressing your hand against it. Most likley it'le feel like a watery mess, so don't try this until maybe the 3rd day. If the jell-o sticks to your hand, its not ready. If it sort of sticks to your hand, now would be a good time to put whatever you're trying to submerge into the jell-o. For example, take a stapler and center it just right in your solution. Once there, allow additional cure time.", step_index: 4)
Step.create(project_id: 8, title: "Serve!", body: "You're done, assuming that you didn't listen to these instructions and followed a proper recipe, your jell-o monstrosity should be fully made and beautify.", step_index: 5)



# user 8, project 9
User.create(username: 'Filler', email: "philler@ert.com", password: 'pambeesly', age: 21)

Project.create(title: "How to be an effective salesman, according to my boss", description: "I've been studying my boss for years and I have condensed what I've learned into a very valuable chart. While at first may seem bad, which it actually is, actually holds some interesting nuggets of truth.", user_id:7)
Step.create(project_id: 9, title: "Procrastinate", body: "I've noticed my boss tends to defer all major responsibilities. I know this may sound crazy, especially in a managing position, but he does in fact procrastinate. I've spent a lot of time wondering how this can be an effective strategy or how It's even possible to procrastinate for 6 out of the 8 hours of the workday but what this effectively means is he doesn't have to worry. He knows his business and he is effective when he goes out and does his job. Not everyone might like him for procstinating, but when the time comes, he gets the job done. Albeit it, the decisions he makes could benefit from some more thought", step_index: 0)
Step.create(project_id: 9, title: "Distract Others", body: "Another major thing I've noticed is his ability to distract others. It's almost like a need to be praised by others, even when it's very clear, nobody will praise him. This costs the company time by holding unneccessary meetings about random things in the office and at some points puts a halt on the entire workday. It's not very efficient and despite all the distractions, we all manage to output more sales than any other branch in our company. Maybe it has to do with the fact that we're always behind and constantly need to catch up, or maybe we're all hoping to make enough to get out of here. One thing or another, it oddly works.", step_index: 1)
Step.create(project_id: 9, title: "Critical Thinking", body: "Now this is a minor one, but big. He doesn't do this often but when he does, amazing things do happen. Our boss has a philosophy that business isn't about sales. No, no, no. It's about the people. It's about building a personal connection with our clients and providing clients care and a personal touch which brings them back, time and time again. Anyone can take your money for a product. But not everyone can connect and bring you what you're looking for. Especially not in a time of technology.", step_index: 2)

# user 9, project 10
User.create(username: 'Not-really-NZXT', email: "nzxt@nzxt.com", password: 'pcmasterrace', age: 21)
Project.create(title: "Video Card Installation", description: "Video card installation is one of the easiest aspects of build assembly. Unlike CPU installs, the video card does not have the same type of fragile (and easily bent) pins in its socket. Before starting, for clarity, there is a technical differentiation that should be made.", user_id: 9)
Step.create(project_id: 10, title: "Placement", body: "If your motherboard has multiple PCI Express (PCI-e) slots and you’re considering a multi-GPU or multi-PCIe device configuration, check the motherboard manual to determine which slots are ideal for your specific assortment of devices. Some boards will “multiplex” PCI-e lanes using special chips (called PEX/PLX chips) to get more performance out of devices. In such an instance, you’ll want to make sure you’re getting full use out of that option.", step_index: 0)
Step.create(project_id: 10, title: "Spacing", body: "Determine how many case expansion slots the video card takes. You can do this by lining-up the card in the PCI Express (PCI-e) slot on the motherboard. The most common count is two slots, but some cards will take “2.5” (or even three – though that is exceedingly rare); low-end devices might take only one expansion slot.", step_index: 1)
Step.create(project_id: 10, title: "Open up space", body: "Remove the screws holding the expansion slot in place.", step_index: 2)
Step.create(project_id: 10, title: "Open up more space", body: "Remove the expansion bay covers. You may keep them in a separate box for storage or toss them. They are functionally useless for the remainder of our process, unless you need to repackage the case for some reason (like to sell to a friend in the event you later upgrade).", step_index: 3)

Step.create(project_id: 10, title: "Prep placement", body: "Line the video card’s PCI-e pins and “shoe” up with the slot it’s going into. Like RAM, you’ll here a slight “click” once the card is pressed into place. Use light pressure through the thumbs to mount the video card. If too much force is required, stop and inspect to determine what’s causing the resistance. It may be improperly aligned or there may be a cable in the way.", step_index: 4)
Step.create(project_id: 10, title: "Insertion", body: "If the device uses multiple expansion slots, re-install all of those screws to mount it. Using both (in the event of a two-slot card) screws will significantly reduce “GPU sag,” or the act of the video card weighing itself down in a fashion which makes it un-level.", step_index: 5)
Step.create(project_id: 10, title: "Post installation", body: "After installing, give the video card a slight wiggle to make sure it’s not going anywhere. Ensure the PCI-e slot’s shoe popped into place and is now locked (in the “up” position). Some motherboards, like some of the high-end X99 boards, do not use this same locking mechanism. If that is the case, look at the pins to ensure that they are fully socketed into the PCI-e slot.", step_index: 6)




User.create(username: 'Filler2', email: "phi33r@ert.com", password: 'pambeesly', age: 21)
User.create(username: 'nextpariticipent', email: "p22ler@ert.com", password: 'pambeesly', age: 21)

# user user 11, project 11

# User.create(username: 'inline-filler', email: "", password: '', age: 21)
Project.create(title: "CPU & CPU Cooler Installation", description: "Installing the CPU is one of the more delicate processes of PC building – especially if working with a non-LGA socket, where pins exist on the CPU itself. Following some simple guidelines and visual landmarks, it’s easy to ensure a CPU is installed and clamped-down correctly.

We like installing the CPU outside of the case, as it (1) allows us to perform pre-install component check, and (2) it’s easier.", user_id: 9)
Step.create(project_id: 11, title: "Prep-1", body: "Unlatch the CPU socket clamp on the motherboard. For X99 motherboards, this is a two-lever system (follow instructions with manual if confused). For most other boards, a single latch will clamp-down the mounting bracket.", step_index: 0)
Step.create(project_id: 11, title: "Prep-2", body: "Intel non-X series motherboards will use a single lever and will cover the socket with a plastic shroud. This is to protect the pins from damage and serves a critical role. Do not touch the pins or interact with them more than necessary; they are exceedingly fragile and made of soft metals (gold).", step_index: 1)
Step.create(project_id: 11, title: "Prep-3", body: "Remove the plastic shroud and save it with your motherboard box. The plastic shroud will be required by the motherboard manufacturer in the instance of an RMA or return.", step_index: 2)
Step.create(project_id: 11, title: "Prep-4", body: "Open your CPU and separate the heatsink from the CPU itself. If AMD, your CPU will host its pins on the substrate (the green foundation). If Intel, it will host contacts on the substrate, but not pins. To this end, be exceedingly careful with AMD CPUs and with Intel motherboards, as anything with pins is fragile.", step_index: 3)
Step.create(project_id: 11, title: "Locate", body: "Intel’s CPUs have two notches that align with ‘bumps’ in the socket’s plastic. Locate these two notches.", step_index: 4)
Step.create(project_id: 11, title: "Alignment", body: "Align the notches in the CPU with the bumps in the socket. The arrow, located in the bottom left of the CPU, should align with the bottom left of the socket.", step_index: 5)
Step.create(project_id: 11, title: "Insertion", body: "Drop the CPU into the socket lightly, once aligned. There should be no force required. If force is required to socket the CPU, stop immediately and determine what is causing the hang-up. It is likely the case that the CPU is not aligned properly. Just make sure no undue force is applied as it may bend or break pins.", step_index: 6)
Step.create(project_id: 11, title: "Secure", body: "Once installed, re-secure the latch to lock the CPU into place. It will require some force, but not much – stop if there’s a high force requirement.", step_index: 7)

# user 11, project 12 
User.create(username: 'PUBG_Corp', email: "pubg@pubg.com", password: 'fortnitesucks', age: 21)
Project.create(title: "Procuring a Chicken Dinner", description: "PUBG isn't an easy game, and it requires dedication to develop skills and strategies to rely on in the late game. Starting out with other players is easy enough, but when you trickle down to a select few — which usually includes a veteran or two — things can go south quickly. We've put together a handful of tips to think about when looking to win the game and enjoy a chicken dinner.", user_id: 12)
Step.create(project_id: 12, title: "Kitted Out", body: "Should you get into fights in the early game, make sure you're kitting yourself out with enough medical supplies and as good armor as available — level three is always desired. And don't underestimate the pan. It can quite literally save your backside. After early fights, should you be safe for a little while, try and use bandages and other lesser meds before using medkits. These will become much more valuable later on, and the more you have the better.

As for grenades, a smoke and flashbang or two can never hurt. Ideally, try and horde explosive grenades over the other three types, with Molotov coming in second. You'll be surprised to know just how many kills at the end are from a good throw.", step_index: 0)
Step.create(project_id: 12, title: "Stream to win", body: "The beauty of Twitch and Mixer allows for viewers to see how professional and highly-skilled players get to the end in PUBG. Sit back and watch a stream or two to take notes on how they move, what positions they take, the loot they value more, and how they engage, and you'll spot areas you could improve on. Sure, watching countless hours of streams will not turn you into a good PUBG player, but it's a good start. Think of them as interactive classrooms, but don't copy, learn.", step_index: 1)
Step.create(project_id: 12, title: "Fireteam Alpha", body: "If you continue to struggle in the solo queue, try and get up to three friends to join you in the drop. A team of four not only gives you support, and more chances to win the game, but you also do not die immediately and instead are knocked down and can be revived by teammates. The only issue is opposing teams, but should you keep all three alive until the end, you can find yourself in a good position if there are only remnants of other teams left. Numbers count for something.", step_index: 2)
Step.create(project_id: 12, title: "Positioning", body: "Knowing the map and most locations and towns is a big help when the circle becomes more and more restrictive. Being able to pick out the best cover in a split second when entering into a tight space with four other players is almost a requirement should you not wish to be mopped up by someone else and have your dreams stolen. Don't just think about buildings and walls or other man-made structures. Foilage, trees, cliffs, and uneven terrain make for great cover with enhanced visibility.

Try and use the circle to your advantage by hugging the 'wall.' This will help avoid players from sneaking up behind you, allowing you to better focus on what's ahead and more effectively spot movement. Also: Do not forget about the circle. Ever. If you're having to move outside the circle in the late game, you're doing it wrong.", step_index: 3)
Step.create(project_id: 12, title: "Practice Makes Perfect", body: "This isn't really what you want to hear, since it's not an instant patch you can apply to your late-game. However, it's absolutely true in all areas of life. Practice really does lead to perfection. Take advantage of the guns you get in the lobby and fire at other people or targets, try and spend a few games warming up, going all out on other players in a cramped location. Pick up a rifle and aim for heads. Your aim and gunplay are incredibly important when there are only a few survivors left.

You'll need to pump in at least 300 or so hours to develop decent skills. Until then, try and avoid smashing the mouse and keyboard.", step_index: 4)


# user 12, project 13

# User.create(username: '', email: "", password: '', age: 21)
Project.create(title: "Southwest Chicken Dinner", description: "Southwest Chicken Dinner recipe by Marquisha Turner", user_id: 12)
Step.create(project_id: 13, title: "Prep", body: "Gather ingredients: 2 cups water
2 tablespoons olive oil, divided
1/2 teaspoon salt
1/4 teaspoon pepper
1 cup uncooked long grain rice
1 tablespoon taco seasoning
4 boneless skinless chicken breast halves (4 ounces each) 
1 cup canned black beans or pinto beans, rinsed and drained
1/4 cup chopped fresh cilantro
1 teaspoon grated lime zest
2 tablespoons lime juice
Pico de gallo, shredded Mexican cheese blend, sour cream, avocado, shredded lettuce or lime wedges, optional", step_index: 0)
Step.create(project_id: 13, title: "Start in the pan", body: "In a large saucepan, combine water, 1 tablespoon oil, salt and pepper; bring to a boil. Stir in rice. Reduce heat; simmer, covered, 15-17 minutes or until liquid is absorbed and rice is tender.", step_index: 0)
Step.create(project_id: 13, title: "Seasoning", body: "Meanwhile, sprinkle taco seasoning over both sides of chicken. In a large skillet, heat remaining oil over medium heat. Add chicken; cook 4-5 minutes on each side or until a thermometer reads 165°.", step_index: 1)
Step.create(project_id: 13, title: "Heating", body: "In a microwave, heat beans until warmed. To serve, gently stir cilantro, lime zest and lime juice into rice; divide among four bowls. Cut chicken into slices. Place chicken and beans over rice; top as desired.", step_index: 2)


# user 12, project 13
Project.create(title: "RAM Installation", description: "Installing RAM is exceedingly trivial. Memory installation is best done outside of the case. Take inventory of your CPU cooler and read its instructions prior to proceeding with this step; sometimes, it proves easier to install the CPU cooler first, but not always. Order of installation for the CPU cooler and RAM most heavily hinges upon the size of the cooler.", user_id: 9)
Step.create(project_id: 14, title: "Locate", body: "Locate the DIMM slots on the motherboard. On boards with four slots for RAM, these are (more or less) always to the right of the CPU when oriented with the CPU toward the top of the motherboard.", step_index: 0)
Step.create(project_id: 14, title: "Setup", body: "If not saturating all available slots for memory (filling only one or two slots in a traditional board, or only 2-4 in an X-series board), check the manual to determine which slots are optimal for the configuration you are using. Dual-channel configurations (aside: there is no such thing as “dual-channel memory” – only platforms and configurations) will want to use specific slots. These are often marked on the board as “FIRST” or “USE_FIRST.”", step_index: 1)
Step.create(project_id: 14, title: "Attachment", body: "Locate the push pin on the left and right of the slot. Apply pressure to unlock it from the locked position.", step_index: 2)
Step.create(project_id: 14, title: "Second Click", body: "Locate the notch centered on the stick of RAM. Align this notch with the nock (like an arrow) in the slot.", step_index: 3)
Step.create(project_id: 14, title: "Placement", body: "Drop the RAM into the slot, double-check that it is aligned, then use both thumbs to apply downward pressure on the corners of the memory module. You should hear a gentle ‘snap’ as the locks pop into place. If they lock most the way but not completely, double-check that everything looks agreeable, then finalize the lock/socketing manually.", step_index: 4)
Step.create(project_id: 14, title: "We Need More RAM", body: "Repeat", step_index: 5)


# user 12, project 14

Project.create(title: "PSU Installation", description: "The system is almost complete. The power supply serves as the beating heart of the computer, driving voltage (and wattage) to all operating devices. Most modern mid- and full-tower cases will mount the PSU in the bottom of the case, though some still run top-mounted PSUs. Small Form Factor (SFF) and mini-ITX cases have unique space constraints that sometimes make for creative PSU location. Generally, though, it’s a bottom mount.

There are three classifications of power supplies:

Fully Modular: All cables can be disconnected and removed from the PSU, including the 24-pin and 8-pin cables.
Semi-Modular: All cables except the 24-pin and 8-pin/EPS cables can be removed from the PSU.
Non-Modular: No cables can be removed, and all are connected directly into the PSU housing. This means that unused cables become excess and must be hidden. Non-modular PSUs tend to be a little bit more affordable as a result.", user_id: 9)
Step.create(project_id: 15, title: "Determine the location of the PSU", body: "Locate the PSU mounting point within the case. If the case has a PSU shroud, there’s also a good chance that a PSU bracket is included – the bracket is installed to the PSU prior to its mounting in the system, and serves to make the process easier. Shrouds will also conceal the cables – a major benefit, and one which the NZXT S340 and NZXT H440 leverage for cleaner cable management. Hiding the cables behind a PSU shroud also means that it’s difficult to make connections once the unit is installed. To this end, we’d recommend connecting all necessary cables to the power supply (if it is modular) prior to installation.

To determine which cables are needed, have a look over your components.

These are the common requirements of a power supply:

24-pin cable for the motherboard (always needed)
4/8-pin EPS12V cable for the motherboard, near the CPU (always needed)
6/8-pin PCI-e cable for video cards (often needed, but not always; sometimes multiple are required)
SATA power cable for SATA-attached SSDs (sometimes required – but not for PCI-e/M.2 SSDs)
MOLEX 4-pin cable for fans and accessories (sometimes required)
Next, figure out how many of each cable you’ll need. Systems with multiple video cards or SSDs/HDDs may need additional cables connected, whereas less complex machines can get away with a minimalistic approach to cables.

Attach those that will be necessary. Don’t connect them just yet – we’ll do that next.", step_index: 0)
Step.create(project_id: 15, title: "Determine the orientation of the PSU", body: "Now, once the mounting location is found and cables readied, determine the orientation of the PSU. Most bottom-mounted cases will offer ventilation on the underside of the case, generally including a dust filter for preventative maintenance. In these cases, install the PSU with the fan facing down (so that it can breathe – especially important to pay attention to when working with shrouds).

In cases that are top-mounted or with unique mounting locations, check the manual. Generally, the preferred orientation is one which will expose the fan to the outside air for fresh intake. If that is not possible or if the PSU doesn’t butt-up against a side panel, install the power supply with the fan facing down. This is sub-optimal as it will intake warmed air that’s being exhausted through the CPU’s fans (if not using liquid), but is sometimes necessary.", step_index: 1)
Step.create(project_id: 15, title: "Mount the PSU", body: "Finally, hold the PSU in its final resting position and begin the process of screwing-in the four accompanying screws. These are hex-head Phillips screws (you can also use a hex driver). There should be four installed, in most builds.", step_index: 2)


User.create(username: 'GameMakerUser', email: "gm@gm.com", password: 'gamemakerstudio', age: 21)
Project.create(title: "A Beginner's Guide To Making Your First Video Game", description: "Game development has exploded over the last few years, and now it seems like everyone is making a video game. You've got big studios full of hundreds of people. You've got small teams making incredible games. There are more people in independent game development than ever. This is an amazing thing, because everyone brings their unique experience and sensibilities to game design.

The more people who we can get making games and sharing their individual voices, the more we will see games evolve in new and exciting directions.

Believe it or not, this can involve you.", user_id: 14)
Step.create(project_id: 16, title: "Start small, and be ready to fail.", body: "Before you get too excited, please realize that, as with any other skill, learning how to design and develop games takes time and practice. Your first game won't look like the polished games you're used to playing, much like your first drawing won't come out looking like Monet. This is absolutely fine. My first game has a huge bug in it that causes it to break for about half of its users. I was unable to figure out how to fix it.

You should shoot for what developers call a prototype: a smaller version of your idea with a few working mechanics, a prototype that lets you see how your game plays, allows you to improve the design, and forms the foundation that you can later build upon to make a full game.

As you make your first game, you will also experience the same thing every other developer has: 'feature creep' or issues with scope. You will likely want to put too much into your first game—too many mechanics, too much content. Your ambition will push your toward any number of traps. This is okay, as long as you fix it or 'scope down'.

For your first game, distill what you'd like to see into a single mechanic and try to create that one thing. Go with a simple mechanic like 'navigate a story by selecting your actions from a menu' or 'keep an object from dropping'. Think Pong, not Call of Duty. It likely won't be the next big thing, but it will be a prototype, and it will be something you can build on in the future, if you desire. Some specific things you may want to avoid putting in to your first game include multiplayer functions, online scoreboards, or working in 3D.", step_index: 0)
Step.create(project_id: 16, title: "Choose Your Tool", body: "So you have your idea, distilled down into a manageable, simple game. Now what? This is where those tools I mentioned come into play. There are an enormous variety of them, and more are being created all the time. This guide is primarily for those who have absolutely no computer science skills, have never programmed anything in their life and think that it's beyond their ability to do so.

The following tools will help you go from no coding or development experience to having finished your first prototype. Most of them come prepackaged with sample games, and one of the best ways to learn a new game development tool is to muck around with them, take them apart, and see how they work.

I've chosen to focus on these three tools because they've got the least-steep learning curve, they can produce a wide variety of games, and they can produce a prototype fairly quickly (so you can have the satisfaction of having something playable sooner). They're all either free or have free versions, meaning you won't have to drop a couple hundred dollars to figure out if this is something you want to pursue.", step_index: 1)
Step.create(project_id: 16, title: "Get some graphics. Get some sounds.", body: "If you're worried about coming up with art assets, music, sound, and other things that make your game more polished, don't worry. Freesound.org has tons of open-source sounds, OpenGameArt.org can cover your art, and you can search music sites like SoundCloud for open-source music.

If you use anything that was created by someone else, be sure you're using something under Creative Commons, and do credit them in your game. Supporting other artists is what keeps things like this happening.", step_index: 2)
Step.create(project_id: 16, title: "Find an honest person to play your game. Observe this brave individual.", body: "So you've prototyped your first game—now what? Share it! You can learn so much about the design of your game by sitting down someone who hasn't played it—and ideally isn't a relative or significant other—and having them play your game. See what they instinctively do, what they understand and what they don't. Get as many people to play your game as you can, and try to find out what worked and what didn't. Then, iterate on your design as much as possible.

So much of making a game is iteration. Don't be afraid to try things and be wrong. No game is ever perfect, and nothing ever feels completely finished. But don't let this stop you from ever declaring your game is done and moving on to the next one.

You need to iterate on yourself as a game designer as much as you need to iterate your individual games. Don't fuss with a single prototype forever. Don't try to force a design that just isn't working. Don't be afraid to move on.", step_index: 3)
Step.create(project_id: 16, title: "Do all of this again, and you'll probably do it better.", body: "Finish your game, then make another.

The most important thing you can do after making your first game, playtesting it, refining it, and releasing it is to make another one. Getting involved with other game developers is a great way to do this. Our numbers are growing every day. You can get help on specific issues or just gain inspiration from working with your peers. Game Jams are an especially-wonderful aspect of this. Jams are frenzied game development events where you have to make a prototype in a limited amount of time, sometimes with the constraints of a common theme or specific toolset. These Jams are a great way to hone your skills, forge new ones, and work with interesting people who you might not have the chance to otherwise.

Once you've made your first game, the next goal should be to make a good game.", step_index: 5)

# user 12, project 15
# template
# User.create(username: '', email: "", password: '', age: 21)
# Project.create(title: "", description: "", user_id: 4)
# Step.create(project_id: 4, title: "", body: "", step_index: 0)
# Step.create(project_id: 4, title: "", body: "", step_index: 1)

# Project.create(title: "DIY: Book", description: "Create a custom book with these materials.", user_id: 1)
# Project.create(title: "Table Adventures", description: "Dungeons and Dragons table build guide.", user_id: 2)
# Project.create(title: "Walking Coral", description: "COOORAAAAAAAAAAL.", user_id: 3)
# Project.create(title: "Kenta needs kelp!", description: "Ahh! Cave bats!.", user_id: 3)
# Project.create(title: "Gameboy Hoodie", description: "Fits XL Gameboys.", user_id: 4)