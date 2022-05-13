class ImageLoader extends EventTarget {
    constructor(options) {
        super();
        this.loadImg = options;

        //В этом хеше будут храниться загруженные картинки
        this.images = {};

        //Объявляем начальные переменные
        this.totalCount = this.loadImg.length;
        this.successCount = this.failureCount = this.loadedCount = 0;
        this.successSize = this.failureSize = this.loadedSize = this.totalSize = 0;
        this.progress = 0;

    }
    start() {
        //Создаем объекты Image,
        //добавляем слушатели
        this.loadImg.forEach(obj => {
            this.totalSize += obj.size;
            var image = new Image();
            image.onload = this.onComplete.bind(this, obj);
            image.onerror = this.onFailure.bind(this, obj);
            image.onabort = this.onFailure.bind(this, obj);
            image.src = obj.url;
            this.images[obj.key] = image;
        });
        this.dispatchEvent(new CustomEvent("start"));
    }
    //Метод возвращает объект Image по ключу
    getImage(key) {
        return this.images[key];
    }
    //изображение загрузилось
    onComplete(image) {
        //Увеличиваем счетчики
        this.successCount++;
        this.successSize += image.size;

        this.onImageEvent(image);
    }
    //изображение не загрузилось
    onFailure(image) {
        //Увеличиваем счетчики
        this.failureCount++;
        this.failureSize += image.size;
        //Вместо незагруженного изображения подставляем пустое
        this.images[image.key] = new Image();
        this.onImageEvent(image);
    }
    onImageEvent(image) {
        //Увеличиваем счетчики
        this.loadedCount++;
        this.loadedSize += image.size;

        //Высчитываем общий прогресс
        var progress = Math.round(this.loadedSize * 100 / this.totalSize);
        if (this.progress != progress) {
            this.progress = progress;
            //Вызываем событие update
            this.dispatchEvent(new CustomEvent("update"));
        }
        //Если все изображения загружены
        if (this.totalCount == this.loadedCount) {
            this.dispatchEvent(new CustomEvent("complete"));
        }

    }
}