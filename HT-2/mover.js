let mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращает направление, введенное пользователем.
     */
    getDirection() {
        const availableDirections = [1,2,3,4,6,7,8,9];
        while (true) {
            let direction = parseInt(prompt('Введите число (1, 2, 3, 4, 6, 7, 8 или 9), куда вы хотите переместиться. Отмена для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9.');
                continue;
            }
            return direction;
        }
    },

    getNextPosition(direction) {
        /**
         * Отдает следующую точку в котрой будет находиться пользователь после движения.
         * @param {int} direction Направление движения игрока.
         * @param {{x: int, y: int}} Следующая позиция игрока.
         */
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        /** 
         * Добавил решение 2 задания:
         * 1) возможность ходить по диагонали
         * 2) невозможность совершить шаг в стенку
         */
        switch (direction) {
            case 1:
                if (player.x > 0 && player.y < config.rowsCount -1) {
                    nextPosition.y++;
                    nextPosition.x--;
                };
                break;
            case 2:
                if (player.y < config.rowsCount - 1) {
                    nextPosition.y++;
                };
                break;
            case 3:
                if (player.x < config.closCount - 1 && player.y < config.rowsCount - 1) {
                    nextPosition.y++;
                    nextPosition.x++;
                };
                break;
            case 4:
                if (player.x > 0) {
                    nextPosition.x--;
                };
                break;
            case 6:
                if (player.x < config.colsCount - 1) {
                    nextPosition.x++;
                };
                break;
            case 7:
                if (player.x > 0 && player.y > 0) {
                    nextPosition.y--;
                    nextPosition.x--;
                };
                break;
            case 8:
                if (player.y > 0) {
                    nextPosition.y--;
                };
                break;
            case 9:
                if (player.x < config.colsCount - 1 && player.y > 0) {
                    nextPosition.y--;
                    nextPosition.x++;
                };
                break;
        }
        return nextPosition;
    }
};
