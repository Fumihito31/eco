const hotspots = document.querySelectorAll('.hotspot');
const tooltip = document.getElementById('tooltip');
const tooltipName = document.getElementById('tooltip-name');
const tooltipRole = document.getElementById('tooltip-role');

hotspots.forEach(hotspot => {
  hotspot.addEventListener('mouseenter', (e) => {
    const name = hotspot.getAttribute('data-name');
    const role = hotspot.getAttribute('data-role');
    tooltipName.textContent = name;
    tooltipRole.textContent = role;
    tooltip.classList.remove('d-none');
  });

  hotspot.addEventListener('mousemove', (e) => {
    tooltip.style.top = (e.pageY - 70) + 'px';
    tooltip.style.left = (e.pageX + 20) + 'px';
  });

  hotspot.addEventListener('mouseleave', () => {
    tooltip.classList.add('d-none');
  });
});
