# `dataAwsccEc2IpamInternetRegistryAssociation` Submodule <a name="`dataAwsccEc2IpamInternetRegistryAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2IpamInternetRegistryAssociation <a name="DataAwsccEc2IpamInternetRegistryAssociation" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/ec2_ipam_internet_registry_association awscc_ec2_ipam_internet_registry_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.Initializer"></a>

```typescript
import { dataAwsccEc2IpamInternetRegistryAssociation } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation(scope: Construct, id: string, config: DataAwsccEc2IpamInternetRegistryAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig">DataAwsccEc2IpamInternetRegistryAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig">DataAwsccEc2IpamInternetRegistryAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2IpamInternetRegistryAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.isConstruct"></a>

```typescript
import { dataAwsccEc2IpamInternetRegistryAssociation } from '@cdktn/provider-awscc'

dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.isTerraformElement"></a>

```typescript
import { dataAwsccEc2IpamInternetRegistryAssociation } from '@cdktn/provider-awscc'

dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2IpamInternetRegistryAssociation } from '@cdktn/provider-awscc'

dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2IpamInternetRegistryAssociation } from '@cdktn/provider-awscc'

dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2IpamInternetRegistryAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2IpamInternetRegistryAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2IpamInternetRegistryAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/ec2_ipam_internet_registry_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2IpamInternetRegistryAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.childRequestXml">childRequestXml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.ipamId">ipamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.ipamInternetRegistryAssociationArn">ipamInternetRegistryAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.ipamInternetRegistryAssociationId">ipamInternetRegistryAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.ipamRegion">ipamRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.organizationHandle">organizationHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.rir">rir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList">DataAwsccEc2IpamInternetRegistryAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `childRequestXml`<sup>Required</sup> <a name="childRequestXml" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.childRequestXml"></a>

```typescript
public readonly childRequestXml: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ipamId`<sup>Required</sup> <a name="ipamId" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.ipamId"></a>

```typescript
public readonly ipamId: string;
```

- *Type:* string

---

##### `ipamInternetRegistryAssociationArn`<sup>Required</sup> <a name="ipamInternetRegistryAssociationArn" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.ipamInternetRegistryAssociationArn"></a>

```typescript
public readonly ipamInternetRegistryAssociationArn: string;
```

- *Type:* string

---

##### `ipamInternetRegistryAssociationId`<sup>Required</sup> <a name="ipamInternetRegistryAssociationId" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.ipamInternetRegistryAssociationId"></a>

```typescript
public readonly ipamInternetRegistryAssociationId: string;
```

- *Type:* string

---

##### `ipamRegion`<sup>Required</sup> <a name="ipamRegion" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.ipamRegion"></a>

```typescript
public readonly ipamRegion: string;
```

- *Type:* string

---

##### `organizationHandle`<sup>Required</sup> <a name="organizationHandle" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.organizationHandle"></a>

```typescript
public readonly organizationHandle: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `rir`<sup>Required</sup> <a name="rir" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.rir"></a>

```typescript
public readonly rir: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2IpamInternetRegistryAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList">DataAwsccEc2IpamInternetRegistryAssociationTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2IpamInternetRegistryAssociationConfig <a name="DataAwsccEc2IpamInternetRegistryAssociationConfig" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig.Initializer"></a>

```typescript
import { dataAwsccEc2IpamInternetRegistryAssociation } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamInternetRegistryAssociationConfig: dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/ec2_ipam_internet_registry_association#id DataAwsccEc2IpamInternetRegistryAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2IpamInternetRegistryAssociationTags <a name="DataAwsccEc2IpamInternetRegistryAssociationTags" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTags.Initializer"></a>

```typescript
import { dataAwsccEc2IpamInternetRegistryAssociation } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamInternetRegistryAssociationTags: dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2IpamInternetRegistryAssociationTagsList <a name="DataAwsccEc2IpamInternetRegistryAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2IpamInternetRegistryAssociation } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference <a name="DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2IpamInternetRegistryAssociation } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTags">DataAwsccEc2IpamInternetRegistryAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2IpamInternetRegistryAssociationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamInternetRegistryAssociation.DataAwsccEc2IpamInternetRegistryAssociationTags">DataAwsccEc2IpamInternetRegistryAssociationTags</a>

---



