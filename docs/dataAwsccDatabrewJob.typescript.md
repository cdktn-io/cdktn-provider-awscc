# `dataAwsccDatabrewJob` Submodule <a name="`dataAwsccDatabrewJob` Submodule" id="@cdktn/provider-awscc.dataAwsccDatabrewJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatabrewJob <a name="DataAwsccDatabrewJob" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/databrew_job awscc_databrew_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJob(scope: Construct, id: string, config: DataAwsccDatabrewJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig">DataAwsccDatabrewJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig">DataAwsccDatabrewJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatabrewJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.isConstruct"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

dataAwsccDatabrewJob.DataAwsccDatabrewJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.isTerraformElement"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

dataAwsccDatabrewJob.DataAwsccDatabrewJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.isTerraformDataSource"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

dataAwsccDatabrewJob.DataAwsccDatabrewJob.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.generateConfigForImport"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

dataAwsccDatabrewJob.DataAwsccDatabrewJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDatabrewJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDatabrewJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDatabrewJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/databrew_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatabrewJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.databaseOutputs">databaseOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList">DataAwsccDatabrewJobDatabaseOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.dataCatalogOutputs">dataCatalogOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList">DataAwsccDatabrewJobDataCatalogOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.datasetName">datasetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.jobSample">jobSample</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference">DataAwsccDatabrewJobJobSampleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.logSubscription">logSubscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.outputLocation">outputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference">DataAwsccDatabrewJobOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList">DataAwsccDatabrewJobOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.profileConfiguration">profileConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference">DataAwsccDatabrewJobProfileConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.projectName">projectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.recipe">recipe</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference">DataAwsccDatabrewJobRecipeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList">DataAwsccDatabrewJobTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.validationConfigurations">validationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList">DataAwsccDatabrewJobValidationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `databaseOutputs`<sup>Required</sup> <a name="databaseOutputs" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.databaseOutputs"></a>

```typescript
public readonly databaseOutputs: DataAwsccDatabrewJobDatabaseOutputsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList">DataAwsccDatabrewJobDatabaseOutputsList</a>

---

##### `dataCatalogOutputs`<sup>Required</sup> <a name="dataCatalogOutputs" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.dataCatalogOutputs"></a>

```typescript
public readonly dataCatalogOutputs: DataAwsccDatabrewJobDataCatalogOutputsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList">DataAwsccDatabrewJobDataCatalogOutputsList</a>

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.datasetName"></a>

```typescript
public readonly datasetName: string;
```

- *Type:* string

---

##### `encryptionKeyArn`<sup>Required</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.encryptionKeyArn"></a>

```typescript
public readonly encryptionKeyArn: string;
```

- *Type:* string

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

---

##### `jobSample`<sup>Required</sup> <a name="jobSample" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.jobSample"></a>

```typescript
public readonly jobSample: DataAwsccDatabrewJobJobSampleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference">DataAwsccDatabrewJobJobSampleOutputReference</a>

---

##### `logSubscription`<sup>Required</sup> <a name="logSubscription" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.logSubscription"></a>

```typescript
public readonly logSubscription: string;
```

- *Type:* string

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputLocation`<sup>Required</sup> <a name="outputLocation" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.outputLocation"></a>

```typescript
public readonly outputLocation: DataAwsccDatabrewJobOutputLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference">DataAwsccDatabrewJobOutputLocationOutputReference</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.outputs"></a>

```typescript
public readonly outputs: DataAwsccDatabrewJobOutputsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList">DataAwsccDatabrewJobOutputsList</a>

---

##### `profileConfiguration`<sup>Required</sup> <a name="profileConfiguration" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.profileConfiguration"></a>

```typescript
public readonly profileConfiguration: DataAwsccDatabrewJobProfileConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference">DataAwsccDatabrewJobProfileConfigurationOutputReference</a>

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

---

##### `recipe`<sup>Required</sup> <a name="recipe" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.recipe"></a>

```typescript
public readonly recipe: DataAwsccDatabrewJobRecipeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference">DataAwsccDatabrewJobRecipeOutputReference</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.tags"></a>

