import React from "react";
import Notifications from "./Notifications";
import { mount } from "enzyme";

describe("Notifications widget", () => {
    it(">>> Should render the component", () => {
        const wrapper = mount(<Notifications id="notification-widget"/>);
        expect(wrapper.find("#notification-widget").exists()).toBeTruthy();
    });

});