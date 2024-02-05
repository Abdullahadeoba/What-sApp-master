
let user = {
	id: 0,
	name: "Kenny",
	number: "+234 41481 90216",
	pic: "images/profile.png"
};

let contactList = [
	{
		id: 0,
		name: "Bright",
		number: "+234 81686 41220",
		pic: "images/profile.png",
		lastSeen: "Apr 29 2018 17:58:02"
	},
	{
		id: 1,
		name: "Bolaji Kehinde",
		number: "+234 41481 90216",
		pic: "images/Chat logo.PNG",
		lastSeen: "Apr 28 2018 22:18:21"
	},
	{
		id: 2,
		name: "Bright",
		number: "+234 41481 90216",
		pic: "images/profile.png",
		lastSeen: "Apr 28 2018 19:23:16"
	},
	{
		id: 3,
		name: "Nid 1 Group chat",
		number: "+234 81686 41220",
		pic: "images/WhatsApp Image 2024-01-19 at 17.10.40_1438f573.jpg",
		lastSeen: "Apr 29 2018 11:16:42"
	},
	{
		id: 4,
		name: "Kenny",
		number: "+234 41481 90216",
		pic: "images/profile.png",
		lastSeen: "Apr 27 2018 17:28:10"
	}
];

let groupList = [
	{
		id: 1,
		name: "Sqi community",
		members: [0, 1, 3, 4],
		pic: "images/sqi.jpg"
	},
	{
		id: 2,
		name: "Web Developers",
		members: [0, 2],
		pic: "images/Chat logo.PNG"
	},
	{
		id: 3,
		name: "notes",
		members: [0],
		pic: "images/Chat logo.PNG"
	}
];

// message status - 0:sent, 1:delivered, 2:read

let messages = [
	{
		id: 0,
		sender: 2,
		body: "where are you, buddy?",
		time: "April 25, 2023 13:21:03",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 1,
		sender: 0,
		body: "at home",
		time: "April 25, 2023 13:22:03",
		status: 2,
		recvId: 2,
		recvIsGroup: false
	},
	{
		id: 2,
		sender: 0,
		body: "how you doin'?",
		time: "April 25, 2023 18:15:23",
		status: 2,
		recvId: 3,
		recvIsGroup: false
	},
	{
		id: 3,
		sender: 3,
		body: "i'm fine...wat abt u?",
		time: "April 25, 2023 21:05:11",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 4,
		sender: 0,
		body: "How are you Kenny ?",
		time: "April 26, 20123 09:17:03",
		status: 1,
		recvId: 3,
		recvIsGroup: false
	},
	{
		id: 5,
		sender: 3,
		body: "anyone online?",
		time: "April 27, 2023 18:20:11",
		status: 0,
		recvId: 1,
		recvIsGroup: true
	},
	{
		id: 6,
		sender: 1,
		body: "Login to my chatting app and connect with new friends",
		time: "April 27, 2023 17:23:01",
		status: 1,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 6,
		sender: 1,
		body: "	With 👉🙏 https://let-chat-app.000webhostapp.com/login.php",
		time: "April 27, 2023 17:23:01",
		status: 1,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 7,
		sender: 0,
		body: "are you going to the party tonight?",
		time: "April 27, 2023 08:11:21",
		status: 2,
		recvId: 2,
		recvIsGroup: false
	},
	{
		id: 8,
		sender: 2,
		body: "no, i've some work to do..are you?",
		time: "April 27, 2023 08:22:12",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 9,
		sender: 0,
		body: "yup",
		time: "April 27, 2023 08:31:23",
		status: 1,
		recvId: 2,
		recvIsGroup: false
	},
	{
		id: 10,
		sender: 0,
		body: "My name is Bolaji Kehinde",
		time: "April 27, 2023 22:41:55",
		status: 2,
		recvId: 4,
		recvIsGroup: false
	},
	{
		id: 11,
		sender: 1,
		body: "yeah, i'm online",
		time: "April 28 2023 17:10:21",
		status: 0,
		recvId: 1,
		recvIsGroup: true
	}
];

let MessageUtils = {
	getByGroupId: (groupId) => {
		return messages.filter(msg => msg.recvIsGroup && msg.recvId === groupId);
	},
	getByContactId: (contactId) => {
		return messages.filter(msg => {
			return !msg.recvIsGroup && ((msg.sender === user.id && msg.recvId === contactId) || (msg.sender === contactId && msg.recvId === user.id));
		});
	},
	getMessages: () => {
		return messages;
	},
	changeStatusById: (options) => {
		messages = messages.map((msg) => {
			if (options.isGroup) {
				if (msg.recvIsGroup && msg.recvId === options.id) msg.status = 2;
			} else {
				if (!msg.recvIsGroup && msg.sender === options.id && msg.recvId === user.id) msg.status = 2;
			}
			return msg;
		});
	},
	addMessage: (msg) => {
		msg.id = messages.length + 1;
		messages.push(msg);
	}
};