```typescript
public readonly tags: DataAwsccDatabrewJobTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList">DataAwsccDatabrewJobTagsList</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validationConfigurations`<sup>Required</sup> <a name="validationConfigurations" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.validationConfigurations"></a>

```typescript
public readonly validationConfigurations: DataAwsccDatabrewJobValidationConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList">DataAwsccDatabrewJobValidationConfigurationsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatabrewJobConfig <a name="DataAwsccDatabrewJobConfig" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobConfig: dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/databrew_job#id DataAwsccDatabrewJob#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatabrewJobDatabaseOutputs <a name="DataAwsccDatabrewJobDatabaseOutputs" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputs.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobDatabaseOutputs: dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputs = { ... }
```


### DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions <a name="DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobDatabaseOutputsDatabaseOptions: dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions = { ... }
```


### DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory <a name="DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory: dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory = { ... }
```


### DataAwsccDatabrewJobDataCatalogOutputs <a name="DataAwsccDatabrewJobDataCatalogOutputs" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputs.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobDataCatalogOutputs: dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputs = { ... }
```


### DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions <a name="DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions: dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions = { ... }
```


### DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory <a name="DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory: dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory = { ... }
```


### DataAwsccDatabrewJobDataCatalogOutputsS3Options <a name="DataAwsccDatabrewJobDataCatalogOutputsS3Options" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3Options"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3Options.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobDataCatalogOutputsS3Options: dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3Options = { ... }
```


### DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation <a name="DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation: dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation = { ... }
```


### DataAwsccDatabrewJobJobSample <a name="DataAwsccDatabrewJobJobSample" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSample"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSample.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobJobSample: dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSample = { ... }
```


### DataAwsccDatabrewJobOutputLocation <a name="DataAwsccDatabrewJobOutputLocation" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocation.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobOutputLocation: dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocation = { ... }
```


### DataAwsccDatabrewJobOutputs <a name="DataAwsccDatabrewJobOutputs" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputs.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobOutputs: dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputs = { ... }
```


### DataAwsccDatabrewJobOutputsFormatOptions <a name="DataAwsccDatabrewJobOutputsFormatOptions" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptions.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobOutputsFormatOptions: dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptions = { ... }
```


### DataAwsccDatabrewJobOutputsFormatOptionsCsv <a name="DataAwsccDatabrewJobOutputsFormatOptionsCsv" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsv.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobOutputsFormatOptionsCsv: dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsv = { ... }
```


### DataAwsccDatabrewJobOutputsLocation <a name="DataAwsccDatabrewJobOutputsLocation" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocation.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobOutputsLocation: dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocation = { ... }
```


### DataAwsccDatabrewJobProfileConfiguration <a name="DataAwsccDatabrewJobProfileConfiguration" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfiguration.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobProfileConfiguration: dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfiguration = { ... }
```


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations: dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations = { ... }
```


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors: dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors = { ... }
```


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics: dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics = { ... }
```


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides: dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides = { ... }
```


### DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration <a name="DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration: dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration = { ... }
```


### DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides <a name="DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides: dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides = { ... }
```


### DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration <a name="DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration: dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration = { ... }
```


### DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics <a name="DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics: dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics = { ... }
```


### DataAwsccDatabrewJobProfileConfigurationProfileColumns <a name="DataAwsccDatabrewJobProfileConfigurationProfileColumns" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumns.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobProfileConfigurationProfileColumns: dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumns = { ... }
```


### DataAwsccDatabrewJobRecipe <a name="DataAwsccDatabrewJobRecipe" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipe.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobRecipe: dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipe = { ... }
```


### DataAwsccDatabrewJobTags <a name="DataAwsccDatabrewJobTags" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTags.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobTags: dataAwsccDatabrewJob.DataAwsccDatabrewJobTags = { ... }
```


### DataAwsccDatabrewJobValidationConfigurations <a name="DataAwsccDatabrewJobValidationConfigurations" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurations.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

const dataAwsccDatabrewJobValidationConfigurations: dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurations = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference <a name="DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectory">tempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference">DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions">DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `tempDirectory`<sup>Required</sup> <a name="tempDirectory" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.tempDirectory"></a>

```typescript
public readonly tempDirectory: DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference">DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions">DataAwsccDatabrewJobDatabaseOutputsDatabaseOptions</a>

