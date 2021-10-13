class RegionProjection {
	project(events) {
		const projection = events.reduce(applyEventToRegion, { visitas: {}, fallecimientos: {}, medicamentos: {} });
		return projection;

		function applyEventToRegion(region, event) {
			const { type } = event;
			const eventMapper = {
				['fallecimiento']: addFallecimiento,
				['visita']: addVisita,
				['medicamento']: addMedicamento
			}
			return eventMapper[type](region, event);
		}

		function addFallecimiento(region, event) {
			if (region.fallecimientos[event.payload.motivo]) {
				region.fallecimientos[event.payload.motivo].qty++;
			} else {
				region.fallecimientos[event.payload.motivo] = {
					qty: 1,
				};
			}
			return region;
		}

		function addVisita(region, event) {
			if (region.visitas[event.payload.motivo]) {
				region.visitas[event.payload.motivo].qty++;
			} else {
				region.visitas[event.payload.motivo] = {
					qty: 1,
				};
			}
			return region;
		}

		function addMedicamento(region, event) {
			if (region.medicamentos[event.payload.medicamento]) {
				region.medicamentos[event.payload.medicamento].qty++;
			} else {
				region.medicamentos[event.payload.medicamento] = {
					qty: 1,
				};
			}
			return region;
		}
	}
}

module.exports = RegionProjection;
