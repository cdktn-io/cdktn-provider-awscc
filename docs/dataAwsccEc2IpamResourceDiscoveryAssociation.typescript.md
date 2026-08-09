# `dataAwsccEc2IpamResourceDiscoveryAssociation` Submodule <a name="`dataAwsccEc2IpamResourceDiscoveryAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2IpamResourceDiscoveryAssociation <a name="DataAwsccEc2IpamResourceDiscoveryAssociation" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_ipam_resource_discovery_association awscc_ec2_ipam_resource_discovery_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.Initializer"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscoveryAssociation } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation(scope: Construct, id: string, config: DataAwsccEc2IpamResourceDiscoveryAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig">DataAwsccEc2IpamResourceDiscoveryAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig">DataAwsccEc2IpamResourceDiscoveryAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2IpamResourceDiscoveryAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.isConstruct"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscoveryAssociation } from '@cdktn/provider-awscc'

dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.isTerraformElement"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscoveryAssociation } from '@cdktn/provider-awscc'

dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscoveryAssociation } from '@cdktn/provider-awscc'

dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscoveryAssociation } from '@cdktn/provider-awscc'

dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2IpamResourceDiscoveryAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2IpamResourceDiscoveryAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2IpamResourceDiscoveryAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_ipam_resource_discovery_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2IpamResourceDiscoveryAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.ipamArn">ipamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.ipamId">ipamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.ipamRegion">ipamRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryAssociationArn">ipamResourceDiscoveryAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryAssociationId">ipamResourceDiscoveryAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryId">ipamResourceDiscoveryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.isDefault">isDefault</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.resourceDiscoveryStatus">resourceDiscoveryStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList">DataAwsccEc2IpamResourceDiscoveryAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `ipamArn`<sup>Required</sup> <a name="ipamArn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.ipamArn"></a>

```typescript
public readonly ipamArn: string;
```

- *Type:* string

---

##### `ipamId`<sup>Required</sup> <a name="ipamId" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.ipamId"></a>

```typescript
public readonly ipamId: string;
```

- *Type:* string

---

##### `ipamRegion`<sup>Required</sup> <a name="ipamRegion" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.ipamRegion"></a>

```typescript
public readonly ipamRegion: string;
```

- *Type:* string

---

##### `ipamResourceDiscoveryAssociationArn`<sup>Required</sup> <a name="ipamResourceDiscoveryAssociationArn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryAssociationArn"></a>

```typescript
public readonly ipamResourceDiscoveryAssociationArn: string;
```

- *Type:* string

---

##### `ipamResourceDiscoveryAssociationId`<sup>Required</sup> <a name="ipamResourceDiscoveryAssociationId" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryAssociationId"></a>

```typescript
public readonly ipamResourceDiscoveryAssociationId: string;
```

- *Type:* string

---

##### `ipamResourceDiscoveryId`<sup>Required</sup> <a name="ipamResourceDiscoveryId" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryId"></a>

```typescript
public readonly ipamResourceDiscoveryId: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `resourceDiscoveryStatus`<sup>Required</sup> <a name="resourceDiscoveryStatus" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.resourceDiscoveryStatus"></a>

```typescript
public readonly resourceDiscoveryStatus: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2IpamResourceDiscoveryAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList">DataAwsccEc2IpamResourceDiscoveryAssociationTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2IpamResourceDiscoveryAssociationConfig <a name="DataAwsccEc2IpamResourceDiscoveryAssociationConfig" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig.Initializer"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscoveryAssociation } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamResourceDiscoveryAssociationConfig: dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_ipam_resource_discovery_association#id DataAwsccEc2IpamResourceDiscoveryAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2IpamResourceDiscoveryAssociationTags <a name="DataAwsccEc2IpamResourceDiscoveryAssociationTags" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTags.Initializer"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscoveryAssociation } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamResourceDiscoveryAssociationTags: dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2IpamResourceDiscoveryAssociationTagsList <a name="DataAwsccEc2IpamResourceDiscoveryAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscoveryAssociation } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference <a name="DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2IpamResourceDiscoveryAssociation } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTags">DataAwsccEc2IpamResourceDiscoveryAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2IpamResourceDiscoveryAssociationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamResourceDiscoveryAssociation.DataAwsccEc2IpamResourceDiscoveryAssociationTags">DataAwsccEc2IpamResourceDiscoveryAssociationTags</a>

---



