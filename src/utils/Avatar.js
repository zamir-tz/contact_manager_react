class Avatar {
    static async saveAvatar(input, id) {
        if (input) {
            localStorage.setItem('avatar-'+ id, await this.toBase64(input));
        }
    };

    static toBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
            const img = new Image();
            img.src = e.target.result;
            img.onload = () => {
                const elem = document.createElement('canvas');
                elem.height = elem.width * (img.height/img.width);
                const ctx = elem.getContext('2d');
                ctx.drawImage(img, 0, 0, elem.width, elem.height);
                resolve(ctx.canvas.toDataURL());
            }

            reader.onerror = error => reject(error);
        }
        
    });


}

export default Avatar;