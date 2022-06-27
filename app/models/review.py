from .db import db

class Review(db.Model):
  __tablename__ = 'reviews'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  spot_id = db.Column(db.Integer, db.ForeignKey("spots.id"), nullable=False)
  rating = db.Column(db.Float, nullable=False)
  review = db.Column(db.String(1000), nullable=False)

  # Relationships
  users = db.relationship("User", back_populates="reviews")
  spots = db.relationship("Spot", back_populates="reviews")