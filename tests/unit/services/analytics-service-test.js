
import { moduleFor, test } from 'ember-qunit';


moduleFor('service:analytics-service', 'Unit | Service | analytics service', {

});

test('can handle ga not being defined', function(assert) {
    let service = this.subject();
    service.logEvent("action", "label");
    assert.expect(0);
});

/*  I can't get window.ga to be set in the service
test('can log event', function(assert) {

    //assert.expect(1);
    let gaStub =  function(a, event, category, action, label){
        assert.equal(a, "send");
        assert.equal(event, "event");
        assert.equal(category, 'Dev Tools');
        assert.equal(action, "action");
        assert.equal(label, "label");

    };

    let service = this.subject();
    service.set("ga",  gaStub);
    service.logEvent("action", "label");


});
*/
