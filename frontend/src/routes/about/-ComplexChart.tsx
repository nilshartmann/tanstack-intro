export default function ComplexChart() {
  function handleCanvas(canvas: HTMLCanvasElement | null) {
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d")!;

    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = [12, 19, 3, 5, 2, 3];

    const chartWidth = 400;
    const chartHeight = 300;
    const padding = 40;
    const barWidth = 40;
    const barSpacing = 20;
    const maxDataValue = Math.max(...data);

    function drawBarChart() {
      ctx.beginPath();
      ctx.moveTo(padding, padding);
      ctx.lineTo(padding, chartHeight + padding);
      ctx.lineTo(chartWidth + padding, chartHeight + padding);
      ctx.stroke();

      for (let i = 0; i < data.length; i++) {
        const barHeight = (data[i] / maxDataValue) * chartHeight;

        ctx.fillStyle = "rgba(75, 192, 192, 0.8)";
        ctx.fillRect(
          padding + i * (barWidth + barSpacing),
          chartHeight + padding - barHeight,
          barWidth,
          barHeight,
        );

        ctx.fillStyle = "#000";
        ctx.fillText(
          labels[i],
          padding + i * (barWidth + barSpacing) + barWidth / 4,
          chartHeight + padding + 20,
        );
      }
    }

    drawBarChart();
  }

  return <canvas width="500" height="400" ref={handleCanvas}></canvas>;
}
