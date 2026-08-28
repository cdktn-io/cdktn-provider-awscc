# `schedulerSchedule` Submodule <a name="`schedulerSchedule` Submodule" id="@cdktn/provider-awscc.schedulerSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SchedulerSchedule <a name="SchedulerSchedule" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule awscc_scheduler_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerSchedule(scope: Construct, id: string, config: SchedulerScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig">SchedulerScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig">SchedulerScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putFlexibleTimeWindow">putFlexibleTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetEndDate">resetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetScheduleExpressionTimezone">resetScheduleExpressionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetStartDate">resetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFlexibleTimeWindow` <a name="putFlexibleTimeWindow" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putFlexibleTimeWindow"></a>

```typescript
public putFlexibleTimeWindow(value: SchedulerScheduleFlexibleTimeWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putFlexibleTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

---

##### `putTarget` <a name="putTarget" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget"></a>

```typescript
public putTarget(value: SchedulerScheduleTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEndDate` <a name="resetEndDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetEndDate"></a>

```typescript
public resetEndDate(): void
```

##### `resetGroupName` <a name="resetGroupName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetGroupName"></a>

```typescript
public resetGroupName(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetName"></a>

```typescript
public resetName(): void
```

##### `resetScheduleExpressionTimezone` <a name="resetScheduleExpressionTimezone" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetScheduleExpressionTimezone"></a>

```typescript
public resetScheduleExpressionTimezone(): void
```

##### `resetStartDate` <a name="resetStartDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetStartDate"></a>

```typescript
public resetStartDate(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SchedulerSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isConstruct"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

schedulerSchedule.SchedulerSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformElement"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

schedulerSchedule.SchedulerSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformResource"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

schedulerSchedule.SchedulerSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

schedulerSchedule.SchedulerSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SchedulerSchedule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SchedulerSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SchedulerSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SchedulerSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindow">flexibleTimeWindow</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference">SchedulerScheduleFlexibleTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference">SchedulerScheduleTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.endDateInput">endDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindowInput">flexibleTimeWindowInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezoneInput">scheduleExpressionTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.startDateInput">startDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.targetInput">targetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezone">scheduleExpressionTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `flexibleTimeWindow`<sup>Required</sup> <a name="flexibleTimeWindow" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindow"></a>

```typescript
public readonly flexibleTimeWindow: SchedulerScheduleFlexibleTimeWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference">SchedulerScheduleFlexibleTimeWindowOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.target"></a>

```typescript
public readonly target: SchedulerScheduleTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference">SchedulerScheduleTargetOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.endDateInput"></a>

```typescript
public readonly endDateInput: string;
```

- *Type:* string

---

##### `flexibleTimeWindowInput`<sup>Optional</sup> <a name="flexibleTimeWindowInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.flexibleTimeWindowInput"></a>

```typescript
public readonly flexibleTimeWindowInput: IResolvable | SchedulerScheduleFlexibleTimeWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionInput"></a>

```typescript
public readonly scheduleExpressionInput: string;
```

- *Type:* string

---

##### `scheduleExpressionTimezoneInput`<sup>Optional</sup> <a name="scheduleExpressionTimezoneInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezoneInput"></a>

```typescript
public readonly scheduleExpressionTimezoneInput: string;
```

- *Type:* string

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.startDateInput"></a>

```typescript
public readonly startDateInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.targetInput"></a>

```typescript
public readonly targetInput: IResolvable | SchedulerScheduleTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `scheduleExpressionTimezone`<sup>Required</sup> <a name="scheduleExpressionTimezone" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.scheduleExpressionTimezone"></a>

```typescript
public readonly scheduleExpressionTimezone: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SchedulerScheduleConfig <a name="SchedulerScheduleConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

const schedulerScheduleConfig: schedulerSchedule.SchedulerScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.flexibleTimeWindow">flexibleTimeWindow</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a></code> | Flexible time window allows configuration of a window within which a schedule can be invoked. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | The scheduling expression. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a></code> | The schedule target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.description">description</a></code> | <code>string</code> | The description of the schedule. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.endDate">endDate</a></code> | <code>string</code> | The date, in UTC, before which the schedule can invoke its target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.groupName">groupName</a></code> | <code>string</code> | The name of the schedule group to associate with this schedule. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The ARN for a KMS Key that will be used to encrypt customer data. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#name SchedulerSchedule#name}. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpressionTimezone">scheduleExpressionTimezone</a></code> | <code>string</code> | The timezone in which the scheduling expression is evaluated. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.startDate">startDate</a></code> | <code>string</code> | The date, in UTC, after which the schedule can begin invoking its target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.state">state</a></code> | <code>string</code> | Specifies whether the schedule is enabled or disabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `flexibleTimeWindow`<sup>Required</sup> <a name="flexibleTimeWindow" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.flexibleTimeWindow"></a>

```typescript
public readonly flexibleTimeWindow: SchedulerScheduleFlexibleTimeWindow;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

Flexible time window allows configuration of a window within which a schedule can be invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#flexible_time_window SchedulerSchedule#flexible_time_window}

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

The scheduling expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#schedule_expression SchedulerSchedule#schedule_expression}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.target"></a>

```typescript
public readonly target: SchedulerScheduleTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

The schedule target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#target SchedulerSchedule#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#description SchedulerSchedule#description}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

The date, in UTC, before which the schedule can invoke its target.

Depending on the schedule's recurrence expression, invocations might stop on, or before, the EndDate you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#end_date SchedulerSchedule#end_date}

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The name of the schedule group to associate with this schedule.

If you omit this, the default schedule group is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#group_name SchedulerSchedule#group_name}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The ARN for a KMS Key that will be used to encrypt customer data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#kms_key_arn SchedulerSchedule#kms_key_arn}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#name SchedulerSchedule#name}.

---

##### `scheduleExpressionTimezone`<sup>Optional</sup> <a name="scheduleExpressionTimezone" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.scheduleExpressionTimezone"></a>

```typescript
public readonly scheduleExpressionTimezone: string;
```

- *Type:* string

The timezone in which the scheduling expression is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#schedule_expression_timezone SchedulerSchedule#schedule_expression_timezone}

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

The date, in UTC, after which the schedule can begin invoking its target.

Depending on the schedule's recurrence expression, invocations might occur on, or after, the StartDate you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#start_date SchedulerSchedule#start_date}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Specifies whether the schedule is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#state SchedulerSchedule#state}

---

### SchedulerScheduleFlexibleTimeWindow <a name="SchedulerScheduleFlexibleTimeWindow" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

const schedulerScheduleFlexibleTimeWindow: schedulerSchedule.SchedulerScheduleFlexibleTimeWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.mode">mode</a></code> | <code>string</code> | Determines whether the schedule is executed within a flexible time window. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.maximumWindowInMinutes">maximumWindowInMinutes</a></code> | <code>number</code> | The maximum time window during which a schedule can be invoked. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Determines whether the schedule is executed within a flexible time window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#mode SchedulerSchedule#mode}

---

##### `maximumWindowInMinutes`<sup>Optional</sup> <a name="maximumWindowInMinutes" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow.property.maximumWindowInMinutes"></a>

```typescript
public readonly maximumWindowInMinutes: number;
```

- *Type:* number

The maximum time window during which a schedule can be invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#maximum_window_in_minutes SchedulerSchedule#maximum_window_in_minutes}

---

### SchedulerScheduleTarget <a name="SchedulerScheduleTarget" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

const schedulerScheduleTarget: schedulerSchedule.SchedulerScheduleTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.arn">arn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role to be used for this target when the schedule is triggered. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a></code> | A DeadLetterConfig object that contains information about a dead-letter queue configuration. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.ecsParameters">ecsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a></code> | The custom parameters to be used when the target is an Amazon ECS task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.eventBridgeParameters">eventBridgeParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a></code> | EventBridge PutEvent predefined target type. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.input">input</a></code> | <code>string</code> | The text, or well-formed JSON, passed to the target. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.kinesisParameters">kinesisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a></code> | The custom parameter you can use to control the shard to which EventBridge Scheduler sends the event. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a></code> | A RetryPolicy object that includes information about the retry policy settings. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.sageMakerPipelineParameters">sageMakerPipelineParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a></code> | These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on AWS EventBridge Scheduler schedules. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.sqsParameters">sqsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a></code> | Contains the message group ID to use when the target is a FIFO queue. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#arn SchedulerSchedule#arn}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role to be used for this target when the schedule is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#role_arn SchedulerSchedule#role_arn}

---

##### `deadLetterConfig`<sup>Optional</sup> <a name="deadLetterConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.deadLetterConfig"></a>

```typescript
public readonly deadLetterConfig: SchedulerScheduleTargetDeadLetterConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a>

A DeadLetterConfig object that contains information about a dead-letter queue configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#dead_letter_config SchedulerSchedule#dead_letter_config}

---

##### `ecsParameters`<sup>Optional</sup> <a name="ecsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.ecsParameters"></a>

```typescript
public readonly ecsParameters: SchedulerScheduleTargetEcsParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a>

The custom parameters to be used when the target is an Amazon ECS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#ecs_parameters SchedulerSchedule#ecs_parameters}

---

##### `eventBridgeParameters`<sup>Optional</sup> <a name="eventBridgeParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.eventBridgeParameters"></a>

```typescript
public readonly eventBridgeParameters: SchedulerScheduleTargetEventBridgeParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a>

EventBridge PutEvent predefined target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#event_bridge_parameters SchedulerSchedule#event_bridge_parameters}

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

The text, or well-formed JSON, passed to the target.

If you are configuring a templated Lambda, AWS Step Functions, or Amazon EventBridge target, the input must be a well-formed JSON. For all other target types, a JSON is not required. If you do not specify anything for this field, EventBridge Scheduler delivers a default notification to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#input SchedulerSchedule#input}

---

##### `kinesisParameters`<sup>Optional</sup> <a name="kinesisParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.kinesisParameters"></a>

```typescript
public readonly kinesisParameters: SchedulerScheduleTargetKinesisParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a>

The custom parameter you can use to control the shard to which EventBridge Scheduler sends the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#kinesis_parameters SchedulerSchedule#kinesis_parameters}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: SchedulerScheduleTargetRetryPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a>

A RetryPolicy object that includes information about the retry policy settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#retry_policy SchedulerSchedule#retry_policy}

---

##### `sageMakerPipelineParameters`<sup>Optional</sup> <a name="sageMakerPipelineParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.sageMakerPipelineParameters"></a>

```typescript
public readonly sageMakerPipelineParameters: SchedulerScheduleTargetSageMakerPipelineParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a>

These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on AWS EventBridge Scheduler schedules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#sage_maker_pipeline_parameters SchedulerSchedule#sage_maker_pipeline_parameters}

---

##### `sqsParameters`<sup>Optional</sup> <a name="sqsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget.property.sqsParameters"></a>

```typescript
public readonly sqsParameters: SchedulerScheduleTargetSqsParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a>

Contains the message group ID to use when the target is a FIFO queue.

If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#sqs_parameters SchedulerSchedule#sqs_parameters}

---

### SchedulerScheduleTargetDeadLetterConfig <a name="SchedulerScheduleTargetDeadLetterConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

const schedulerScheduleTargetDeadLetterConfig: schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig.property.arn">arn</a></code> | <code>string</code> | The ARN of the SQS queue specified as the target for the dead-letter queue. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The ARN of the SQS queue specified as the target for the dead-letter queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#arn SchedulerSchedule#arn}

---

### SchedulerScheduleTargetEcsParameters <a name="SchedulerScheduleTargetEcsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

const schedulerScheduleTargetEcsParameters: schedulerSchedule.SchedulerScheduleTargetEcsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>[]</code> | The capacity provider strategy to use for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to enable Amazon ECS managed tags for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether or not to enable the execute command functionality for the containers in this task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.group">group</a></code> | <code>string</code> | Specifies an ECS task group for the task. The maximum length is 255 characters. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.launchType">launchType</a></code> | <code>string</code> | Specifies the launch type on which your task is running. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a></code> | This structure specifies the network configuration for an ECS task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementConstraints">placementConstraints</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>[]</code> | An array of placement constraint objects to use for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementStrategy">placementStrategy</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>[]</code> | The placement strategy objects to use for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.platformVersion">platformVersion</a></code> | <code>string</code> | Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as 1.1.0. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.propagateTags">propagateTags</a></code> | <code>string</code> | Specifies whether to propagate the tags from the task definition to the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.referenceId">referenceId</a></code> | <code>string</code> | The reference ID to use for the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.tags">tags</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | The metadata that you apply to the task to help you categorize and organize them. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskCount">taskCount</a></code> | <code>number</code> | The number of tasks to create based on TaskDefinition. The default is 1. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>string</code> | The ARN of the task definition to use if the event target is an Amazon ECS task. |

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="capacityProviderStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.capacityProviderStrategy"></a>

```typescript
public readonly capacityProviderStrategy: IResolvable | SchedulerScheduleTargetEcsParametersCapacityProviderStrategy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>[]

The capacity provider strategy to use for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#capacity_provider_strategy SchedulerSchedule#capacity_provider_strategy}

---

##### `enableEcsManagedTags`<sup>Optional</sup> <a name="enableEcsManagedTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableEcsManagedTags"></a>

```typescript
public readonly enableEcsManagedTags: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to enable Amazon ECS managed tags for the task.

For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#enable_ecs_managed_tags SchedulerSchedule#enable_ecs_managed_tags}

---

##### `enableExecuteCommand`<sup>Optional</sup> <a name="enableExecuteCommand" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether or not to enable the execute command functionality for the containers in this task.

If true, this enables execute command functionality on all containers in the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#enable_execute_command SchedulerSchedule#enable_execute_command}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

Specifies an ECS task group for the task. The maximum length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#group SchedulerSchedule#group}

---

##### `launchType`<sup>Optional</sup> <a name="launchType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.launchType"></a>

```typescript
public readonly launchType: string;
```

- *Type:* string

Specifies the launch type on which your task is running.

The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The FARGATE value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see AWS Fargate on Amazon ECS in the Amazon Elastic Container Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#launch_type SchedulerSchedule#launch_type}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: SchedulerScheduleTargetEcsParametersNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

This structure specifies the network configuration for an ECS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#network_configuration SchedulerSchedule#network_configuration}

---

##### `placementConstraints`<sup>Optional</sup> <a name="placementConstraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementConstraints"></a>

```typescript
public readonly placementConstraints: IResolvable | SchedulerScheduleTargetEcsParametersPlacementConstraints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>[]

An array of placement constraint objects to use for the task.

You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#placement_constraints SchedulerSchedule#placement_constraints}

---

##### `placementStrategy`<sup>Optional</sup> <a name="placementStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.placementStrategy"></a>

```typescript
public readonly placementStrategy: IResolvable | SchedulerScheduleTargetEcsParametersPlacementStrategy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>[]

The placement strategy objects to use for the task.

You can specify a maximum of five strategy rules per task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#placement_strategy SchedulerSchedule#placement_strategy}

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as 1.1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#platform_version SchedulerSchedule#platform_version}

---

##### `propagateTags`<sup>Optional</sup> <a name="propagateTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.propagateTags"></a>

```typescript
public readonly propagateTags: string;
```

- *Type:* string

Specifies whether to propagate the tags from the task definition to the task.

If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#propagate_tags SchedulerSchedule#propagate_tags}

---

##### `referenceId`<sup>Optional</sup> <a name="referenceId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.referenceId"></a>

```typescript
public readonly referenceId: string;
```

- *Type:* string

The reference ID to use for the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#reference_id SchedulerSchedule#reference_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.tags"></a>

```typescript
public readonly tags: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

The metadata that you apply to the task to help you categorize and organize them.

Each tag consists of a key and an optional value, both of which you define. To learn more, see RunTask in the Amazon ECS API Reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#tags SchedulerSchedule#tags}

---

##### `taskCount`<sup>Optional</sup> <a name="taskCount" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskCount"></a>

```typescript
public readonly taskCount: number;
```

- *Type:* number

The number of tasks to create based on TaskDefinition. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#task_count SchedulerSchedule#task_count}

---

##### `taskDefinitionArn`<sup>Optional</sup> <a name="taskDefinitionArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters.property.taskDefinitionArn"></a>

```typescript
public readonly taskDefinitionArn: string;
```

- *Type:* string

The ARN of the task definition to use if the event target is an Amazon ECS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#task_definition_arn SchedulerSchedule#task_definition_arn}

---

### SchedulerScheduleTargetEcsParametersCapacityProviderStrategy <a name="SchedulerScheduleTargetEcsParametersCapacityProviderStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

const schedulerScheduleTargetEcsParametersCapacityProviderStrategy: schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.base">base</a></code> | <code>number</code> | The base value designates how many tasks, at a minimum, to run on the specified capacity provider. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.capacityProvider">capacityProvider</a></code> | <code>string</code> | The short name of the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.weight">weight</a></code> | <code>number</code> | The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. |

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.base"></a>

```typescript
public readonly base: number;
```

- *Type:* number

The base value designates how many tasks, at a minimum, to run on the specified capacity provider.

Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#base SchedulerSchedule#base}

---

##### `capacityProvider`<sup>Optional</sup> <a name="capacityProvider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.capacityProvider"></a>

```typescript
public readonly capacityProvider: string;
```

- *Type:* string

The short name of the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#capacity_provider SchedulerSchedule#capacity_provider}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider.

The weight value is taken into consideration after the base value, if defined, is satisfied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#weight SchedulerSchedule#weight}

---

### SchedulerScheduleTargetEcsParametersNetworkConfiguration <a name="SchedulerScheduleTargetEcsParametersNetworkConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

const schedulerScheduleTargetEcsParametersNetworkConfiguration: schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.property.awsvpcConfiguration">awsvpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a></code> | This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. |

---

##### `awsvpcConfiguration`<sup>Optional</sup> <a name="awsvpcConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration.property.awsvpcConfiguration"></a>

```typescript
public readonly awsvpcConfiguration: SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a>

This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used.

This structure is relevant only for ECS tasks that use the awsvpc network mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#awsvpc_configuration SchedulerSchedule#awsvpc_configuration}

---

### SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration <a name="SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

const schedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration: schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.assignPublicIp">assignPublicIp</a></code> | <code>string</code> | Specifies whether the task's elastic network interface receives a public IP address. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Specifies the security groups associated with the task. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.subnets">subnets</a></code> | <code>string[]</code> | Specifies the subnets associated with the task. |

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: string;
```

- *Type:* string

Specifies whether the task's elastic network interface receives a public IP address.

You can specify ENABLED only when LaunchType in EcsParameters is set to FARGATE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#assign_public_ip SchedulerSchedule#assign_public_ip}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Specifies the security groups associated with the task.

These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#security_groups SchedulerSchedule#security_groups}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Specifies the subnets associated with the task.

These subnets must all be in the same VPC. You can specify as many as 16 subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#subnets SchedulerSchedule#subnets}

---

### SchedulerScheduleTargetEcsParametersPlacementConstraints <a name="SchedulerScheduleTargetEcsParametersPlacementConstraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

const schedulerScheduleTargetEcsParametersPlacementConstraints: schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.expression">expression</a></code> | <code>string</code> | A cluster query language expression to apply to the constraint. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.type">type</a></code> | <code>string</code> | The type of constraint. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

A cluster query language expression to apply to the constraint.

You cannot specify an expression if the constraint type is distinctInstance. To learn more, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#expression SchedulerSchedule#expression}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of constraint.

Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#type SchedulerSchedule#type}

---

### SchedulerScheduleTargetEcsParametersPlacementStrategy <a name="SchedulerScheduleTargetEcsParametersPlacementStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

const schedulerScheduleTargetEcsParametersPlacementStrategy: schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.field">field</a></code> | <code>string</code> | The field to apply the placement strategy against. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.type">type</a></code> | <code>string</code> | The type of placement strategy. |

---

##### `field`<sup>Optional</sup> <a name="field" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

The field to apply the placement strategy against.

For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#field SchedulerSchedule#field}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of placement strategy.

The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#type SchedulerSchedule#type}

---

### SchedulerScheduleTargetEventBridgeParameters <a name="SchedulerScheduleTargetEventBridgeParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

const schedulerScheduleTargetEventBridgeParameters: schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.property.detailType">detailType</a></code> | <code>string</code> | Free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.property.source">source</a></code> | <code>string</code> | The source of the event. |

---

##### `detailType`<sup>Optional</sup> <a name="detailType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.property.detailType"></a>

```typescript
public readonly detailType: string;
```

- *Type:* string

Free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#detail_type SchedulerSchedule#detail_type}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The source of the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#source SchedulerSchedule#source}

---

### SchedulerScheduleTargetKinesisParameters <a name="SchedulerScheduleTargetKinesisParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

const schedulerScheduleTargetKinesisParameters: schedulerSchedule.SchedulerScheduleTargetKinesisParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters.property.partitionKey">partitionKey</a></code> | <code>string</code> | The custom parameter used as the Kinesis partition key. |

---

##### `partitionKey`<sup>Optional</sup> <a name="partitionKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters.property.partitionKey"></a>

```typescript
public readonly partitionKey: string;
```

- *Type:* string

The custom parameter used as the Kinesis partition key.

For more information, see Amazon Kinesis Streams Key Concepts in the Amazon Kinesis Streams Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#partition_key SchedulerSchedule#partition_key}

---

### SchedulerScheduleTargetRetryPolicy <a name="SchedulerScheduleTargetRetryPolicy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

const schedulerScheduleTargetRetryPolicy: schedulerSchedule.SchedulerScheduleTargetRetryPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>number</code> | The maximum amount of time, in seconds, to continue to make retry attempts. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>number</code> | The maximum number of retry attempts to make before the request fails. |

---

##### `maximumEventAgeInSeconds`<sup>Optional</sup> <a name="maximumEventAgeInSeconds" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumEventAgeInSeconds"></a>

```typescript
public readonly maximumEventAgeInSeconds: number;
```

- *Type:* number

The maximum amount of time, in seconds, to continue to make retry attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#maximum_event_age_in_seconds SchedulerSchedule#maximum_event_age_in_seconds}

---

##### `maximumRetryAttempts`<sup>Optional</sup> <a name="maximumRetryAttempts" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy.property.maximumRetryAttempts"></a>

```typescript
public readonly maximumRetryAttempts: number;
```

- *Type:* number

The maximum number of retry attempts to make before the request fails.

Retry attempts with exponential backoff continue until either the maximum number of attempts is made or until the duration of the MaximumEventAgeInSeconds is reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#maximum_retry_attempts SchedulerSchedule#maximum_retry_attempts}

---

### SchedulerScheduleTargetSageMakerPipelineParameters <a name="SchedulerScheduleTargetSageMakerPipelineParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

const schedulerScheduleTargetSageMakerPipelineParameters: schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters.property.pipelineParameterList">pipelineParameterList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>[]</code> | List of Parameter names and values for SageMaker Model Building Pipeline execution. |

---

##### `pipelineParameterList`<sup>Optional</sup> <a name="pipelineParameterList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters.property.pipelineParameterList"></a>

```typescript
public readonly pipelineParameterList: IResolvable | SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>[]

List of Parameter names and values for SageMaker Model Building Pipeline execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#pipeline_parameter_list SchedulerSchedule#pipeline_parameter_list}

---

### SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct <a name="SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

const schedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct: schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.property.name">name</a></code> | <code>string</code> | Name of parameter to start execution of a SageMaker Model Building Pipeline. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.property.value">value</a></code> | <code>string</code> | Value of parameter to start execution of a SageMaker Model Building Pipeline. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of parameter to start execution of a SageMaker Model Building Pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#name SchedulerSchedule#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Value of parameter to start execution of a SageMaker Model Building Pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#value SchedulerSchedule#value}

---

### SchedulerScheduleTargetSqsParameters <a name="SchedulerScheduleTargetSqsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

const schedulerScheduleTargetSqsParameters: schedulerSchedule.SchedulerScheduleTargetSqsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters.property.messageGroupId">messageGroupId</a></code> | <code>string</code> | The FIFO message group ID to use as the target. |

---

##### `messageGroupId`<sup>Optional</sup> <a name="messageGroupId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters.property.messageGroupId"></a>

```typescript
public readonly messageGroupId: string;
```

- *Type:* string

The FIFO message group ID to use as the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/scheduler_schedule#message_group_id SchedulerSchedule#message_group_id}

---

## Classes <a name="Classes" id="Classes"></a>

### SchedulerScheduleFlexibleTimeWindowOutputReference <a name="SchedulerScheduleFlexibleTimeWindowOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resetMaximumWindowInMinutes">resetMaximumWindowInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumWindowInMinutes` <a name="resetMaximumWindowInMinutes" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.resetMaximumWindowInMinutes"></a>

```typescript
public resetMaximumWindowInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutesInput">maximumWindowInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutes">maximumWindowInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumWindowInMinutesInput`<sup>Optional</sup> <a name="maximumWindowInMinutesInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutesInput"></a>

```typescript
public readonly maximumWindowInMinutesInput: number;
```

- *Type:* number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `maximumWindowInMinutes`<sup>Required</sup> <a name="maximumWindowInMinutes" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.maximumWindowInMinutes"></a>

```typescript
public readonly maximumWindowInMinutes: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleFlexibleTimeWindow;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleFlexibleTimeWindow">SchedulerScheduleFlexibleTimeWindow</a>

---


### SchedulerScheduleTargetDeadLetterConfigOutputReference <a name="SchedulerScheduleTargetDeadLetterConfigOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleTargetDeadLetterConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a>

---


### SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList <a name="SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.get"></a>

```typescript
public get(index: number): SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleTargetEcsParametersCapacityProviderStrategy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>[]

---


### SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference <a name="SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetBase">resetBase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetCapacityProvider">resetCapacityProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBase` <a name="resetBase" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetBase"></a>

```typescript
public resetBase(): void
```

##### `resetCapacityProvider` <a name="resetCapacityProvider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetCapacityProvider"></a>

```typescript
public resetCapacityProvider(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.baseInput">baseInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseInput`<sup>Optional</sup> <a name="baseInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.baseInput"></a>

```typescript
public readonly baseInput: number;
```

- *Type:* number

---

##### `capacityProviderInput`<sup>Optional</sup> <a name="capacityProviderInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```typescript
public readonly capacityProviderInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.base"></a>

```typescript
public readonly base: number;
```

- *Type:* number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```typescript
public readonly capacityProvider: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleTargetEcsParametersCapacityProviderStrategy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>

---


### SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference <a name="SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetAssignPublicIp"></a>

```typescript
public resetAssignPublicIp(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.resetSubnets"></a>

```typescript
public resetSubnets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIpInput"></a>

```typescript
public readonly assignPublicIpInput: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a>

---


### SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference <a name="SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.putAwsvpcConfiguration">putAwsvpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resetAwsvpcConfiguration">resetAwsvpcConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsvpcConfiguration` <a name="putAwsvpcConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.putAwsvpcConfiguration"></a>

```typescript
public putAwsvpcConfiguration(value: SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.putAwsvpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a>

---

##### `resetAwsvpcConfiguration` <a name="resetAwsvpcConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.resetAwsvpcConfiguration"></a>

```typescript
public resetAwsvpcConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.awsvpcConfiguration">awsvpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.awsvpcConfigurationInput">awsvpcConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsvpcConfiguration`<sup>Required</sup> <a name="awsvpcConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.awsvpcConfiguration"></a>

```typescript
public readonly awsvpcConfiguration: SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfigurationOutputReference</a>

---

##### `awsvpcConfigurationInput`<sup>Optional</sup> <a name="awsvpcConfigurationInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.awsvpcConfigurationInput"></a>

```typescript
public readonly awsvpcConfigurationInput: IResolvable | SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfigurationAwsvpcConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleTargetEcsParametersNetworkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

---


### SchedulerScheduleTargetEcsParametersOutputReference <a name="SchedulerScheduleTargetEcsParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putCapacityProviderStrategy">putCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementConstraints">putPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementStrategy">putPlacementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetCapacityProviderStrategy">resetCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableEcsManagedTags">resetEnableEcsManagedTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableExecuteCommand">resetEnableExecuteCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetLaunchType">resetLaunchType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementConstraints">resetPlacementConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementStrategy">resetPlacementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlatformVersion">resetPlatformVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPropagateTags">resetPropagateTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetReferenceId">resetReferenceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTaskCount">resetTaskCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTaskDefinitionArn">resetTaskDefinitionArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacityProviderStrategy` <a name="putCapacityProviderStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putCapacityProviderStrategy"></a>

```typescript
public putCapacityProviderStrategy(value: IResolvable | SchedulerScheduleTargetEcsParametersCapacityProviderStrategy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>[]

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: SchedulerScheduleTargetEcsParametersNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

---

##### `putPlacementConstraints` <a name="putPlacementConstraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementConstraints"></a>

```typescript
public putPlacementConstraints(value: IResolvable | SchedulerScheduleTargetEcsParametersPlacementConstraints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementConstraints.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>[]

---

##### `putPlacementStrategy` <a name="putPlacementStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementStrategy"></a>

```typescript
public putPlacementStrategy(value: IResolvable | SchedulerScheduleTargetEcsParametersPlacementStrategy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.putPlacementStrategy.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>[]

---

##### `resetCapacityProviderStrategy` <a name="resetCapacityProviderStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetCapacityProviderStrategy"></a>

```typescript
public resetCapacityProviderStrategy(): void
```

##### `resetEnableEcsManagedTags` <a name="resetEnableEcsManagedTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableEcsManagedTags"></a>

```typescript
public resetEnableEcsManagedTags(): void
```

##### `resetEnableExecuteCommand` <a name="resetEnableExecuteCommand" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetEnableExecuteCommand"></a>

```typescript
public resetEnableExecuteCommand(): void
```

##### `resetGroup` <a name="resetGroup" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetLaunchType` <a name="resetLaunchType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetLaunchType"></a>

```typescript
public resetLaunchType(): void
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetNetworkConfiguration"></a>

```typescript
public resetNetworkConfiguration(): void
```

##### `resetPlacementConstraints` <a name="resetPlacementConstraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementConstraints"></a>

```typescript
public resetPlacementConstraints(): void
```

##### `resetPlacementStrategy` <a name="resetPlacementStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlacementStrategy"></a>

```typescript
public resetPlacementStrategy(): void
```

##### `resetPlatformVersion` <a name="resetPlatformVersion" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPlatformVersion"></a>

```typescript
public resetPlatformVersion(): void
```

##### `resetPropagateTags` <a name="resetPropagateTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetPropagateTags"></a>

```typescript
public resetPropagateTags(): void
```

##### `resetReferenceId` <a name="resetReferenceId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetReferenceId"></a>

```typescript
public resetReferenceId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTaskCount` <a name="resetTaskCount" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTaskCount"></a>

```typescript
public resetTaskCount(): void
```

##### `resetTaskDefinitionArn` <a name="resetTaskDefinitionArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.resetTaskDefinitionArn"></a>

```typescript
public resetTaskDefinitionArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList">SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference">SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraints">placementConstraints</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList">SchedulerScheduleTargetEcsParametersPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategy">placementStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList">SchedulerScheduleTargetEcsParametersPlacementStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategyInput">capacityProviderStrategyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTagsInput">enableEcsManagedTagsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommandInput">enableExecuteCommandInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchTypeInput">launchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraintsInput">placementConstraintsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategyInput">placementStrategyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersionInput">platformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTagsInput">propagateTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceIdInput">referenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCountInput">taskCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArnInput">taskDefinitionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchType">launchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersion">platformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTags">propagateTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceId">referenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tags">tags</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCount">taskCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityProviderStrategy`<sup>Required</sup> <a name="capacityProviderStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategy"></a>

```typescript
public readonly capacityProviderStrategy: SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList">SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference">SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference</a>

---

##### `placementConstraints`<sup>Required</sup> <a name="placementConstraints" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraints"></a>

```typescript
public readonly placementConstraints: SchedulerScheduleTargetEcsParametersPlacementConstraintsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList">SchedulerScheduleTargetEcsParametersPlacementConstraintsList</a>

---

##### `placementStrategy`<sup>Required</sup> <a name="placementStrategy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategy"></a>

```typescript
public readonly placementStrategy: SchedulerScheduleTargetEcsParametersPlacementStrategyList;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList">SchedulerScheduleTargetEcsParametersPlacementStrategyList</a>

---

##### `capacityProviderStrategyInput`<sup>Optional</sup> <a name="capacityProviderStrategyInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.capacityProviderStrategyInput"></a>

```typescript
public readonly capacityProviderStrategyInput: IResolvable | SchedulerScheduleTargetEcsParametersCapacityProviderStrategy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersCapacityProviderStrategy">SchedulerScheduleTargetEcsParametersCapacityProviderStrategy</a>[]

---

##### `enableEcsManagedTagsInput`<sup>Optional</sup> <a name="enableEcsManagedTagsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTagsInput"></a>

```typescript
public readonly enableEcsManagedTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableExecuteCommandInput`<sup>Optional</sup> <a name="enableExecuteCommandInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommandInput"></a>

```typescript
public readonly enableExecuteCommandInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `launchTypeInput`<sup>Optional</sup> <a name="launchTypeInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchTypeInput"></a>

```typescript
public readonly launchTypeInput: string;
```

- *Type:* string

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: IResolvable | SchedulerScheduleTargetEcsParametersNetworkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersNetworkConfiguration">SchedulerScheduleTargetEcsParametersNetworkConfiguration</a>

---

##### `placementConstraintsInput`<sup>Optional</sup> <a name="placementConstraintsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementConstraintsInput"></a>

```typescript
public readonly placementConstraintsInput: IResolvable | SchedulerScheduleTargetEcsParametersPlacementConstraints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>[]

---

##### `placementStrategyInput`<sup>Optional</sup> <a name="placementStrategyInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.placementStrategyInput"></a>

```typescript
public readonly placementStrategyInput: IResolvable | SchedulerScheduleTargetEcsParametersPlacementStrategy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>[]

---

##### `platformVersionInput`<sup>Optional</sup> <a name="platformVersionInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersionInput"></a>

```typescript
public readonly platformVersionInput: string;
```

- *Type:* string

---

##### `propagateTagsInput`<sup>Optional</sup> <a name="propagateTagsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTagsInput"></a>

```typescript
public readonly propagateTagsInput: string;
```

- *Type:* string

---

##### `referenceIdInput`<sup>Optional</sup> <a name="referenceIdInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceIdInput"></a>

```typescript
public readonly referenceIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

---

##### `taskCountInput`<sup>Optional</sup> <a name="taskCountInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCountInput"></a>

```typescript
public readonly taskCountInput: number;
```

- *Type:* number

---

##### `taskDefinitionArnInput`<sup>Optional</sup> <a name="taskDefinitionArnInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArnInput"></a>

```typescript
public readonly taskDefinitionArnInput: string;
```

- *Type:* string

---

##### `enableEcsManagedTags`<sup>Required</sup> <a name="enableEcsManagedTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableEcsManagedTags"></a>

```typescript
public readonly enableEcsManagedTags: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableExecuteCommand`<sup>Required</sup> <a name="enableExecuteCommand" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `launchType`<sup>Required</sup> <a name="launchType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.launchType"></a>

```typescript
public readonly launchType: string;
```

- *Type:* string

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.propagateTags"></a>

```typescript
public readonly propagateTags: string;
```

- *Type:* string

---

##### `referenceId`<sup>Required</sup> <a name="referenceId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.referenceId"></a>

```typescript
public readonly referenceId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.tags"></a>

```typescript
public readonly tags: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

---

##### `taskCount`<sup>Required</sup> <a name="taskCount" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskCount"></a>

```typescript
public readonly taskCount: number;
```

- *Type:* number

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="taskDefinitionArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.taskDefinitionArn"></a>

```typescript
public readonly taskDefinitionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleTargetEcsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a>

---


### SchedulerScheduleTargetEcsParametersPlacementConstraintsList <a name="SchedulerScheduleTargetEcsParametersPlacementConstraintsList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.get"></a>

```typescript
public get(index: number): SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleTargetEcsParametersPlacementConstraints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>[]

---


### SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference <a name="SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleTargetEcsParametersPlacementConstraints;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementConstraints">SchedulerScheduleTargetEcsParametersPlacementConstraints</a>

---


### SchedulerScheduleTargetEcsParametersPlacementStrategyList <a name="SchedulerScheduleTargetEcsParametersPlacementStrategyList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.get"></a>

```typescript
public get(index: number): SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleTargetEcsParametersPlacementStrategy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>[]

---


### SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference <a name="SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resetField">resetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetField` <a name="resetField" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resetField"></a>

```typescript
public resetField(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleTargetEcsParametersPlacementStrategy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersPlacementStrategy">SchedulerScheduleTargetEcsParametersPlacementStrategy</a>

---


### SchedulerScheduleTargetEventBridgeParametersOutputReference <a name="SchedulerScheduleTargetEventBridgeParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resetDetailType">resetDetailType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDetailType` <a name="resetDetailType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resetDetailType"></a>

```typescript
public resetDetailType(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.detailTypeInput">detailTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.detailType">detailType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `detailTypeInput`<sup>Optional</sup> <a name="detailTypeInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.detailTypeInput"></a>

```typescript
public readonly detailTypeInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `detailType`<sup>Required</sup> <a name="detailType" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.detailType"></a>

```typescript
public readonly detailType: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleTargetEventBridgeParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a>

---


### SchedulerScheduleTargetKinesisParametersOutputReference <a name="SchedulerScheduleTargetKinesisParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resetPartitionKey">resetPartitionKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPartitionKey` <a name="resetPartitionKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.resetPartitionKey"></a>

```typescript
public resetPartitionKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKeyInput">partitionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKey">partitionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partitionKeyInput`<sup>Optional</sup> <a name="partitionKeyInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKeyInput"></a>

```typescript
public readonly partitionKeyInput: string;
```

- *Type:* string

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.partitionKey"></a>

```typescript
public readonly partitionKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleTargetKinesisParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a>

---


### SchedulerScheduleTargetOutputReference <a name="SchedulerScheduleTargetOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putDeadLetterConfig">putDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters">putEcsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEventBridgeParameters">putEventBridgeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putKinesisParameters">putKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSageMakerPipelineParameters">putSageMakerPipelineParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSqsParameters">putSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetDeadLetterConfig">resetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEcsParameters">resetEcsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEventBridgeParameters">resetEventBridgeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetKinesisParameters">resetKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSageMakerPipelineParameters">resetSageMakerPipelineParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSqsParameters">resetSqsParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeadLetterConfig` <a name="putDeadLetterConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putDeadLetterConfig"></a>

```typescript
public putDeadLetterConfig(value: SchedulerScheduleTargetDeadLetterConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putDeadLetterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a>

---

##### `putEcsParameters` <a name="putEcsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters"></a>

```typescript
public putEcsParameters(value: SchedulerScheduleTargetEcsParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEcsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a>

---

##### `putEventBridgeParameters` <a name="putEventBridgeParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEventBridgeParameters"></a>

```typescript
public putEventBridgeParameters(value: SchedulerScheduleTargetEventBridgeParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putEventBridgeParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a>

---

##### `putKinesisParameters` <a name="putKinesisParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putKinesisParameters"></a>

```typescript
public putKinesisParameters(value: SchedulerScheduleTargetKinesisParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putKinesisParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putRetryPolicy"></a>

```typescript
public putRetryPolicy(value: SchedulerScheduleTargetRetryPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a>

---

##### `putSageMakerPipelineParameters` <a name="putSageMakerPipelineParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSageMakerPipelineParameters"></a>

```typescript
public putSageMakerPipelineParameters(value: SchedulerScheduleTargetSageMakerPipelineParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSageMakerPipelineParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a>

---

##### `putSqsParameters` <a name="putSqsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSqsParameters"></a>

```typescript
public putSqsParameters(value: SchedulerScheduleTargetSqsParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.putSqsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a>

---

##### `resetDeadLetterConfig` <a name="resetDeadLetterConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetDeadLetterConfig"></a>

```typescript
public resetDeadLetterConfig(): void
```

##### `resetEcsParameters` <a name="resetEcsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEcsParameters"></a>

```typescript
public resetEcsParameters(): void
```

##### `resetEventBridgeParameters` <a name="resetEventBridgeParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetEventBridgeParameters"></a>

```typescript
public resetEventBridgeParameters(): void
```

##### `resetInput` <a name="resetInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetKinesisParameters` <a name="resetKinesisParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetKinesisParameters"></a>

```typescript
public resetKinesisParameters(): void
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetRetryPolicy"></a>

```typescript
public resetRetryPolicy(): void
```

##### `resetSageMakerPipelineParameters` <a name="resetSageMakerPipelineParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSageMakerPipelineParameters"></a>

```typescript
public resetSageMakerPipelineParameters(): void
```

##### `resetSqsParameters` <a name="resetSqsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.resetSqsParameters"></a>

```typescript
public resetSqsParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference">SchedulerScheduleTargetDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParameters">ecsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference">SchedulerScheduleTargetEcsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventBridgeParameters">eventBridgeParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference">SchedulerScheduleTargetEventBridgeParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParameters">kinesisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference">SchedulerScheduleTargetKinesisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference">SchedulerScheduleTargetRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sageMakerPipelineParameters">sageMakerPipelineParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference">SchedulerScheduleTargetSageMakerPipelineParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParameters">sqsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference">SchedulerScheduleTargetSqsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfigInput">deadLetterConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParametersInput">ecsParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventBridgeParametersInput">eventBridgeParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParametersInput">kinesisParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicyInput">retryPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sageMakerPipelineParametersInput">sageMakerPipelineParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParametersInput">sqsParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deadLetterConfig`<sup>Required</sup> <a name="deadLetterConfig" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfig"></a>

```typescript
public readonly deadLetterConfig: SchedulerScheduleTargetDeadLetterConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfigOutputReference">SchedulerScheduleTargetDeadLetterConfigOutputReference</a>

---

##### `ecsParameters`<sup>Required</sup> <a name="ecsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParameters"></a>

```typescript
public readonly ecsParameters: SchedulerScheduleTargetEcsParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParametersOutputReference">SchedulerScheduleTargetEcsParametersOutputReference</a>

---

##### `eventBridgeParameters`<sup>Required</sup> <a name="eventBridgeParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventBridgeParameters"></a>

```typescript
public readonly eventBridgeParameters: SchedulerScheduleTargetEventBridgeParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParametersOutputReference">SchedulerScheduleTargetEventBridgeParametersOutputReference</a>

---

##### `kinesisParameters`<sup>Required</sup> <a name="kinesisParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParameters"></a>

```typescript
public readonly kinesisParameters: SchedulerScheduleTargetKinesisParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParametersOutputReference">SchedulerScheduleTargetKinesisParametersOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: SchedulerScheduleTargetRetryPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference">SchedulerScheduleTargetRetryPolicyOutputReference</a>

---

##### `sageMakerPipelineParameters`<sup>Required</sup> <a name="sageMakerPipelineParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sageMakerPipelineParameters"></a>

```typescript
public readonly sageMakerPipelineParameters: SchedulerScheduleTargetSageMakerPipelineParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference">SchedulerScheduleTargetSageMakerPipelineParametersOutputReference</a>

---

##### `sqsParameters`<sup>Required</sup> <a name="sqsParameters" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParameters"></a>

```typescript
public readonly sqsParameters: SchedulerScheduleTargetSqsParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference">SchedulerScheduleTargetSqsParametersOutputReference</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `deadLetterConfigInput`<sup>Optional</sup> <a name="deadLetterConfigInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.deadLetterConfigInput"></a>

```typescript
public readonly deadLetterConfigInput: IResolvable | SchedulerScheduleTargetDeadLetterConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetDeadLetterConfig">SchedulerScheduleTargetDeadLetterConfig</a>

---

##### `ecsParametersInput`<sup>Optional</sup> <a name="ecsParametersInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.ecsParametersInput"></a>

```typescript
public readonly ecsParametersInput: IResolvable | SchedulerScheduleTargetEcsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEcsParameters">SchedulerScheduleTargetEcsParameters</a>

---

##### `eventBridgeParametersInput`<sup>Optional</sup> <a name="eventBridgeParametersInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.eventBridgeParametersInput"></a>

```typescript
public readonly eventBridgeParametersInput: IResolvable | SchedulerScheduleTargetEventBridgeParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetEventBridgeParameters">SchedulerScheduleTargetEventBridgeParameters</a>

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `kinesisParametersInput`<sup>Optional</sup> <a name="kinesisParametersInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.kinesisParametersInput"></a>

```typescript
public readonly kinesisParametersInput: IResolvable | SchedulerScheduleTargetKinesisParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetKinesisParameters">SchedulerScheduleTargetKinesisParameters</a>

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.retryPolicyInput"></a>

```typescript
public readonly retryPolicyInput: IResolvable | SchedulerScheduleTargetRetryPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `sageMakerPipelineParametersInput`<sup>Optional</sup> <a name="sageMakerPipelineParametersInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sageMakerPipelineParametersInput"></a>

```typescript
public readonly sageMakerPipelineParametersInput: IResolvable | SchedulerScheduleTargetSageMakerPipelineParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a>

---

##### `sqsParametersInput`<sup>Optional</sup> <a name="sqsParametersInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.sqsParametersInput"></a>

```typescript
public readonly sqsParametersInput: IResolvable | SchedulerScheduleTargetSqsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTarget">SchedulerScheduleTarget</a>

---


### SchedulerScheduleTargetRetryPolicyOutputReference <a name="SchedulerScheduleTargetRetryPolicyOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumEventAgeInSeconds">resetMaximumEventAgeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumRetryAttempts">resetMaximumRetryAttempts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximumEventAgeInSeconds` <a name="resetMaximumEventAgeInSeconds" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumEventAgeInSeconds"></a>

```typescript
public resetMaximumEventAgeInSeconds(): void
```

##### `resetMaximumRetryAttempts` <a name="resetMaximumRetryAttempts" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.resetMaximumRetryAttempts"></a>

```typescript
public resetMaximumRetryAttempts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput">maximumEventAgeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttemptsInput">maximumRetryAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumEventAgeInSecondsInput`<sup>Optional</sup> <a name="maximumEventAgeInSecondsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSecondsInput"></a>

```typescript
public readonly maximumEventAgeInSecondsInput: number;
```

- *Type:* number

---

##### `maximumRetryAttemptsInput`<sup>Optional</sup> <a name="maximumRetryAttemptsInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttemptsInput"></a>

```typescript
public readonly maximumRetryAttemptsInput: number;
```

- *Type:* number

---

##### `maximumEventAgeInSeconds`<sup>Required</sup> <a name="maximumEventAgeInSeconds" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumEventAgeInSeconds"></a>

```typescript
public readonly maximumEventAgeInSeconds: number;
```

- *Type:* number

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="maximumRetryAttempts" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.maximumRetryAttempts"></a>

```typescript
public readonly maximumRetryAttempts: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleTargetRetryPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetRetryPolicy">SchedulerScheduleTargetRetryPolicy</a>

---


### SchedulerScheduleTargetSageMakerPipelineParametersOutputReference <a name="SchedulerScheduleTargetSageMakerPipelineParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.putPipelineParameterList">putPipelineParameterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resetPipelineParameterList">resetPipelineParameterList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPipelineParameterList` <a name="putPipelineParameterList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.putPipelineParameterList"></a>

```typescript
public putPipelineParameterList(value: IResolvable | SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.putPipelineParameterList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>[]

---

##### `resetPipelineParameterList` <a name="resetPipelineParameterList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.resetPipelineParameterList"></a>

```typescript
public resetPipelineParameterList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.pipelineParameterList">pipelineParameterList</a></code> | <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.pipelineParameterListInput">pipelineParameterListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pipelineParameterList`<sup>Required</sup> <a name="pipelineParameterList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.pipelineParameterList"></a>

```typescript
public readonly pipelineParameterList: SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList</a>

---

##### `pipelineParameterListInput`<sup>Optional</sup> <a name="pipelineParameterListInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.pipelineParameterListInput"></a>

```typescript
public readonly pipelineParameterListInput: IResolvable | SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleTargetSageMakerPipelineParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParameters">SchedulerScheduleTargetSageMakerPipelineParameters</a>

---


### SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList <a name="SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.get"></a>

```typescript
public get(index: number): SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>[]

---


### SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference <a name="SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct">SchedulerScheduleTargetSageMakerPipelineParametersPipelineParameterListStruct</a>

---


### SchedulerScheduleTargetSqsParametersOutputReference <a name="SchedulerScheduleTargetSqsParametersOutputReference" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer"></a>

```typescript
import { schedulerSchedule } from '@cdktn/provider-awscc'

new schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resetMessageGroupId">resetMessageGroupId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessageGroupId` <a name="resetMessageGroupId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.resetMessageGroupId"></a>

```typescript
public resetMessageGroupId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupIdInput">messageGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupId">messageGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageGroupIdInput`<sup>Optional</sup> <a name="messageGroupIdInput" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupIdInput"></a>

```typescript
public readonly messageGroupIdInput: string;
```

- *Type:* string

---

##### `messageGroupId`<sup>Required</sup> <a name="messageGroupId" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.messageGroupId"></a>

```typescript
public readonly messageGroupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SchedulerScheduleTargetSqsParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.schedulerSchedule.SchedulerScheduleTargetSqsParameters">SchedulerScheduleTargetSqsParameters</a>

---



