class IdGenerator {
    static s4() {
        return ((((1+Math.random())*0x10000)|0).toString(16).substr(1));
    }

    static generateGuid() {
        let guid = (this.s4() + this.s4() + "-" + this.s4() + "-4" + this.s4().substr(0,3) + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4() + this.s4()).toLowerCase();
        return guid;
    }

}

export default IdGenerator;