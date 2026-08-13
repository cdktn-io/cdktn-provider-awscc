# `dataAwsccDatasyncLocationAzureBlob` Submodule <a name="`dataAwsccDatasyncLocationAzureBlob` Submodule" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatasyncLocationAzureBlob <a name="DataAwsccDatasyncLocationAzureBlob" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datasync_location_azure_blob awscc_datasync_location_azure_blob}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationAzureBlob } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob(scope: Construct, id: string, config: DataAwsccDatasyncLocationAzureBlobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig">DataAwsccDatasyncLocationAzureBlobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig">DataAwsccDatasyncLocationAzureBlobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatasyncLocationAzureBlob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isConstruct"></a>

```typescript
import { dataAwsccDatasyncLocationAzureBlob } from '@cdktn/provider-awscc'

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformElement"></a>

```typescript
import { dataAwsccDatasyncLocationAzureBlob } from '@cdktn/provider-awscc'

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformDataSource"></a>

```typescript
import { dataAwsccDatasyncLocationAzureBlob } from '@cdktn/provider-awscc'

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport"></a>

```typescript
import { dataAwsccDatasyncLocationAzureBlob } from '@cdktn/provider-awscc'

dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDatasyncLocationAzureBlob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDatasyncLocationAzureBlob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDatasyncLocationAzureBlob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datasync_location_azure_blob#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatasyncLocationAzureBlob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.agentArns">agentArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureAccessTier">azureAccessTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobAuthenticationType">azureBlobAuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobContainerUrl">azureBlobContainerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobSasConfiguration">azureBlobSasConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference">DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobType">azureBlobType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference">DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference">DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.locationArn">locationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.locationUri">locationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.managedSecretConfig">managedSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference">DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.subdirectory">subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList">DataAwsccDatasyncLocationAzureBlobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.agentArns"></a>

```typescript
public readonly agentArns: string[];
```

- *Type:* string[]

---

##### `azureAccessTier`<sup>Required</sup> <a name="azureAccessTier" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureAccessTier"></a>

```typescript
public readonly azureAccessTier: string;
```

- *Type:* string

---

##### `azureBlobAuthenticationType`<sup>Required</sup> <a name="azureBlobAuthenticationType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobAuthenticationType"></a>

```typescript
public readonly azureBlobAuthenticationType: string;
```

- *Type:* string

---

##### `azureBlobContainerUrl`<sup>Required</sup> <a name="azureBlobContainerUrl" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobContainerUrl"></a>

```typescript
public readonly azureBlobContainerUrl: string;
```

- *Type:* string

---

##### `azureBlobSasConfiguration`<sup>Required</sup> <a name="azureBlobSasConfiguration" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobSasConfiguration"></a>

```typescript
public readonly azureBlobSasConfiguration: DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference">DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference</a>

---

##### `azureBlobType`<sup>Required</sup> <a name="azureBlobType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.azureBlobType"></a>

```typescript
public readonly azureBlobType: string;
```

- *Type:* string

---

##### `cmkSecretConfig`<sup>Required</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.cmkSecretConfig"></a>

```typescript
public readonly cmkSecretConfig: DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference">DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference</a>

---

##### `customSecretConfig`<sup>Required</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.customSecretConfig"></a>

```typescript
public readonly customSecretConfig: DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference">DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference</a>

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.locationArn"></a>

```typescript
public readonly locationArn: string;
```

- *Type:* string

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

---

##### `managedSecretConfig`<sup>Required</sup> <a name="managedSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.managedSecretConfig"></a>

```typescript
public readonly managedSecretConfig: DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference">DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference</a>

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.tags"></a>

```typescript
public readonly tags: DataAwsccDatasyncLocationAzureBlobTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList">DataAwsccDatasyncLocationAzureBlobTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration <a name="DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationAzureBlob } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration: dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration = { ... }
```


### DataAwsccDatasyncLocationAzureBlobCmkSecretConfig <a name="DataAwsccDatasyncLocationAzureBlobCmkSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfig.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationAzureBlob } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationAzureBlobCmkSecretConfig: dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfig = { ... }
```


### DataAwsccDatasyncLocationAzureBlobConfig <a name="DataAwsccDatasyncLocationAzureBlobConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationAzureBlob } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationAzureBlobConfig: dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datasync_location_azure_blob#id DataAwsccDatasyncLocationAzureBlob#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatasyncLocationAzureBlobCustomSecretConfig <a name="DataAwsccDatasyncLocationAzureBlobCustomSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfig.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationAzureBlob } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationAzureBlobCustomSecretConfig: dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfig = { ... }
```


### DataAwsccDatasyncLocationAzureBlobManagedSecretConfig <a name="DataAwsccDatasyncLocationAzureBlobManagedSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfig.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationAzureBlob } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationAzureBlobManagedSecretConfig: dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfig = { ... }
```


### DataAwsccDatasyncLocationAzureBlobTags <a name="DataAwsccDatasyncLocationAzureBlobTags" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTags.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationAzureBlob } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationAzureBlobTags: dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference <a name="DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationAzureBlob } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.azureBlobSasToken">azureBlobSasToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration">DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureBlobSasToken`<sup>Required</sup> <a name="azureBlobSasToken" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.azureBlobSasToken"></a>

```typescript
public readonly azureBlobSasToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration">DataAwsccDatasyncLocationAzureBlobAzureBlobSasConfiguration</a>

---


### DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference <a name="DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationAzureBlob } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfig">DataAwsccDatasyncLocationAzureBlobCmkSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationAzureBlobCmkSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCmkSecretConfig">DataAwsccDatasyncLocationAzureBlobCmkSecretConfig</a>

---


### DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference <a name="DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationAzureBlob } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretAccessRoleArn">secretAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfig">DataAwsccDatasyncLocationAzureBlobCustomSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretAccessRoleArn`<sup>Required</sup> <a name="secretAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```typescript
public readonly secretAccessRoleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationAzureBlobCustomSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobCustomSecretConfig">DataAwsccDatasyncLocationAzureBlobCustomSecretConfig</a>

---


### DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference <a name="DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationAzureBlob } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfig">DataAwsccDatasyncLocationAzureBlobManagedSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationAzureBlobManagedSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobManagedSecretConfig">DataAwsccDatasyncLocationAzureBlobManagedSecretConfig</a>

---


### DataAwsccDatasyncLocationAzureBlobTagsList <a name="DataAwsccDatasyncLocationAzureBlobTagsList" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationAzureBlob } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDatasyncLocationAzureBlobTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatasyncLocationAzureBlobTagsOutputReference <a name="DataAwsccDatasyncLocationAzureBlobTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationAzureBlob } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTags">DataAwsccDatasyncLocationAzureBlobTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationAzureBlobTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationAzureBlob.DataAwsccDatasyncLocationAzureBlobTags">DataAwsccDatasyncLocationAzureBlobTags</a>

---



