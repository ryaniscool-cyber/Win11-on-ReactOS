document.getElementById("status").textContent = "Booting ReactOS...";

const emulator = new V86Starter({
  wasm_path: "https://copy.sh/v86/build/v86.wasm",
  memory_size: 512 * 1024 * 1024,
  vga_memory_size: 8 * 1024 * 1024,
  screen_container: document.getElementById("screen"),
  bios: {
    url: "https://copy.sh/v86/bios/seabios.bin"
  },
  vga_bios: {
    url: "https://copy.sh/v86/bios/vgabios.bin"
  },
  cdrom: {
    url: "https://archive.org/download/ReactOS-0.4.13/ReactOS-0.4.13.iso"
  },
  autostart: true
});
