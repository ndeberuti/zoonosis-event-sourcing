class RegionProjection {
	async project(events) {
		const projection = events.reduce(applyEventToRegion, { items: {} });
		return projection;

		function applyEventToRegion(region, event) {
			const { type } = event;
			type === 'add' ? addEvent(region, event) : removeEvent(region, event);
			return cart;
		}

		function addEvent(region, event) {
			// if (cart.items[event.item]) {
			// 	cart.items[event.item].qty++;
			// } else {
			// 	cart.items[event.item] = {
			// 		qty: 1,
			// 	};
			// }
		}

		function removeEvent(region, event) {
			// if (cart.items?.[event.item].qty == 1) {
			// 	delete cart.items[event.item];
			// } else if (cart.items[event.item].qty > 1) {
			// 	cart.items[event.item].qty--;
			// }
		}
	}
}

module.exports = Projection;
