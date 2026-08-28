# `dataAwsccIotwirelessFuotaTask` Submodule <a name="`dataAwsccIotwirelessFuotaTask` Submodule" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotwirelessFuotaTask <a name="DataAwsccIotwirelessFuotaTask" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotwireless_fuota_task awscc_iotwireless_fuota_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.Initializer"></a>

```typescript
import { dataAwsccIotwirelessFuotaTask } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask(scope: Construct, id: string, config: DataAwsccIotwirelessFuotaTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig">DataAwsccIotwirelessFuotaTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig">DataAwsccIotwirelessFuotaTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotwirelessFuotaTask resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.isConstruct"></a>

```typescript
import { dataAwsccIotwirelessFuotaTask } from '@cdktn/provider-awscc'

dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.isTerraformElement"></a>

```typescript
import { dataAwsccIotwirelessFuotaTask } from '@cdktn/provider-awscc'

dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotwirelessFuotaTask } from '@cdktn/provider-awscc'

dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.generateConfigForImport"></a>

```typescript
import { dataAwsccIotwirelessFuotaTask } from '@cdktn/provider-awscc'

dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotwirelessFuotaTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotwirelessFuotaTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotwirelessFuotaTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotwireless_fuota_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotwirelessFuotaTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.associateMulticastGroup">associateMulticastGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.associateWirelessDevice">associateWirelessDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.disassociateMulticastGroup">disassociateMulticastGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.disassociateWirelessDevice">disassociateWirelessDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.firmwareUpdateImage">firmwareUpdateImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.firmwareUpdateRole">firmwareUpdateRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.fuotaTaskId">fuotaTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.fuotaTaskStatus">fuotaTaskStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference">DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList">DataAwsccIotwirelessFuotaTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associateMulticastGroup`<sup>Required</sup> <a name="associateMulticastGroup" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.associateMulticastGroup"></a>

```typescript
public readonly associateMulticastGroup: string;
```

- *Type:* string

---

##### `associateWirelessDevice`<sup>Required</sup> <a name="associateWirelessDevice" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.associateWirelessDevice"></a>

```typescript
public readonly associateWirelessDevice: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disassociateMulticastGroup`<sup>Required</sup> <a name="disassociateMulticastGroup" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.disassociateMulticastGroup"></a>

```typescript
public readonly disassociateMulticastGroup: string;
```

- *Type:* string

---

##### `disassociateWirelessDevice`<sup>Required</sup> <a name="disassociateWirelessDevice" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.disassociateWirelessDevice"></a>

```typescript
public readonly disassociateWirelessDevice: string;
```

- *Type:* string

---

##### `firmwareUpdateImage`<sup>Required</sup> <a name="firmwareUpdateImage" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.firmwareUpdateImage"></a>

```typescript
public readonly firmwareUpdateImage: string;
```

- *Type:* string

---

##### `firmwareUpdateRole`<sup>Required</sup> <a name="firmwareUpdateRole" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.firmwareUpdateRole"></a>

```typescript
public readonly firmwareUpdateRole: string;
```

- *Type:* string

---

##### `fuotaTaskId`<sup>Required</sup> <a name="fuotaTaskId" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.fuotaTaskId"></a>

```typescript
public readonly fuotaTaskId: string;
```

- *Type:* string

---

##### `fuotaTaskStatus`<sup>Required</sup> <a name="fuotaTaskStatus" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.fuotaTaskStatus"></a>

```typescript
public readonly fuotaTaskStatus: string;
```

- *Type:* string

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.loRaWan"></a>

```typescript
public readonly loRaWan: DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference">DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.tags"></a>

```typescript
public readonly tags: DataAwsccIotwirelessFuotaTaskTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList">DataAwsccIotwirelessFuotaTaskTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotwirelessFuotaTaskConfig <a name="DataAwsccIotwirelessFuotaTaskConfig" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig.Initializer"></a>

```typescript
import { dataAwsccIotwirelessFuotaTask } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessFuotaTaskConfig: dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotwireless_fuota_task#id DataAwsccIotwirelessFuotaTask#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotwirelessFuotaTaskLoRaWan <a name="DataAwsccIotwirelessFuotaTaskLoRaWan" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWan.Initializer"></a>

```typescript
import { dataAwsccIotwirelessFuotaTask } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessFuotaTaskLoRaWan: dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWan = { ... }
```


### DataAwsccIotwirelessFuotaTaskTags <a name="DataAwsccIotwirelessFuotaTaskTags" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTags.Initializer"></a>

```typescript
import { dataAwsccIotwirelessFuotaTask } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessFuotaTaskTags: dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference <a name="DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessFuotaTask } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.property.rfRegion">rfRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWan">DataAwsccIotwirelessFuotaTaskLoRaWan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rfRegion`<sup>Required</sup> <a name="rfRegion" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.property.rfRegion"></a>

```typescript
public readonly rfRegion: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessFuotaTaskLoRaWan;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskLoRaWan">DataAwsccIotwirelessFuotaTaskLoRaWan</a>

---


### DataAwsccIotwirelessFuotaTaskTagsList <a name="DataAwsccIotwirelessFuotaTaskTagsList" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.Initializer"></a>

```typescript
import { dataAwsccIotwirelessFuotaTask } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIotwirelessFuotaTaskTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotwirelessFuotaTaskTagsOutputReference <a name="DataAwsccIotwirelessFuotaTaskTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessFuotaTask } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTags">DataAwsccIotwirelessFuotaTaskTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessFuotaTaskTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessFuotaTask.DataAwsccIotwirelessFuotaTaskTags">DataAwsccIotwirelessFuotaTaskTags</a>

---



