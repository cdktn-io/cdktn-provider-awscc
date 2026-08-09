# `dataAwsccEc2Ipam` Submodule <a name="`dataAwsccEc2Ipam` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2Ipam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2Ipam <a name="DataAwsccEc2Ipam" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_ipam awscc_ec2_ipam}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer"></a>

```typescript
import { dataAwsccEc2Ipam } from '@cdktn/provider-awscc'

new dataAwsccEc2Ipam.DataAwsccEc2Ipam(scope: Construct, id: string, config: DataAwsccEc2IpamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig">DataAwsccEc2IpamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig">DataAwsccEc2IpamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2Ipam resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.isConstruct"></a>

```typescript
import { dataAwsccEc2Ipam } from '@cdktn/provider-awscc'

dataAwsccEc2Ipam.DataAwsccEc2Ipam.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.isTerraformElement"></a>

```typescript
import { dataAwsccEc2Ipam } from '@cdktn/provider-awscc'

dataAwsccEc2Ipam.DataAwsccEc2Ipam.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2Ipam } from '@cdktn/provider-awscc'

dataAwsccEc2Ipam.DataAwsccEc2Ipam.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2Ipam } from '@cdktn/provider-awscc'

dataAwsccEc2Ipam.DataAwsccEc2Ipam.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2Ipam resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2Ipam to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2Ipam that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_ipam#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2Ipam to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.defaultResourceDiscoveryAssociationId">defaultResourceDiscoveryAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.defaultResourceDiscoveryId">defaultResourceDiscoveryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.defaultResourceDiscoveryOrganizationalUnitExclusions">defaultResourceDiscoveryOrganizationalUnitExclusions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList">DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.enablePrivateGua">enablePrivateGua</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.ipamId">ipamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.meteredAccount">meteredAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.operatingRegions">operatingRegions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList">DataAwsccEc2IpamOperatingRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.privateDefaultScopeId">privateDefaultScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.publicDefaultScopeId">publicDefaultScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.resourceDiscoveryAssociationCount">resourceDiscoveryAssociationCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.scopeCount">scopeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList">DataAwsccEc2IpamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `defaultResourceDiscoveryAssociationId`<sup>Required</sup> <a name="defaultResourceDiscoveryAssociationId" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.defaultResourceDiscoveryAssociationId"></a>

```typescript
public readonly defaultResourceDiscoveryAssociationId: string;
```

- *Type:* string

---

##### `defaultResourceDiscoveryId`<sup>Required</sup> <a name="defaultResourceDiscoveryId" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.defaultResourceDiscoveryId"></a>

```typescript
public readonly defaultResourceDiscoveryId: string;
```

- *Type:* string

---

##### `defaultResourceDiscoveryOrganizationalUnitExclusions`<sup>Required</sup> <a name="defaultResourceDiscoveryOrganizationalUnitExclusions" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.defaultResourceDiscoveryOrganizationalUnitExclusions"></a>

```typescript
public readonly defaultResourceDiscoveryOrganizationalUnitExclusions: DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList">DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enablePrivateGua`<sup>Required</sup> <a name="enablePrivateGua" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.enablePrivateGua"></a>

```typescript
public readonly enablePrivateGua: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ipamId`<sup>Required</sup> <a name="ipamId" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.ipamId"></a>

```typescript
public readonly ipamId: string;
```

- *Type:* string

---

##### `meteredAccount`<sup>Required</sup> <a name="meteredAccount" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.meteredAccount"></a>

```typescript
public readonly meteredAccount: string;
```

- *Type:* string

---

##### `operatingRegions`<sup>Required</sup> <a name="operatingRegions" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.operatingRegions"></a>

```typescript
public readonly operatingRegions: DataAwsccEc2IpamOperatingRegionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList">DataAwsccEc2IpamOperatingRegionsList</a>

---

##### `privateDefaultScopeId`<sup>Required</sup> <a name="privateDefaultScopeId" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.privateDefaultScopeId"></a>

```typescript
public readonly privateDefaultScopeId: string;
```

- *Type:* string

---

##### `publicDefaultScopeId`<sup>Required</sup> <a name="publicDefaultScopeId" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.publicDefaultScopeId"></a>

```typescript
public readonly publicDefaultScopeId: string;
```

- *Type:* string

---

##### `resourceDiscoveryAssociationCount`<sup>Required</sup> <a name="resourceDiscoveryAssociationCount" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.resourceDiscoveryAssociationCount"></a>

```typescript
public readonly resourceDiscoveryAssociationCount: number;
```

- *Type:* number

---

##### `scopeCount`<sup>Required</sup> <a name="scopeCount" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.scopeCount"></a>

```typescript
public readonly scopeCount: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2IpamTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList">DataAwsccEc2IpamTagsList</a>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2IpamConfig <a name="DataAwsccEc2IpamConfig" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.Initializer"></a>

```typescript
import { dataAwsccEc2Ipam } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamConfig: dataAwsccEc2Ipam.DataAwsccEc2IpamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_ipam#id DataAwsccEc2Ipam#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions <a name="DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions.Initializer"></a>

```typescript
import { dataAwsccEc2Ipam } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions: dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions = { ... }
```


### DataAwsccEc2IpamOperatingRegions <a name="DataAwsccEc2IpamOperatingRegions" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegions.Initializer"></a>

```typescript
import { dataAwsccEc2Ipam } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamOperatingRegions: dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegions = { ... }
```


### DataAwsccEc2IpamTags <a name="DataAwsccEc2IpamTags" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTags.Initializer"></a>

```typescript
import { dataAwsccEc2Ipam } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamTags: dataAwsccEc2Ipam.DataAwsccEc2IpamTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList <a name="DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer"></a>

```typescript
import { dataAwsccEc2Ipam } from '@cdktn/provider-awscc'

new dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference <a name="DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ipam } from '@cdktn/provider-awscc'

new dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPath">organizationsEntityPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions">DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `organizationsEntityPath`<sup>Required</sup> <a name="organizationsEntityPath" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPath"></a>

```typescript
public readonly organizationsEntityPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions">DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions</a>

---


### DataAwsccEc2IpamOperatingRegionsList <a name="DataAwsccEc2IpamOperatingRegionsList" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.Initializer"></a>

```typescript
import { dataAwsccEc2Ipam } from '@cdktn/provider-awscc'

new dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2IpamOperatingRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2IpamOperatingRegionsOutputReference <a name="DataAwsccEc2IpamOperatingRegionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ipam } from '@cdktn/provider-awscc'

new dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegions">DataAwsccEc2IpamOperatingRegions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2IpamOperatingRegions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegions">DataAwsccEc2IpamOperatingRegions</a>

---


### DataAwsccEc2IpamTagsList <a name="DataAwsccEc2IpamTagsList" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2Ipam } from '@cdktn/provider-awscc'

new dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2IpamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2IpamTagsOutputReference <a name="DataAwsccEc2IpamTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2Ipam } from '@cdktn/provider-awscc'

new dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTags">DataAwsccEc2IpamTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2IpamTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTags">DataAwsccEc2IpamTags</a>

---



