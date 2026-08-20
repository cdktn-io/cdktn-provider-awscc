# `dataAwsccVpclatticeServiceNetworkResourceAssociation` Submodule <a name="`dataAwsccVpclatticeServiceNetworkResourceAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccVpclatticeServiceNetworkResourceAssociation <a name="DataAwsccVpclatticeServiceNetworkResourceAssociation" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/vpclattice_service_network_resource_association awscc_vpclattice_service_network_resource_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkResourceAssociation } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation(scope: Construct, id: string, config: DataAwsccVpclatticeServiceNetworkResourceAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig">DataAwsccVpclatticeServiceNetworkResourceAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig">DataAwsccVpclatticeServiceNetworkResourceAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccVpclatticeServiceNetworkResourceAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isConstruct"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkResourceAssociation } from '@cdktn/provider-awscc'

dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isTerraformElement"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkResourceAssociation } from '@cdktn/provider-awscc'

dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkResourceAssociation } from '@cdktn/provider-awscc'

dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.generateConfigForImport"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkResourceAssociation } from '@cdktn/provider-awscc'

dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccVpclatticeServiceNetworkResourceAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccVpclatticeServiceNetworkResourceAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccVpclatticeServiceNetworkResourceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/vpclattice_service_network_resource_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccVpclatticeServiceNetworkResourceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.privateDnsEnabled">privateDnsEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationId">resourceConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.serviceNetworkResourceAssociationId">serviceNetworkResourceAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList">DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `privateDnsEnabled`<sup>Required</sup> <a name="privateDnsEnabled" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.privateDnsEnabled"></a>

```typescript
public readonly privateDnsEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `resourceConfigurationId`<sup>Required</sup> <a name="resourceConfigurationId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.resourceConfigurationId"></a>

```typescript
public readonly resourceConfigurationId: string;
```

- *Type:* string

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

---

##### `serviceNetworkResourceAssociationId`<sup>Required</sup> <a name="serviceNetworkResourceAssociationId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.serviceNetworkResourceAssociationId"></a>

```typescript
public readonly serviceNetworkResourceAssociationId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.tags"></a>

```typescript
public readonly tags: DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList">DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccVpclatticeServiceNetworkResourceAssociationConfig <a name="DataAwsccVpclatticeServiceNetworkResourceAssociationConfig" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkResourceAssociation } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeServiceNetworkResourceAssociationConfig: dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/vpclattice_service_network_resource_association#id DataAwsccVpclatticeServiceNetworkResourceAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccVpclatticeServiceNetworkResourceAssociationTags <a name="DataAwsccVpclatticeServiceNetworkResourceAssociationTags" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTags.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkResourceAssociation } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeServiceNetworkResourceAssociationTags: dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList <a name="DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkResourceAssociation } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference <a name="DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkResourceAssociation } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTags">DataAwsccVpclatticeServiceNetworkResourceAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccVpclatticeServiceNetworkResourceAssociationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkResourceAssociation.DataAwsccVpclatticeServiceNetworkResourceAssociationTags">DataAwsccVpclatticeServiceNetworkResourceAssociationTags</a>

---



