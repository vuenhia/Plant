const plants = {
	monstera: {
		title: "Monstera Deliciosa",
		description: `
            <strong>Light:</strong> Place in bright, indirect light, such as an east or west window, or a diffused south window. It can tolerate some direct morning sun, but too much direct afternoon sun can be harmful.<br>
            <strong>Water:</strong> Water when the top of the soil is dry, and allow the soil to dry out between waterings. Water more frequently in brighter light and less frequently in lower light. Yellowing leaves can indicate overwatering or underwatering, or a nutrient deficiency.<br>
            <strong>Temperature:</strong> Keep the plant in a temperature range of 65°F–85°F (18°C–30°C), and avoid letting it drop below 60°F (15°C).<br>
            <strong>Humidity:</strong> Monstera plants prefer higher humidity levels, ideally between 40–60%. You can use a humidifier to increase humidity.<br>
            <strong>Soil:</strong> Use a well-draining, acidic or neutral, peat-based soil.<br>
            <strong>Fertilizer:</strong> Feed your plant a balanced fertilizer, such as 10-10-10 or 20-20-20, a few times a year during the growing season.<br>
            <strong>Pruning:</strong> Prune leaves that are drooping, brown, yellowing, or leggy to encourage new growth.<br>
            <strong>Cleaning:</strong> Regularly clean your plant with a natural solution to remove dust.
        `,
	},
	moneyTree: {
		title: "Money Tree",
		description: `
            <strong>Light:</strong> Prefers bright, indirect sunlight. Avoid direct sun exposure as it can scorch the leaves.<br>
            <strong>Water:</strong> Water thoroughly when the top inch of soil feels dry. Allow excess water to drain out to prevent root rot.<br>
            <strong>Temperature:</strong> Thrives in temperatures between 65°F–75°F (18°C–24°C). Keep it away from cold drafts or extreme heat.<br>
            <strong>Humidity:</strong> Prefers moderate humidity but can tolerate average indoor levels. Consider misting occasionally.<br>
            <strong>Soil:</strong> Use a well-draining potting mix with good aeration.<br>
            <strong>Fertilizer:</strong> Feed with a diluted liquid fertilizer every 4–6 weeks during the growing season.<br>
            <strong>Pruning:</strong> Remove yellowing or damaged leaves to encourage healthy growth.<br>
            <strong>Cleaning:</strong> Gently wipe leaves with a damp cloth to remove dust.
        `,
	},
	chineseMoneyPlant: {
		title: "Chinese Money Plant",
		description: `
            <strong>Light:</strong> Place in bright, indirect light. Avoid direct sunlight to prevent leaf burn.<br>
            <strong>Water:</strong> Water when the top inch of soil feels dry. Do not let the plant sit in water.<br>
            <strong>Temperature:</strong> Keep in a room with temperatures between 60°F–75°F (16°C–24°C).<br>
            <strong>Humidity:</strong> Prefers moderate to high humidity. Use a humidifier or mist regularly in dry climates.<br>
            <strong>Soil:</strong> Use a light, well-draining potting mix.<br>
            <strong>Fertilizer:</strong> Fertilize monthly with a balanced liquid fertilizer during the growing season.<br>
            <strong>Pruning:</strong> Pinch back stems to encourage a bushier appearance.<br>
            <strong>Cleaning:</strong> Dust leaves gently to promote better photosynthesis.
        `,
	},
	snakePlant: {
		title: "Snake Plant",
		description: `
            <strong>Light:</strong> Thrives in bright, indirect light but tolerates low light conditions.<br>
            <strong>Water:</strong> Water sparingly, allowing the soil to dry completely between waterings. Overwatering can cause root rot.<br>
            <strong>Temperature:</strong> Prefers temperatures between 70°F–90°F (21°C–32°C). Avoid exposure to cold drafts.<br>
            <strong>Humidity:</strong> Adaptable to normal indoor humidity levels.<br>
            <strong>Soil:</strong> Use a well-draining cactus or succulent mix.<br>
            <strong>Fertilizer:</strong> Feed once every few months during the growing season with a general-purpose houseplant fertilizer.<br>
            <strong>Pruning:</strong> Remove dead or damaged leaves as needed.<br>
            <strong>Cleaning:</strong> Wipe leaves with a damp cloth to remove dust.
        `,
	},
	prayer: {
		title: "Prayer Plant",
		description: `
            <strong>Light:</strong> Thrives in bright, indirect light. Avoid direct sunlight as it can scorch the leaves.<br>
            <strong>Water:</strong> Keep the soil consistently moist but not soggy. Water with lukewarm water to avoid shocking the roots.<br>
            <strong>Temperature:</strong> Prefers temperatures between 65°F–75°F (18°C–24°C). Avoid cold drafts.<br>
            <strong>Humidity:</strong> Requires high humidity to thrive. Mist regularly or place near a humidifier.<br>
            <strong>Soil:</strong> Use a well-draining, peat-based potting mix.<br>
            <strong>Fertilizer:</strong> Feed every 2–4 weeks with a balanced houseplant fertilizer during the growing season.<br>
            <strong>Pruning:</strong> Remove yellowing or dead leaves to promote healthy growth.<br>
            <strong>Cleaning:</strong> Wipe leaves gently to remove dust and enhance its vibrant patterns.
        `,
	},
	queenMarble: {
		title: "Queen Marble Pothos",
		description: `
            <strong>Light:</strong> Prefers bright, indirect light to maintain its variegation. Can tolerate lower light but may lose some coloration.<br>
            <strong>Water:</strong> Water when the top 1–2 inches of soil are dry. Avoid overwatering to prevent root rot.<br>
            <strong>Temperature:</strong> Ideal temperatures are 65°F–85°F (18°C–29°C). Keep away from cold drafts.<br>
            <strong>Humidity:</strong> Adaptable to normal indoor humidity but appreciates occasional misting.<br>
            <strong>Soil:</strong> Use a well-draining, all-purpose potting mix.<br>
            <strong>Fertilizer:</strong> Feed monthly during the growing season with a balanced houseplant fertilizer.<br>
            <strong>Pruning:</strong> Trim leggy growth to encourage a fuller, bushier appearance.<br>
            <strong>Cleaning:</strong> Dust leaves occasionally to keep the variegation vibrant and photosynthesis efficient.
        `,
	},
	pinkPrincess: {
		title: "Pink Princess Philodendron",
		description: `
            <strong>Light:</strong> Requires bright, indirect light to maintain its stunning pink variegation. Avoid direct sunlight.<br>
            <strong>Water:</strong> Allow the top inch of soil to dry before watering. Ensure the pot has drainage holes to prevent waterlogging.<br>
            <strong>Temperature:</strong> Prefers 65°F–80°F (18°C–27°C). Keep away from temperature extremes and cold drafts.<br>
            <strong>Humidity:</strong> Thrives in high humidity levels of 60% or more. Use a humidifier if necessary.<br>
            <strong>Soil:</strong> Use a well-draining potting mix with peat and perlite.<br>
            <strong>Fertilizer:</strong> Feed monthly with a balanced fertilizer during the growing season.<br>
            <strong>Pruning:</strong> Trim off damaged or yellowing leaves to encourage new growth.<br>
            <strong>Cleaning:</strong> Clean leaves with a soft, damp cloth to enhance their beauty and health.
        `,
	},
	polkadot: {
		title: "Polka Dot Plant",
		description: `
            <strong>Light:</strong> Prefers bright, indirect light. Too much direct sunlight can fade its colorful leaves.<br>
            <strong>Water:</strong> Keep the soil evenly moist but not soggy. Water less frequently in winter.<br>
            <strong>Temperature:</strong> Maintain temperatures between 65°F–75°F (18°C–24°C). Protect from cold drafts.<br>
            <strong>Humidity:</strong> Appreciates high humidity. Mist regularly or place on a pebble tray with water.<br>
            <strong>Soil:</strong> Use a well-draining potting mix enriched with organic matter.<br>
            <strong>Fertilizer:</strong> Feed every 4–6 weeks during the growing season with a diluted liquid fertilizer.<br>
            <strong>Pruning:</strong> Pinch back stems to encourage a bushier growth habit.<br>
            <strong>Cleaning:</strong> Dust leaves gently to maintain their vibrant patterns.
        `,
	},
	burro: {
		title: "Burro's Tail",
		description: `
            <strong>Light:</strong> Loves bright, indirect light. Can handle some direct morning sunlight but avoid harsh afternoon rays.<br>
            <strong>Water:</strong> Allow the soil to dry completely between waterings. Overwatering can lead to root rot.<br>
            <strong>Temperature:</strong> Thrives in temperatures between 65°F–80°F (18°C–27°C). Avoid exposure to frost.<br>
            <strong>Humidity:</strong> Tolerates normal indoor humidity but prefers dry conditions.<br>
            <strong>Soil:</strong> Use a well-draining cactus or succulent mix.<br>
            <strong>Fertilizer:</strong> Fertilize sparingly, once or twice during the growing season, with a cactus-specific fertilizer.<br>
            <strong>Pruning:</strong> Remove dead or damaged stems carefully to maintain its appearance.<br>
            <strong>Cleaning:</strong> Avoid heavy cleaning; gently remove dust if needed without disturbing the fragile leaves.
        `,
	},
};

const modal = document.getElementById("plantModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const closeButton = document.querySelector(".close");

document.querySelectorAll(".plant").forEach((plant) => {
	plant.addEventListener("click", () => {
		const plantId = plant.id;
		const plantData = plants[plantId];
		const text = document.querySelectorAll("h1");
		for (let i = 0; i < text.length; i++) {
			text[i].classList.add("hide");
			if (text[i].id == "modalTitle" || text[i].id == "search") {
				text[i].classList.remove("hide");
			}
		}

		console.log(text);

		if (plantData) {
			document.getElementById("modalTitle").textContent = plantData.title;
			document.getElementById("modalDescription").innerHTML =
				plantData.description;

			modal.style.display = "flex";
		}
	});
});

closeButton.addEventListener("click", () => {
	modal.style.display = "none";
	const text = document.querySelectorAll("h1");
	for (let i = 0; i < text.length; i++) {
		text[i].classList.remove("hide");
	}
});

window.addEventListener("click", (event) => {
	if (event.target == modal) {
		modal.style.display = "none";
		const text = document.querySelectorAll("h1");
		for (let i = 0; i < text.length; i++) {
			text[i].classList.remove("hide");
		}
	}
});
