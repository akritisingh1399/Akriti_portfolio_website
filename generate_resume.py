import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def generate_resume(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Custom styles
    primary_color = colors.HexColor("#0f172a")     # Deep navy / charcoal
    accent_color = colors.HexColor("#4338ca")      # Deep indigo
    body_color = colors.HexColor("#334155")        # Slate 700
    subtext_color = colors.HexColor("#64748b")     # Slate 500

    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=primary_color,
        alignment=TA_CENTER
    )

    title_style = ParagraphStyle(
        'TitleStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=accent_color,
        alignment=TA_CENTER
    )

    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=body_color,
        alignment=TA_CENTER
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=accent_color,
        spaceBefore=8,
        spaceAfter=3
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=body_color
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=body_color,
        leftIndent=12,
        firstLineIndent=-8
    )

    item_title_style = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=primary_color
    )

    item_right_style = ParagraphStyle(
        'ItemRight',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=12,
        textColor=subtext_color,
        alignment=TA_RIGHT
    )

    item_subtitle_style = ParagraphStyle(
        'ItemSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11,
        textColor=subtext_color
    )

    elements = []

    # Header
    elements.append(Paragraph("AKRITI SINGH", name_style))
    elements.append(Paragraph("Data Analyst & MERN Stack Developer", title_style))
    elements.append(Spacer(1, 3))
    elements.append(Paragraph(
        "Email: singha65241@gmail.com &nbsp;|&nbsp; Phone: +91-9651900852 &nbsp;|&nbsp; Location: Bhilai, Chhattisgarh, India<br/>"
        "LinkedIn: linkedin.com/in/akriti-singh &nbsp;|&nbsp; GitHub: github.com/akritisingh",
        contact_style
    ))
    elements.append(Spacer(1, 4))
    elements.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor("#cbd5e1"), spaceBefore=3, spaceAfter=6))

    # Professional Summary
    elements.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    elements.append(Paragraph(
        "Computer Science Engineering student specializing in AI and Machine Learning, with skills in data analytics and full-stack web development. I build data-driven solutions and interactive web applications using JavaScript, Python, SQL, Excel, Power BI, React, Node.js, Express.js, and MongoDB. My interests include data visualization, machine learning, analytics, and scalable software development.",
        body_style
    ))
    elements.append(Spacer(1, 4))

    # Technical Skills
    elements.append(Paragraph("TECHNICAL SKILLS", section_heading))
    skills_data = [
        [Paragraph("<b>Programming Languages:</b>", body_style), Paragraph("JavaScript, Python, C, Java", body_style)],
        [Paragraph("<b>Data Analytics & BI:</b>", body_style), Paragraph("Microsoft Excel, SQL, Power BI, Data Visualization", body_style)],
        [Paragraph("<b>Data Science & ML:</b>", body_style), Paragraph("NumPy, Pandas, Data Cleaning, Exploratory Data Analysis (EDA)", body_style)],
        [Paragraph("<b>Full Stack & Web:</b>", body_style), Paragraph("React.js, Node.js, Express.js, HTML5, CSS3, REST APIs, WebSockets / Socket.IO", body_style)],
        [Paragraph("<b>Databases:</b>", body_style), Paragraph("MongoDB, MySQL", body_style)],
        [Paragraph("<b>Core CS & Developer Tools:</b>", body_style), Paragraph("Data Structures & Algorithms (150+ problems solved), Git, GitHub, VS Code", body_style)],
    ]
    t = Table(skills_data, colWidths=[150, 390])
    t.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 4))

    # Featured Projects
    elements.append(Paragraph("FEATURED PROJECTS", section_heading))

    # Project 1
    p1_header = [
        [Paragraph("<b>Indic Bias Detection System</b> | <i>MERN Stack, Python, NLP, Machine Learning</i>", item_title_style),
         Paragraph("Academic / Research Project", item_right_style)]
    ]
    t1 = Table(p1_header, colWidths=[400, 140])
    t1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1)]))
    elements.append(t1)
    elements.append(Paragraph("A full-stack platform designed to analyze Indic-language content and identify potential stereotypical bias using machine-learning techniques.", body_style))
    elements.append(Paragraph("&bull; Implemented text preprocessing and NLP classification workflows for Indic dialect and textual nuances.", bullet_style))
    elements.append(Paragraph("&bull; Developed responsive MERN-based web application with interactive dashboard and prediction-result visualizations.", bullet_style))
    elements.append(Spacer(1, 4))

    # Project 2
    p2_header = [
        [Paragraph("<b>Smart Traffic Management System (STMS)</b> | <i>React.js, Node.js, Express.js, MongoDB, Socket.IO, ML</i>", item_title_style),
         Paragraph("Full-Stack Analytics", item_right_style)]
    ]
    t2 = Table(p2_header, colWidths=[400, 140])
    t2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1)]))
    elements.append(t2)
    elements.append(Paragraph("A data-driven traffic monitoring platform designed to visualize urban traffic conditions and support traffic-flow analysis.", body_style))
    elements.append(Paragraph("&bull; Built real-time dashboard updates with Socket.IO and color-coded congestion levels (Low, Medium, High).", bullet_style))
    elements.append(Paragraph("&bull; Integrated interactive charts, traffic-load prediction, congestion forecasting features, alerts, scenario simulation, and CSV export.", bullet_style))
    elements.append(Spacer(1, 4))

    # Project 3
    p3_header = [
        [Paragraph("<b>E-commerce Sales & Customer Analytics</b> | <i>Excel, SQL, Power BI, Data Visualization</i>", item_title_style),
         Paragraph("Data Analytics", item_right_style)]
    ]
    t3 = Table(p3_header, colWidths=[400, 140])
    t3.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1)]))
    elements.append(t3)
    elements.append(Paragraph("An analytics project focused on understanding e-commerce sales performance, customer behavior, and purchasing patterns.", body_style))
    elements.append(Paragraph("&bull; Executed end-to-end data cleaning, EDA, revenue and average order value (AOV) analysis using SQL joins and aggregations.", bullet_style))
    elements.append(Paragraph("&bull; Conducted customer segmentation by purchase frequency and spending; created interactive Power BI dashboards delivering product and retention insights.", bullet_style))
    elements.append(Spacer(1, 4))

    # Education
    elements.append(Paragraph("EDUCATION", section_heading))
    edu_1 = [
        [Paragraph("<b>Rungta College of Engineering and Technology, Bhilai</b>", item_title_style),
         Paragraph("2023 &ndash; 2027", item_right_style)],
        [Paragraph("B.Tech in Computer Science Engineering (AI & ML)", item_subtitle_style),
         Paragraph("Bhilai, CG", item_right_style)]
    ]
    te1 = Table(edu_1, colWidths=[400, 140])
    te1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 1)]))
    elements.append(te1)
    elements.append(Spacer(1, 3))

    edu_2 = [
        [Paragraph("<b>Pavanagar Mahavir Inter College, Fazilnagar, Kushinagar</b>", item_title_style),
         Paragraph("", item_right_style)],
        [Paragraph("Class XII", item_subtitle_style),
         Paragraph("UP, India", item_right_style)]
    ]
    te2 = Table(edu_2, colWidths=[400, 140])
    te2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 1)]))
    elements.append(te2)
    elements.append(Spacer(1, 4))

    # Certifications & Achievements
    elements.append(Paragraph("CERTIFICATIONS & ACHIEVEMENTS", section_heading))
    cert_data = [
        [Paragraph("&bull; <b>MERN Full Stack Developer</b> &mdash; Coding Spoon", body_style), Paragraph("January 2026", item_right_style)],
        [Paragraph("&bull; <b>Data Science with Python</b> &mdash; LetsUpgrade", body_style), Paragraph("June 2025", item_right_style)],
        [Paragraph("&bull; <b>Introduction to MS Excel</b> &mdash; Simplilearn SkillUp, powered by Microsoft", body_style), Paragraph("July 2025", item_right_style)],
        [Paragraph("&bull; <b>Problem Solving:</b> Solved <b>150+ Data Structures & Algorithms problems</b> across online platforms.", body_style), Paragraph("Consistent Practice", item_right_style)]
    ]
    tc = Table(cert_data, colWidths=[420, 120])
    tc.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 1)]))
    elements.append(tc)

    doc.build(elements)
    print(f"Generated {output_path} successfully!")

if __name__ == '__main__':
    target = os.path.abspath('public/Akriti_Singh_Resume.pdf')
    generate_resume(target)