---


### DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference <a name="DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory">DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsTempDirectory</a>

---


### DataAwsccDatabrewJobDatabaseOutputsList <a name="DataAwsccDatabrewJobDatabaseOutputsList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.get"></a>

```typescript
public get(index: number): DataAwsccDatabrewJobDatabaseOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatabrewJobDatabaseOutputsOutputReference <a name="DataAwsccDatabrewJobDatabaseOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.databaseOptions">databaseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference">DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.databaseOutputMode">databaseOutputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.glueConnectionName">glueConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputs">DataAwsccDatabrewJobDatabaseOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseOptions`<sup>Required</sup> <a name="databaseOptions" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.databaseOptions"></a>

```typescript
public readonly databaseOptions: DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference">DataAwsccDatabrewJobDatabaseOutputsDatabaseOptionsOutputReference</a>

---

##### `databaseOutputMode`<sup>Required</sup> <a name="databaseOutputMode" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.databaseOutputMode"></a>

```typescript
public readonly databaseOutputMode: string;
```

- *Type:* string

---

##### `glueConnectionName`<sup>Required</sup> <a name="glueConnectionName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.glueConnectionName"></a>

```typescript
public readonly glueConnectionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobDatabaseOutputs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDatabaseOutputs">DataAwsccDatabrewJobDatabaseOutputs</a>

---


### DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference <a name="DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectory">tempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference">DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions">DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `tempDirectory`<sup>Required</sup> <a name="tempDirectory" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.tempDirectory"></a>

```typescript
public readonly tempDirectory: DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference">DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions">DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptions</a>

---


### DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference <a name="DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory">DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsTempDirectory</a>

---


### DataAwsccDatabrewJobDataCatalogOutputsList <a name="DataAwsccDatabrewJobDataCatalogOutputsList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.get"></a>

```typescript
public get(index: number): DataAwsccDatabrewJobDataCatalogOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatabrewJobDataCatalogOutputsOutputReference <a name="DataAwsccDatabrewJobDataCatalogOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.databaseOptions">databaseOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference">DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.overwrite">overwrite</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.s3Options">s3Options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference">DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputs">DataAwsccDatabrewJobDataCatalogOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `databaseOptions`<sup>Required</sup> <a name="databaseOptions" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.databaseOptions"></a>

```typescript
public readonly databaseOptions: DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference">DataAwsccDatabrewJobDataCatalogOutputsDatabaseOptionsOutputReference</a>

---

##### `overwrite`<sup>Required</sup> <a name="overwrite" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.overwrite"></a>

```typescript
public readonly overwrite: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `s3Options`<sup>Required</sup> <a name="s3Options" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.s3Options"></a>

```typescript
public readonly s3Options: DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference">DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference</a>

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobDataCatalogOutputs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputs">DataAwsccDatabrewJobDataCatalogOutputs</a>

---


### DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference <a name="DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation">DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation">DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocation</a>

---


### DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference <a name="DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference">DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3Options">DataAwsccDatabrewJobDataCatalogOutputsS3Options</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.location"></a>

```typescript
public readonly location: DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference">DataAwsccDatabrewJobDataCatalogOutputsS3OptionsLocationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3OptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobDataCatalogOutputsS3Options;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobDataCatalogOutputsS3Options">DataAwsccDatabrewJobDataCatalogOutputsS3Options</a>

---


### DataAwsccDatabrewJobJobSampleOutputReference <a name="DataAwsccDatabrewJobJobSampleOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSample">DataAwsccDatabrewJobJobSample</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSampleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobJobSample;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobJobSample">DataAwsccDatabrewJobJobSample</a>

---


### DataAwsccDatabrewJobOutputLocationOutputReference <a name="DataAwsccDatabrewJobOutputLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocation">DataAwsccDatabrewJobOutputLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobOutputLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputLocation">DataAwsccDatabrewJobOutputLocation</a>

---


### DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference <a name="DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsv">DataAwsccDatabrewJobOutputsFormatOptionsCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobOutputsFormatOptionsCsv;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsv">DataAwsccDatabrewJobOutputsFormatOptionsCsv</a>

---


### DataAwsccDatabrewJobOutputsFormatOptionsOutputReference <a name="DataAwsccDatabrewJobOutputsFormatOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference">DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptions">DataAwsccDatabrewJobOutputsFormatOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.property.csv"></a>

```typescript
public readonly csv: DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference">DataAwsccDatabrewJobOutputsFormatOptionsCsvOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobOutputsFormatOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptions">DataAwsccDatabrewJobOutputsFormatOptions</a>

---


### DataAwsccDatabrewJobOutputsList <a name="DataAwsccDatabrewJobOutputsList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.get"></a>

```typescript
public get(index: number): DataAwsccDatabrewJobOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatabrewJobOutputsLocationOutputReference <a name="DataAwsccDatabrewJobOutputsLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocation">DataAwsccDatabrewJobOutputsLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.bucketOwner"></a>

```typescript
public readonly bucketOwner: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobOutputsLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocation">DataAwsccDatabrewJobOutputsLocation</a>

---


### DataAwsccDatabrewJobOutputsOutputReference <a name="DataAwsccDatabrewJobOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.compressionFormat">compressionFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.formatOptions">formatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference">DataAwsccDatabrewJobOutputsFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference">DataAwsccDatabrewJobOutputsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.maxOutputFiles">maxOutputFiles</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.overwrite">overwrite</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.partitionColumns">partitionColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputs">DataAwsccDatabrewJobOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compressionFormat`<sup>Required</sup> <a name="compressionFormat" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.compressionFormat"></a>

```typescript
public readonly compressionFormat: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.formatOptions"></a>

```typescript
public readonly formatOptions: DataAwsccDatabrewJobOutputsFormatOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsFormatOptionsOutputReference">DataAwsccDatabrewJobOutputsFormatOptionsOutputReference</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.location"></a>

```typescript
public readonly location: DataAwsccDatabrewJobOutputsLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsLocationOutputReference">DataAwsccDatabrewJobOutputsLocationOutputReference</a>

---

##### `maxOutputFiles`<sup>Required</sup> <a name="maxOutputFiles" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.maxOutputFiles"></a>

```typescript
public readonly maxOutputFiles: number;
```

- *Type:* number

---

##### `overwrite`<sup>Required</sup> <a name="overwrite" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.overwrite"></a>

```typescript
public readonly overwrite: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `partitionColumns`<sup>Required</sup> <a name="partitionColumns" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.partitionColumns"></a>

```typescript
public readonly partitionColumns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobOutputs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobOutputs">DataAwsccDatabrewJobOutputs</a>

---


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectors">selectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statistics">statistics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `selectors`<sup>Required</sup> <a name="selectors" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.selectors"></a>

```typescript
public readonly selectors: DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList</a>

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.statistics"></a>

```typescript
public readonly statistics: DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurations</a>

---


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.get"></a>

```typescript
public get(index: number): DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsSelectors</a>

---


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatistics">includedStatistics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includedStatistics`<sup>Required</sup> <a name="includedStatistics" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.includedStatistics"></a>

```typescript
public readonly includedStatistics: string[];
```

- *Type:* string[]

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.overrides"></a>

```typescript
public readonly overrides: DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatistics</a>

---


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.get"></a>

```typescript
public get(index: number): DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parameters">parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.parameters"></a>

```typescript
public readonly parameters: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsStatisticsOverrides</a>

---


### DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatistics">includedStatistics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList">DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includedStatistics`<sup>Required</sup> <a name="includedStatistics" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.includedStatistics"></a>

```typescript
public readonly includedStatistics: string[];
```

- *Type:* string[]

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.overrides"></a>

```typescript
public readonly overrides: DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList">DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration">DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfiguration</a>

---


### DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList <a name="DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.get"></a>

```typescript
public get(index: number): DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parameters">parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.parameters"></a>

```typescript
public readonly parameters: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides">DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOverrides</a>

---


### DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statistics">statistics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statistics`<sup>Required</sup> <a name="statistics" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.statistics"></a>

