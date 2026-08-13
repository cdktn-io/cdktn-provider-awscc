# `iotwirelessWirelessDeviceImportTask` Submodule <a name="`iotwirelessWirelessDeviceImportTask` Submodule" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessWirelessDeviceImportTask <a name="IotwirelessWirelessDeviceImportTask" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task awscc_iotwireless_wireless_device_import_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer"></a>

```typescript
import { iotwirelessWirelessDeviceImportTask } from '@cdktn/provider-awscc'

new iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask(scope: Construct, id: string, config: IotwirelessWirelessDeviceImportTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig">IotwirelessWirelessDeviceImportTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig">IotwirelessWirelessDeviceImportTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putSidewalk">putSidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSidewalk` <a name="putSidewalk" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putSidewalk"></a>

```typescript
public putSidewalk(value: IotwirelessWirelessDeviceImportTaskSidewalk): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putSidewalk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putTags"></a>

```typescript
public putTags(value: IResolvable | IotwirelessWirelessDeviceImportTaskTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessWirelessDeviceImportTask resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isConstruct"></a>

```typescript
import { iotwirelessWirelessDeviceImportTask } from '@cdktn/provider-awscc'

iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformElement"></a>

```typescript
import { iotwirelessWirelessDeviceImportTask } from '@cdktn/provider-awscc'

iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformResource"></a>

```typescript
import { iotwirelessWirelessDeviceImportTask } from '@cdktn/provider-awscc'

iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport"></a>

```typescript
import { iotwirelessWirelessDeviceImportTask } from '@cdktn/provider-awscc'

iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotwirelessWirelessDeviceImportTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotwirelessWirelessDeviceImportTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotwirelessWirelessDeviceImportTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessWirelessDeviceImportTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.failedImportedDevicesCount">failedImportedDevicesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.initializedImportedDevicesCount">initializedImportedDevicesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.onboardedImportedDevicesCount">onboardedImportedDevicesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.pendingImportedDevicesCount">pendingImportedDevicesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.sidewalk">sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference">IotwirelessWirelessDeviceImportTaskSidewalkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList">IotwirelessWirelessDeviceImportTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.wirelessDeviceImportTaskId">wirelessDeviceImportTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.destinationNameInput">destinationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.sidewalkInput">sidewalkInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.destinationName">destinationName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `failedImportedDevicesCount`<sup>Required</sup> <a name="failedImportedDevicesCount" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.failedImportedDevicesCount"></a>

```typescript
public readonly failedImportedDevicesCount: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initializedImportedDevicesCount`<sup>Required</sup> <a name="initializedImportedDevicesCount" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.initializedImportedDevicesCount"></a>

```typescript
public readonly initializedImportedDevicesCount: number;
```

- *Type:* number

---

##### `onboardedImportedDevicesCount`<sup>Required</sup> <a name="onboardedImportedDevicesCount" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.onboardedImportedDevicesCount"></a>

```typescript
public readonly onboardedImportedDevicesCount: number;
```

- *Type:* number

---

##### `pendingImportedDevicesCount`<sup>Required</sup> <a name="pendingImportedDevicesCount" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.pendingImportedDevicesCount"></a>

```typescript
public readonly pendingImportedDevicesCount: number;
```

- *Type:* number

---

##### `sidewalk`<sup>Required</sup> <a name="sidewalk" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.sidewalk"></a>

```typescript
public readonly sidewalk: IotwirelessWirelessDeviceImportTaskSidewalkOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference">IotwirelessWirelessDeviceImportTaskSidewalkOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tags"></a>

```typescript
public readonly tags: IotwirelessWirelessDeviceImportTaskTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList">IotwirelessWirelessDeviceImportTaskTagsList</a>

---

##### `wirelessDeviceImportTaskId`<sup>Required</sup> <a name="wirelessDeviceImportTaskId" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.wirelessDeviceImportTaskId"></a>

```typescript
public readonly wirelessDeviceImportTaskId: string;
```

- *Type:* string

---

##### `destinationNameInput`<sup>Optional</sup> <a name="destinationNameInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.destinationNameInput"></a>

```typescript
public readonly destinationNameInput: string;
```

- *Type:* string

---

##### `sidewalkInput`<sup>Optional</sup> <a name="sidewalkInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.sidewalkInput"></a>

```typescript
public readonly sidewalkInput: IResolvable | IotwirelessWirelessDeviceImportTaskSidewalk;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotwirelessWirelessDeviceImportTaskTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>[]

---

##### `destinationName`<sup>Required</sup> <a name="destinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.destinationName"></a>

```typescript
public readonly destinationName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessWirelessDeviceImportTaskConfig <a name="IotwirelessWirelessDeviceImportTaskConfig" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.Initializer"></a>

```typescript
import { iotwirelessWirelessDeviceImportTask } from '@cdktn/provider-awscc'

const iotwirelessWirelessDeviceImportTaskConfig: iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.destinationName">destinationName</a></code> | <code>string</code> | Destination Name for import task. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.sidewalk">sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a></code> | sidewalk contain file for created device and role. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `destinationName`<sup>Required</sup> <a name="destinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.destinationName"></a>

```typescript
public readonly destinationName: string;
```

- *Type:* string

Destination Name for import task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#destination_name IotwirelessWirelessDeviceImportTask#destination_name}

---

##### `sidewalk`<sup>Required</sup> <a name="sidewalk" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.sidewalk"></a>

```typescript
public readonly sidewalk: IotwirelessWirelessDeviceImportTaskSidewalk;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a>

sidewalk contain file for created device and role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#sidewalk IotwirelessWirelessDeviceImportTask#sidewalk}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotwirelessWirelessDeviceImportTaskTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#tags IotwirelessWirelessDeviceImportTask#tags}

---

### IotwirelessWirelessDeviceImportTaskSidewalk <a name="IotwirelessWirelessDeviceImportTaskSidewalk" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.Initializer"></a>

```typescript
import { iotwirelessWirelessDeviceImportTask } from '@cdktn/provider-awscc'

const iotwirelessWirelessDeviceImportTaskSidewalk: iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.deviceCreationFile">deviceCreationFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#device_creation_file IotwirelessWirelessDeviceImportTask#device_creation_file}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.role">role</a></code> | <code>string</code> | sidewalk role. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.sidewalkManufacturingSn">sidewalkManufacturingSn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#sidewalk_manufacturing_sn IotwirelessWirelessDeviceImportTask#sidewalk_manufacturing_sn}. |

---

##### `deviceCreationFile`<sup>Optional</sup> <a name="deviceCreationFile" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.deviceCreationFile"></a>

```typescript
public readonly deviceCreationFile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#device_creation_file IotwirelessWirelessDeviceImportTask#device_creation_file}.

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

sidewalk role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#role IotwirelessWirelessDeviceImportTask#role}

---

##### `sidewalkManufacturingSn`<sup>Optional</sup> <a name="sidewalkManufacturingSn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk.property.sidewalkManufacturingSn"></a>

```typescript
public readonly sidewalkManufacturingSn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#sidewalk_manufacturing_sn IotwirelessWirelessDeviceImportTask#sidewalk_manufacturing_sn}.

---

### IotwirelessWirelessDeviceImportTaskTags <a name="IotwirelessWirelessDeviceImportTaskTags" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.Initializer"></a>

```typescript
import { iotwirelessWirelessDeviceImportTask } from '@cdktn/provider-awscc'

const iotwirelessWirelessDeviceImportTaskTags: iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#key IotwirelessWirelessDeviceImportTask#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_wireless_device_import_task#value IotwirelessWirelessDeviceImportTask#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessWirelessDeviceImportTaskSidewalkOutputReference <a name="IotwirelessWirelessDeviceImportTaskSidewalkOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer"></a>

```typescript
import { iotwirelessWirelessDeviceImportTask } from '@cdktn/provider-awscc'

new iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetDeviceCreationFile">resetDeviceCreationFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetSidewalkManufacturingSn">resetSidewalkManufacturingSn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeviceCreationFile` <a name="resetDeviceCreationFile" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetDeviceCreationFile"></a>

```typescript
public resetDeviceCreationFile(): void
```

##### `resetRole` <a name="resetRole" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetSidewalkManufacturingSn` <a name="resetSidewalkManufacturingSn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.resetSidewalkManufacturingSn"></a>

```typescript
public resetSidewalkManufacturingSn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileList">deviceCreationFileList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileInput">deviceCreationFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSnInput">sidewalkManufacturingSnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFile">deviceCreationFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSn">sidewalkManufacturingSn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceCreationFileList`<sup>Required</sup> <a name="deviceCreationFileList" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileList"></a>

```typescript
public readonly deviceCreationFileList: string[];
```

- *Type:* string[]

---

##### `deviceCreationFileInput`<sup>Optional</sup> <a name="deviceCreationFileInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFileInput"></a>

```typescript
public readonly deviceCreationFileInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `sidewalkManufacturingSnInput`<sup>Optional</sup> <a name="sidewalkManufacturingSnInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSnInput"></a>

```typescript
public readonly sidewalkManufacturingSnInput: string;
```

- *Type:* string

---

##### `deviceCreationFile`<sup>Required</sup> <a name="deviceCreationFile" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.deviceCreationFile"></a>

```typescript
public readonly deviceCreationFile: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `sidewalkManufacturingSn`<sup>Required</sup> <a name="sidewalkManufacturingSn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.sidewalkManufacturingSn"></a>

```typescript
public readonly sidewalkManufacturingSn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessWirelessDeviceImportTaskSidewalk;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskSidewalk">IotwirelessWirelessDeviceImportTaskSidewalk</a>

---


### IotwirelessWirelessDeviceImportTaskTagsList <a name="IotwirelessWirelessDeviceImportTaskTagsList" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer"></a>

```typescript
import { iotwirelessWirelessDeviceImportTask } from '@cdktn/provider-awscc'

new iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.get"></a>

```typescript
public get(index: number): IotwirelessWirelessDeviceImportTaskTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessWirelessDeviceImportTaskTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>[]

---


### IotwirelessWirelessDeviceImportTaskTagsOutputReference <a name="IotwirelessWirelessDeviceImportTaskTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer"></a>

```typescript
import { iotwirelessWirelessDeviceImportTask } from '@cdktn/provider-awscc'

new iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessWirelessDeviceImportTaskTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDeviceImportTask.IotwirelessWirelessDeviceImportTaskTags">IotwirelessWirelessDeviceImportTaskTags</a>

---



