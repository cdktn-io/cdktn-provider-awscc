# `glueTrigger` Submodule <a name="`glueTrigger` Submodule" id="@cdktn/provider-awscc.glueTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueTrigger <a name="GlueTrigger" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger awscc_glue_trigger}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktn/provider-awscc'

new glueTrigger.GlueTrigger(scope: Construct, id: string, config: GlueTriggerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig">GlueTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig">GlueTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.putEventBatchingCondition">putEventBatchingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.putPredicate">putPredicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetEventBatchingCondition">resetEventBatchingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetPredicate">resetPredicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetStartOnCreation">resetStartOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetWorkflowName">resetWorkflowName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putActions"></a>

```typescript
public putActions(value: IResolvable | GlueTriggerActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]

---

##### `putEventBatchingCondition` <a name="putEventBatchingCondition" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putEventBatchingCondition"></a>

```typescript
public putEventBatchingCondition(value: GlueTriggerEventBatchingCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putEventBatchingCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>

---

##### `putPredicate` <a name="putPredicate" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putPredicate"></a>

```typescript
public putPredicate(value: GlueTriggerPredicate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEventBatchingCondition` <a name="resetEventBatchingCondition" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetEventBatchingCondition"></a>

```typescript
public resetEventBatchingCondition(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPredicate` <a name="resetPredicate" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetPredicate"></a>

```typescript
public resetPredicate(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetStartOnCreation` <a name="resetStartOnCreation" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetStartOnCreation"></a>

```typescript
public resetStartOnCreation(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWorkflowName` <a name="resetWorkflowName" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.resetWorkflowName"></a>

```typescript
public resetWorkflowName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueTrigger resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isConstruct"></a>

```typescript
import { glueTrigger } from '@cdktn/provider-awscc'

glueTrigger.GlueTrigger.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformElement"></a>

```typescript
import { glueTrigger } from '@cdktn/provider-awscc'

glueTrigger.GlueTrigger.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformResource"></a>

```typescript
import { glueTrigger } from '@cdktn/provider-awscc'

glueTrigger.GlueTrigger.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport"></a>

```typescript
import { glueTrigger } from '@cdktn/provider-awscc'

glueTrigger.GlueTrigger.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GlueTrigger resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueTrigger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList">GlueTriggerActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.eventBatchingCondition">eventBatchingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference">GlueTriggerEventBatchingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.predicate">predicate</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference">GlueTriggerPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.actionsInput">actionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.eventBatchingConditionInput">eventBatchingConditionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.predicateInput">predicateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.startOnCreationInput">startOnCreationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tagsInput">tagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.workflowNameInput">workflowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.startOnCreation">startOnCreation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tags">tags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.workflowName">workflowName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.actions"></a>

```typescript
public readonly actions: GlueTriggerActionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList">GlueTriggerActionsList</a>

---

##### `eventBatchingCondition`<sup>Required</sup> <a name="eventBatchingCondition" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.eventBatchingCondition"></a>

```typescript
public readonly eventBatchingCondition: GlueTriggerEventBatchingConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference">GlueTriggerEventBatchingConditionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.predicate"></a>

```typescript
public readonly predicate: GlueTriggerPredicateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference">GlueTriggerPredicateOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | GlueTriggerActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `eventBatchingConditionInput`<sup>Optional</sup> <a name="eventBatchingConditionInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.eventBatchingConditionInput"></a>

```typescript
public readonly eventBatchingConditionInput: IResolvable | GlueTriggerEventBatchingCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `predicateInput`<sup>Optional</sup> <a name="predicateInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.predicateInput"></a>

```typescript
public readonly predicateInput: IResolvable | GlueTriggerPredicate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `startOnCreationInput`<sup>Optional</sup> <a name="startOnCreationInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.startOnCreationInput"></a>

```typescript
public readonly startOnCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tagsInput"></a>

```typescript
public readonly tagsInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `workflowNameInput`<sup>Optional</sup> <a name="workflowNameInput" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.workflowNameInput"></a>

```typescript
public readonly workflowNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `startOnCreation`<sup>Required</sup> <a name="startOnCreation" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.startOnCreation"></a>

```typescript
public readonly startOnCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueTrigger.GlueTrigger.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueTriggerActions <a name="GlueTriggerActions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktn/provider-awscc'

const glueTriggerActions: glueTrigger.GlueTriggerActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.arguments">arguments</a></code> | <code>string</code> | The job arguments used when this trigger fires. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.crawlerName">crawlerName</a></code> | <code>string</code> | The name of the crawler to be used with this action. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.jobName">jobName</a></code> | <code>string</code> | The name of a job to be executed. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.notificationProperty">notificationProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | Specifies configuration properties of a job run notification. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.securityConfiguration">securityConfiguration</a></code> | <code>string</code> | The name of the SecurityConfiguration structure to be used with this action. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.timeout">timeout</a></code> | <code>number</code> | The JobRun timeout in minutes. |

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.arguments"></a>

```typescript
public readonly arguments: string;
```

- *Type:* string

The job arguments used when this trigger fires.

For this job run, they replace the default arguments set in the job definition itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#arguments GlueTrigger#arguments}

---

##### `crawlerName`<sup>Optional</sup> <a name="crawlerName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.crawlerName"></a>

```typescript
public readonly crawlerName: string;
```

- *Type:* string

The name of the crawler to be used with this action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#crawler_name GlueTrigger#crawler_name}

---

##### `jobName`<sup>Optional</sup> <a name="jobName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

The name of a job to be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#job_name GlueTrigger#job_name}

---

##### `notificationProperty`<sup>Optional</sup> <a name="notificationProperty" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.notificationProperty"></a>

```typescript
public readonly notificationProperty: GlueTriggerActionsNotificationProperty;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

Specifies configuration properties of a job run notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#notification_property GlueTrigger#notification_property}

---

##### `securityConfiguration`<sup>Optional</sup> <a name="securityConfiguration" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.securityConfiguration"></a>

```typescript
public readonly securityConfiguration: string;
```

- *Type:* string

The name of the SecurityConfiguration structure to be used with this action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#security_configuration GlueTrigger#security_configuration}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActions.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

The JobRun timeout in minutes.

This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#timeout GlueTrigger#timeout}

---

### GlueTriggerActionsNotificationProperty <a name="GlueTriggerActionsNotificationProperty" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktn/provider-awscc'

const glueTriggerActionsNotificationProperty: glueTrigger.GlueTriggerActionsNotificationProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty.property.notifyDelayAfter">notifyDelayAfter</a></code> | <code>number</code> | After a job run starts, the number of minutes to wait before sending a job run delay notification. |

---

##### `notifyDelayAfter`<sup>Optional</sup> <a name="notifyDelayAfter" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty.property.notifyDelayAfter"></a>

```typescript
public readonly notifyDelayAfter: number;
```

- *Type:* number

After a job run starts, the number of minutes to wait before sending a job run delay notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#notify_delay_after GlueTrigger#notify_delay_after}

---

### GlueTriggerConfig <a name="GlueTriggerConfig" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktn/provider-awscc'

const glueTriggerConfig: glueTrigger.GlueTriggerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.actions">actions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]</code> | The actions initiated by this trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.type">type</a></code> | <code>string</code> | The type of trigger that this is. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.description">description</a></code> | <code>string</code> | A description of this trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.eventBatchingCondition">eventBatchingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a></code> | Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.name">name</a></code> | <code>string</code> | The name of the trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | The predicate of this trigger, which defines when it will fire. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.schedule">schedule</a></code> | <code>string</code> | A cron expression used to specify the schedule. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.startOnCreation">startOnCreation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.tags">tags</a></code> | <code>string</code> | The tags to use with this trigger. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.workflowName">workflowName</a></code> | <code>string</code> | The name of the workflow associated with the trigger. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.actions"></a>

```typescript
public readonly actions: IResolvable | GlueTriggerActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]

The actions initiated by this trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#actions GlueTrigger#actions}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of trigger that this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#type GlueTrigger#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#description GlueTrigger#description}

---

##### `eventBatchingCondition`<sup>Optional</sup> <a name="eventBatchingCondition" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.eventBatchingCondition"></a>

```typescript
public readonly eventBatchingCondition: GlueTriggerEventBatchingCondition;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>

Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#event_batching_condition GlueTrigger#event_batching_condition}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#name GlueTrigger#name}

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.predicate"></a>

```typescript
public readonly predicate: GlueTriggerPredicate;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

The predicate of this trigger, which defines when it will fire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#predicate GlueTrigger#predicate}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

A cron expression used to specify the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#schedule GlueTrigger#schedule}

---

##### `startOnCreation`<sup>Optional</sup> <a name="startOnCreation" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.startOnCreation"></a>

```typescript
public readonly startOnCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#start_on_creation GlueTrigger#start_on_creation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.tags"></a>

```typescript
public readonly tags: string;
```

- *Type:* string

The tags to use with this trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#tags GlueTrigger#tags}

---

##### `workflowName`<sup>Optional</sup> <a name="workflowName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerConfig.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

The name of the workflow associated with the trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#workflow_name GlueTrigger#workflow_name}

---

### GlueTriggerEventBatchingCondition <a name="GlueTriggerEventBatchingCondition" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktn/provider-awscc'

const glueTriggerEventBatchingCondition: glueTrigger.GlueTriggerEventBatchingCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.property.batchSize">batchSize</a></code> | <code>number</code> | Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.property.batchWindow">batchWindow</a></code> | <code>number</code> | Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received. |

---

##### `batchSize`<sup>Optional</sup> <a name="batchSize" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#batch_size GlueTrigger#batch_size}

---

##### `batchWindow`<sup>Optional</sup> <a name="batchWindow" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition.property.batchWindow"></a>

```typescript
public readonly batchWindow: number;
```

- *Type:* number

Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#batch_window GlueTrigger#batch_window}

---

### GlueTriggerPredicate <a name="GlueTriggerPredicate" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktn/provider-awscc'

const glueTriggerPredicate: glueTrigger.GlueTriggerPredicate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]</code> | A list of the conditions that determine when the trigger will fire. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.property.logical">logical</a></code> | <code>string</code> | An optional field if only one condition is listed. If multiple conditions are listed, then this field is required. |

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | GlueTriggerPredicateConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]

A list of the conditions that determine when the trigger will fire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#conditions GlueTrigger#conditions}

---

##### `logical`<sup>Optional</sup> <a name="logical" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate.property.logical"></a>

```typescript
public readonly logical: string;
```

- *Type:* string

An optional field if only one condition is listed. If multiple conditions are listed, then this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#logical GlueTrigger#logical}

---

### GlueTriggerPredicateConditions <a name="GlueTriggerPredicateConditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktn/provider-awscc'

const glueTriggerPredicateConditions: glueTrigger.GlueTriggerPredicateConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.crawlerName">crawlerName</a></code> | <code>string</code> | The name of the crawler to which this condition applies. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.crawlState">crawlState</a></code> | <code>string</code> | The state of the crawler to which this condition applies. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.jobName">jobName</a></code> | <code>string</code> | The name of the job whose JobRuns this condition applies to, and on which this trigger waits. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.logicalOperator">logicalOperator</a></code> | <code>string</code> | A logical operator. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.state">state</a></code> | <code>string</code> | The condition state. Currently, the values supported are SUCCEEDED, STOPPED, TIMEOUT, and FAILED. |

---

##### `crawlerName`<sup>Optional</sup> <a name="crawlerName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.crawlerName"></a>

```typescript
public readonly crawlerName: string;
```

- *Type:* string

The name of the crawler to which this condition applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#crawler_name GlueTrigger#crawler_name}

---

##### `crawlState`<sup>Optional</sup> <a name="crawlState" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.crawlState"></a>

```typescript
public readonly crawlState: string;
```

- *Type:* string

The state of the crawler to which this condition applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#crawl_state GlueTrigger#crawl_state}

---

##### `jobName`<sup>Optional</sup> <a name="jobName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

The name of the job whose JobRuns this condition applies to, and on which this trigger waits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#job_name GlueTrigger#job_name}

---

##### `logicalOperator`<sup>Optional</sup> <a name="logicalOperator" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.logicalOperator"></a>

```typescript
public readonly logicalOperator: string;
```

- *Type:* string

A logical operator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#logical_operator GlueTrigger#logical_operator}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

The condition state. Currently, the values supported are SUCCEEDED, STOPPED, TIMEOUT, and FAILED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/glue_trigger#state GlueTrigger#state}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueTriggerActionsList <a name="GlueTriggerActionsList" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktn/provider-awscc'

new glueTrigger.GlueTriggerActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.get"></a>

```typescript
public get(index: number): GlueTriggerActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueTriggerActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]

