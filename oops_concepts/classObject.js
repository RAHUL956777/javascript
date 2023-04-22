class RailwayForm {
  submit() {
    console.log(
      this.name + " Your From Submitted for Train no : " + this.trainNo
    );
  }
  cancel() {
    console.log(
      this.name + " Your Form is Cancled for Train no : " + this.trainNo
    );
  }
  fill(givenName, trainNo) {
    this.name = givenName;
    this.trainNo = trainNo;
  }
}

let rahulFrom = new RailwayForm();
rahulFrom.fill("Rahul", 87564);

let rohanFrom = new RailwayForm();
rohanFrom.fill("Rohan", 14698);

let suahantaFrom = new RailwayForm();
suahantaFrom.fill("Suahanta", 78994);

rahulFrom.submit();
rohanFrom.submit();
suahantaFrom.cancel();

