# `dataAwsccIotwirelessWirelessDevice` Submodule <a name="`dataAwsccIotwirelessWirelessDevice` Submodule" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotwirelessWirelessDevice <a name="DataAwsccIotwirelessWirelessDevice" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotwireless_wireless_device awscc_iotwireless_wireless_device}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice(scope: Construct, id: string, config: DataAwsccIotwirelessWirelessDeviceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig">DataAwsccIotwirelessWirelessDeviceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig">DataAwsccIotwirelessWirelessDeviceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotwirelessWirelessDevice resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isConstruct"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isTerraformElement"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.generateConfigForImport"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotwirelessWirelessDevice resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotwirelessWirelessDevice to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotwirelessWirelessDevice that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotwireless_wireless_device#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotwirelessWirelessDevice to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.destinationName">destinationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.lastUplinkReceivedAt">lastUplinkReceivedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.positioning">positioning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList">DataAwsccIotwirelessWirelessDeviceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.thingArn">thingArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.thingName">thingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.wirelessDeviceId">wirelessDeviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationName`<sup>Required</sup> <a name="destinationName" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.destinationName"></a>

```typescript
public readonly destinationName: string;
```

- *Type:* string

---

##### `lastUplinkReceivedAt`<sup>Required</sup> <a name="lastUplinkReceivedAt" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.lastUplinkReceivedAt"></a>

```typescript
public readonly lastUplinkReceivedAt: string;
```

- *Type:* string

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.loRaWan"></a>

```typescript
public readonly loRaWan: DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `positioning`<sup>Required</sup> <a name="positioning" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.positioning"></a>

```typescript
public readonly positioning: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.tags"></a>

```typescript
public readonly tags: DataAwsccIotwirelessWirelessDeviceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList">DataAwsccIotwirelessWirelessDeviceTagsList</a>

---

##### `thingArn`<sup>Required</sup> <a name="thingArn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.thingArn"></a>

```typescript
public readonly thingArn: string;
```

- *Type:* string

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `wirelessDeviceId`<sup>Required</sup> <a name="wirelessDeviceId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.wirelessDeviceId"></a>

```typescript
public readonly wirelessDeviceId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDevice.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotwirelessWirelessDeviceConfig <a name="DataAwsccIotwirelessWirelessDeviceConfig" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessWirelessDeviceConfig: dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotwireless_wireless_device#id DataAwsccIotwirelessWirelessDevice#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotwirelessWirelessDeviceLoRaWan <a name="DataAwsccIotwirelessWirelessDeviceLoRaWan" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWan.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessWirelessDeviceLoRaWan: dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWan = { ... }
```


### DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X: dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X = { ... }
```


### DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys: dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys = { ... }
```


### DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11 <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11: dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11 = { ... }
```


### DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys: dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys = { ... }
```


### DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessWirelessDeviceLoRaWanFPorts: dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts = { ... }
```


### DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications: dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications = { ... }
```


### DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X: dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X = { ... }
```


### DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11 <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11: dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11 = { ... }
```


### DataAwsccIotwirelessWirelessDeviceTags <a name="DataAwsccIotwirelessWirelessDeviceTags" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTags.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const dataAwsccIotwirelessWirelessDeviceTags: dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddr">devAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeys">sessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `devAddr`<sup>Required</sup> <a name="devAddr" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddr"></a>

```typescript
public readonly devAddr: string;
```

- *Type:* string

---

##### `sessionKeys`<sup>Required</sup> <a name="sessionKeys" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeys"></a>

```typescript
public readonly sessionKeys: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10X</a>

---


### DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKey">appSKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKey">nwkSKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appSKey`<sup>Required</sup> <a name="appSKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKey"></a>

```typescript
public readonly appSKey: string;
```

- *Type:* string

---

##### `nwkSKey`<sup>Required</sup> <a name="nwkSKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKey"></a>

```typescript
public readonly nwkSKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

---


### DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddr">devAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeys">sessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `devAddr`<sup>Required</sup> <a name="devAddr" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddr"></a>

```typescript
public readonly devAddr: string;
```

- *Type:* string

---

##### `sessionKeys`<sup>Required</sup> <a name="sessionKeys" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeys"></a>

```typescript
public readonly sessionKeys: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11</a>

---


### DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKey">appSKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKey">fNwkSIntKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKey">nwkSEncKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKey">sNwkSIntKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appSKey`<sup>Required</sup> <a name="appSKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKey"></a>

