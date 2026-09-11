public class GradeCalculatorTest {

    private static void assertEquals(String expected, String actual) {
        if (!expected.equals(actual)) {
            throw new AssertionError(
                "Expected: " + expected + ", but got: " + actual
            );
        }
    }

    public static void main(String[] args) {
        assertEquals("A", GradeCalculator.calculateGrade(95));
        assertEquals("B", GradeCalculator.calculateGrade(80));
        assertEquals("C", GradeCalculator.calculateGrade(65));
        assertEquals("D", GradeCalculator.calculateGrade(45));
        assertEquals("F", GradeCalculator.calculateGrade(30));
        assertEquals("Invalid marks", GradeCalculator.calculateGrade(110));

        System.out.println("All Java tests passed.");
    }
}
