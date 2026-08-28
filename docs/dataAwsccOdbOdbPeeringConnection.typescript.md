# `dataAwsccOdbOdbPeeringConnection` Submodule <a name="`dataAwsccOdbOdbPeeringConnection` Submodule" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOdbOdbPeeringConnection <a name="DataAwsccOdbOdbPeeringConnection" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/odb_odb_peering_connection awscc_odb_odb_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.Initializer"></a>

```typescript
import { dataAwsccOdbOdbPeeringConnection } from '@cdktn/provider-awscc'

new dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection(scope: Construct, id: string, config: DataAwsccOdbOdbPeeringConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig">DataAwsccOdbOdbPeeringConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig">DataAwsccOdbOdbPeeringConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOdbOdbPeeringConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.isConstruct"></a>

```typescript
import { dataAwsccOdbOdbPeeringConnection } from '@cdktn/provider-awscc'

dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.isTerraformElement"></a>

```typescript
import { dataAwsccOdbOdbPeeringConnection } from '@cdktn/provider-awscc'

dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.isTerraformDataSource"></a>

```typescript
import { dataAwsccOdbOdbPeeringConnection } from '@cdktn/provider-awscc'

dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.generateConfigForImport"></a>

```typescript
import { dataAwsccOdbOdbPeeringConnection } from '@cdktn/provider-awscc'

dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccOdbOdbPeeringConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccOdbOdbPeeringConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccOdbOdbPeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/odb_odb_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOdbOdbPeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.additionalPeerNetworkCidrs">additionalPeerNetworkCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.odbNetworkArn">odbNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.odbPeeringConnectionArn">odbPeeringConnectionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.odbPeeringConnectionId">odbPeeringConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.peerNetworkArn">peerNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.peerNetworkCidrs">peerNetworkCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.peerNetworkId">peerNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.peerNetworkRouteTableIds">peerNetworkRouteTableIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList">DataAwsccOdbOdbPeeringConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `additionalPeerNetworkCidrs`<sup>Required</sup> <a name="additionalPeerNetworkCidrs" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.additionalPeerNetworkCidrs"></a>

```typescript
public readonly additionalPeerNetworkCidrs: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `odbNetworkArn`<sup>Required</sup> <a name="odbNetworkArn" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.odbNetworkArn"></a>

```typescript
public readonly odbNetworkArn: string;
```

- *Type:* string

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

---

##### `odbPeeringConnectionArn`<sup>Required</sup> <a name="odbPeeringConnectionArn" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.odbPeeringConnectionArn"></a>

```typescript
public readonly odbPeeringConnectionArn: string;
```

- *Type:* string

---

##### `odbPeeringConnectionId`<sup>Required</sup> <a name="odbPeeringConnectionId" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.odbPeeringConnectionId"></a>

```typescript
public readonly odbPeeringConnectionId: string;
```

- *Type:* string

---

##### `peerNetworkArn`<sup>Required</sup> <a name="peerNetworkArn" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.peerNetworkArn"></a>

```typescript
public readonly peerNetworkArn: string;
```

- *Type:* string

---

##### `peerNetworkCidrs`<sup>Required</sup> <a name="peerNetworkCidrs" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.peerNetworkCidrs"></a>

```typescript
public readonly peerNetworkCidrs: string[];
```

- *Type:* string[]

---

##### `peerNetworkId`<sup>Required</sup> <a name="peerNetworkId" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.peerNetworkId"></a>

```typescript
public readonly peerNetworkId: string;
```

- *Type:* string

---

##### `peerNetworkRouteTableIds`<sup>Required</sup> <a name="peerNetworkRouteTableIds" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.peerNetworkRouteTableIds"></a>

```typescript
public readonly peerNetworkRouteTableIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.tags"></a>

```typescript
public readonly tags: DataAwsccOdbOdbPeeringConnectionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList">DataAwsccOdbOdbPeeringConnectionTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOdbOdbPeeringConnectionConfig <a name="DataAwsccOdbOdbPeeringConnectionConfig" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig.Initializer"></a>

```typescript
import { dataAwsccOdbOdbPeeringConnection } from '@cdktn/provider-awscc'

const dataAwsccOdbOdbPeeringConnectionConfig: dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/odb_odb_peering_connection#id DataAwsccOdbOdbPeeringConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOdbOdbPeeringConnectionTags <a name="DataAwsccOdbOdbPeeringConnectionTags" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTags.Initializer"></a>

```typescript
import { dataAwsccOdbOdbPeeringConnection } from '@cdktn/provider-awscc'

const dataAwsccOdbOdbPeeringConnectionTags: dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOdbOdbPeeringConnectionTagsList <a name="DataAwsccOdbOdbPeeringConnectionTagsList" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.Initializer"></a>

```typescript
import { dataAwsccOdbOdbPeeringConnection } from '@cdktn/provider-awscc'

new dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccOdbOdbPeeringConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccOdbOdbPeeringConnectionTagsOutputReference <a name="DataAwsccOdbOdbPeeringConnectionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccOdbOdbPeeringConnection } from '@cdktn/provider-awscc'

new dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTags">DataAwsccOdbOdbPeeringConnectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOdbOdbPeeringConnectionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbPeeringConnection.DataAwsccOdbOdbPeeringConnectionTags">DataAwsccOdbOdbPeeringConnectionTags</a>

---



