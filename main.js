const status = document.getElementById("status");
status.textContent = "Booting ReactOS (loading emulator)...";

// Log messages to screen
function log(msg) {
  const div = document.createElement("div");
  div.textContent = msg;
  status.appendChild(div);
}

const emulator = new V86Starter({
  wasm_path: "https://copy.sh/v86/build/v86.wasm",
  memory_size: 256 * 1024 * 1024,
  vga_memory_size: 8 * 1024 * 1024,
  screen_container: document.getElementById("screen"),
  bios: {
    url: "https://copy.sh/v86/bios/seabios.bin"
  },
  vga_bios: {
    url: "https://copy.sh/v86/bios/vgabios.bin"
  },
  hda: {
    url: "https://copy.sh/v86/images/reactos.img"
  },
  autostart: true
});

emulator.add_listener("download-progress", (e) => {
  log(`Downloading: ${e.file_name} (${e.loaded}/${e.total} bytes)`);
});

emulator.add_listener("emulator-ready", () => {
  log("✅ Emulator ready!");
});

emulator.add_listener("emulator-error", (e) => {
  log("❌ Emulator error: " + e.message);
});
