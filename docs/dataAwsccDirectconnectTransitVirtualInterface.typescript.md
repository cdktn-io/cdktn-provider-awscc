# `dataAwsccDirectconnectTransitVirtualInterface` Submodule <a name="`dataAwsccDirectconnectTransitVirtualInterface` Submodule" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDirectconnectTransitVirtualInterface <a name="DataAwsccDirectconnectTransitVirtualInterface" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/directconnect_transit_virtual_interface awscc_directconnect_transit_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer"></a>

```typescript
import { dataAwsccDirectconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

new dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface(scope: Construct, id: string, config: DataAwsccDirectconnectTransitVirtualInterfaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig">DataAwsccDirectconnectTransitVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig">DataAwsccDirectconnectTransitVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDirectconnectTransitVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isConstruct"></a>

```typescript
import { dataAwsccDirectconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformElement"></a>

```typescript
import { dataAwsccDirectconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformDataSource"></a>

```typescript
import { dataAwsccDirectconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport"></a>

```typescript
import { dataAwsccDirectconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDirectconnectTransitVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDirectconnectTransitVirtualInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDirectconnectTransitVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/directconnect_transit_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDirectconnectTransitVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArn">allocateTransitVirtualInterfaceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.bgpPeers">bgpPeers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList">DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.directConnectGatewayId">directConnectGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.enableSiteLink">enableSiteLink</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.rateLimit">rateLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList">DataAwsccDirectconnectTransitVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.virtualInterfaceArn">virtualInterfaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.virtualInterfaceId">virtualInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.virtualInterfaceName">virtualInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.vlan">vlan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `allocateTransitVirtualInterfaceRoleArn`<sup>Required</sup> <a name="allocateTransitVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArn"></a>

```typescript
public readonly allocateTransitVirtualInterfaceRoleArn: string;
```

- *Type:* string

---

##### `bgpPeers`<sup>Required</sup> <a name="bgpPeers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.bgpPeers"></a>

```typescript
public readonly bgpPeers: DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList">DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList</a>

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `directConnectGatewayId`<sup>Required</sup> <a name="directConnectGatewayId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.directConnectGatewayId"></a>

```typescript
public readonly directConnectGatewayId: string;
```

- *Type:* string

---

##### `enableSiteLink`<sup>Required</sup> <a name="enableSiteLink" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.enableSiteLink"></a>

```typescript
public readonly enableSiteLink: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.rateLimit"></a>

```typescript
public readonly rateLimit: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.tags"></a>

```typescript
public readonly tags: DataAwsccDirectconnectTransitVirtualInterfaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList">DataAwsccDirectconnectTransitVirtualInterfaceTagsList</a>

---

##### `virtualInterfaceArn`<sup>Required</sup> <a name="virtualInterfaceArn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.virtualInterfaceArn"></a>

```typescript
public readonly virtualInterfaceArn: string;
```

- *Type:* string

---

##### `virtualInterfaceId`<sup>Required</sup> <a name="virtualInterfaceId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.virtualInterfaceId"></a>

```typescript
public readonly virtualInterfaceId: string;
```

- *Type:* string

---

##### `virtualInterfaceName`<sup>Required</sup> <a name="virtualInterfaceName" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.virtualInterfaceName"></a>

```typescript
public readonly virtualInterfaceName: string;
```

- *Type:* string

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterface.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers <a name="DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers.Initializer"></a>

```typescript
import { dataAwsccDirectconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

const dataAwsccDirectconnectTransitVirtualInterfaceBgpPeers: dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers = { ... }
```


### DataAwsccDirectconnectTransitVirtualInterfaceConfig <a name="DataAwsccDirectconnectTransitVirtualInterfaceConfig" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.Initializer"></a>

```typescript
import { dataAwsccDirectconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

const dataAwsccDirectconnectTransitVirtualInterfaceConfig: dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/directconnect_transit_virtual_interface#id DataAwsccDirectconnectTransitVirtualInterface#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDirectconnectTransitVirtualInterfaceTags <a name="DataAwsccDirectconnectTransitVirtualInterfaceTags" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTags.Initializer"></a>

```typescript
import { dataAwsccDirectconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

const dataAwsccDirectconnectTransitVirtualInterfaceTags: dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList <a name="DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer"></a>

```typescript
import { dataAwsccDirectconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

new dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.get"></a>

```typescript
public get(index: number): DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference <a name="DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```typescript
import { dataAwsccDirectconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

new dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamily">addressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">amazonAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asn">asn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKey">authKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">bgpPeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddress">customerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers">DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

---

##### `amazonAddress`<sup>Required</sup> <a name="amazonAddress" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```typescript
public readonly amazonAddress: string;
```

- *Type:* string

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```typescript
public readonly asn: string;
```

- *Type:* string

---

##### `authKey`<sup>Required</sup> <a name="authKey" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```typescript
public readonly authKey: string;
```

- *Type:* string

---

##### `bgpPeerId`<sup>Required</sup> <a name="bgpPeerId" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```typescript
public readonly bgpPeerId: string;
```

- *Type:* string

---

##### `customerAddress`<sup>Required</sup> <a name="customerAddress" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```typescript
public readonly customerAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers">DataAwsccDirectconnectTransitVirtualInterfaceBgpPeers</a>

---


### DataAwsccDirectconnectTransitVirtualInterfaceTagsList <a name="DataAwsccDirectconnectTransitVirtualInterfaceTagsList" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer"></a>

```typescript
import { dataAwsccDirectconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

new dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference <a name="DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDirectconnectTransitVirtualInterface } from '@cdktn/provider-awscc'

new dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTags">DataAwsccDirectconnectTransitVirtualInterfaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDirectconnectTransitVirtualInterfaceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectTransitVirtualInterface.DataAwsccDirectconnectTransitVirtualInterfaceTags">DataAwsccDirectconnectTransitVirtualInterfaceTags</a>

---



