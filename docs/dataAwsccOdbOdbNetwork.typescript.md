# `dataAwsccOdbOdbNetwork` Submodule <a name="`dataAwsccOdbOdbNetwork` Submodule" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOdbOdbNetwork <a name="DataAwsccOdbOdbNetwork" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/odb_odb_network awscc_odb_odb_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

new dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork(scope: Construct, id: string, config: DataAwsccOdbOdbNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig">DataAwsccOdbOdbNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig">DataAwsccOdbOdbNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOdbOdbNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isConstruct"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformElement"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformDataSource"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccOdbOdbNetwork resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccOdbOdbNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccOdbOdbNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/odb_odb_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOdbOdbNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.backupSubnetCidr">backupSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.clientSubnetCidr">clientSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.crossRegionS3RestoreSources">crossRegionS3RestoreSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.customDomainName">customDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.defaultDnsPrefix">defaultDnsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.deleteAssociatedResources">deleteAssociatedResources</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ec2PlacementGroupIds">ec2PlacementGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.kmsAccess">kmsAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.kmsPolicyDocument">kmsPolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.managedServices">managedServices</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference">DataAwsccOdbOdbNetworkManagedServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ociNetworkAnchorId">ociNetworkAnchorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ociResourceAnchorName">ociResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ociVcnUrl">ociVcnUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.odbNetworkArn">odbNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.odbNetworkId">odbNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.s3Access">s3Access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.s3PolicyDocument">s3PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.stsAccess">stsAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.stsPolicyDocument">stsPolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList">DataAwsccOdbOdbNetworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.zeroEtlAccess">zeroEtlAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `backupSubnetCidr`<sup>Required</sup> <a name="backupSubnetCidr" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.backupSubnetCidr"></a>

```typescript
public readonly backupSubnetCidr: string;
```

- *Type:* string

---

##### `clientSubnetCidr`<sup>Required</sup> <a name="clientSubnetCidr" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.clientSubnetCidr"></a>

```typescript
public readonly clientSubnetCidr: string;
```

- *Type:* string

---

##### `crossRegionS3RestoreSources`<sup>Required</sup> <a name="crossRegionS3RestoreSources" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.crossRegionS3RestoreSources"></a>

```typescript
public readonly crossRegionS3RestoreSources: string[];
```

- *Type:* string[]

---

##### `customDomainName`<sup>Required</sup> <a name="customDomainName" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.customDomainName"></a>

```typescript
public readonly customDomainName: string;
```

- *Type:* string

---

##### `defaultDnsPrefix`<sup>Required</sup> <a name="defaultDnsPrefix" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.defaultDnsPrefix"></a>

```typescript
public readonly defaultDnsPrefix: string;
```

- *Type:* string

---

##### `deleteAssociatedResources`<sup>Required</sup> <a name="deleteAssociatedResources" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.deleteAssociatedResources"></a>

```typescript
public readonly deleteAssociatedResources: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `ec2PlacementGroupIds`<sup>Required</sup> <a name="ec2PlacementGroupIds" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ec2PlacementGroupIds"></a>

```typescript
public readonly ec2PlacementGroupIds: string[];
```

- *Type:* string[]

---

##### `kmsAccess`<sup>Required</sup> <a name="kmsAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.kmsAccess"></a>

```typescript
public readonly kmsAccess: string;
```

- *Type:* string

---

##### `kmsPolicyDocument`<sup>Required</sup> <a name="kmsPolicyDocument" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.kmsPolicyDocument"></a>

```typescript
public readonly kmsPolicyDocument: string;
```

- *Type:* string

---

##### `managedServices`<sup>Required</sup> <a name="managedServices" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.managedServices"></a>

```typescript
public readonly managedServices: DataAwsccOdbOdbNetworkManagedServicesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference">DataAwsccOdbOdbNetworkManagedServicesOutputReference</a>

---

##### `ociNetworkAnchorId`<sup>Required</sup> <a name="ociNetworkAnchorId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ociNetworkAnchorId"></a>

```typescript
public readonly ociNetworkAnchorId: string;
```

- *Type:* string

---

##### `ociResourceAnchorName`<sup>Required</sup> <a name="ociResourceAnchorName" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ociResourceAnchorName"></a>

```typescript
public readonly ociResourceAnchorName: string;
```

- *Type:* string

---

##### `ociVcnUrl`<sup>Required</sup> <a name="ociVcnUrl" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.ociVcnUrl"></a>

```typescript
public readonly ociVcnUrl: string;
```

- *Type:* string

---

##### `odbNetworkArn`<sup>Required</sup> <a name="odbNetworkArn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.odbNetworkArn"></a>

```typescript
public readonly odbNetworkArn: string;
```

- *Type:* string

---

##### `odbNetworkId`<sup>Required</sup> <a name="odbNetworkId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.odbNetworkId"></a>

```typescript
public readonly odbNetworkId: string;
```

- *Type:* string

---

##### `s3Access`<sup>Required</sup> <a name="s3Access" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.s3Access"></a>

```typescript
public readonly s3Access: string;
```

- *Type:* string

---

##### `s3PolicyDocument`<sup>Required</sup> <a name="s3PolicyDocument" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.s3PolicyDocument"></a>

```typescript
public readonly s3PolicyDocument: string;
```

- *Type:* string

---

##### `stsAccess`<sup>Required</sup> <a name="stsAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.stsAccess"></a>

```typescript
public readonly stsAccess: string;
```

- *Type:* string

---

##### `stsPolicyDocument`<sup>Required</sup> <a name="stsPolicyDocument" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.stsPolicyDocument"></a>

```typescript
public readonly stsPolicyDocument: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.tags"></a>

```typescript
public readonly tags: DataAwsccOdbOdbNetworkTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList">DataAwsccOdbOdbNetworkTagsList</a>

---

##### `zeroEtlAccess`<sup>Required</sup> <a name="zeroEtlAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.zeroEtlAccess"></a>

```typescript
public readonly zeroEtlAccess: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOdbOdbNetworkConfig <a name="DataAwsccOdbOdbNetworkConfig" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

const dataAwsccOdbOdbNetworkConfig: dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/odb_odb_network#id DataAwsccOdbOdbNetwork#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOdbOdbNetworkManagedServices <a name="DataAwsccOdbOdbNetworkManagedServices" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServices.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

const dataAwsccOdbOdbNetworkManagedServices: dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServices = { ... }
```


### DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess <a name="DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

const dataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess: dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess = { ... }
```


### DataAwsccOdbOdbNetworkManagedServicesKmsAccess <a name="DataAwsccOdbOdbNetworkManagedServicesKmsAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccess.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

const dataAwsccOdbOdbNetworkManagedServicesKmsAccess: dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccess = { ... }
```


### DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess <a name="DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

const dataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess: dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess = { ... }
```


### DataAwsccOdbOdbNetworkManagedServicesS3Access <a name="DataAwsccOdbOdbNetworkManagedServicesS3Access" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3Access"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3Access.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

const dataAwsccOdbOdbNetworkManagedServicesS3Access: dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3Access = { ... }
```


### DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint <a name="DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

const dataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint: dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint = { ... }
```


### DataAwsccOdbOdbNetworkManagedServicesStsAccess <a name="DataAwsccOdbOdbNetworkManagedServicesStsAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccess.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

const dataAwsccOdbOdbNetworkManagedServicesStsAccess: dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccess = { ... }
```


### DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess <a name="DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

const dataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess: dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess = { ... }
```


### DataAwsccOdbOdbNetworkTags <a name="DataAwsccOdbOdbNetworkTags" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTags.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

const dataAwsccOdbOdbNetworkTags: dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList <a name="DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

new dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get"></a>

```typescript
public get(index: number): DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

new dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess">DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.ipv4Addresses"></a>

```typescript
public readonly ipv4Addresses: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess">DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccess</a>

---


### DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

new dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.kmsPolicyDocument">kmsPolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccess">DataAwsccOdbOdbNetworkManagedServicesKmsAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.ipv4Addresses"></a>

```typescript
public readonly ipv4Addresses: string[];
```

- *Type:* string[]

---

##### `kmsPolicyDocument`<sup>Required</sup> <a name="kmsPolicyDocument" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.kmsPolicyDocument"></a>

```typescript
public readonly kmsPolicyDocument: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOdbOdbNetworkManagedServicesKmsAccess;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccess">DataAwsccOdbOdbNetworkManagedServicesKmsAccess</a>

---


### DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

new dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess">DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses"></a>

```typescript
public readonly ipv4Addresses: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess">DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccess</a>

---


### DataAwsccOdbOdbNetworkManagedServicesOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

new dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.crossRegionS3RestoreSourcesAccess">crossRegionS3RestoreSourcesAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList">DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.kmsAccess">kmsAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess">managedS3BackupAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.managedServicesIpv4Cidrs">managedServicesIpv4Cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.resourceGatewayArn">resourceGatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.s3Access">s3Access</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint">serviceNetworkEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference">DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.stsAccess">stsAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.zeroEtlAccess">zeroEtlAccess</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServices">DataAwsccOdbOdbNetworkManagedServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crossRegionS3RestoreSourcesAccess`<sup>Required</sup> <a name="crossRegionS3RestoreSourcesAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.crossRegionS3RestoreSourcesAccess"></a>

```typescript
public readonly crossRegionS3RestoreSourcesAccess: DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList">DataAwsccOdbOdbNetworkManagedServicesCrossRegionS3RestoreSourcesAccessList</a>

---

##### `kmsAccess`<sup>Required</sup> <a name="kmsAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.kmsAccess"></a>

```typescript
public readonly kmsAccess: DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesKmsAccessOutputReference</a>

---

##### `managedS3BackupAccess`<sup>Required</sup> <a name="managedS3BackupAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess"></a>

```typescript
public readonly managedS3BackupAccess: DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesManagedS3BackupAccessOutputReference</a>

---

##### `managedServicesIpv4Cidrs`<sup>Required</sup> <a name="managedServicesIpv4Cidrs" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.managedServicesIpv4Cidrs"></a>

```typescript
public readonly managedServicesIpv4Cidrs: string[];
```

- *Type:* string[]

---

##### `resourceGatewayArn`<sup>Required</sup> <a name="resourceGatewayArn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.resourceGatewayArn"></a>

```typescript
public readonly resourceGatewayArn: string;
```

- *Type:* string

---

##### `s3Access`<sup>Required</sup> <a name="s3Access" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.s3Access"></a>

```typescript
public readonly s3Access: DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference</a>

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkArn"></a>

```typescript
public readonly serviceNetworkArn: string;
```

- *Type:* string

---

##### `serviceNetworkEndpoint`<sup>Required</sup> <a name="serviceNetworkEndpoint" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint"></a>

```typescript
public readonly serviceNetworkEndpoint: DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference">DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference</a>

---

##### `stsAccess`<sup>Required</sup> <a name="stsAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.stsAccess"></a>

```typescript
public readonly stsAccess: DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference</a>

---

##### `zeroEtlAccess`<sup>Required</sup> <a name="zeroEtlAccess" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.zeroEtlAccess"></a>

```typescript
public readonly zeroEtlAccess: DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference">DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOdbOdbNetworkManagedServices;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServices">DataAwsccOdbOdbNetworkManagedServices</a>

---


### DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

new dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument">s3PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3Access">DataAwsccOdbOdbNetworkManagedServicesS3Access</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses"></a>

```typescript
public readonly ipv4Addresses: string[];
```

- *Type:* string[]

---

##### `s3PolicyDocument`<sup>Required</sup> <a name="s3PolicyDocument" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument"></a>

```typescript
public readonly s3PolicyDocument: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3AccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOdbOdbNetworkManagedServicesS3Access;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesS3Access">DataAwsccOdbOdbNetworkManagedServicesS3Access</a>

---


### DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

new dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType">vpcEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint">DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `vpcEndpointType`<sup>Required</sup> <a name="vpcEndpointType" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType"></a>

```typescript
public readonly vpcEndpointType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint">DataAwsccOdbOdbNetworkManagedServicesServiceNetworkEndpoint</a>

---


### DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

new dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.stsPolicyDocument">stsPolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccess">DataAwsccOdbOdbNetworkManagedServicesStsAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.ipv4Addresses"></a>

```typescript
public readonly ipv4Addresses: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `stsPolicyDocument`<sup>Required</sup> <a name="stsPolicyDocument" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.stsPolicyDocument"></a>

```typescript
public readonly stsPolicyDocument: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOdbOdbNetworkManagedServicesStsAccess;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesStsAccess">DataAwsccOdbOdbNetworkManagedServicesStsAccess</a>

---


### DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference <a name="DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

new dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess">DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess">DataAwsccOdbOdbNetworkManagedServicesZeroEtlAccess</a>

---


### DataAwsccOdbOdbNetworkTagsList <a name="DataAwsccOdbOdbNetworkTagsList" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

new dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.get"></a>

```typescript
public get(index: number): DataAwsccOdbOdbNetworkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccOdbOdbNetworkTagsOutputReference <a name="DataAwsccOdbOdbNetworkTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccOdbOdbNetwork } from '@cdktn/provider-awscc'

new dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTags">DataAwsccOdbOdbNetworkTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOdbOdbNetworkTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbOdbNetwork.DataAwsccOdbOdbNetworkTags">DataAwsccOdbOdbNetworkTags</a>

---



