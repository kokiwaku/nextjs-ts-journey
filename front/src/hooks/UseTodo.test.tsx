import { renderHook, act } from "@testing-library/react";
import useTodo from "./UseTodo"

/**
// テストは以下の順で書く
// 1. Arrange（準備）
// 2. Act（実行）
// 3. Assertion（検査）
 */
describe("hooks/useTodo のテスト", () => {
  describe("Todo検索", () => {
    const todoListForTest = [
      { id: 1, content: "todo1" },
      { id: 2, content: "todo2" },
    ];
    test("全件ヒット", () => {
      runSearchTest(todoListForTest, "todo", [
        { id: 1, content: "todo1" },
        { id: 2, content: "todo2" },
      ]);
    });
    test("1件だけヒット", () => {
      runSearchTest(todoListForTest, "todo2", [
        { id: 2, content: "todo2" }
      ]);
    });
    test("ヒットしない", () => {
      runSearchTest(todoListForTest, "todo3", []);
    });
    // テストロジックは共通化できたのでまとめた
    const runSearchTest = (todoList, searchTargetValue, expectFilteredTodoList) => {
      // Arrange
      const { result } = renderHook(() => useTodo());

      // Act
      const filteredTodoList = result.current.filterTodoList(todoList, searchTargetValue);

      // Assertion
      expect(filteredTodoList).toEqual(expectFilteredTodoList);
    };
  });

  // 状態管理をhooks->Reduxに移行したのでテストコメントアウト
  // describe("新規Todo登録", () => {
  //   test("入力値変更", () => {
  //     // Arrage
  //     const expectValue = "test";
  //     // Assertion
  //     const { result } = renderHook(() => useTodo());
  //     expect(result.current[0].todo).toBe("");
  //   })
  //   test("入力値変更", () => {
  //     // Arrage
  //     const expectValue = "test";
  //     const eventObj = {
  //       target: {
  //         value: expectValue,
  //       },
  //     };

  //     // Act
  //     const { result } = renderHook(() => useTodo());
  //     act(() => result.current[1].onChangeAddTodo(eventObj));

  //     // Assertion
  //     expect(result.current[0].todo).toBe(expectValue);
  //   });

  //   test("空値をsubmit", () => {
  //     // Arrange
  //     const expectValue = "";
  //     const eventObj = {
  //       target: {
  //         value: expectValue
  //       }
  //     }

  //     // Act
  //     const { result } = renderHook(() => useTodo());
  //     act(() => result.current[1].onChangeAddTodo(eventObj));
  //     act(() => result.current[1].addTodoList());

  //     // Assertion
  //     expect(result.current[0].todo).toBe(expectValue);
  //   });

  //   test("有意な値をsubmit", () => {
  //     // Arrange
  //     const expectValue = "test";
  //     const eventObj = {
  //       target: {
  //         value: expectValue,
  //       },
  //     };

  //     // Act
  //     const { result } = renderHook(() => useTodo());
  //     const currentTodoCount = result.current[0].searchedTodoList.length;
  //     act(() => result.current[1].onChangeAddTodo(eventObj));
  //     act(() => result.current[1].addTodoList(expectValue));

  //     // Assert
  //     // Todoがリストに追加されていること
  //     const addedTodoCount = currentTodoCount + 1;
  //     expect(result.current[0].searchedTodoList.length).toBe(addedTodoCount);
  //     const addedTodo = result.current[0].searchedTodoList[addedTodoCount -1];
  //     // todo.contentが正しく追加されている
  //     expect(addedTodo.content).toBeDefined().toBe(expectValue);
  //     // todo.idが正しく追加されている
  //     expect(addedTodo.id).toBeDefined();
  //     expect(typeof addedTodo.id).toBe("number");

  //     // input formがリセットされている
  //     expect(result.current[0].todo).toBe("");
  //   });
  // });

  // describe("Todo削除", () => {
  //   test("Todoを削除", () => {
  //     // Arrange
  //     const { result } = renderHook(() => useTodo());
  //     const initTodoListCount = result.current[0].searchedTodoList.length;

  //     // Act
  //     const deleteTargetTodoId = result.current[0].searchedTodoList[0].id;
  //     act(() => result.current[1].deleteTodo(deleteTargetTodoId));

  //     // Assertion
  //     // 削除後にTodoが一つ減っていること
  //     expect(result.current[0].searchedTodoList.length).toBe(initTodoListCount - 1);
  //     // 削除したTodoを保持していないこと
  //     const hasDeletedTodo = result.current[0].searchedTodoList.some(
  //       (todo) => todo.id === deleteTargetTodoId
  //     );
  //     expect(hasDeletedTodo).toBe(false);
  //   })
  // });

  // describe("Todo検索", () => {
  //   test("検索にヒットする", () => {
  //     runSearchTest("todo");
  //   });
  //   test("検索にヒットしない", () => {
  //     runSearchTest("test");
  //   });
  //   // テストロジックは共通化できたのでまとめた
  //   const runSearchTest = (searchTodoValue) => {
  //     // Arrange
  //     const { result } = renderHook(() => useTodo());
  //     const searchTodoValueObject = {
  //       target: {
  //         value: searchTodoValue,
  //       },
  //     };
  //     const searchTargetTodoList = result.current[0].searchedTodoList;
  //     // 想定されるTodoの個数
  //     const expectTodoListCount = searchTargetTodoList.filter((todo) =>
  //       todo.content.toLowerCase().includes(searchTodoValue.toLowerCase())
  //     ).length;

  //     // Act
  //     act(() => {
  //       return result.current[1].onChangeSearchTodoValue(searchTodoValueObject);
  //     });

  //     // Assertion
  //     expect(result.current[0].searchedTodoList.length).toBe(
  //       expectTodoListCount
  //     );
  //   };
  // });
})