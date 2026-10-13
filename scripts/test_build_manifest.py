import json
import tempfile
import unittest
from pathlib import Path

from build_manifest import build_manifest


class ShareIdTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)

    def write(self, path, **metadata):
        target = self.root / path
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(json.dumps({"lines": [], **metadata}), encoding="utf-8")

    def test_explicit_id_survives_path_and_title_change(self):
        self.write("旧/1話.json", share_id="hiro/work/1", session="capture", title="Old")
        self.assertEqual(build_manifest(self.root)[0]["share_id"], "hiro/work/1")
        (self.root / "旧/1話.json").unlink()
        self.write("新/別名.json", share_id="hiro/work/1", session="capture", title="New")
        self.assertEqual(build_manifest(self.root)[0]["share_id"], "hiro/work/1")

    def test_session_is_default(self):
        self.write("第8話.json", session="hiro_08")
        self.assertEqual(build_manifest(self.root)[0]["share_id"], "hiro_08")

    def test_fractional_episode_session_is_supported(self):
        self.write("第10.5話.json", session="hiro_10.5")
        self.assertEqual(build_manifest(self.root)[0]["share_id"], "hiro_10.5")

    def test_fallback_is_ascii_and_deterministic(self):
        self.write("日本語.json")
        first = build_manifest(self.root)[0]["share_id"]
        self.assertRegex(first, r"^commu-[a-f0-9]{16}$")
        self.assertEqual(build_manifest(self.root)[0]["share_id"], first)

    def test_duplicates_are_rejected(self):
        self.write("1.json", session="hiro_01")
        self.write("2.json", share_id="hiro_01")
        with self.assertRaisesRegex(ValueError, "Duplicate share_id"):
            build_manifest(self.root)

    def test_invalid_ids_are_rejected(self):
        for value in ("日本語", "a b", "/leading", "trailing/", "a//b", "a#b", "a%20b", "", None, 0, 123):
            with self.subTest(value=value):
                self.write("1.json", share_id=value)
                with self.assertRaisesRegex(ValueError, "ASCII URL identifier"):
                    build_manifest(self.root)


if __name__ == "__main__":
    unittest.main()
