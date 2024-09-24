// pagination.js - Your pagination utility
const paginate = async (model, page = 1, limit = 12, options = {}) => {
    const offset = (page - 1) * limit;

    // Merge any additional options (e.g., where, order) with pagination params
    const queryOptions = {
        limit: limit,
        offset: offset,
        ...options, // Merges additional options like filters, sorting, etc.
    };

    try {
        const { count, rows } = await model.findAndCountAll(queryOptions);

        const totalPages = Math.ceil(count / limit);

        return {
            data: rows,
            meta: {
                totalItems: count,
                currentPage: page,
                totalPages: totalPages,
                itemsPerPage: limit,
            },
        };
    } catch (error) {
        throw new Error("Error fetching paginated data: " + error.message);
    }
};

module.exports = paginate;
