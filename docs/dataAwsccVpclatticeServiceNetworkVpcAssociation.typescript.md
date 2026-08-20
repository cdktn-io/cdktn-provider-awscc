# `dataAwsccVpclatticeServiceNetworkVpcAssociation` Submodule <a name="`dataAwsccVpclatticeServiceNetworkVpcAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccVpclatticeServiceNetworkVpcAssociation <a name="DataAwsccVpclatticeServiceNetworkVpcAssociation" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/vpclattice_service_network_vpc_association awscc_vpclattice_service_network_vpc_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation(scope: Construct, id: string, config: DataAwsccVpclatticeServiceNetworkVpcAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig">DataAwsccVpclatticeServiceNetworkVpcAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig">DataAwsccVpclatticeServiceNetworkVpcAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccVpclatticeServiceNetworkVpcAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isConstruct"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isTerraformElement"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.generateConfigForImport"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccVpclatticeServiceNetworkVpcAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccVpclatticeServiceNetworkVpcAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccVpclatticeServiceNetworkVpcAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/vpclattice_service_network_vpc_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccVpclatticeServiceNetworkVpcAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.dnsOptions">dnsOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference">DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.privateDnsEnabled">privateDnsEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkIdentifier">serviceNetworkIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkName">serviceNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkVpcAssociationId">serviceNetworkVpcAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList">DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.vpcIdentifier">vpcIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dnsOptions`<sup>Required</sup> <a name="dnsOptions" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.dnsOptions"></a>

```typescript
public readonly dnsOptions: DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference">DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference</a>

---

##### `privateDnsEnabled`<sup>Required</sup> <a name="privateDnsEnabled" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.privateDnsEnabled"></a>

```typescript
public readonly privateDnsEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkArn"></a>

```typescript
public readonly serviceNetworkArn: string;
```

- *Type:* string

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

---

##### `serviceNetworkIdentifier`<sup>Required</sup> <a name="serviceNetworkIdentifier" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkIdentifier"></a>

```typescript
public readonly serviceNetworkIdentifier: string;
```

- *Type:* string

---

##### `serviceNetworkName`<sup>Required</sup> <a name="serviceNetworkName" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkName"></a>

```typescript
public readonly serviceNetworkName: string;
```

- *Type:* string

---

##### `serviceNetworkVpcAssociationId`<sup>Required</sup> <a name="serviceNetworkVpcAssociationId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.serviceNetworkVpcAssociationId"></a>

```typescript
public readonly serviceNetworkVpcAssociationId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.tags"></a>

```typescript
public readonly tags: DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList">DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `vpcIdentifier`<sup>Required</sup> <a name="vpcIdentifier" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.vpcIdentifier"></a>

```typescript
public readonly vpcIdentifier: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccVpclatticeServiceNetworkVpcAssociationConfig <a name="DataAwsccVpclatticeServiceNetworkVpcAssociationConfig" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeServiceNetworkVpcAssociationConfig: dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/vpclattice_service_network_vpc_association#id DataAwsccVpclatticeServiceNetworkVpcAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions <a name="DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions: dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions = { ... }
```


### DataAwsccVpclatticeServiceNetworkVpcAssociationTags <a name="DataAwsccVpclatticeServiceNetworkVpcAssociationTags" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTags.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeServiceNetworkVpcAssociationTags: dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference <a name="DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.privateDnsPreference">privateDnsPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.privateDnsSpecifiedDomains">privateDnsSpecifiedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions">DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateDnsPreference`<sup>Required</sup> <a name="privateDnsPreference" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.privateDnsPreference"></a>

```typescript
public readonly privateDnsPreference: string;
```

- *Type:* string

---

##### `privateDnsSpecifiedDomains`<sup>Required</sup> <a name="privateDnsSpecifiedDomains" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.privateDnsSpecifiedDomains"></a>

```typescript
public readonly privateDnsSpecifiedDomains: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions">DataAwsccVpclatticeServiceNetworkVpcAssociationDnsOptions</a>

---


### DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList <a name="DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference <a name="DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkVpcAssociation } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTags">DataAwsccVpclatticeServiceNetworkVpcAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccVpclatticeServiceNetworkVpcAssociationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkVpcAssociation.DataAwsccVpclatticeServiceNetworkVpcAssociationTags">DataAwsccVpclatticeServiceNetworkVpcAssociationTags</a>

---



