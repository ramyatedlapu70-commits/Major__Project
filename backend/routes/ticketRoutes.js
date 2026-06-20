const express = require("express");
const router = express.Router();

const Ticket = require("../models/Ticket");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

// Create Ticket
router.post("/", authMiddleware, upload.single("image"), async (req, res) => {
  try {
    const { title, description, category, priority } = req.body;

    const ticket = new Ticket({
      title,
      description,
      category,
      priority,
      image:req.file ? req.file.path :
      "",
      createdBy: req.user.id,
    });

    await ticket.save();

    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
router.get("/", authMiddleware, async (req, res) => {
  try {
    const tickets = await Ticket.find();

    res.json(tickets);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
// Update ticket status
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;

    const updatedTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(updatedTicket);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);

    res.json({
      message: "Ticket deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
router.put("/:id/upvote", authMiddleware, async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({
        message: "Ticket not found",
      });
    }

    ticket.upvotes += 1;

    await ticket.save();

    res.json(ticket);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
module.exports = router;