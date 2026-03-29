import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    id: 1,
    question: "מה רמת הניסיון שלך בתחום הריסים?",
    options: [
      { label: "אין לי ניסיון בכלל", value: "beginner" },
      { label: "ניסיתי קצת לבד / קורס בסיסי", value: "intermediate" },
      { label: "אני עובדת בתחום ורוצה להשתפר", value: "advanced" }
    ]
  },
  {
    id: 2,
    question: "מהי המטרה העיקרית שלך?",
    options: [
      { label: "לבנות עסק עצמאי מהבית", value: "business" },
      { label: "להוסיף שירות חדש לעסק קיים", value: "service" },
      { label: "להגיע לדיוק מקסימלי ותוצאות פרימיום", value: "skill" }
    ]
  }
];

const recommendations: Record<string, { title: string; desc: string }> = {
  "beginner": { title: "קורס בייסיק 1:1 מאפס", desc: "המסלול המקיף ביותר שייקח אותך יד ביד עד להצלחה." },
  "intermediate": { title: "השתלמות דיוק וטכניקה", desc: "חיזוק היסודות ומעבר לעבודה מקצועית ונקייה באמת." },
  "advanced": { title: "מאסטר קלאס למתקדמות", desc: "כל הסודות שלי לתוצאות פרימיום ומיצוב עסקי גבוה." },
  "business": { title: "מסלול ליווי עסקי ומקצועי", desc: "לא רק טכניקה, אלא כל הידע הדרוש להקמת עסק מצליח." },
  "service": { title: "קורס ממוקד להלחמת ריסים", desc: "הכשרה פרקטית ומהירה שתאפשר לך להתחיל להרוויח מיד." },
  "skill": { title: "השתלמות VIP אישית", desc: "יום שלם איתי שבו נשנה את הדרך שבה את עובדת." }
};

export default function AIConsultant() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsFinished(false);
  };

  const getRecommendation = () => {
    const primaryKey = answers[0] || "beginner";
    return recommendations[primaryKey] || recommendations["beginner"];
  };

  return (
    <section className="py-24 bg-interesting-luxury border-t border-border/50 overflow-hidden relative">
      <div className="container px-4 mx-auto max-w-4xl relative">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Sparkles className="text-primary" size={24} />
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary">היועצת האישית של תיקוה אדלה</h2>
          <Sparkles className="text-primary" size={24} />
        </div>

        <Card className="border-primary/20 bg-surface/50 backdrop-blur-sm overflow-hidden min-h-[400px] flex flex-col justify-center shadow-xl rounded-[3rem]">
          <CardContent className="p-8 md:p-12 text-center">
            {!isFinished ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 text-right">
                <div className="space-y-2">
                  <p className="text-primary font-medium">שלב {currentStep + 1} מתוך {steps.length}</p>
                  <h3 className="text-3xl font-bold font-serif">{steps[currentStep].question}</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {steps[currentStep].options.map((option) => (
                    <Button
                      key={option.value}
                      variant="outline"
                      className="h-20 text-xl rounded-2xl hover:border-accent hover:bg-accent/5 transition-all text-primary font-medium justify-between px-8"
                      onClick={() => handleAnswer(option.value)}
                    >
                      <span>{option.label}</span>
                      <Sparkles className="opacity-20 group-hover:opacity-100 transition-opacity" size={20} />
                    </Button>
                  ))}
                </div>

                {currentStep > 0 && (
                  <Button variant="ghost" className="mt-4" onClick={() => setCurrentStep(currentStep - 1)}>
                    חזרה לשלב הקודם
                  </Button>
                )}
              </div>
            ) : (
              <div className="space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-accent/10 text-accent mb-2">
                  <MessageSquare size={44} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif font-bold text-primary">היועצת ממליצה:</h3>
                  <div className="p-10 rounded-[2.5rem] gradient-brand text-white shadow-2xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-1000">
                        <Sparkles size={100} />
                     </div>
                    <p className="text-3xl font-bold mb-4 relative z-10">{getRecommendation().title}</p>
                    <p className="text-xl opacity-90 leading-relaxed relative z-10">{getRecommendation().desc}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                  <Button size="lg" className="rounded-full px-12 h-16 text-xl font-bold bg-primary text-white shadow-2xl hover:scale-105 transition-all" asChild>
                    <a href={`https://wa.me/9725XXXXXXXX?text=היי תיקוה, היועצת בוט המליצה לי על ${getRecommendation().title}, אשמח לשמוע עוד על הקורס.`} target="_blank" rel="noreferrer">
                      דברי איתי על זה בוואטסאפ
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full px-12 h-16 text-xl font-medium border-primary/20 hover:bg-primary/5" onClick={reset}>
                    התחילי מהתחלה
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
