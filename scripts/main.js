const input = document.getElementById("file-input");
const status = document.getElementById("status");

input.addEventListener("change", function () {
  const file = this.files[0];
  if (!file) {
    status.textContent = "No file selected.";
    return;
  }

  status.textContent = `Loading ${file.name}...`;

  const isISO = file.name.endsWith(".iso");

  const emulator = new V86Starter({
    wasm_path: "https://copy.sh/v86/build/v86.wasm",
    memory_size: 512 * 1024 * 1024,
    vga_memory_size: 8 * 1024 * 1024,
    screen_container: document.getElementById("screen"),
    bios: {
      url: "https://copy.sh/v86/bios/seabios.bin",
    },
    vga_bios: {
      url: "https://copy.sh/v86/bios/vgabios.bin",
    },
    [isISO ? "cdrom" : "hda"]: {
      buffer: file,
    },
    autostart: true,
  });

  emulator.add_listener("emulator-ready", () => {
    status.textContent = "✅ Emulator started!";
  });

  emulator.add_listener("emulator-error", (e) => {
    status.textContent = "❌ Emulator error: " + e.message;
  });
});
