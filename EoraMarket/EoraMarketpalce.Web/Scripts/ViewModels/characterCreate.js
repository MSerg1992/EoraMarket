﻿function characterViewModel() {
    var self = this;

    self.availableAvatars = ko.observableArray([]);
    self.selectedRaceId = ko.observable();
    self.selectedImageId = ko.observable("");

    self.loadAvatarsForRace = function (raceId) {
        $.get("/Character/GetAvatarsByRace", { raceId: raceId }).success(function (result) {
            self.availableAvatars([]);
            $.each(result, function (index, item) {
                item.ImageUrl = item.ImageUrl.replace("~", "");
                self.availableAvatars.push(item);
            })
            self.selectedImageId("");
        });
    };

    self.selectAvatar = function (image) {
        self.selectedImageId(image.Id);
    };

    self.init = function () {
        self.availableAvatars([]);
        self.selectedRaceId("");
        self.selectedImageId("");

        var selectRaceId = $("#raceSelect").val();
        self.loadAvatarsForRace(selectRaceId);
    };

    self.selectedRaceId.subscribe(function (value) {
        self.loadAvatarsForRace(value);
    });
}

$(document).ready(function () {
    var vm = new characterViewModel();
    vm.init();
    ko.applyBindings(vm);
});