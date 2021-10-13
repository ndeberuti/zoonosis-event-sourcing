// class PetProjection {
// 	async project(events) {
// 		const projection = events.reduce(applyEventToPet, { items: {} });
// 		return projection;

// 		function applyEventToPet(pet, event) {
// 			const { type } = event;
// 			type === 'add' ? addEvent(pet, event) : removeEvent(pet, event);
// 			return cart;
// 		}

// 		function addEvent(pet, event) {
// 			if (cart.items[event.item]) {
// 				cart.items[event.item].qty++;
// 			} else {
// 				cart.items[event.item] = {
// 					qty: 1,
// 				};
// 			}
// 		}

// 		function removeEvent(pet, event) {
// 			if (cart.items?.[event.item].qty == 1) {
// 				delete cart.items[event.item];
// 			} else if (cart.items[event.item].qty > 1) {
// 				cart.items[event.item].qty--;
// 			}
// 		}
// 	}
// }

// module.exports = Projection;
