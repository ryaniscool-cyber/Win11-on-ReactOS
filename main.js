document.getElementById("status").textContent = "Booting ReactOS...";

const emulator = new V86Starter({
  wasm_path: "https://copy.sh/v86/build/v86.wasm",
  memory_size: 256 * 1024 * 1024, // 256MB RAM
  vga_memory_size: 8 * 1024 * 1024,
  screen_container: document.getElementById("screen"),
  bios: {
    url: "https://copy.sh/v86/bios/seabios.bin"
  },
  vga_bios: {
    url: "https://copy.sh/v86/bios/vgabios.bin"
  },
  hda: {
    url: "https://copy.sh/v86/images/reactos.img" // ✅ Pre-installed working image
  },
  autostart: true
});
