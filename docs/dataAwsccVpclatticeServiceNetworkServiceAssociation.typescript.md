# `dataAwsccVpclatticeServiceNetworkServiceAssociation` Submodule <a name="`dataAwsccVpclatticeServiceNetworkServiceAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccVpclatticeServiceNetworkServiceAssociation <a name="DataAwsccVpclatticeServiceNetworkServiceAssociation" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/vpclattice_service_network_service_association awscc_vpclattice_service_network_service_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation(scope: Construct, id: string, config: DataAwsccVpclatticeServiceNetworkServiceAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig">DataAwsccVpclatticeServiceNetworkServiceAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig">DataAwsccVpclatticeServiceNetworkServiceAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccVpclatticeServiceNetworkServiceAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.isConstruct"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.isTerraformElement"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.generateConfigForImport"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccVpclatticeServiceNetworkServiceAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccVpclatticeServiceNetworkServiceAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccVpclatticeServiceNetworkServiceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/vpclattice_service_network_service_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccVpclatticeServiceNetworkServiceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.dnsEntry">dnsEntry</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference">DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.serviceArn">serviceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.serviceIdentifier">serviceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.serviceNetworkIdentifier">serviceNetworkIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.serviceNetworkName">serviceNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.serviceNetworkServiceAssociationId">serviceNetworkServiceAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList">DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dnsEntry`<sup>Required</sup> <a name="dnsEntry" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.dnsEntry"></a>

```typescript
public readonly dnsEntry: DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference">DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference</a>

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.serviceArn"></a>

```typescript
public readonly serviceArn: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.serviceIdentifier"></a>

```typescript
public readonly serviceIdentifier: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.serviceNetworkArn"></a>

```typescript
public readonly serviceNetworkArn: string;
```

- *Type:* string

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

---

##### `serviceNetworkIdentifier`<sup>Required</sup> <a name="serviceNetworkIdentifier" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.serviceNetworkIdentifier"></a>

```typescript
public readonly serviceNetworkIdentifier: string;
```

- *Type:* string

---

##### `serviceNetworkName`<sup>Required</sup> <a name="serviceNetworkName" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.serviceNetworkName"></a>

```typescript
public readonly serviceNetworkName: string;
```

- *Type:* string

---

##### `serviceNetworkServiceAssociationId`<sup>Required</sup> <a name="serviceNetworkServiceAssociationId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.serviceNetworkServiceAssociationId"></a>

```typescript
public readonly serviceNetworkServiceAssociationId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.tags"></a>

```typescript
public readonly tags: DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList">DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccVpclatticeServiceNetworkServiceAssociationConfig <a name="DataAwsccVpclatticeServiceNetworkServiceAssociationConfig" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeServiceNetworkServiceAssociationConfig: dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/vpclattice_service_network_service_association#id DataAwsccVpclatticeServiceNetworkServiceAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntry <a name="DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntry" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntry.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntry: dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntry = { ... }
```


### DataAwsccVpclatticeServiceNetworkServiceAssociationTags <a name="DataAwsccVpclatticeServiceNetworkServiceAssociationTags" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTags.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

const dataAwsccVpclatticeServiceNetworkServiceAssociationTags: dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference <a name="DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntry">DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntry;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntry">DataAwsccVpclatticeServiceNetworkServiceAssociationDnsEntry</a>

---


### DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList <a name="DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference <a name="DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccVpclatticeServiceNetworkServiceAssociation } from '@cdktn/provider-awscc'

new dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTags">DataAwsccVpclatticeServiceNetworkServiceAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccVpclatticeServiceNetworkServiceAssociationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVpclatticeServiceNetworkServiceAssociation.DataAwsccVpclatticeServiceNetworkServiceAssociationTags">DataAwsccVpclatticeServiceNetworkServiceAssociationTags</a>

---



