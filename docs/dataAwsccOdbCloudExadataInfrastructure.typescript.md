# `dataAwsccOdbCloudExadataInfrastructure` Submodule <a name="`dataAwsccOdbCloudExadataInfrastructure` Submodule" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOdbCloudExadataInfrastructure <a name="DataAwsccOdbCloudExadataInfrastructure" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/odb_cloud_exadata_infrastructure awscc_odb_cloud_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.Initializer"></a>

```typescript
import { dataAwsccOdbCloudExadataInfrastructure } from '@cdktn/provider-awscc'

new dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure(scope: Construct, id: string, config: DataAwsccOdbCloudExadataInfrastructureConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig">DataAwsccOdbCloudExadataInfrastructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig">DataAwsccOdbCloudExadataInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOdbCloudExadataInfrastructure resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isConstruct"></a>

```typescript
import { dataAwsccOdbCloudExadataInfrastructure } from '@cdktn/provider-awscc'

dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isTerraformElement"></a>

```typescript
import { dataAwsccOdbCloudExadataInfrastructure } from '@cdktn/provider-awscc'

dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isTerraformDataSource"></a>

```typescript
import { dataAwsccOdbCloudExadataInfrastructure } from '@cdktn/provider-awscc'

dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.generateConfigForImport"></a>

```typescript
import { dataAwsccOdbCloudExadataInfrastructure } from '@cdktn/provider-awscc'

dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccOdbCloudExadataInfrastructure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccOdbCloudExadataInfrastructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccOdbCloudExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/odb_cloud_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOdbCloudExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.activatedStorageCount">activatedStorageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.additionalStorageCount">additionalStorageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.availableStorageSizeInGBs">availableStorageSizeInGBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.cloudExadataInfrastructureArn">cloudExadataInfrastructureArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.computeModel">computeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.cpuCount">cpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.customerContactsToSendToOci">customerContactsToSendToOci</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList">DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.databaseServerType">databaseServerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dataStorageSizeInTBs">dataStorageSizeInTBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dbNodeStorageSizeInGBs">dbNodeStorageSizeInGBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dbServerIds">dbServerIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dbServerVersion">dbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference">DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maxCpuCount">maxCpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maxDataStorageInTBs">maxDataStorageInTBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maxDbNodeStorageSizeInGBs">maxDbNodeStorageSizeInGBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maxMemoryInGBs">maxMemoryInGBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.memorySizeInGBs">memorySizeInGBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.ociResourceAnchorName">ociResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.ociUrl">ociUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.storageCount">storageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.storageServerType">storageServerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.storageServerVersion">storageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList">DataAwsccOdbCloudExadataInfrastructureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.totalStorageSizeInGBs">totalStorageSizeInGBs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `activatedStorageCount`<sup>Required</sup> <a name="activatedStorageCount" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.activatedStorageCount"></a>

```typescript
public readonly activatedStorageCount: number;
```

- *Type:* number

---

##### `additionalStorageCount`<sup>Required</sup> <a name="additionalStorageCount" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.additionalStorageCount"></a>

```typescript
public readonly additionalStorageCount: number;
```

- *Type:* number

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `availableStorageSizeInGBs`<sup>Required</sup> <a name="availableStorageSizeInGBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.availableStorageSizeInGBs"></a>

```typescript
public readonly availableStorageSizeInGBs: number;
```

- *Type:* number

---

##### `cloudExadataInfrastructureArn`<sup>Required</sup> <a name="cloudExadataInfrastructureArn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.cloudExadataInfrastructureArn"></a>

```typescript
public readonly cloudExadataInfrastructureArn: string;
```

- *Type:* string

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.computeModel"></a>

```typescript
public readonly computeModel: string;
```

- *Type:* string

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.cpuCount"></a>

```typescript
public readonly cpuCount: number;
```

- *Type:* number

---

##### `customerContactsToSendToOci`<sup>Required</sup> <a name="customerContactsToSendToOci" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.customerContactsToSendToOci"></a>

```typescript
public readonly customerContactsToSendToOci: DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList">DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList</a>

---

##### `databaseServerType`<sup>Required</sup> <a name="databaseServerType" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.databaseServerType"></a>

```typescript
public readonly databaseServerType: string;
```

- *Type:* string

---

##### `dataStorageSizeInTBs`<sup>Required</sup> <a name="dataStorageSizeInTBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dataStorageSizeInTBs"></a>

```typescript
public readonly dataStorageSizeInTBs: number;
```

- *Type:* number

---

##### `dbNodeStorageSizeInGBs`<sup>Required</sup> <a name="dbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dbNodeStorageSizeInGBs"></a>

```typescript
public readonly dbNodeStorageSizeInGBs: number;
```

- *Type:* number

---

##### `dbServerIds`<sup>Required</sup> <a name="dbServerIds" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dbServerIds"></a>

```typescript
public readonly dbServerIds: string[];
```

- *Type:* string[]

---

##### `dbServerVersion`<sup>Required</sup> <a name="dbServerVersion" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.dbServerVersion"></a>

