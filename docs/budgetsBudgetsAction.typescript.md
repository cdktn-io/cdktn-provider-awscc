# `budgetsBudgetsAction` Submodule <a name="`budgetsBudgetsAction` Submodule" id="@cdktn/provider-awscc.budgetsBudgetsAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BudgetsBudgetsAction <a name="BudgetsBudgetsAction" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action awscc_budgets_budgets_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

new budgetsBudgetsAction.BudgetsBudgetsAction(scope: Construct, id: string, config: BudgetsBudgetsActionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig">BudgetsBudgetsActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig">BudgetsBudgetsActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putActionThreshold">putActionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putDefinition">putDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putResourceTags">putResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putSubscribers">putSubscribers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetApprovalModel">resetApprovalModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetResourceTags">resetResourceTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActionThreshold` <a name="putActionThreshold" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putActionThreshold"></a>

```typescript
public putActionThreshold(value: BudgetsBudgetsActionActionThreshold): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putActionThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a>

---

##### `putDefinition` <a name="putDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putDefinition"></a>

```typescript
public putDefinition(value: BudgetsBudgetsActionDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a>

---

##### `putResourceTags` <a name="putResourceTags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putResourceTags"></a>

```typescript
public putResourceTags(value: IResolvable | BudgetsBudgetsActionResourceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putResourceTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>[]

---

##### `putSubscribers` <a name="putSubscribers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putSubscribers"></a>

```typescript
public putSubscribers(value: IResolvable | BudgetsBudgetsActionSubscribers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.putSubscribers.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>[]

---

##### `resetApprovalModel` <a name="resetApprovalModel" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetApprovalModel"></a>

```typescript
public resetApprovalModel(): void
```

##### `resetResourceTags` <a name="resetResourceTags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.resetResourceTags"></a>

```typescript
public resetResourceTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BudgetsBudgetsAction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isConstruct"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

budgetsBudgetsAction.BudgetsBudgetsAction.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformElement"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformResource"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BudgetsBudgetsAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BudgetsBudgetsAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BudgetsBudgetsAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BudgetsBudgetsAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionId">actionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionThreshold">actionThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference">BudgetsBudgetsActionActionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.resourceTags">resourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList">BudgetsBudgetsActionResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.subscribers">subscribers</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList">BudgetsBudgetsActionSubscribersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionThresholdInput">actionThresholdInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.approvalModelInput">approvalModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.budgetNameInput">budgetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.definitionInput">definitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.notificationTypeInput">notificationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.resourceTagsInput">resourceTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.subscribersInput">subscribersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.approvalModel">approvalModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.budgetName">budgetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.notificationType">notificationType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

---

##### `actionThreshold`<sup>Required</sup> <a name="actionThreshold" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionThreshold"></a>

```typescript
public readonly actionThreshold: BudgetsBudgetsActionActionThresholdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference">BudgetsBudgetsActionActionThresholdOutputReference</a>

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.definition"></a>

```typescript
public readonly definition: BudgetsBudgetsActionDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.resourceTags"></a>

```typescript
public readonly resourceTags: BudgetsBudgetsActionResourceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList">BudgetsBudgetsActionResourceTagsList</a>

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.subscribers"></a>

```typescript
public readonly subscribers: BudgetsBudgetsActionSubscribersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList">BudgetsBudgetsActionSubscribersList</a>

---

##### `actionThresholdInput`<sup>Optional</sup> <a name="actionThresholdInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionThresholdInput"></a>

```typescript
public readonly actionThresholdInput: IResolvable | BudgetsBudgetsActionActionThreshold;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a>

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `approvalModelInput`<sup>Optional</sup> <a name="approvalModelInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.approvalModelInput"></a>

```typescript
public readonly approvalModelInput: string;
```

- *Type:* string

---

##### `budgetNameInput`<sup>Optional</sup> <a name="budgetNameInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.budgetNameInput"></a>

```typescript
public readonly budgetNameInput: string;
```

- *Type:* string

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.definitionInput"></a>

```typescript
public readonly definitionInput: IResolvable | BudgetsBudgetsActionDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a>

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `notificationTypeInput`<sup>Optional</sup> <a name="notificationTypeInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.notificationTypeInput"></a>

```typescript
public readonly notificationTypeInput: string;
```

- *Type:* string

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.resourceTagsInput"></a>

```typescript
public readonly resourceTagsInput: IResolvable | BudgetsBudgetsActionResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>[]

---

##### `subscribersInput`<sup>Optional</sup> <a name="subscribersInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.subscribersInput"></a>

```typescript
public readonly subscribersInput: IResolvable | BudgetsBudgetsActionSubscribers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>[]

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `approvalModel`<sup>Required</sup> <a name="approvalModel" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.approvalModel"></a>

```typescript
public readonly approvalModel: string;
```

- *Type:* string

---

##### `budgetName`<sup>Required</sup> <a name="budgetName" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.budgetName"></a>

```typescript
public readonly budgetName: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsAction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetsBudgetsActionActionThreshold <a name="BudgetsBudgetsActionActionThreshold" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.Initializer"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

const budgetsBudgetsActionActionThreshold: budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#type BudgetsBudgetsAction#type}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#value BudgetsBudgetsAction#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#type BudgetsBudgetsAction#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#value BudgetsBudgetsAction#value}.

---

### BudgetsBudgetsActionConfig <a name="BudgetsBudgetsActionConfig" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.Initializer"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

const budgetsBudgetsActionConfig: budgetsBudgetsAction.BudgetsBudgetsActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.actionThreshold">actionThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#action_threshold BudgetsBudgetsAction#action_threshold}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.actionType">actionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#action_type BudgetsBudgetsAction#action_type}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.budgetName">budgetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#budget_name BudgetsBudgetsAction#budget_name}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#definition BudgetsBudgetsAction#definition}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#execution_role_arn BudgetsBudgetsAction#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.notificationType">notificationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#notification_type BudgetsBudgetsAction#notification_type}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.subscribers">subscribers</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#subscribers BudgetsBudgetsAction#subscribers}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.approvalModel">approvalModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#approval_model BudgetsBudgetsAction#approval_model}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.resourceTags">resourceTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#resource_tags BudgetsBudgetsAction#resource_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actionThreshold`<sup>Required</sup> <a name="actionThreshold" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.actionThreshold"></a>

```typescript
public readonly actionThreshold: BudgetsBudgetsActionActionThreshold;
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#action_threshold BudgetsBudgetsAction#action_threshold}.

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#action_type BudgetsBudgetsAction#action_type}.

---

##### `budgetName`<sup>Required</sup> <a name="budgetName" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.budgetName"></a>

```typescript
public readonly budgetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#budget_name BudgetsBudgetsAction#budget_name}.

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.definition"></a>

```typescript
public readonly definition: BudgetsBudgetsActionDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#definition BudgetsBudgetsAction#definition}.

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#execution_role_arn BudgetsBudgetsAction#execution_role_arn}.

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#notification_type BudgetsBudgetsAction#notification_type}.

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.subscribers"></a>

```typescript
public readonly subscribers: IResolvable | BudgetsBudgetsActionSubscribers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#subscribers BudgetsBudgetsAction#subscribers}.

---

##### `approvalModel`<sup>Optional</sup> <a name="approvalModel" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.approvalModel"></a>

```typescript
public readonly approvalModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#approval_model BudgetsBudgetsAction#approval_model}.

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionConfig.property.resourceTags"></a>

```typescript
public readonly resourceTags: IResolvable | BudgetsBudgetsActionResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#resource_tags BudgetsBudgetsAction#resource_tags}.

---

### BudgetsBudgetsActionDefinition <a name="BudgetsBudgetsActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.Initializer"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

const budgetsBudgetsActionDefinition: budgetsBudgetsAction.BudgetsBudgetsActionDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.iamActionDefinition">iamActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#iam_action_definition BudgetsBudgetsAction#iam_action_definition}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.scpActionDefinition">scpActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#scp_action_definition BudgetsBudgetsAction#scp_action_definition}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.ssmActionDefinition">ssmActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#ssm_action_definition BudgetsBudgetsAction#ssm_action_definition}. |

---

##### `iamActionDefinition`<sup>Optional</sup> <a name="iamActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.iamActionDefinition"></a>

```typescript
public readonly iamActionDefinition: BudgetsBudgetsActionDefinitionIamActionDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#iam_action_definition BudgetsBudgetsAction#iam_action_definition}.

---

##### `scpActionDefinition`<sup>Optional</sup> <a name="scpActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.scpActionDefinition"></a>

```typescript
public readonly scpActionDefinition: BudgetsBudgetsActionDefinitionScpActionDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#scp_action_definition BudgetsBudgetsAction#scp_action_definition}.

---

##### `ssmActionDefinition`<sup>Optional</sup> <a name="ssmActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition.property.ssmActionDefinition"></a>

```typescript
public readonly ssmActionDefinition: BudgetsBudgetsActionDefinitionSsmActionDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#ssm_action_definition BudgetsBudgetsAction#ssm_action_definition}.

---

### BudgetsBudgetsActionDefinitionIamActionDefinition <a name="BudgetsBudgetsActionDefinitionIamActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.Initializer"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

const budgetsBudgetsActionDefinitionIamActionDefinition: budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.groups">groups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#groups BudgetsBudgetsAction#groups}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.policyArn">policyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#policy_arn BudgetsBudgetsAction#policy_arn}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.roles">roles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#roles BudgetsBudgetsAction#roles}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.users">users</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#users BudgetsBudgetsAction#users}. |

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#groups BudgetsBudgetsAction#groups}.

---

##### `policyArn`<sup>Optional</sup> <a name="policyArn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#policy_arn BudgetsBudgetsAction#policy_arn}.

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#roles BudgetsBudgetsAction#roles}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#users BudgetsBudgetsAction#users}.

---

### BudgetsBudgetsActionDefinitionScpActionDefinition <a name="BudgetsBudgetsActionDefinitionScpActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.Initializer"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

const budgetsBudgetsActionDefinitionScpActionDefinition: budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.property.policyId">policyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#policy_id BudgetsBudgetsAction#policy_id}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.property.targetIds">targetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#target_ids BudgetsBudgetsAction#target_ids}. |

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#policy_id BudgetsBudgetsAction#policy_id}.

---

##### `targetIds`<sup>Optional</sup> <a name="targetIds" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#target_ids BudgetsBudgetsAction#target_ids}.

---

### BudgetsBudgetsActionDefinitionSsmActionDefinition <a name="BudgetsBudgetsActionDefinitionSsmActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.Initializer"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

const budgetsBudgetsActionDefinitionSsmActionDefinition: budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.instanceIds">instanceIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#instance_ids BudgetsBudgetsAction#instance_ids}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#region BudgetsBudgetsAction#region}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.subtype">subtype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#subtype BudgetsBudgetsAction#subtype}. |

---

##### `instanceIds`<sup>Optional</sup> <a name="instanceIds" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.instanceIds"></a>

```typescript
public readonly instanceIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#instance_ids BudgetsBudgetsAction#instance_ids}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#region BudgetsBudgetsAction#region}.

---

##### `subtype`<sup>Optional</sup> <a name="subtype" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition.property.subtype"></a>

```typescript
public readonly subtype: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#subtype BudgetsBudgetsAction#subtype}.

---

### BudgetsBudgetsActionResourceTags <a name="BudgetsBudgetsActionResourceTags" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.Initializer"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

const budgetsBudgetsActionResourceTags: budgetsBudgetsAction.BudgetsBudgetsActionResourceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#key BudgetsBudgetsAction#key}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#value BudgetsBudgetsAction#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#key BudgetsBudgetsAction#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#value BudgetsBudgetsAction#value}.

---

### BudgetsBudgetsActionSubscribers <a name="BudgetsBudgetsActionSubscribers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.Initializer"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

const budgetsBudgetsActionSubscribers: budgetsBudgetsAction.BudgetsBudgetsActionSubscribers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#address BudgetsBudgetsAction#address}. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#type BudgetsBudgetsAction#type}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#address BudgetsBudgetsAction#address}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/budgets_budgets_action#type BudgetsBudgetsAction#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetsBudgetsActionActionThresholdOutputReference <a name="BudgetsBudgetsActionActionThresholdOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

new budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetsBudgetsActionActionThreshold;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionActionThreshold">BudgetsBudgetsActionActionThreshold</a>

---


### BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference <a name="BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

new budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetPolicyArn">resetPolicyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetRoles">resetRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroups` <a name="resetGroups" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetPolicyArn` <a name="resetPolicyArn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetPolicyArn"></a>

```typescript
public resetPolicyArn(): void
```

##### `resetRoles` <a name="resetRoles" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetRoles"></a>

```typescript
public resetRoles(): void
```

##### `resetUsers` <a name="resetUsers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resetUsers"></a>

```typescript
public resetUsers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArnInput">policyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.rolesInput">rolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.usersInput">usersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArn">policyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.users">users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `policyArnInput`<sup>Optional</sup> <a name="policyArnInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArnInput"></a>

```typescript
public readonly policyArnInput: string;
```

- *Type:* string

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.rolesInput"></a>

```typescript
public readonly rolesInput: string[];
```

- *Type:* string[]

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.usersInput"></a>

```typescript
public readonly usersInput: string[];
```

- *Type:* string[]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetsBudgetsActionDefinitionIamActionDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a>

---


### BudgetsBudgetsActionDefinitionOutputReference <a name="BudgetsBudgetsActionDefinitionOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

new budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putIamActionDefinition">putIamActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putScpActionDefinition">putScpActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putSsmActionDefinition">putSsmActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetIamActionDefinition">resetIamActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetScpActionDefinition">resetScpActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetSsmActionDefinition">resetSsmActionDefinition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIamActionDefinition` <a name="putIamActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putIamActionDefinition"></a>

```typescript
public putIamActionDefinition(value: BudgetsBudgetsActionDefinitionIamActionDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putIamActionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a>

---

##### `putScpActionDefinition` <a name="putScpActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putScpActionDefinition"></a>

```typescript
public putScpActionDefinition(value: BudgetsBudgetsActionDefinitionScpActionDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putScpActionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a>

---

##### `putSsmActionDefinition` <a name="putSsmActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putSsmActionDefinition"></a>

```typescript
public putSsmActionDefinition(value: BudgetsBudgetsActionDefinitionSsmActionDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.putSsmActionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a>

---

##### `resetIamActionDefinition` <a name="resetIamActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetIamActionDefinition"></a>

```typescript
public resetIamActionDefinition(): void
```

##### `resetScpActionDefinition` <a name="resetScpActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetScpActionDefinition"></a>

```typescript
public resetScpActionDefinition(): void
```

##### `resetSsmActionDefinition` <a name="resetSsmActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.resetSsmActionDefinition"></a>

```typescript
public resetSsmActionDefinition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinition">iamActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinition">scpActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinition">ssmActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinitionInput">iamActionDefinitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinitionInput">scpActionDefinitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinitionInput">ssmActionDefinitionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iamActionDefinition`<sup>Required</sup> <a name="iamActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinition"></a>

```typescript
public readonly iamActionDefinition: BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference</a>

---

##### `scpActionDefinition`<sup>Required</sup> <a name="scpActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinition"></a>

```typescript
public readonly scpActionDefinition: BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference</a>

---

##### `ssmActionDefinition`<sup>Required</sup> <a name="ssmActionDefinition" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinition"></a>

```typescript
public readonly ssmActionDefinition: BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference">BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference</a>

---

##### `iamActionDefinitionInput`<sup>Optional</sup> <a name="iamActionDefinitionInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinitionInput"></a>

```typescript
public readonly iamActionDefinitionInput: IResolvable | BudgetsBudgetsActionDefinitionIamActionDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionIamActionDefinition">BudgetsBudgetsActionDefinitionIamActionDefinition</a>

---

##### `scpActionDefinitionInput`<sup>Optional</sup> <a name="scpActionDefinitionInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinitionInput"></a>

```typescript
public readonly scpActionDefinitionInput: IResolvable | BudgetsBudgetsActionDefinitionScpActionDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a>

---

##### `ssmActionDefinitionInput`<sup>Optional</sup> <a name="ssmActionDefinitionInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinitionInput"></a>

```typescript
public readonly ssmActionDefinitionInput: IResolvable | BudgetsBudgetsActionDefinitionSsmActionDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetsBudgetsActionDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinition">BudgetsBudgetsActionDefinition</a>

---


### BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference <a name="BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

new budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resetTargetIds">resetTargetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resetPolicyId"></a>

```typescript
public resetPolicyId(): void
```

##### `resetTargetIds` <a name="resetTargetIds" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resetTargetIds"></a>

```typescript
public resetTargetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIdsInput">targetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIds">targetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `targetIdsInput`<sup>Optional</sup> <a name="targetIdsInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIdsInput"></a>

```typescript
public readonly targetIdsInput: string[];
```

- *Type:* string[]

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetsBudgetsActionDefinitionScpActionDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionScpActionDefinition">BudgetsBudgetsActionDefinitionScpActionDefinition</a>

---


### BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference <a name="BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

new budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetInstanceIds">resetInstanceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetSubtype">resetSubtype</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceIds` <a name="resetInstanceIds" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetInstanceIds"></a>

```typescript
public resetInstanceIds(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSubtype` <a name="resetSubtype" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resetSubtype"></a>

```typescript
public resetSubtype(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIdsInput">instanceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtypeInput">subtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds">instanceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtype">subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceIdsInput`<sup>Optional</sup> <a name="instanceIdsInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIdsInput"></a>

```typescript
public readonly instanceIdsInput: string[];
```

- *Type:* string[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `subtypeInput`<sup>Optional</sup> <a name="subtypeInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtypeInput"></a>

```typescript
public readonly subtypeInput: string;
```

- *Type:* string

---

##### `instanceIds`<sup>Required</sup> <a name="instanceIds" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds"></a>

```typescript
public readonly instanceIds: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtype"></a>

```typescript
public readonly subtype: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetsBudgetsActionDefinitionSsmActionDefinition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionDefinitionSsmActionDefinition">BudgetsBudgetsActionDefinitionSsmActionDefinition</a>

---


### BudgetsBudgetsActionResourceTagsList <a name="BudgetsBudgetsActionResourceTagsList" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

new budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.get"></a>

```typescript
public get(index: number): BudgetsBudgetsActionResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetsBudgetsActionResourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>[]

---


### BudgetsBudgetsActionResourceTagsOutputReference <a name="BudgetsBudgetsActionResourceTagsOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

new budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetsBudgetsActionResourceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionResourceTags">BudgetsBudgetsActionResourceTags</a>

---


### BudgetsBudgetsActionSubscribersList <a name="BudgetsBudgetsActionSubscribersList" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

new budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.get"></a>

```typescript
public get(index: number): BudgetsBudgetsActionSubscribersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetsBudgetsActionSubscribers[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>[]

---


### BudgetsBudgetsActionSubscribersOutputReference <a name="BudgetsBudgetsActionSubscribersOutputReference" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer"></a>

```typescript
import { budgetsBudgetsAction } from '@cdktn/provider-awscc'

new budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetsBudgetsActionSubscribers;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.budgetsBudgetsAction.BudgetsBudgetsActionSubscribers">BudgetsBudgetsActionSubscribers</a>

---



