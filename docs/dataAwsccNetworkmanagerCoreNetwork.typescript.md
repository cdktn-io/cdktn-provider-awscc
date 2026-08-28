# `dataAwsccNetworkmanagerCoreNetwork` Submodule <a name="`dataAwsccNetworkmanagerCoreNetwork` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkmanagerCoreNetwork <a name="DataAwsccNetworkmanagerCoreNetwork" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkmanager_core_network awscc_networkmanager_core_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork(scope: Construct, id: string, config: DataAwsccNetworkmanagerCoreNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig">DataAwsccNetworkmanagerCoreNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig">DataAwsccNetworkmanagerCoreNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkmanagerCoreNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isConstruct"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isTerraformElement"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isTerraformDataSource"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.generateConfigForImport"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNetworkmanagerCoreNetwork resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNetworkmanagerCoreNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNetworkmanagerCoreNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkmanager_core_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkmanagerCoreNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.edges">edges</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList">DataAwsccNetworkmanagerCoreNetworkEdgesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.networkFunctionGroups">networkFunctionGroups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList">DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.ownerAccount">ownerAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.segments">segments</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList">DataAwsccNetworkmanagerCoreNetworkSegmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList">DataAwsccNetworkmanagerCoreNetworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `edges`<sup>Required</sup> <a name="edges" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.edges"></a>

```typescript
public readonly edges: DataAwsccNetworkmanagerCoreNetworkEdgesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList">DataAwsccNetworkmanagerCoreNetworkEdgesList</a>

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

---

##### `networkFunctionGroups`<sup>Required</sup> <a name="networkFunctionGroups" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.networkFunctionGroups"></a>

```typescript
public readonly networkFunctionGroups: DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList">DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList</a>

---

##### `ownerAccount`<sup>Required</sup> <a name="ownerAccount" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.ownerAccount"></a>

```typescript
public readonly ownerAccount: string;
```

- *Type:* string

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.segments"></a>

```typescript
public readonly segments: DataAwsccNetworkmanagerCoreNetworkSegmentsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList">DataAwsccNetworkmanagerCoreNetworkSegmentsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.tags"></a>

```typescript
public readonly tags: DataAwsccNetworkmanagerCoreNetworkTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList">DataAwsccNetworkmanagerCoreNetworkTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkmanagerCoreNetworkConfig <a name="DataAwsccNetworkmanagerCoreNetworkConfig" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

const dataAwsccNetworkmanagerCoreNetworkConfig: dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/networkmanager_core_network#id DataAwsccNetworkmanagerCoreNetwork#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkmanagerCoreNetworkEdges <a name="DataAwsccNetworkmanagerCoreNetworkEdges" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdges.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

const dataAwsccNetworkmanagerCoreNetworkEdges: dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdges = { ... }
```


### DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups <a name="DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

const dataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups: dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups = { ... }
```


### DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments <a name="DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

const dataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments: dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments = { ... }
```


### DataAwsccNetworkmanagerCoreNetworkSegments <a name="DataAwsccNetworkmanagerCoreNetworkSegments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegments.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

const dataAwsccNetworkmanagerCoreNetworkSegments: dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegments = { ... }
```


### DataAwsccNetworkmanagerCoreNetworkTags <a name="DataAwsccNetworkmanagerCoreNetworkTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTags.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

const dataAwsccNetworkmanagerCoreNetworkTags: dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkmanagerCoreNetworkEdgesList <a name="DataAwsccNetworkmanagerCoreNetworkEdgesList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference <a name="DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.asn">asn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.edgeLocation">edgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.insideCidrBlocks">insideCidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdges">DataAwsccNetworkmanagerCoreNetworkEdges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.edgeLocation"></a>

```typescript
public readonly edgeLocation: string;
```

- *Type:* string

---

##### `insideCidrBlocks`<sup>Required</sup> <a name="insideCidrBlocks" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.insideCidrBlocks"></a>

```typescript
public readonly insideCidrBlocks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdgesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkmanagerCoreNetworkEdges;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkEdges">DataAwsccNetworkmanagerCoreNetworkEdges</a>

---


### DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList <a name="DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference <a name="DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.edgeLocations">edgeLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.segments">segments</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference">DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups">DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `edgeLocations`<sup>Required</sup> <a name="edgeLocations" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.edgeLocations"></a>

```typescript
public readonly edgeLocations: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.segments"></a>

```typescript
public readonly segments: DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference">DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups">DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroups</a>

---


### DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference <a name="DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendTo">sendTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendVia">sendVia</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments">DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sendTo`<sup>Required</sup> <a name="sendTo" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendTo"></a>

```typescript
public readonly sendTo: string[];
```

- *Type:* string[]

---

##### `sendVia`<sup>Required</sup> <a name="sendVia" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.sendVia"></a>

```typescript
public readonly sendVia: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments">DataAwsccNetworkmanagerCoreNetworkNetworkFunctionGroupsSegments</a>

---


### DataAwsccNetworkmanagerCoreNetworkSegmentsList <a name="DataAwsccNetworkmanagerCoreNetworkSegmentsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference <a name="DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.edgeLocations">edgeLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.sharedSegments">sharedSegments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegments">DataAwsccNetworkmanagerCoreNetworkSegments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `edgeLocations`<sup>Required</sup> <a name="edgeLocations" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.edgeLocations"></a>

```typescript
public readonly edgeLocations: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sharedSegments`<sup>Required</sup> <a name="sharedSegments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.sharedSegments"></a>

```typescript
public readonly sharedSegments: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkmanagerCoreNetworkSegments;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkSegments">DataAwsccNetworkmanagerCoreNetworkSegments</a>

---


### DataAwsccNetworkmanagerCoreNetworkTagsList <a name="DataAwsccNetworkmanagerCoreNetworkTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkmanagerCoreNetworkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkmanagerCoreNetworkTagsOutputReference <a name="DataAwsccNetworkmanagerCoreNetworkTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkmanagerCoreNetwork } from '@cdktn/provider-awscc'

new dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTags">DataAwsccNetworkmanagerCoreNetworkTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkmanagerCoreNetworkTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerCoreNetwork.DataAwsccNetworkmanagerCoreNetworkTags">DataAwsccNetworkmanagerCoreNetworkTags</a>

---



