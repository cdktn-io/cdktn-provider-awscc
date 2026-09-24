# `dataAwsccNetworkfirewallContainerAssociation` Submodule <a name="`dataAwsccNetworkfirewallContainerAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkfirewallContainerAssociation <a name="DataAwsccNetworkfirewallContainerAssociation" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/networkfirewall_container_association awscc_networkfirewall_container_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallContainerAssociation } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation(scope: Construct, id: string, config: DataAwsccNetworkfirewallContainerAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig">DataAwsccNetworkfirewallContainerAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig">DataAwsccNetworkfirewallContainerAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworkfirewallContainerAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isConstruct"></a>

```typescript
import { dataAwsccNetworkfirewallContainerAssociation } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isTerraformElement"></a>

```typescript
import { dataAwsccNetworkfirewallContainerAssociation } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsccNetworkfirewallContainerAssociation } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.generateConfigForImport"></a>

```typescript
import { dataAwsccNetworkfirewallContainerAssociation } from '@cdktn/provider-awscc'

dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNetworkfirewallContainerAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNetworkfirewallContainerAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNetworkfirewallContainerAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/networkfirewall_container_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkfirewallContainerAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.containerAssociationArn">containerAssociationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.containerAssociationName">containerAssociationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.containerMonitoringConfigurations">containerMonitoringConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList">DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.resolvedCidrCount">resolvedCidrCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList">DataAwsccNetworkfirewallContainerAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `containerAssociationArn`<sup>Required</sup> <a name="containerAssociationArn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.containerAssociationArn"></a>

```typescript
public readonly containerAssociationArn: string;
```

- *Type:* string

---

##### `containerAssociationName`<sup>Required</sup> <a name="containerAssociationName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.containerAssociationName"></a>

```typescript
public readonly containerAssociationName: string;
```

- *Type:* string

---

##### `containerMonitoringConfigurations`<sup>Required</sup> <a name="containerMonitoringConfigurations" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.containerMonitoringConfigurations"></a>

```typescript
public readonly containerMonitoringConfigurations: DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList">DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `resolvedCidrCount`<sup>Required</sup> <a name="resolvedCidrCount" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.resolvedCidrCount"></a>

```typescript
public readonly resolvedCidrCount: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.tags"></a>

```typescript
public readonly tags: DataAwsccNetworkfirewallContainerAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList">DataAwsccNetworkfirewallContainerAssociationTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkfirewallContainerAssociationConfig <a name="DataAwsccNetworkfirewallContainerAssociationConfig" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallContainerAssociation } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallContainerAssociationConfig: dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/networkfirewall_container_association#id DataAwsccNetworkfirewallContainerAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations <a name="DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallContainerAssociation } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations: dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations = { ... }
```


### DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters <a name="DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallContainerAssociation } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters: dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters = { ... }
```


### DataAwsccNetworkfirewallContainerAssociationTags <a name="DataAwsccNetworkfirewallContainerAssociationTags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTags.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallContainerAssociation } from '@cdktn/provider-awscc'

const dataAwsccNetworkfirewallContainerAssociationTags: dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList <a name="DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallContainerAssociation } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference <a name="DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallContainerAssociation } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters">DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters</a>

---


### DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList <a name="DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallContainerAssociation } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference <a name="DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallContainerAssociation } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFilters">attributeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList">DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations">DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeFilters`<sup>Required</sup> <a name="attributeFilters" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFilters"></a>

```typescript
public readonly attributeFilters: DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList">DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList</a>

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations">DataAwsccNetworkfirewallContainerAssociationContainerMonitoringConfigurations</a>

---


### DataAwsccNetworkfirewallContainerAssociationTagsList <a name="DataAwsccNetworkfirewallContainerAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallContainerAssociation } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworkfirewallContainerAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworkfirewallContainerAssociationTagsOutputReference <a name="DataAwsccNetworkfirewallContainerAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworkfirewallContainerAssociation } from '@cdktn/provider-awscc'

new dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTags">DataAwsccNetworkfirewallContainerAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworkfirewallContainerAssociationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallContainerAssociation.DataAwsccNetworkfirewallContainerAssociationTags">DataAwsccNetworkfirewallContainerAssociationTags</a>

---