```typescript
public readonly appSKey: string;
```

- *Type:* string

---

##### `fNwkSIntKey`<sup>Required</sup> <a name="fNwkSIntKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKey"></a>

```typescript
public readonly fNwkSIntKey: string;
```

- *Type:* string

---

##### `nwkSEncKey`<sup>Required</sup> <a name="nwkSEncKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKey"></a>

```typescript
public readonly nwkSEncKey: string;
```

- *Type:* string

---

##### `sNwkSIntKey`<sup>Required</sup> <a name="sNwkSIntKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKey"></a>

```typescript
public readonly sNwkSIntKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

---


### DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get"></a>

```typescript
public get(index: number): DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationName">destinationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPort">fPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications">DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationName`<sup>Required</sup> <a name="destinationName" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationName"></a>

```typescript
public readonly destinationName: string;
```

- *Type:* string

---

##### `fPort`<sup>Required</sup> <a name="fPort" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPort"></a>

```typescript
public readonly fPort: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications">DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplications</a>

---


### DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applications">applications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList">DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts">DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applications"></a>

```typescript
public readonly applications: DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList">DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsApplicationsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts">DataAwsccIotwirelessWirelessDeviceLoRaWanFPorts</a>

---


### DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEui">appEui</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKey">appKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X">DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appEui`<sup>Required</sup> <a name="appEui" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEui"></a>

```typescript
public readonly appEui: string;
```

- *Type:* string

---

##### `appKey`<sup>Required</sup> <a name="appKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKey"></a>

```typescript
public readonly appKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X">DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

---


### DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKey">appKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEui">joinEui</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKey">nwkKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11">DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appKey`<sup>Required</sup> <a name="appKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKey"></a>

```typescript
public readonly appKey: string;
```

- *Type:* string

---

##### `joinEui`<sup>Required</sup> <a name="joinEui" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEui"></a>

```typescript
public readonly joinEui: string;
```

- *Type:* string

---

##### `nwkKey`<sup>Required</sup> <a name="nwkKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKey"></a>

```typescript
public readonly nwkKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11">DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11</a>

---


### DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference <a name="DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10X">abpV10X</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11">abpV11</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.devEui">devEui</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileId">deviceProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.fPorts">fPorts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10X">otaaV10X</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11">otaaV11</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileId">serviceProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWan">DataAwsccIotwirelessWirelessDeviceLoRaWan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `abpV10X`<sup>Required</sup> <a name="abpV10X" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10X"></a>

```typescript
public readonly abpV10X: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference</a>

---

##### `abpV11`<sup>Required</sup> <a name="abpV11" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11"></a>

```typescript
public readonly abpV11: DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanAbpV11OutputReference</a>

---

##### `devEui`<sup>Required</sup> <a name="devEui" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.devEui"></a>

```typescript
public readonly devEui: string;
```

- *Type:* string

---

##### `deviceProfileId`<sup>Required</sup> <a name="deviceProfileId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileId"></a>

```typescript
public readonly deviceProfileId: string;
```

- *Type:* string

---

##### `fPorts`<sup>Required</sup> <a name="fPorts" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.fPorts"></a>

```typescript
public readonly fPorts: DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanFPortsOutputReference</a>

---

##### `otaaV10X`<sup>Required</sup> <a name="otaaV10X" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10X"></a>

```typescript
public readonly otaaV10X: DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference</a>

---

##### `otaaV11`<sup>Required</sup> <a name="otaaV11" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11"></a>

```typescript
public readonly otaaV11: DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference">DataAwsccIotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference</a>

---

##### `serviceProfileId`<sup>Required</sup> <a name="serviceProfileId" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileId"></a>

```typescript
public readonly serviceProfileId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessWirelessDeviceLoRaWan;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceLoRaWan">DataAwsccIotwirelessWirelessDeviceLoRaWan</a>

---


### DataAwsccIotwirelessWirelessDeviceTagsList <a name="DataAwsccIotwirelessWirelessDeviceTagsList" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIotwirelessWirelessDeviceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotwirelessWirelessDeviceTagsOutputReference <a name="DataAwsccIotwirelessWirelessDeviceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTags">DataAwsccIotwirelessWirelessDeviceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotwirelessWirelessDeviceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotwirelessWirelessDevice.DataAwsccIotwirelessWirelessDeviceTags">DataAwsccIotwirelessWirelessDeviceTags</a>

---



