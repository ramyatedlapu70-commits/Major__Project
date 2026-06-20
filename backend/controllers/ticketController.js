const Ticket = require("../models/Ticket");

// Create Ticket
const createTicket = async (req, res) => {{
      try {
     const { title, description, category, priority } = req.body;
    const { status } = req.body;

    const ticket = await Ticket.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.json(ticket);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};
  try {
   
    const ticket = await Ticket.create({
  title,
  description,
  category,
  priority,
  image: req.file ? req.file.path : "",
  createdBy: req.user._id,
});

    res.status(201).json({
      message: "Ticket Created Successfully",
      ticket,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const updateTicketStatus = async (req, res) => { 
};
// Get All Tickets
const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().populate(
      "createdBy",
      "username email"
    );

    res.json(tickets);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Ticket By ID
const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id).populate(
      "createdBy",
      "username email"
    );

    if (!ticket) {
      return res.status(404).json({
        message: "Ticket not found",
      });
    }

    res.json(ticket);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Update Ticket Status (Admin Only)
const updateTicketStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({
        message: "Ticket not found",
      });
    }

    ticket.status = status;

    await ticket.save();

    res.json({
      message: "Ticket status updated successfully",
      ticket,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Upvote Ticket
const upvoteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({
        message: "Ticket not found",
      });
    }

    // Check if user already upvoted
    if (ticket.upvotedBy.includes(req.user._id)) {
      return res.status(400).json({
        message: "You already upvoted this ticket",
      });
    }

    // Add user to upvotedBy array
    ticket.upvotedBy.push(req.user._id);

    // Increase upvote count
    ticket.upvotes += 1;

    await ticket.save();

    res.json({
      message: "Ticket upvoted successfully",
      ticket,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createTicket,
  getTickets,
  getTicketById,
  updateTicketStatus,
  upvoteTicket,
} = require("../controllers/ticketController");