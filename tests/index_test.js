require('../resources/js/modules/share-widget');
describe('modules/share-widget', function() {
    var module;

    beforeEach(function() {
        module = Box.Application.getModuleForTest('share-widget', {});
    });

    afterEach(function() {
        module = null;
    });

    describe('share-widget module can be tested', function() {
        it('should be an object', function() {
            module.should.be.an('object');
        });

        it('should return 1 when you doit()', function() {
            module.doit().should.equal(1);
        });

        it('should console.log stuff onclick', function() {
            module.onclick();
        });
    });

    describe('sinon test', function() {
        it('should only be called as many times as it has', function() {
            var callback = sinon.spy();
            callback();
            callback.calledOnce.should.equal(true);
            callback();
            callback.calledOnce.should.equal(false);
        });
    });

});
