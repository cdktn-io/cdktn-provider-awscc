# `connectDataTableRecord` Submodule <a name="`connectDataTableRecord` Submodule" id="@cdktn/provider-awscc.connectDataTableRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectDataTableRecord <a name="ConnectDataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record awscc_connect_data_table_record}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer"></a>

```typescript
import { connectDataTableRecord } from '@cdktn/provider-awscc'

new connectDataTableRecord.ConnectDataTableRecord(scope: Construct, id: string, config: ConnectDataTableRecordConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig">ConnectDataTableRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig">ConnectDataTableRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.putDataTableRecord">putDataTableRecord</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataTableRecord` <a name="putDataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.putDataTableRecord"></a>

```typescript
public putDataTableRecord(value: ConnectDataTableRecordDataTableRecord): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.putDataTableRecord.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectDataTableRecord resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isConstruct"></a>

```typescript
import { connectDataTableRecord } from '@cdktn/provider-awscc'

connectDataTableRecord.ConnectDataTableRecord.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformElement"></a>

```typescript
import { connectDataTableRecord } from '@cdktn/provider-awscc'

connectDataTableRecord.ConnectDataTableRecord.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformResource"></a>

```typescript
import { connectDataTableRecord } from '@cdktn/provider-awscc'

connectDataTableRecord.ConnectDataTableRecord.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport"></a>

```typescript
import { connectDataTableRecord } from '@cdktn/provider-awscc'

connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectDataTableRecord resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectDataTableRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectDataTableRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectDataTableRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecord">dataTableRecord</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference">ConnectDataTableRecordDataTableRecordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.recordId">recordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArnInput">dataTableArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecordInput">dataTableRecordInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArn">dataTableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataTableRecord`<sup>Required</sup> <a name="dataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecord"></a>

```typescript
public readonly dataTableRecord: ConnectDataTableRecordDataTableRecordOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference">ConnectDataTableRecordDataTableRecordOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `recordId`<sup>Required</sup> <a name="recordId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.recordId"></a>

```typescript
public readonly recordId: string;
```

- *Type:* string

---

##### `dataTableArnInput`<sup>Optional</sup> <a name="dataTableArnInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArnInput"></a>

```typescript
public readonly dataTableArnInput: string;
```

- *Type:* string

---

##### `dataTableRecordInput`<sup>Optional</sup> <a name="dataTableRecordInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecordInput"></a>

```typescript
public readonly dataTableRecordInput: IResolvable | ConnectDataTableRecordDataTableRecord;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `dataTableArn`<sup>Required</sup> <a name="dataTableArn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArn"></a>

```typescript
public readonly dataTableArn: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectDataTableRecordConfig <a name="ConnectDataTableRecordConfig" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.Initializer"></a>

```typescript
import { connectDataTableRecord } from '@cdktn/provider-awscc'

const connectDataTableRecordConfig: connectDataTableRecord.ConnectDataTableRecordConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableArn">dataTableArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#data_table_arn ConnectDataTableRecord#data_table_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableRecord">dataTableRecord</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#data_table_record ConnectDataTableRecord#data_table_record}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#instance_arn ConnectDataTableRecord#instance_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataTableArn`<sup>Required</sup> <a name="dataTableArn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableArn"></a>

```typescript
public readonly dataTableArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#data_table_arn ConnectDataTableRecord#data_table_arn}.

---

##### `dataTableRecord`<sup>Required</sup> <a name="dataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableRecord"></a>

```typescript
public readonly dataTableRecord: ConnectDataTableRecordDataTableRecord;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#data_table_record ConnectDataTableRecord#data_table_record}.

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#instance_arn ConnectDataTableRecord#instance_arn}.

---

### ConnectDataTableRecordDataTableRecord <a name="ConnectDataTableRecordDataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.Initializer"></a>

```typescript
import { connectDataTableRecord } from '@cdktn/provider-awscc'

const connectDataTableRecordDataTableRecord: connectDataTableRecord.ConnectDataTableRecordDataTableRecord = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.values">values</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#values ConnectDataTableRecord#values}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.primaryValues">primaryValues</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#primary_values ConnectDataTableRecord#primary_values}. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.values"></a>

```typescript
public readonly values: IResolvable | ConnectDataTableRecordDataTableRecordValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#values ConnectDataTableRecord#values}.

---

##### `primaryValues`<sup>Optional</sup> <a name="primaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.primaryValues"></a>

```typescript
public readonly primaryValues: IResolvable | ConnectDataTableRecordDataTableRecordPrimaryValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#primary_values ConnectDataTableRecord#primary_values}.

---

### ConnectDataTableRecordDataTableRecordPrimaryValues <a name="ConnectDataTableRecordDataTableRecordPrimaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.Initializer"></a>

```typescript
import { connectDataTableRecord } from '@cdktn/provider-awscc'

const connectDataTableRecordDataTableRecordPrimaryValues: connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeId">attributeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeValue">attributeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}. |

---

##### `attributeId`<sup>Optional</sup> <a name="attributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeId"></a>

