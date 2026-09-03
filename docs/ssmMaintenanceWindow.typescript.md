# `ssmMaintenanceWindow` Submodule <a name="`ssmMaintenanceWindow` Submodule" id="@cdktn/provider-awscc.ssmMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmMaintenanceWindow <a name="SsmMaintenanceWindow" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_maintenance_window awscc_ssm_maintenance_window}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer"></a>

```typescript
import { ssmMaintenanceWindow } from '@cdktn/provider-awscc'

new ssmMaintenanceWindow.SsmMaintenanceWindow(scope: Construct, id: string, config: SsmMaintenanceWindowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig">SsmMaintenanceWindowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig">SsmMaintenanceWindowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetEndDate">resetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleOffset">resetScheduleOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleTimezone">resetScheduleTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetStartDate">resetStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.putTags"></a>

```typescript
public putTags(value: IResolvable | SsmMaintenanceWindowTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEndDate` <a name="resetEndDate" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetEndDate"></a>

```typescript
public resetEndDate(): void
```

##### `resetScheduleOffset` <a name="resetScheduleOffset" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleOffset"></a>

```typescript
public resetScheduleOffset(): void
```

##### `resetScheduleTimezone` <a name="resetScheduleTimezone" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetScheduleTimezone"></a>

```typescript
public resetScheduleTimezone(): void
```

##### `resetStartDate` <a name="resetStartDate" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetStartDate"></a>

```typescript
public resetStartDate(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmMaintenanceWindow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct"></a>

```typescript
import { ssmMaintenanceWindow } from '@cdktn/provider-awscc'

ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement"></a>

```typescript
import { ssmMaintenanceWindow } from '@cdktn/provider-awscc'

ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource"></a>

```typescript
import { ssmMaintenanceWindow } from '@cdktn/provider-awscc'

ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport"></a>

```typescript
import { ssmMaintenanceWindow } from '@cdktn/provider-awscc'

ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SsmMaintenanceWindow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmMaintenanceWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmMaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmMaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList">SsmMaintenanceWindowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.windowId">windowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargetsInput">allowUnassociatedTargetsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoffInput">cutoffInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDateInput">endDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffsetInput">scheduleOffsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezoneInput">scheduleTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDateInput">startDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargets">allowUnassociatedTargets</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoff">cutoff</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffset">scheduleOffset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezone">scheduleTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tags"></a>

```typescript
public readonly tags: SsmMaintenanceWindowTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList">SsmMaintenanceWindowTagsList</a>

---

##### `windowId`<sup>Required</sup> <a name="windowId" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.windowId"></a>

```typescript
public readonly windowId: string;
```

- *Type:* string

---

##### `allowUnassociatedTargetsInput`<sup>Optional</sup> <a name="allowUnassociatedTargetsInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargetsInput"></a>

```typescript
public readonly allowUnassociatedTargetsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cutoffInput`<sup>Optional</sup> <a name="cutoffInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoffInput"></a>

```typescript
public readonly cutoffInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDateInput"></a>

```typescript
public readonly endDateInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `scheduleOffsetInput`<sup>Optional</sup> <a name="scheduleOffsetInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffsetInput"></a>

```typescript
public readonly scheduleOffsetInput: number;
```

- *Type:* number

---

##### `scheduleTimezoneInput`<sup>Optional</sup> <a name="scheduleTimezoneInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezoneInput"></a>

```typescript
public readonly scheduleTimezoneInput: string;
```

- *Type:* string

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDateInput"></a>

```typescript
public readonly startDateInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SsmMaintenanceWindowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a>[]

---

##### `allowUnassociatedTargets`<sup>Required</sup> <a name="allowUnassociatedTargets" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.allowUnassociatedTargets"></a>

```typescript
public readonly allowUnassociatedTargets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cutoff`<sup>Required</sup> <a name="cutoff" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.cutoff"></a>

```typescript
public readonly cutoff: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `scheduleOffset`<sup>Required</sup> <a name="scheduleOffset" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleOffset"></a>

```typescript
public readonly scheduleOffset: number;
```

- *Type:* number

---

##### `scheduleTimezone`<sup>Required</sup> <a name="scheduleTimezone" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.scheduleTimezone"></a>

```typescript
public readonly scheduleTimezone: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmMaintenanceWindowConfig <a name="SsmMaintenanceWindowConfig" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.Initializer"></a>

```typescript
import { ssmMaintenanceWindow } from '@cdktn/provider-awscc'

const ssmMaintenanceWindowConfig: ssmMaintenanceWindow.SsmMaintenanceWindowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.allowUnassociatedTargets">allowUnassociatedTargets</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables a maintenance window task to run on managed instances, even if you have not registered those instances as targets. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.cutoff">cutoff</a></code> | <code>number</code> | The number of hours before the end of the maintenance window that AWS Systems Manager stops scheduling new tasks for execution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.duration">duration</a></code> | <code>number</code> | The duration of the maintenance window in hours. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.name">name</a></code> | <code>string</code> | The name of the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.schedule">schedule</a></code> | <code>string</code> | The schedule of the maintenance window in the form of a cron or rate expression. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.description">description</a></code> | <code>string</code> | A description of the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.endDate">endDate</a></code> | <code>string</code> | The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleOffset">scheduleOffset</a></code> | <code>number</code> | The number of days to wait to run a maintenance window after the scheduled cron expression date and time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleTimezone">scheduleTimezone</a></code> | <code>string</code> | The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.startDate">startDate</a></code> | <code>string</code> | The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a>[]</code> | Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allowUnassociatedTargets`<sup>Required</sup> <a name="allowUnassociatedTargets" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.allowUnassociatedTargets"></a>

```typescript
public readonly allowUnassociatedTargets: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables a maintenance window task to run on managed instances, even if you have not registered those instances as targets.

If enabled, then you must specify the unregistered instances (by instance ID) when you register a task with the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_maintenance_window#allow_unassociated_targets SsmMaintenanceWindow#allow_unassociated_targets}

---

##### `cutoff`<sup>Required</sup> <a name="cutoff" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.cutoff"></a>

```typescript
public readonly cutoff: number;
```

- *Type:* number

The number of hours before the end of the maintenance window that AWS Systems Manager stops scheduling new tasks for execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_maintenance_window#cutoff SsmMaintenanceWindow#cutoff}

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

The duration of the maintenance window in hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_maintenance_window#duration SsmMaintenanceWindow#duration}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_maintenance_window#name SsmMaintenanceWindow#name}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

The schedule of the maintenance window in the form of a cron or rate expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_maintenance_window#schedule SsmMaintenanceWindow#schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_maintenance_window#description SsmMaintenanceWindow#description}

---

##### `endDate`<sup>Optional</sup> <a name="endDate" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_maintenance_window#end_date SsmMaintenanceWindow#end_date}

---

##### `scheduleOffset`<sup>Optional</sup> <a name="scheduleOffset" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleOffset"></a>

```typescript
public readonly scheduleOffset: number;
```

- *Type:* number

The number of days to wait to run a maintenance window after the scheduled cron expression date and time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_maintenance_window#schedule_offset SsmMaintenanceWindow#schedule_offset}

---

##### `scheduleTimezone`<sup>Optional</sup> <a name="scheduleTimezone" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.scheduleTimezone"></a>

```typescript
public readonly scheduleTimezone: string;
```

- *Type:* string

The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_maintenance_window#schedule_timezone SsmMaintenanceWindow#schedule_timezone}

---

##### `startDate`<sup>Optional</sup> <a name="startDate" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active.

StartDate allows you to delay activation of the maintenance window until the specified future date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_maintenance_window#start_date SsmMaintenanceWindow#start_date}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SsmMaintenanceWindowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a>[]

Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs).

Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a maintenance window to identify the type of tasks it will run, the types of targets, and the environment it will run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_maintenance_window#tags SsmMaintenanceWindow#tags}

---

### SsmMaintenanceWindowTags <a name="SsmMaintenanceWindowTags" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags.Initializer"></a>

```typescript
import { ssmMaintenanceWindow } from '@cdktn/provider-awscc'

const ssmMaintenanceWindowTags: ssmMaintenanceWindow.SsmMaintenanceWindowTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags.property.key">key</a></code> | <code>string</code> | The name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_maintenance_window#key SsmMaintenanceWindow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ssm_maintenance_window#value SsmMaintenanceWindow#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmMaintenanceWindowTagsList <a name="SsmMaintenanceWindowTagsList" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer"></a>

```typescript
import { ssmMaintenanceWindow } from '@cdktn/provider-awscc'

new ssmMaintenanceWindow.SsmMaintenanceWindowTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.get"></a>

```typescript
public get(index: number): SsmMaintenanceWindowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmMaintenanceWindowTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a>[]

---


### SsmMaintenanceWindowTagsOutputReference <a name="SsmMaintenanceWindowTagsOutputReference" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer"></a>

```typescript
import { ssmMaintenanceWindow } from '@cdktn/provider-awscc'

new ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmMaintenanceWindowTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssmMaintenanceWindow.SsmMaintenanceWindowTags">SsmMaintenanceWindowTags</a>

---



