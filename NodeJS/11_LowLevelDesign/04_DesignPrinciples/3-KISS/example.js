const processOrder = (order) => {
    if (order.isValid()) {
        if (order.getItems.size() > 0) {
            for (item of order.getItems()) {
                if (item.isAvailable()) {
                    item.process()
                } else {
                    item.removeFromCart()
                }
            }
            order.confirm()
        } else {
            order.cancel()
        }
    }
}

/* Problems: 
- Too many dependent executions
- Too many nested ifs
- Difficult to read, maintain
- Code drifting towards right
*/

// Approach: Fail Fast
// KISS: Keep It Simple Stupid

const processOrderKiss = (order) => {
    if (!order.isValid()) return;

    if (order.getItems.size() == 0) {
        order.cancel();
        return;
    }

    processItems(order.getItems());

    order.confirm()
}

const processItems = (items) => {
    for (const item of items) {
        item.isAvailable() ? item.process : item.removeFromCart();
    }
}