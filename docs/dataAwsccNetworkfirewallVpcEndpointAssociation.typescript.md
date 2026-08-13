# `dataAwsccNetworkfirewallVpcEndpointAssociation` Submodule <a name="`dataAwsccNetworkfirewallVpcEndpointAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkfirewallVpcEndpointAssociation <a name="DataAwsccNetworkfirewallVpcEndpointAssociation" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/networkfirewall_vpc_endpoint_association awscc_networkfirewall_vpc_endpoint_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallVpcEndpointAssociation } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation(scope: Construct, id: string, config: DataAwsccNetworkfirewallVpcEndpointAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig">DataAwsccNetworkfirewallVpcEndpointAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig">DataAwsccNetworkfirewallVpcEndpointAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkfirewallVpcEndpointAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isConstruct"></a>

```typescript
import { dataAwsccNetworkfirewallVpcEndpointAssociation } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isTerraformElement"></a>

```typescript
import { dataAwsccNetworkfirewallVpcEndpointAssociation } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsccNetworkfirewallVpcEndpointAssociation } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.generateConfigForImport"></a>

```typescript
import { dataAwsccNetworkfirewallVpcEndpointAssociation } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNetworkfirewallVpcEndpointAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNetworkfirewallVpcEndpointAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNetworkfirewallVpcEndpointAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/networkfirewall_vpc_endpoint_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkfirewallVpcEndpointAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.firewallArn">firewallArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.subnetMapping">subnetMapping</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference">DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList">DataAwsccNetworkfirewallVpcEndpointAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationArn">vpcEndpointAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationId">vpcEndpointAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `firewallArn`<sup>Required</sup> <a name="firewallArn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.firewallArn"></a>

```typescript
public readonly firewallArn: string;
```

- *Type:* string

---

##### `subnetMapping`<sup>Required</sup> <a name="subnetMapping" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.subnetMapping"></a>

```typescript
public readonly subnetMapping: DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference">DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.tags"></a>

```typescript
public readonly tags: DataAwsccNetworkfirewallVpcEndpointAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList">DataAwsccNetworkfirewallVpcEndpointAssociationTagsList</a>

---

##### `vpcEndpointAssociationArn`<sup>Required</sup> <a name="vpcEndpointAssociationArn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationArn"></a>

```typescript
public readonly vpcEndpointAssociationArn: string;
```

- *Type:* string

---

##### `vpcEndpointAssociationId`<sup>Required</sup> <a name="vpcEndpointAssociationId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationId"></a>

```typescript
public readonly vpcEndpointAssociationId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkfirewallVpcEndpointAssociationConfig <a name="DataAwsccNetworkfirewallVpcEndpointAssociationConfig" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallVpcEndpointAssociation } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallVpcEndpointAssociationConfig: dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/networkfirewall_vpc_endpoint_association#id DataAwsccNetworkfirewallVpcEndpointAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping <a name="DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallVpcEndpointAssociation } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping: dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping = { ... }
```


### DataAwsccNetworkfirewallVpcEndpointAssociationTags <a name="DataAwsccNetworkfirewallVpcEndpointAssociationTags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTags.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallVpcEndpointAssociation } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallVpcEndpointAssociationTags: dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference <a name="DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallVpcEndpointAssociation } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping">DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping">DataAwsccNetworkfirewallVpcEndpointAssociationSubnetMapping</a>

---


### DataAwsccNetworkfirewallVpcEndpointAssociationTagsList <a name="DataAwsccNetworkfirewallVpcEndpointAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallVpcEndpointAssociation } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference <a name="DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallVpcEndpointAssociation } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTags">DataAwsccNetworkfirewallVpcEndpointAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallVpcEndpointAssociationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallVpcEndpointAssociation.DataAwsccNetworkfirewallVpcEndpointAssociationTags">DataAwsccNetworkfirewallVpcEndpointAssociationTags</a>

---



