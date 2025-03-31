<template>
  <div class="container-fluid py-4 px-3">
    <h1>MAX Performance</h1>
    <p class="lead">A performance calculator for the Boeing 737 MAX 8 in Infinite Flight</p>

    <div class="row row-cols-2 row-cols-sm-3 input-grid">
      <div class="col mb-3">
        <label for="load" class="form-label">Load</label>
        <div class="input-group">
          <input id="load" type="text" class="form-control" placeholder="e.g. 53" />
          <span class="input-group-text">%</span>
        </div>
      </div>

      <div class="col mb-3">
        <label for="runway-heading" class="form-label">Runway</label>
        <div class="input-group">
          <input id="runway-heading" type="text" class="form-control" placeholder="Heading" />
          <span class="input-group-text">&deg;</span>
        </div>
      </div>

      <div class="col-12 mb-3">
        <div class="card p-3">
          <h4>Power</h4>
          <div class="row row-cols-auto">
            <div class="col mb-3">
              <label for="takeoff-derate" class="form-label">Takeoff Derate</label>
              <select id="takeoff-derate" class="form-select">
                <option value="1">TO</option>
                <option value="2">TO1</option>
                <option value="3">TO2</option>
              </select>
            </div>

            <div class="col mb-3">
              <label for="assumed-temp-derate" class="form-label">Assumed Temp Derate</label>
              <div class="input-group">
                <input id="temperature" type="text" class="form-control" placeholder="e.g. 3" />
                <span class="input-group-text">% N1</span>
              </div>
            </div>
            <div class="col mb-3">
              <label for="climb-derate" class="form-label">Cimb Derate</label>
              <select id="climb-derate" class="form-select">
                <option value="1">CLB</option>
                <option value="2">CLB1</option>
                <option value="3">CLB2</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 mb-3">
        <div class="card p-3">
          <h4>Weather</h4>
          <div class="row row-cols-auto">
            <div class="col mb-3">
              <label class="form-label">Wind</label>
              <div class="input-group">
                <input
                  id="steady-wind-speed"
                  type="text"
                  class="form-control"
                  placeholder="Speed"
                />
                <span class="input-group-text">@</span>
                <input
                  id="wind-direction"
                  type="text"
                  class="form-control"
                  placeholder="Direction"
                />
                <span class="input-group-text">Gusting</span>
                <input id="gust-wind-speed" type="text" class="form-control" placeholder="Speed" />
              </div>
            </div>
          </div>
          <div class="col mb-3">
            <label for="temperature" class="form-label">OAT</label>
            <div class="input-group">
              <input id="temperature" type="text" class="form-control" placeholder="Temp" />
              <span class="input-group-text">&deg;C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