---


### GlueTriggerActionsNotificationPropertyOutputReference <a name="GlueTriggerActionsNotificationPropertyOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktn/provider-awscc'

new glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resetNotifyDelayAfter">resetNotifyDelayAfter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNotifyDelayAfter` <a name="resetNotifyDelayAfter" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resetNotifyDelayAfter"></a>

```typescript
public resetNotifyDelayAfter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfterInput">notifyDelayAfterInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfter">notifyDelayAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notifyDelayAfterInput`<sup>Optional</sup> <a name="notifyDelayAfterInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfterInput"></a>

```typescript
public readonly notifyDelayAfterInput: number;
```

- *Type:* number

---

##### `notifyDelayAfter`<sup>Required</sup> <a name="notifyDelayAfter" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfter"></a>

```typescript
public readonly notifyDelayAfter: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueTriggerActionsNotificationProperty;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---


### GlueTriggerActionsOutputReference <a name="GlueTriggerActionsOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktn/provider-awscc'

new glueTrigger.GlueTriggerActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty">putNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetCrawlerName">resetCrawlerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetJobName">resetJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetNotificationProperty">resetNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetSecurityConfiguration">resetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotificationProperty` <a name="putNotificationProperty" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty"></a>

```typescript
public putNotificationProperty(value: GlueTriggerActionsNotificationProperty): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---

##### `resetArguments` <a name="resetArguments" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetArguments"></a>

```typescript
public resetArguments(): void
```

##### `resetCrawlerName` <a name="resetCrawlerName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetCrawlerName"></a>

```typescript
public resetCrawlerName(): void
```

##### `resetJobName` <a name="resetJobName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetJobName"></a>

```typescript
public resetJobName(): void
```

##### `resetNotificationProperty` <a name="resetNotificationProperty" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetNotificationProperty"></a>

```typescript
public resetNotificationProperty(): void
```

##### `resetSecurityConfiguration` <a name="resetSecurityConfiguration" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetSecurityConfiguration"></a>

```typescript
public resetSecurityConfiguration(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.notificationProperty">notificationProperty</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference">GlueTriggerActionsNotificationPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.argumentsInput">argumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerNameInput">crawlerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.jobNameInput">jobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.notificationPropertyInput">notificationPropertyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfigurationInput">securityConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.arguments">arguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerName">crawlerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.jobName">jobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfiguration">securityConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notificationProperty`<sup>Required</sup> <a name="notificationProperty" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.notificationProperty"></a>

```typescript
public readonly notificationProperty: GlueTriggerActionsNotificationPropertyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference">GlueTriggerActionsNotificationPropertyOutputReference</a>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.argumentsInput"></a>

```typescript
public readonly argumentsInput: string;
```

- *Type:* string

---

##### `crawlerNameInput`<sup>Optional</sup> <a name="crawlerNameInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerNameInput"></a>

```typescript
public readonly crawlerNameInput: string;
```

- *Type:* string

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.jobNameInput"></a>

```typescript
public readonly jobNameInput: string;
```

- *Type:* string

---

##### `notificationPropertyInput`<sup>Optional</sup> <a name="notificationPropertyInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.notificationPropertyInput"></a>

```typescript
public readonly notificationPropertyInput: IResolvable | GlueTriggerActionsNotificationProperty;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---

##### `securityConfigurationInput`<sup>Optional</sup> <a name="securityConfigurationInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfigurationInput"></a>

```typescript
public readonly securityConfigurationInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.arguments"></a>

```typescript
public readonly arguments: string;
```

- *Type:* string

---

##### `crawlerName`<sup>Required</sup> <a name="crawlerName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerName"></a>

```typescript
public readonly crawlerName: string;
```

- *Type:* string

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

---

##### `securityConfiguration`<sup>Required</sup> <a name="securityConfiguration" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfiguration"></a>

```typescript
public readonly securityConfiguration: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueTriggerActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>

---


### GlueTriggerEventBatchingConditionOutputReference <a name="GlueTriggerEventBatchingConditionOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktn/provider-awscc'

new glueTrigger.GlueTriggerEventBatchingConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchSize">resetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchWindow">resetBatchWindow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchSize` <a name="resetBatchSize" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchSize"></a>

```typescript
public resetBatchSize(): void
```

##### `resetBatchWindow` <a name="resetBatchWindow" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.resetBatchWindow"></a>

```typescript
public resetBatchWindow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSizeInput">batchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindowInput">batchWindowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSize">batchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindow">batchWindow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchSizeInput`<sup>Optional</sup> <a name="batchSizeInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSizeInput"></a>

```typescript
public readonly batchSizeInput: number;
```

- *Type:* number

---

##### `batchWindowInput`<sup>Optional</sup> <a name="batchWindowInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindowInput"></a>

```typescript
public readonly batchWindowInput: number;
```

- *Type:* number

---

##### `batchSize`<sup>Required</sup> <a name="batchSize" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchSize"></a>

```typescript
public readonly batchSize: number;
```

- *Type:* number

---

##### `batchWindow`<sup>Required</sup> <a name="batchWindow" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.batchWindow"></a>

```typescript
public readonly batchWindow: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueTriggerEventBatchingCondition;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerEventBatchingCondition">GlueTriggerEventBatchingCondition</a>

---


### GlueTriggerPredicateConditionsList <a name="GlueTriggerPredicateConditionsList" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktn/provider-awscc'

new glueTrigger.GlueTriggerPredicateConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.get"></a>

```typescript
public get(index: number): GlueTriggerPredicateConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueTriggerPredicateConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]

---


### GlueTriggerPredicateConditionsOutputReference <a name="GlueTriggerPredicateConditionsOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktn/provider-awscc'

new glueTrigger.GlueTriggerPredicateConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlerName">resetCrawlerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlState">resetCrawlState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetJobName">resetJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetLogicalOperator">resetLogicalOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCrawlerName` <a name="resetCrawlerName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlerName"></a>

```typescript
public resetCrawlerName(): void
```

##### `resetCrawlState` <a name="resetCrawlState" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlState"></a>

```typescript
public resetCrawlState(): void
```

##### `resetJobName` <a name="resetJobName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetJobName"></a>

```typescript
public resetJobName(): void
```

##### `resetLogicalOperator` <a name="resetLogicalOperator" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetLogicalOperator"></a>

```typescript
public resetLogicalOperator(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetState"></a>

```typescript
public resetState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerNameInput">crawlerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlStateInput">crawlStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobNameInput">jobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperatorInput">logicalOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerName">crawlerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlState">crawlState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobName">jobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperator">logicalOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crawlerNameInput`<sup>Optional</sup> <a name="crawlerNameInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerNameInput"></a>

```typescript
public readonly crawlerNameInput: string;
```

- *Type:* string

---

##### `crawlStateInput`<sup>Optional</sup> <a name="crawlStateInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlStateInput"></a>

```typescript
public readonly crawlStateInput: string;
```

- *Type:* string

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobNameInput"></a>

```typescript
public readonly jobNameInput: string;
```

- *Type:* string

---

##### `logicalOperatorInput`<sup>Optional</sup> <a name="logicalOperatorInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperatorInput"></a>

```typescript
public readonly logicalOperatorInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `crawlerName`<sup>Required</sup> <a name="crawlerName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerName"></a>

```typescript
public readonly crawlerName: string;
```

- *Type:* string

---

##### `crawlState`<sup>Required</sup> <a name="crawlState" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlState"></a>

```typescript
public readonly crawlState: string;
```

- *Type:* string

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

---

##### `logicalOperator`<sup>Required</sup> <a name="logicalOperator" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperator"></a>

```typescript
public readonly logicalOperator: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueTriggerPredicateConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>

---


### GlueTriggerPredicateOutputReference <a name="GlueTriggerPredicateOutputReference" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktn/provider-awscc'

new glueTrigger.GlueTriggerPredicateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resetLogical">resetLogical</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | GlueTriggerPredicateConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]

---

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetLogical` <a name="resetLogical" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.resetLogical"></a>

```typescript
public resetLogical(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList">GlueTriggerPredicateConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.logicalInput">logicalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.logical">logical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.conditions"></a>

```typescript
public readonly conditions: GlueTriggerPredicateConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditionsList">GlueTriggerPredicateConditionsList</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | GlueTriggerPredicateConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]

---

##### `logicalInput`<sup>Optional</sup> <a name="logicalInput" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.logicalInput"></a>

```typescript
public readonly logicalInput: string;
```

- *Type:* string

---

##### `logical`<sup>Required</sup> <a name="logical" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.logical"></a>

```typescript
public readonly logical: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueTriggerPredicate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---



