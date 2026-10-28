# `timestreamInfluxDbBackup` Submodule <a name="`timestreamInfluxDbBackup` Submodule" id="@cdktn/provider-awscc.timestreamInfluxDbBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreamInfluxDbBackup <a name="TimestreamInfluxDbBackup" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup awscc_timestream_influx_db_backup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer"></a>

```typescript
import { timestreamInfluxDbBackup } from '@cdktn/provider-awscc'

new timestreamInfluxDbBackup.TimestreamInfluxDbBackup(scope: Construct, id: string, config: TimestreamInfluxDbBackupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig">TimestreamInfluxDbBackupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig">TimestreamInfluxDbBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.putTags"></a>

```typescript
public putTags(value: IResolvable | TimestreamInfluxDbBackupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a>[]

---

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.resetRetentionDays"></a>

```typescript
public resetRetentionDays(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TimestreamInfluxDbBackup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isConstruct"></a>

```typescript
import { timestreamInfluxDbBackup } from '@cdktn/provider-awscc'

timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isTerraformElement"></a>

```typescript
import { timestreamInfluxDbBackup } from '@cdktn/provider-awscc'

timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isTerraformResource"></a>

```typescript
import { timestreamInfluxDbBackup } from '@cdktn/provider-awscc'

timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.generateConfigForImport"></a>

```typescript
import { timestreamInfluxDbBackup } from '@cdktn/provider-awscc'

timestreamInfluxDbBackup.TimestreamInfluxDbBackup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a TimestreamInfluxDbBackup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TimestreamInfluxDbBackup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TimestreamInfluxDbBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TimestreamInfluxDbBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.allocatedStorage">allocatedStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.clusterConfiguration">clusterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference">TimestreamInfluxDbBackupClusterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbInstanceType">dbInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbParameterGroupId">dbParameterGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbStorageType">dbStorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.engineType">engineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.expiresAfter">expiresAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.failoverMode">failoverMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.influxAuthParametersSecretArn">influxAuthParametersSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.influxDbBackupId">influxDbBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference">TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference">TimestreamInfluxDbBackupMaintenanceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.publiclyAccessible">publiclyAccessible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList">TimestreamInfluxDbBackupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbResourceIdInput">dbResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbResourceId">dbResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: number;
```

- *Type:* number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `clusterConfiguration`<sup>Required</sup> <a name="clusterConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.clusterConfiguration"></a>

```typescript
public readonly clusterConfiguration: TimestreamInfluxDbBackupClusterConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference">TimestreamInfluxDbBackupClusterConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dbInstanceType`<sup>Required</sup> <a name="dbInstanceType" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbInstanceType"></a>

```typescript
public readonly dbInstanceType: string;
```

- *Type:* string

---

##### `dbParameterGroupId`<sup>Required</sup> <a name="dbParameterGroupId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbParameterGroupId"></a>

```typescript
public readonly dbParameterGroupId: string;
```

- *Type:* string

---

##### `dbStorageType`<sup>Required</sup> <a name="dbStorageType" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbStorageType"></a>

```typescript
public readonly dbStorageType: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `engineType`<sup>Required</sup> <a name="engineType" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.engineType"></a>

```typescript
public readonly engineType: string;
```

- *Type:* string

---

##### `expiresAfter`<sup>Required</sup> <a name="expiresAfter" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.expiresAfter"></a>

```typescript
public readonly expiresAfter: string;
```

- *Type:* string

---

##### `failoverMode`<sup>Required</sup> <a name="failoverMode" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.failoverMode"></a>

```typescript
public readonly failoverMode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `influxAuthParametersSecretArn`<sup>Required</sup> <a name="influxAuthParametersSecretArn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.influxAuthParametersSecretArn"></a>

```typescript
public readonly influxAuthParametersSecretArn: string;
```

- *Type:* string

---

##### `influxDbBackupId`<sup>Required</sup> <a name="influxDbBackupId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.influxDbBackupId"></a>

```typescript
public readonly influxDbBackupId: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `logDeliveryConfiguration`<sup>Required</sup> <a name="logDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.logDeliveryConfiguration"></a>

```typescript
public readonly logDeliveryConfiguration: TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference">TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference</a>

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.maintenanceSchedule"></a>

```typescript
public readonly maintenanceSchedule: TimestreamInfluxDbBackupMaintenanceScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference">TimestreamInfluxDbBackupMaintenanceScheduleOutputReference</a>

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.tags"></a>

```typescript
public readonly tags: TimestreamInfluxDbBackupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList">TimestreamInfluxDbBackupTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.vpcSubnetIds"></a>

```typescript
public readonly vpcSubnetIds: string[];
```

- *Type:* string[]

---

##### `dbResourceIdInput`<sup>Optional</sup> <a name="dbResourceIdInput" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbResourceIdInput"></a>

```typescript
public readonly dbResourceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | TimestreamInfluxDbBackupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a>[]

---

##### `dbResourceId`<sup>Required</sup> <a name="dbResourceId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.dbResourceId"></a>

```typescript
public readonly dbResourceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreamInfluxDbBackupClusterConfiguration <a name="TimestreamInfluxDbBackupClusterConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfiguration.Initializer"></a>

```typescript
import { timestreamInfluxDbBackup } from '@cdktn/provider-awscc'

const timestreamInfluxDbBackupClusterConfiguration: timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfiguration = { ... }
```


### TimestreamInfluxDbBackupConfig <a name="TimestreamInfluxDbBackupConfig" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.Initializer"></a>

```typescript
import { timestreamInfluxDbBackup } from '@cdktn/provider-awscc'

const timestreamInfluxDbBackupConfig: timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.dbResourceId">dbResourceId</a></code> | <code>string</code> | The id of the DB instance or DB cluster to back up. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.name">name</a></code> | <code>string</code> | The name of the backup. Must be unique within the account and region. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.retentionDays">retentionDays</a></code> | <code>number</code> | The number of days to retain the backup. Valid values are 1 to 3650. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a>[]</code> | A list of key-value pairs to associate with the backup. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dbResourceId`<sup>Required</sup> <a name="dbResourceId" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.dbResourceId"></a>

```typescript
public readonly dbResourceId: string;
```

- *Type:* string

The id of the DB instance or DB cluster to back up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#db_resource_id TimestreamInfluxDbBackup#db_resource_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the backup. Must be unique within the account and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#name TimestreamInfluxDbBackup#name}

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

The number of days to retain the backup. Valid values are 1 to 3650.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#retention_days TimestreamInfluxDbBackup#retention_days}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | TimestreamInfluxDbBackupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a>[]

A list of key-value pairs to associate with the backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#tags TimestreamInfluxDbBackup#tags}

---

### TimestreamInfluxDbBackupLogDeliveryConfiguration <a name="TimestreamInfluxDbBackupLogDeliveryConfiguration" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfiguration.Initializer"></a>

```typescript
import { timestreamInfluxDbBackup } from '@cdktn/provider-awscc'

const timestreamInfluxDbBackupLogDeliveryConfiguration: timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfiguration = { ... }
```


### TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration <a name="TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration.Initializer"></a>

```typescript
import { timestreamInfluxDbBackup } from '@cdktn/provider-awscc'

const timestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration: timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration = { ... }
```


### TimestreamInfluxDbBackupMaintenanceSchedule <a name="TimestreamInfluxDbBackupMaintenanceSchedule" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceSchedule.Initializer"></a>

```typescript
import { timestreamInfluxDbBackup } from '@cdktn/provider-awscc'

const timestreamInfluxDbBackupMaintenanceSchedule: timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceSchedule = { ... }
```


### TimestreamInfluxDbBackupTags <a name="TimestreamInfluxDbBackupTags" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags.Initializer"></a>

```typescript
import { timestreamInfluxDbBackup } from '@cdktn/provider-awscc'

const timestreamInfluxDbBackupTags: timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#key TimestreamInfluxDbBackup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/timestream_influx_db_backup#value TimestreamInfluxDbBackup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreamInfluxDbBackupClusterConfigurationOutputReference <a name="TimestreamInfluxDbBackupClusterConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer"></a>

```typescript
import { timestreamInfluxDbBackup } from '@cdktn/provider-awscc'

new timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.dedicatedCompactor">dedicatedCompactor</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.ingestQueryInstances">ingestQueryInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.queryOnlyInstances">queryOnlyInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfiguration">TimestreamInfluxDbBackupClusterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dedicatedCompactor`<sup>Required</sup> <a name="dedicatedCompactor" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.dedicatedCompactor"></a>

```typescript
public readonly dedicatedCompactor: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ingestQueryInstances`<sup>Required</sup> <a name="ingestQueryInstances" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.ingestQueryInstances"></a>

```typescript
public readonly ingestQueryInstances: number;
```

- *Type:* number

---

##### `queryOnlyInstances`<sup>Required</sup> <a name="queryOnlyInstances" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.queryOnlyInstances"></a>

```typescript
public readonly queryOnlyInstances: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TimestreamInfluxDbBackupClusterConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupClusterConfiguration">TimestreamInfluxDbBackupClusterConfiguration</a>

---


### TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference <a name="TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer"></a>

```typescript
import { timestreamInfluxDbBackup } from '@cdktn/provider-awscc'

new timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfiguration">TimestreamInfluxDbBackupLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference">TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TimestreamInfluxDbBackupLogDeliveryConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfiguration">TimestreamInfluxDbBackupLogDeliveryConfiguration</a>

---


### TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference <a name="TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { timestreamInfluxDbBackup } from '@cdktn/provider-awscc'

new timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration">TimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration</a>

---


### TimestreamInfluxDbBackupMaintenanceScheduleOutputReference <a name="TimestreamInfluxDbBackupMaintenanceScheduleOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer"></a>

```typescript
import { timestreamInfluxDbBackup } from '@cdktn/provider-awscc'

new timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceSchedule">TimestreamInfluxDbBackupMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TimestreamInfluxDbBackupMaintenanceSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupMaintenanceSchedule">TimestreamInfluxDbBackupMaintenanceSchedule</a>

---


### TimestreamInfluxDbBackupTagsList <a name="TimestreamInfluxDbBackupTagsList" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.Initializer"></a>

```typescript
import { timestreamInfluxDbBackup } from '@cdktn/provider-awscc'

new timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.get"></a>

```typescript
public get(index: number): TimestreamInfluxDbBackupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamInfluxDbBackupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a>[]

---


### TimestreamInfluxDbBackupTagsOutputReference <a name="TimestreamInfluxDbBackupTagsOutputReference" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.Initializer"></a>

```typescript
import { timestreamInfluxDbBackup } from '@cdktn/provider-awscc'

new timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TimestreamInfluxDbBackupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.timestreamInfluxDbBackup.TimestreamInfluxDbBackupTags">TimestreamInfluxDbBackupTags</a>

---