```typescript
public readonly dbServerVersion: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference">DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference</a>

---

##### `maxCpuCount`<sup>Required</sup> <a name="maxCpuCount" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maxCpuCount"></a>

```typescript
public readonly maxCpuCount: number;
```

- *Type:* number

---

##### `maxDataStorageInTBs`<sup>Required</sup> <a name="maxDataStorageInTBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maxDataStorageInTBs"></a>

```typescript
public readonly maxDataStorageInTBs: number;
```

- *Type:* number

---

##### `maxDbNodeStorageSizeInGBs`<sup>Required</sup> <a name="maxDbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maxDbNodeStorageSizeInGBs"></a>

```typescript
public readonly maxDbNodeStorageSizeInGBs: number;
```

- *Type:* number

---

##### `maxMemoryInGBs`<sup>Required</sup> <a name="maxMemoryInGBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.maxMemoryInGBs"></a>

```typescript
public readonly maxMemoryInGBs: number;
```

- *Type:* number

---

##### `memorySizeInGBs`<sup>Required</sup> <a name="memorySizeInGBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.memorySizeInGBs"></a>

```typescript
public readonly memorySizeInGBs: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociResourceAnchorName`<sup>Required</sup> <a name="ociResourceAnchorName" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.ociResourceAnchorName"></a>

```typescript
public readonly ociResourceAnchorName: string;
```

- *Type:* string

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.ociUrl"></a>

```typescript
public readonly ociUrl: string;
```

- *Type:* string

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `storageCount`<sup>Required</sup> <a name="storageCount" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.storageCount"></a>

```typescript
public readonly storageCount: number;
```

- *Type:* number

---

##### `storageServerType`<sup>Required</sup> <a name="storageServerType" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.storageServerType"></a>

```typescript
public readonly storageServerType: string;
```

- *Type:* string

---

##### `storageServerVersion`<sup>Required</sup> <a name="storageServerVersion" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.storageServerVersion"></a>

```typescript
public readonly storageServerVersion: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.tags"></a>

```typescript
public readonly tags: DataAwsccOdbCloudExadataInfrastructureTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList">DataAwsccOdbCloudExadataInfrastructureTagsList</a>

---

##### `totalStorageSizeInGBs`<sup>Required</sup> <a name="totalStorageSizeInGBs" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.totalStorageSizeInGBs"></a>

```typescript
public readonly totalStorageSizeInGBs: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructure.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOdbCloudExadataInfrastructureConfig <a name="DataAwsccOdbCloudExadataInfrastructureConfig" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.Initializer"></a>

```typescript
import { dataAwsccOdbCloudExadataInfrastructure } from '@cdktn/provider-awscc'

const dataAwsccOdbCloudExadataInfrastructureConfig: dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/odb_cloud_exadata_infrastructure#id DataAwsccOdbCloudExadataInfrastructure#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci <a name="DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci.Initializer"></a>

```typescript
import { dataAwsccOdbCloudExadataInfrastructure } from '@cdktn/provider-awscc'

const dataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci: dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci = { ... }
```


### DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow <a name="DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow.Initializer"></a>

```typescript
import { dataAwsccOdbCloudExadataInfrastructure } from '@cdktn/provider-awscc'

const dataAwsccOdbCloudExadataInfrastructureMaintenanceWindow: dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow = { ... }
```


### DataAwsccOdbCloudExadataInfrastructureTags <a name="DataAwsccOdbCloudExadataInfrastructureTags" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTags.Initializer"></a>

```typescript
import { dataAwsccOdbCloudExadataInfrastructure } from '@cdktn/provider-awscc'

const dataAwsccOdbCloudExadataInfrastructureTags: dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList <a name="DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer"></a>

```typescript
import { dataAwsccOdbCloudExadataInfrastructure } from '@cdktn/provider-awscc'

new dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.get"></a>

```typescript
public get(index: number): DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference <a name="DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer"></a>

```typescript
import { dataAwsccOdbCloudExadataInfrastructure } from '@cdktn/provider-awscc'

new dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci">DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci">DataAwsccOdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>

---


### DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference <a name="DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { dataAwsccOdbCloudExadataInfrastructure } from '@cdktn/provider-awscc'

new dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.months">months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode">patchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow">DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```typescript
public readonly customActionTimeoutInMins: number;
```

- *Type:* number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```typescript
public readonly daysOfWeek: string[];
```

- *Type:* string[]

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```typescript
public readonly hoursOfDay: number[];
```

- *Type:* number[]

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```typescript
public readonly isCustomActionTimeoutEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```typescript
public readonly leadTimeInWeeks: number;
```

- *Type:* number

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.months"></a>

```typescript
public readonly months: string[];
```

- *Type:* string[]

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode"></a>

```typescript
public readonly patchingMode: string;
```

- *Type:* string

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preference"></a>

```typescript
public readonly preference: string;
```

- *Type:* string

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```typescript
public readonly weeksOfMonth: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow">DataAwsccOdbCloudExadataInfrastructureMaintenanceWindow</a>

---


### DataAwsccOdbCloudExadataInfrastructureTagsList <a name="DataAwsccOdbCloudExadataInfrastructureTagsList" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.Initializer"></a>

```typescript
import { dataAwsccOdbCloudExadataInfrastructure } from '@cdktn/provider-awscc'

new dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.get"></a>

```typescript
public get(index: number): DataAwsccOdbCloudExadataInfrastructureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccOdbCloudExadataInfrastructureTagsOutputReference <a name="DataAwsccOdbCloudExadataInfrastructureTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccOdbCloudExadataInfrastructure } from '@cdktn/provider-awscc'

new dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTags">DataAwsccOdbCloudExadataInfrastructureTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOdbCloudExadataInfrastructureTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOdbCloudExadataInfrastructure.DataAwsccOdbCloudExadataInfrastructureTags">DataAwsccOdbCloudExadataInfrastructureTags</a>

---



