describe('Wombat', function() {
    beforeEach(function() {
        this.wombat = new Wombat();
    });

    afterEach(function() {
        delete this.wombat;
    });

    it('should create a wombat with defaults', function() {
        expect(this.wombat).property('name', 'Wally');
    });

    it('should name itself if name passed in options wombat', function() {
        this.wombat = new Wombat({ name: 'Matt' });
        expect(this.wombat).property('name', 'Matt');
    });

    describe('#eat', function() {
        it('wombat should throw if no food passed', function() {
            expect(this.wombat.eat).to.throw('D:');
        });

        it('wombat should return noms if food passed', function() {
            expect(this.wombat.eat('apple')).to.eql('nom nom');
        });
    });

});