```typescript
public readonly statistics: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics">DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatistics</a>

---


### DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatistics">allowedStatistics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference">DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypes">entityTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration">DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedStatistics`<sup>Required</sup> <a name="allowedStatistics" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.allowedStatistics"></a>

```typescript
public readonly allowedStatistics: DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference">DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationAllowedStatisticsOutputReference</a>

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.entityTypes"></a>

```typescript
public readonly entityTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration">DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfiguration</a>

---


### DataAwsccDatabrewJobProfileConfigurationOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurations">columnStatisticsConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfiguration">datasetStatisticsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference">DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfiguration">entityDetectorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference">DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.profileColumns">profileColumns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList">DataAwsccDatabrewJobProfileConfigurationProfileColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfiguration">DataAwsccDatabrewJobProfileConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnStatisticsConfigurations`<sup>Required</sup> <a name="columnStatisticsConfigurations" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.columnStatisticsConfigurations"></a>

```typescript
public readonly columnStatisticsConfigurations: DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList">DataAwsccDatabrewJobProfileConfigurationColumnStatisticsConfigurationsList</a>

---

##### `datasetStatisticsConfiguration`<sup>Required</sup> <a name="datasetStatisticsConfiguration" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.datasetStatisticsConfiguration"></a>

```typescript
public readonly datasetStatisticsConfiguration: DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference">DataAwsccDatabrewJobProfileConfigurationDatasetStatisticsConfigurationOutputReference</a>

---

##### `entityDetectorConfiguration`<sup>Required</sup> <a name="entityDetectorConfiguration" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.entityDetectorConfiguration"></a>

```typescript
public readonly entityDetectorConfiguration: DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference">DataAwsccDatabrewJobProfileConfigurationEntityDetectorConfigurationOutputReference</a>

---

##### `profileColumns`<sup>Required</sup> <a name="profileColumns" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.profileColumns"></a>

```typescript
public readonly profileColumns: DataAwsccDatabrewJobProfileConfigurationProfileColumnsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList">DataAwsccDatabrewJobProfileConfigurationProfileColumnsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobProfileConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfiguration">DataAwsccDatabrewJobProfileConfiguration</a>

---


### DataAwsccDatabrewJobProfileConfigurationProfileColumnsList <a name="DataAwsccDatabrewJobProfileConfigurationProfileColumnsList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.get"></a>

```typescript
public get(index: number): DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference <a name="DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumns">DataAwsccDatabrewJobProfileConfigurationProfileColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobProfileConfigurationProfileColumns;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobProfileConfigurationProfileColumns">DataAwsccDatabrewJobProfileConfigurationProfileColumns</a>

---


### DataAwsccDatabrewJobRecipeOutputReference <a name="DataAwsccDatabrewJobRecipeOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipe">DataAwsccDatabrewJobRecipe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobRecipe;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobRecipe">DataAwsccDatabrewJobRecipe</a>

---


### DataAwsccDatabrewJobTagsList <a name="DataAwsccDatabrewJobTagsList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDatabrewJobTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatabrewJobTagsOutputReference <a name="DataAwsccDatabrewJobTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTags">DataAwsccDatabrewJobTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobTags">DataAwsccDatabrewJobTags</a>

---


### DataAwsccDatabrewJobValidationConfigurationsList <a name="DataAwsccDatabrewJobValidationConfigurationsList" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.get"></a>

```typescript
public get(index: number): DataAwsccDatabrewJobValidationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatabrewJobValidationConfigurationsOutputReference <a name="DataAwsccDatabrewJobValidationConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatabrewJob } from '@cdktn/provider-awscc'

new dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.rulesetArn">rulesetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.validationMode">validationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurations">DataAwsccDatabrewJobValidationConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rulesetArn`<sup>Required</sup> <a name="rulesetArn" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.rulesetArn"></a>

```typescript
public readonly rulesetArn: string;
```

- *Type:* string

---

##### `validationMode`<sup>Required</sup> <a name="validationMode" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.validationMode"></a>

```typescript
public readonly validationMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatabrewJobValidationConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatabrewJob.DataAwsccDatabrewJobValidationConfigurations">DataAwsccDatabrewJobValidationConfigurations</a>

---



