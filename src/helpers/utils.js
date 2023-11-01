/** @format */

/**
 * @param {number|string} page
 * @param {number} limit
 * @param {{count: number; rows: Record<string, any>[]}} records
 */
function pagination(page, limit, records) {
	const { count: total, rows } = records;
	const result = {
		total,
		rows,
	};
	result.totalPages = Math.ceil(total / limit);
	result.next =
		+page >= result.totalPages || !result.totalPages ? null : Number(page) + 1;
	result.hasNext = !!result.next;
	result.prev = +page === 1 ? null : Number(page) - 1;
	result.hasPrev = !!result.prev;
	result.perPage = +limit;
	result.current = +page;
	return result;
}

/**
 *
 * @param {number} page
 * @param {number} size
 * @returns {limit: number, offset: number}
 */
const getPagination = (page = 1, size = 10) => {
	const limit = +size;
	const offset = (page - 1) * limit;

	return { limit, offset };
};

module.exports = {
	pagination,
	getPagination,
};
