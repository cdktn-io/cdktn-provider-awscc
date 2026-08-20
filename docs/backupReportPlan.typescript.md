# `backupReportPlan` Submodule <a name="`backupReportPlan` Submodule" id="@cdktn/provider-awscc.backupReportPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupReportPlan <a name="BackupReportPlan" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan awscc_backup_report_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer"></a>

```typescript
import { backupReportPlan } from '@cdktn/provider-awscc'

new backupReportPlan.BackupReportPlan(scope: Construct, id: string, config: BackupReportPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig">BackupReportPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig">BackupReportPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportDeliveryChannel">putReportDeliveryChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportPlanTags">putReportPlanTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportSetting">putReportSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetReportPlanDescription">resetReportPlanDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetReportPlanName">resetReportPlanName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetReportPlanTags">resetReportPlanTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReportDeliveryChannel` <a name="putReportDeliveryChannel" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportDeliveryChannel"></a>

```typescript
public putReportDeliveryChannel(value: BackupReportPlanReportDeliveryChannel): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportDeliveryChannel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

---

##### `putReportPlanTags` <a name="putReportPlanTags" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportPlanTags"></a>

```typescript
public putReportPlanTags(value: IResolvable | BackupReportPlanReportPlanTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportPlanTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>[]

---

##### `putReportSetting` <a name="putReportSetting" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportSetting"></a>

```typescript
public putReportSetting(value: BackupReportPlanReportSetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.putReportSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

---

##### `resetReportPlanDescription` <a name="resetReportPlanDescription" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetReportPlanDescription"></a>

```typescript
public resetReportPlanDescription(): void
```

##### `resetReportPlanName` <a name="resetReportPlanName" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetReportPlanName"></a>

```typescript
public resetReportPlanName(): void
```

##### `resetReportPlanTags` <a name="resetReportPlanTags" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.resetReportPlanTags"></a>

```typescript
public resetReportPlanTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BackupReportPlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isConstruct"></a>

```typescript
import { backupReportPlan } from '@cdktn/provider-awscc'

backupReportPlan.BackupReportPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isTerraformElement"></a>

```typescript
import { backupReportPlan } from '@cdktn/provider-awscc'

backupReportPlan.BackupReportPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isTerraformResource"></a>

```typescript
import { backupReportPlan } from '@cdktn/provider-awscc'

backupReportPlan.BackupReportPlan.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.generateConfigForImport"></a>

```typescript
import { backupReportPlan } from '@cdktn/provider-awscc'

backupReportPlan.BackupReportPlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BackupReportPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupReportPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupReportPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BackupReportPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportDeliveryChannel">reportDeliveryChannel</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference">BackupReportPlanReportDeliveryChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanArn">reportPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanTags">reportPlanTags</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList">BackupReportPlanReportPlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportSetting">reportSetting</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference">BackupReportPlanReportSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportDeliveryChannelInput">reportDeliveryChannelInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanDescriptionInput">reportPlanDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanNameInput">reportPlanNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanTagsInput">reportPlanTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportSettingInput">reportSettingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanDescription">reportPlanDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanName">reportPlanName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `reportDeliveryChannel`<sup>Required</sup> <a name="reportDeliveryChannel" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportDeliveryChannel"></a>

```typescript
public readonly reportDeliveryChannel: BackupReportPlanReportDeliveryChannelOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference">BackupReportPlanReportDeliveryChannelOutputReference</a>

---

##### `reportPlanArn`<sup>Required</sup> <a name="reportPlanArn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanArn"></a>

```typescript
public readonly reportPlanArn: string;
```

- *Type:* string

---

##### `reportPlanTags`<sup>Required</sup> <a name="reportPlanTags" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanTags"></a>

```typescript
public readonly reportPlanTags: BackupReportPlanReportPlanTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList">BackupReportPlanReportPlanTagsList</a>

---

##### `reportSetting`<sup>Required</sup> <a name="reportSetting" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportSetting"></a>

```typescript
public readonly reportSetting: BackupReportPlanReportSettingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference">BackupReportPlanReportSettingOutputReference</a>

---

##### `reportDeliveryChannelInput`<sup>Optional</sup> <a name="reportDeliveryChannelInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportDeliveryChannelInput"></a>

```typescript
public readonly reportDeliveryChannelInput: IResolvable | BackupReportPlanReportDeliveryChannel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

---

##### `reportPlanDescriptionInput`<sup>Optional</sup> <a name="reportPlanDescriptionInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanDescriptionInput"></a>

```typescript
public readonly reportPlanDescriptionInput: string;
```

- *Type:* string

---

##### `reportPlanNameInput`<sup>Optional</sup> <a name="reportPlanNameInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanNameInput"></a>

```typescript
public readonly reportPlanNameInput: string;
```

- *Type:* string

---

##### `reportPlanTagsInput`<sup>Optional</sup> <a name="reportPlanTagsInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanTagsInput"></a>

```typescript
public readonly reportPlanTagsInput: IResolvable | BackupReportPlanReportPlanTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>[]

---

##### `reportSettingInput`<sup>Optional</sup> <a name="reportSettingInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportSettingInput"></a>

```typescript
public readonly reportSettingInput: IResolvable | BackupReportPlanReportSetting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

---

##### `reportPlanDescription`<sup>Required</sup> <a name="reportPlanDescription" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanDescription"></a>

```typescript
public readonly reportPlanDescription: string;
```

- *Type:* string

---

##### `reportPlanName`<sup>Required</sup> <a name="reportPlanName" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.reportPlanName"></a>

```typescript
public readonly reportPlanName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupReportPlanConfig <a name="BackupReportPlanConfig" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.Initializer"></a>

```typescript
import { backupReportPlan } from '@cdktn/provider-awscc'

const backupReportPlanConfig: backupReportPlan.BackupReportPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportDeliveryChannel">reportDeliveryChannel</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportSetting">reportSetting</a></code> | <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | Identifies the report template for the report. Reports are built using a report template. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportPlanDescription">reportPlanDescription</a></code> | <code>string</code> | An optional description of the report plan with a maximum of 1,024 characters. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportPlanName">reportPlanName</a></code> | <code>string</code> | The unique name of the report plan. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportPlanTags">reportPlanTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>[]</code> | Metadata that you can assign to help organize the report plans that you create. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `reportDeliveryChannel`<sup>Required</sup> <a name="reportDeliveryChannel" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportDeliveryChannel"></a>

```typescript
public readonly reportDeliveryChannel: BackupReportPlanReportDeliveryChannel;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#report_delivery_channel BackupReportPlan#report_delivery_channel}

---

##### `reportSetting`<sup>Required</sup> <a name="reportSetting" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportSetting"></a>

```typescript
public readonly reportSetting: BackupReportPlanReportSetting;
```

- *Type:* <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

Identifies the report template for the report. Reports are built using a report template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#report_setting BackupReportPlan#report_setting}

---

##### `reportPlanDescription`<sup>Optional</sup> <a name="reportPlanDescription" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportPlanDescription"></a>

```typescript
public readonly reportPlanDescription: string;
```

- *Type:* string

An optional description of the report plan with a maximum of 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#report_plan_description BackupReportPlan#report_plan_description}

---

##### `reportPlanName`<sup>Optional</sup> <a name="reportPlanName" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportPlanName"></a>

```typescript
public readonly reportPlanName: string;
```

- *Type:* string

The unique name of the report plan.

The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#report_plan_name BackupReportPlan#report_plan_name}

---

##### `reportPlanTags`<sup>Optional</sup> <a name="reportPlanTags" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanConfig.property.reportPlanTags"></a>

```typescript
public readonly reportPlanTags: IResolvable | BackupReportPlanReportPlanTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>[]

Metadata that you can assign to help organize the report plans that you create.

Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#report_plan_tags BackupReportPlan#report_plan_tags}

---

### BackupReportPlanReportDeliveryChannel <a name="BackupReportPlanReportDeliveryChannel" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.Initializer"></a>

```typescript
import { backupReportPlan } from '@cdktn/provider-awscc'

const backupReportPlanReportDeliveryChannel: backupReportPlan.BackupReportPlanReportDeliveryChannel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | The unique name of the S3 bucket that receives your reports. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.formats">formats</a></code> | <code>string[]</code> | A list of the format of your reports: CSV, JSON, or both. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | The prefix for where AWS Backup Audit Manager delivers your reports to Amazon S3. |

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

The unique name of the S3 bucket that receives your reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#s3_bucket_name BackupReportPlan#s3_bucket_name}

---

##### `formats`<sup>Optional</sup> <a name="formats" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.formats"></a>

```typescript
public readonly formats: string[];
```

- *Type:* string[]

A list of the format of your reports: CSV, JSON, or both.

If not specified, the default format is CSV.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#formats BackupReportPlan#formats}

---

##### `s3KeyPrefix`<sup>Optional</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

The prefix for where AWS Backup Audit Manager delivers your reports to Amazon S3.

The prefix is this part of the following path: s3://your-bucket-name/prefix/Backup/us-west-2/year/month/day/report-name. If not specified, there is no prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#s3_key_prefix BackupReportPlan#s3_key_prefix}

---

### BackupReportPlanReportPlanTags <a name="BackupReportPlanReportPlanTags" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags.Initializer"></a>

```typescript
import { backupReportPlan } from '@cdktn/provider-awscc'

const backupReportPlanReportPlanTags: backupReportPlan.BackupReportPlanReportPlanTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#key BackupReportPlan#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#value BackupReportPlan#value}

---

### BackupReportPlanReportSetting <a name="BackupReportPlanReportSetting" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.Initializer"></a>

```typescript
import { backupReportPlan } from '@cdktn/provider-awscc'

const backupReportPlanReportSetting: backupReportPlan.BackupReportPlanReportSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.reportTemplate">reportTemplate</a></code> | <code>string</code> | Identifies the report template for the report. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.accounts">accounts</a></code> | <code>string[]</code> | The list of AWS accounts that a report covers. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.frameworkArns">frameworkArns</a></code> | <code>string[]</code> | The Amazon Resource Names (ARNs) of the frameworks a report covers. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.organizationUnits">organizationUnits</a></code> | <code>string[]</code> | The list of AWS organization units that a report covers. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.regions">regions</a></code> | <code>string[]</code> | The list of AWS regions that a report covers. |

---

##### `reportTemplate`<sup>Required</sup> <a name="reportTemplate" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.reportTemplate"></a>

```typescript
public readonly reportTemplate: string;
```

- *Type:* string

Identifies the report template for the report.

Reports are built using a report template. The report templates are: `BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#report_template BackupReportPlan#report_template}

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

The list of AWS accounts that a report covers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#accounts BackupReportPlan#accounts}

---

##### `frameworkArns`<sup>Optional</sup> <a name="frameworkArns" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.frameworkArns"></a>

```typescript
public readonly frameworkArns: string[];
```

- *Type:* string[]

The Amazon Resource Names (ARNs) of the frameworks a report covers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#framework_arns BackupReportPlan#framework_arns}

---

##### `organizationUnits`<sup>Optional</sup> <a name="organizationUnits" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.organizationUnits"></a>

```typescript
public readonly organizationUnits: string[];
```

- *Type:* string[]

The list of AWS organization units that a report covers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#organization_units BackupReportPlan#organization_units}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

The list of AWS regions that a report covers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_report_plan#regions BackupReportPlan#regions}

---

## Classes <a name="Classes" id="Classes"></a>

### BackupReportPlanReportDeliveryChannelOutputReference <a name="BackupReportPlanReportDeliveryChannelOutputReference" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer"></a>

```typescript
import { backupReportPlan } from '@cdktn/provider-awscc'

new backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetFormats">resetFormats</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetS3KeyPrefix">resetS3KeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFormats` <a name="resetFormats" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetFormats"></a>

```typescript
public resetFormats(): void
```

##### `resetS3KeyPrefix` <a name="resetS3KeyPrefix" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.resetS3KeyPrefix"></a>

```typescript
public resetS3KeyPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formatsInput">formatsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefixInput">s3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formats">formats</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefix">s3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `formatsInput`<sup>Optional</sup> <a name="formatsInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formatsInput"></a>

```typescript
public readonly formatsInput: string[];
```

- *Type:* string[]

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketNameInput"></a>

```typescript
public readonly s3BucketNameInput: string;
```

- *Type:* string

---

##### `s3KeyPrefixInput`<sup>Optional</sup> <a name="s3KeyPrefixInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefixInput"></a>

```typescript
public readonly s3KeyPrefixInput: string;
```

- *Type:* string

---

##### `formats`<sup>Required</sup> <a name="formats" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.formats"></a>

```typescript
public readonly formats: string[];
```

- *Type:* string[]

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3KeyPrefix`<sup>Required</sup> <a name="s3KeyPrefix" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.s3KeyPrefix"></a>

```typescript
public readonly s3KeyPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupReportPlanReportDeliveryChannel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportDeliveryChannel">BackupReportPlanReportDeliveryChannel</a>

---


### BackupReportPlanReportPlanTagsList <a name="BackupReportPlanReportPlanTagsList" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer"></a>

```typescript
import { backupReportPlan } from '@cdktn/provider-awscc'

new backupReportPlan.BackupReportPlanReportPlanTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.get"></a>

```typescript
public get(index: number): BackupReportPlanReportPlanTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupReportPlanReportPlanTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>[]

---


### BackupReportPlanReportPlanTagsOutputReference <a name="BackupReportPlanReportPlanTagsOutputReference" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer"></a>

```typescript
import { backupReportPlan } from '@cdktn/provider-awscc'

new backupReportPlan.BackupReportPlanReportPlanTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupReportPlanReportPlanTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportPlanTags">BackupReportPlanReportPlanTags</a>

---


### BackupReportPlanReportSettingOutputReference <a name="BackupReportPlanReportSettingOutputReference" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer"></a>

```typescript
import { backupReportPlan } from '@cdktn/provider-awscc'

new backupReportPlan.BackupReportPlanReportSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetAccounts">resetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetFrameworkArns">resetFrameworkArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetOrganizationUnits">resetOrganizationUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetRegions">resetRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccounts` <a name="resetAccounts" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetAccounts"></a>

```typescript
public resetAccounts(): void
```

##### `resetFrameworkArns` <a name="resetFrameworkArns" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetFrameworkArns"></a>

```typescript
public resetFrameworkArns(): void
```

##### `resetOrganizationUnits` <a name="resetOrganizationUnits" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetOrganizationUnits"></a>

```typescript
public resetOrganizationUnits(): void
```

##### `resetRegions` <a name="resetRegions" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.resetRegions"></a>

```typescript
public resetRegions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.accountsInput">accountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArnsInput">frameworkArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.organizationUnitsInput">organizationUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplateInput">reportTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.accounts">accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArns">frameworkArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.organizationUnits">organizationUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplate">reportTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountsInput`<sup>Optional</sup> <a name="accountsInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.accountsInput"></a>

```typescript
public readonly accountsInput: string[];
```

- *Type:* string[]

---

##### `frameworkArnsInput`<sup>Optional</sup> <a name="frameworkArnsInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArnsInput"></a>

```typescript
public readonly frameworkArnsInput: string[];
```

- *Type:* string[]

---

##### `organizationUnitsInput`<sup>Optional</sup> <a name="organizationUnitsInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.organizationUnitsInput"></a>

```typescript
public readonly organizationUnitsInput: string[];
```

- *Type:* string[]

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `reportTemplateInput`<sup>Optional</sup> <a name="reportTemplateInput" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplateInput"></a>

```typescript
public readonly reportTemplateInput: string;
```

- *Type:* string

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

---

##### `frameworkArns`<sup>Required</sup> <a name="frameworkArns" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.frameworkArns"></a>

```typescript
public readonly frameworkArns: string[];
```

- *Type:* string[]

---

##### `organizationUnits`<sup>Required</sup> <a name="organizationUnits" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.organizationUnits"></a>

```typescript
public readonly organizationUnits: string[];
```

- *Type:* string[]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `reportTemplate`<sup>Required</sup> <a name="reportTemplate" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.reportTemplate"></a>

```typescript
public readonly reportTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupReportPlanReportSetting;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.backupReportPlan.BackupReportPlanReportSetting">BackupReportPlanReportSetting</a>

---



