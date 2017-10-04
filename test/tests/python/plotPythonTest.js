/*
 *  Copyright 2017 TWO SIGMA OPEN SOURCE, LLC
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

var BeakerXPageObject = require('../beakerx.po.js');
var beakerxPO;

describe('Testing of Plot (python)', function () {

  beforeAll(function () {
    beakerxPO = new BeakerXPageObject();
    beakerxPO.runNotebookByUrl('/notebooks/test/notebooks/python/PlotPythonTest.ipynb');
  }, 2);

  afterAll(function () {
    beakerxPO.closeAndHaltNotebook();
  });

  describe('Plot (python)', function () {
    it('Plot has Title and Axes Labels', function () {
      var dtContainer = beakerxPO.runCellToGetDtContainer(0);
      dtContainer.waitForEnabled();
      expect(dtContainer.$('#plotTitle').getText()).toEqual('test title');
      expect(dtContainer.$('#xlabel').getText()).toEqual('x label');
      expect(dtContainer.$('#ylabel').getText()).toEqual('y label');
    });
  });

});