```typescript
public readonly attributeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}.

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}.

---

### ConnectDataTableRecordDataTableRecordValues <a name="ConnectDataTableRecordDataTableRecordValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.Initializer"></a>

```typescript
import { connectDataTableRecord } from '@cdktn/provider-awscc'

const connectDataTableRecordDataTableRecordValues: connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeId">attributeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeValue">attributeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}. |

---

##### `attributeId`<sup>Optional</sup> <a name="attributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeId"></a>

```typescript
public readonly attributeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}.

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectDataTableRecordDataTableRecordOutputReference <a name="ConnectDataTableRecordDataTableRecordOutputReference" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer"></a>

```typescript
import { connectDataTableRecord } from '@cdktn/provider-awscc'

new connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putPrimaryValues">putPrimaryValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putValues">putValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resetPrimaryValues">resetPrimaryValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrimaryValues` <a name="putPrimaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putPrimaryValues"></a>

```typescript
public putPrimaryValues(value: IResolvable | ConnectDataTableRecordDataTableRecordPrimaryValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putPrimaryValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>[]

---

##### `putValues` <a name="putValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putValues"></a>

```typescript
public putValues(value: IResolvable | ConnectDataTableRecordDataTableRecordValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putValues.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>[]

---

##### `resetPrimaryValues` <a name="resetPrimaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resetPrimaryValues"></a>

```typescript
public resetPrimaryValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValues">primaryValues</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList">ConnectDataTableRecordDataTableRecordPrimaryValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList">ConnectDataTableRecordDataTableRecordValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValuesInput">primaryValuesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.valuesInput">valuesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primaryValues`<sup>Required</sup> <a name="primaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValues"></a>

```typescript
public readonly primaryValues: ConnectDataTableRecordDataTableRecordPrimaryValuesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList">ConnectDataTableRecordDataTableRecordPrimaryValuesList</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.values"></a>

```typescript
public readonly values: ConnectDataTableRecordDataTableRecordValuesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList">ConnectDataTableRecordDataTableRecordValuesList</a>

---

##### `primaryValuesInput`<sup>Optional</sup> <a name="primaryValuesInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValuesInput"></a>

```typescript
public readonly primaryValuesInput: IResolvable | ConnectDataTableRecordDataTableRecordPrimaryValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>[]

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: IResolvable | ConnectDataTableRecordDataTableRecordValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectDataTableRecordDataTableRecord;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

---


### ConnectDataTableRecordDataTableRecordPrimaryValuesList <a name="ConnectDataTableRecordDataTableRecordPrimaryValuesList" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer"></a>

```typescript
import { connectDataTableRecord } from '@cdktn/provider-awscc'

new connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.get"></a>

```typescript
public get(index: number): ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectDataTableRecordDataTableRecordPrimaryValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>[]

---


### ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference <a name="ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer"></a>

```typescript
import { connectDataTableRecord } from '@cdktn/provider-awscc'

new connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeId">resetAttributeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeValue">resetAttributeValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeId` <a name="resetAttributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeId"></a>

```typescript
public resetAttributeId(): void
```

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeValue"></a>

```typescript
public resetAttributeValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeIdInput">attributeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeId">attributeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValue">attributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeIdInput`<sup>Optional</sup> <a name="attributeIdInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeIdInput"></a>

```typescript
public readonly attributeIdInput: string;
```

- *Type:* string

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValueInput"></a>

```typescript
public readonly attributeValueInput: string;
```

- *Type:* string

---

##### `attributeId`<sup>Required</sup> <a name="attributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeId"></a>

```typescript
public readonly attributeId: string;
```

- *Type:* string

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectDataTableRecordDataTableRecordPrimaryValues;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues">ConnectDataTableRecordDataTableRecordPrimaryValues</a>

---


### ConnectDataTableRecordDataTableRecordValuesList <a name="ConnectDataTableRecordDataTableRecordValuesList" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer"></a>

```typescript
import { connectDataTableRecord } from '@cdktn/provider-awscc'

new connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.get"></a>

```typescript
public get(index: number): ConnectDataTableRecordDataTableRecordValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectDataTableRecordDataTableRecordValues[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>[]

---


### ConnectDataTableRecordDataTableRecordValuesOutputReference <a name="ConnectDataTableRecordDataTableRecordValuesOutputReference" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer"></a>

```typescript
import { connectDataTableRecord } from '@cdktn/provider-awscc'

new connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeId">resetAttributeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeValue">resetAttributeValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeId` <a name="resetAttributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeId"></a>

```typescript
public resetAttributeId(): void
```

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeValue"></a>

```typescript
public resetAttributeValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeIdInput">attributeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeId">attributeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValue">attributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeIdInput`<sup>Optional</sup> <a name="attributeIdInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeIdInput"></a>

```typescript
public readonly attributeIdInput: string;
```

- *Type:* string

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValueInput"></a>

```typescript
public readonly attributeValueInput: string;
```

- *Type:* string

---

##### `attributeId`<sup>Required</sup> <a name="attributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeId"></a>

```typescript
public readonly attributeId: string;
```

- *Type:* string

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectDataTableRecordDataTableRecordValues;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues">ConnectDataTableRecordDataTableRecordValues</a>

---



