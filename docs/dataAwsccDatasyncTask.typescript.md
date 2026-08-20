# `dataAwsccDatasyncTask` Submodule <a name="`dataAwsccDatasyncTask` Submodule" id="@cdktn/provider-awscc.dataAwsccDatasyncTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatasyncTask <a name="DataAwsccDatasyncTask" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/datasync_task awscc_datasync_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTask(scope: Construct, id: string, config: DataAwsccDatasyncTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig">DataAwsccDatasyncTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig">DataAwsccDatasyncTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatasyncTask resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.isConstruct"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

dataAwsccDatasyncTask.DataAwsccDatasyncTask.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.isTerraformElement"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

dataAwsccDatasyncTask.DataAwsccDatasyncTask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.isTerraformDataSource"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

dataAwsccDatasyncTask.DataAwsccDatasyncTask.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.generateConfigForImport"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

dataAwsccDatasyncTask.DataAwsccDatasyncTask.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDatasyncTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDatasyncTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDatasyncTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/datasync_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatasyncTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.destinationLocationArn">destinationLocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.destinationNetworkInterfaceArns">destinationNetworkInterfaceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.excludes">excludes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList">DataAwsccDatasyncTaskExcludesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.includes">includes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList">DataAwsccDatasyncTaskIncludesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.manifestConfig">manifestConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference">DataAwsccDatasyncTaskManifestConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference">DataAwsccDatasyncTaskOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference">DataAwsccDatasyncTaskScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.sourceLocationArn">sourceLocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.sourceNetworkInterfaceArns">sourceNetworkInterfaceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList">DataAwsccDatasyncTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.taskArn">taskArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.taskMode">taskMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.taskReportConfig">taskReportConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference">DataAwsccDatasyncTaskTaskReportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.cloudwatchLogGroupArn"></a>

```typescript
public readonly cloudwatchLogGroupArn: string;
```

- *Type:* string

---

##### `destinationLocationArn`<sup>Required</sup> <a name="destinationLocationArn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.destinationLocationArn"></a>

```typescript
public readonly destinationLocationArn: string;
```

- *Type:* string

---

##### `destinationNetworkInterfaceArns`<sup>Required</sup> <a name="destinationNetworkInterfaceArns" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.destinationNetworkInterfaceArns"></a>

```typescript
public readonly destinationNetworkInterfaceArns: string[];
```

- *Type:* string[]

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.excludes"></a>

```typescript
public readonly excludes: DataAwsccDatasyncTaskExcludesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList">DataAwsccDatasyncTaskExcludesList</a>

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.includes"></a>

```typescript
public readonly includes: DataAwsccDatasyncTaskIncludesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList">DataAwsccDatasyncTaskIncludesList</a>

---

##### `manifestConfig`<sup>Required</sup> <a name="manifestConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.manifestConfig"></a>

```typescript
public readonly manifestConfig: DataAwsccDatasyncTaskManifestConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference">DataAwsccDatasyncTaskManifestConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.options"></a>

```typescript
public readonly options: DataAwsccDatasyncTaskOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference">DataAwsccDatasyncTaskOptionsOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.schedule"></a>

```typescript
public readonly schedule: DataAwsccDatasyncTaskScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference">DataAwsccDatasyncTaskScheduleOutputReference</a>

---

##### `sourceLocationArn`<sup>Required</sup> <a name="sourceLocationArn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.sourceLocationArn"></a>

```typescript
public readonly sourceLocationArn: string;
```

- *Type:* string

---

##### `sourceNetworkInterfaceArns`<sup>Required</sup> <a name="sourceNetworkInterfaceArns" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.sourceNetworkInterfaceArns"></a>

```typescript
public readonly sourceNetworkInterfaceArns: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.tags"></a>

```typescript
public readonly tags: DataAwsccDatasyncTaskTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList">DataAwsccDatasyncTaskTagsList</a>

---

##### `taskArn`<sup>Required</sup> <a name="taskArn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.taskArn"></a>

```typescript
public readonly taskArn: string;
```

- *Type:* string

---

##### `taskMode`<sup>Required</sup> <a name="taskMode" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.taskMode"></a>

```typescript
public readonly taskMode: string;
```

- *Type:* string

---

##### `taskReportConfig`<sup>Required</sup> <a name="taskReportConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.taskReportConfig"></a>

```typescript
public readonly taskReportConfig: DataAwsccDatasyncTaskTaskReportConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference">DataAwsccDatasyncTaskTaskReportConfigOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatasyncTaskConfig <a name="DataAwsccDatasyncTaskConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

const dataAwsccDatasyncTaskConfig: dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/datasync_task#id DataAwsccDatasyncTask#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatasyncTaskExcludes <a name="DataAwsccDatasyncTaskExcludes" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludes.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

const dataAwsccDatasyncTaskExcludes: dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludes = { ... }
```


### DataAwsccDatasyncTaskIncludes <a name="DataAwsccDatasyncTaskIncludes" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludes.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

const dataAwsccDatasyncTaskIncludes: dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludes = { ... }
```


### DataAwsccDatasyncTaskManifestConfig <a name="DataAwsccDatasyncTaskManifestConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfig.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

const dataAwsccDatasyncTaskManifestConfig: dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfig = { ... }
```


### DataAwsccDatasyncTaskManifestConfigSource <a name="DataAwsccDatasyncTaskManifestConfigSource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSource.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

const dataAwsccDatasyncTaskManifestConfigSource: dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSource = { ... }
```


### DataAwsccDatasyncTaskManifestConfigSourceS3 <a name="DataAwsccDatasyncTaskManifestConfigSourceS3" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

const dataAwsccDatasyncTaskManifestConfigSourceS3: dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3 = { ... }
```


### DataAwsccDatasyncTaskOptions <a name="DataAwsccDatasyncTaskOptions" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptions.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

const dataAwsccDatasyncTaskOptions: dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptions = { ... }
```


### DataAwsccDatasyncTaskSchedule <a name="DataAwsccDatasyncTaskSchedule" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskSchedule.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

const dataAwsccDatasyncTaskSchedule: dataAwsccDatasyncTask.DataAwsccDatasyncTaskSchedule = { ... }
```


### DataAwsccDatasyncTaskTags <a name="DataAwsccDatasyncTaskTags" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTags.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

const dataAwsccDatasyncTaskTags: dataAwsccDatasyncTask.DataAwsccDatasyncTaskTags = { ... }
```


### DataAwsccDatasyncTaskTaskReportConfig <a name="DataAwsccDatasyncTaskTaskReportConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfig.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

const dataAwsccDatasyncTaskTaskReportConfig: dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfig = { ... }
```


### DataAwsccDatasyncTaskTaskReportConfigDestination <a name="DataAwsccDatasyncTaskTaskReportConfigDestination" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestination.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

const dataAwsccDatasyncTaskTaskReportConfigDestination: dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestination = { ... }
```


### DataAwsccDatasyncTaskTaskReportConfigDestinationS3 <a name="DataAwsccDatasyncTaskTaskReportConfigDestinationS3" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

const dataAwsccDatasyncTaskTaskReportConfigDestinationS3: dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3 = { ... }
```


### DataAwsccDatasyncTaskTaskReportConfigOverrides <a name="DataAwsccDatasyncTaskTaskReportConfigOverrides" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverrides.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

const dataAwsccDatasyncTaskTaskReportConfigOverrides: dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverrides = { ... }
```


### DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted <a name="DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

const dataAwsccDatasyncTaskTaskReportConfigOverridesDeleted: dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted = { ... }
```


### DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped <a name="DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

const dataAwsccDatasyncTaskTaskReportConfigOverridesSkipped: dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped = { ... }
```


### DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred <a name="DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

const dataAwsccDatasyncTaskTaskReportConfigOverridesTransferred: dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred = { ... }
```


### DataAwsccDatasyncTaskTaskReportConfigOverridesVerified <a name="DataAwsccDatasyncTaskTaskReportConfigOverridesVerified" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerified"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerified.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

const dataAwsccDatasyncTaskTaskReportConfigOverridesVerified: dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerified = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatasyncTaskExcludesList <a name="DataAwsccDatasyncTaskExcludesList" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.get"></a>

```typescript
public get(index: number): DataAwsccDatasyncTaskExcludesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatasyncTaskExcludesOutputReference <a name="DataAwsccDatasyncTaskExcludesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludes">DataAwsccDatasyncTaskExcludes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncTaskExcludes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskExcludes">DataAwsccDatasyncTaskExcludes</a>

---


### DataAwsccDatasyncTaskIncludesList <a name="DataAwsccDatasyncTaskIncludesList" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.get"></a>

```typescript
public get(index: number): DataAwsccDatasyncTaskIncludesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatasyncTaskIncludesOutputReference <a name="DataAwsccDatasyncTaskIncludesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludes">DataAwsccDatasyncTaskIncludes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncTaskIncludes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskIncludes">DataAwsccDatasyncTaskIncludes</a>

---


### DataAwsccDatasyncTaskManifestConfigOutputReference <a name="DataAwsccDatasyncTaskManifestConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference">DataAwsccDatasyncTaskManifestConfigSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfig">DataAwsccDatasyncTaskManifestConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.source"></a>

```typescript
public readonly source: DataAwsccDatasyncTaskManifestConfigSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference">DataAwsccDatasyncTaskManifestConfigSourceOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncTaskManifestConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfig">DataAwsccDatasyncTaskManifestConfig</a>

---


### DataAwsccDatasyncTaskManifestConfigSourceOutputReference <a name="DataAwsccDatasyncTaskManifestConfigSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference">DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSource">DataAwsccDatasyncTaskManifestConfigSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.property.s3"></a>

```typescript
public readonly s3: DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference">DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncTaskManifestConfigSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSource">DataAwsccDatasyncTaskManifestConfigSource</a>

---


### DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference <a name="DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArn">bucketAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPath">manifestObjectPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionId">manifestObjectVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArn">s3BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3">DataAwsccDatasyncTaskManifestConfigSourceS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketAccessRoleArn`<sup>Required</sup> <a name="bucketAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.bucketAccessRoleArn"></a>

```typescript
public readonly bucketAccessRoleArn: string;
```

- *Type:* string

---

##### `manifestObjectPath`<sup>Required</sup> <a name="manifestObjectPath" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectPath"></a>

```typescript
public readonly manifestObjectPath: string;
```

- *Type:* string

---

##### `manifestObjectVersionId`<sup>Required</sup> <a name="manifestObjectVersionId" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.manifestObjectVersionId"></a>

```typescript
public readonly manifestObjectVersionId: string;
```

- *Type:* string

---

##### `s3BucketArn`<sup>Required</sup> <a name="s3BucketArn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.s3BucketArn"></a>

```typescript
public readonly s3BucketArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncTaskManifestConfigSourceS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskManifestConfigSourceS3">DataAwsccDatasyncTaskManifestConfigSourceS3</a>

---


### DataAwsccDatasyncTaskOptionsOutputReference <a name="DataAwsccDatasyncTaskOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.atime">atime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.bytesPerSecond">bytesPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.gid">gid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.mtime">mtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.objectTags">objectTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.overwriteMode">overwriteMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.posixPermissions">posixPermissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.preserveDeletedFiles">preserveDeletedFiles</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.preserveDevices">preserveDevices</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags">securityDescriptorCopyFlags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.taskQueueing">taskQueueing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.transferMode">transferMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.verifyMode">verifyMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptions">DataAwsccDatasyncTaskOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `atime`<sup>Required</sup> <a name="atime" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.atime"></a>

```typescript
public readonly atime: string;
```

- *Type:* string

---

##### `bytesPerSecond`<sup>Required</sup> <a name="bytesPerSecond" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.bytesPerSecond"></a>

```typescript
public readonly bytesPerSecond: number;
```

- *Type:* number

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.gid"></a>

```typescript
public readonly gid: string;
```

- *Type:* string

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `mtime`<sup>Required</sup> <a name="mtime" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.mtime"></a>

```typescript
public readonly mtime: string;
```

- *Type:* string

---

##### `objectTags`<sup>Required</sup> <a name="objectTags" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.objectTags"></a>

```typescript
public readonly objectTags: string;
```

- *Type:* string

---

##### `overwriteMode`<sup>Required</sup> <a name="overwriteMode" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.overwriteMode"></a>

```typescript
public readonly overwriteMode: string;
```

- *Type:* string

---

##### `posixPermissions`<sup>Required</sup> <a name="posixPermissions" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.posixPermissions"></a>

```typescript
public readonly posixPermissions: string;
```

- *Type:* string

---

##### `preserveDeletedFiles`<sup>Required</sup> <a name="preserveDeletedFiles" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.preserveDeletedFiles"></a>

```typescript
public readonly preserveDeletedFiles: string;
```

- *Type:* string

---

##### `preserveDevices`<sup>Required</sup> <a name="preserveDevices" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.preserveDevices"></a>

```typescript
public readonly preserveDevices: string;
```

- *Type:* string

---

##### `securityDescriptorCopyFlags`<sup>Required</sup> <a name="securityDescriptorCopyFlags" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.securityDescriptorCopyFlags"></a>

```typescript
public readonly securityDescriptorCopyFlags: string;
```

- *Type:* string

---

##### `taskQueueing`<sup>Required</sup> <a name="taskQueueing" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.taskQueueing"></a>

```typescript
public readonly taskQueueing: string;
```

- *Type:* string

---

##### `transferMode`<sup>Required</sup> <a name="transferMode" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.transferMode"></a>

```typescript
public readonly transferMode: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `verifyMode`<sup>Required</sup> <a name="verifyMode" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.verifyMode"></a>

```typescript
public readonly verifyMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncTaskOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskOptions">DataAwsccDatasyncTaskOptions</a>

---


### DataAwsccDatasyncTaskScheduleOutputReference <a name="DataAwsccDatasyncTaskScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskSchedule">DataAwsccDatasyncTaskSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncTaskSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskSchedule">DataAwsccDatasyncTaskSchedule</a>

---


### DataAwsccDatasyncTaskTagsList <a name="DataAwsccDatasyncTaskTagsList" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDatasyncTaskTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatasyncTaskTagsOutputReference <a name="DataAwsccDatasyncTaskTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTags">DataAwsccDatasyncTaskTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncTaskTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTags">DataAwsccDatasyncTaskTags</a>

---


### DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference <a name="DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference">DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestination">DataAwsccDatasyncTaskTaskReportConfigDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.property.s3"></a>

```typescript
public readonly s3: DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference">DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncTaskTaskReportConfigDestination;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestination">DataAwsccDatasyncTaskTaskReportConfigDestination</a>

---


### DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference <a name="DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArn">bucketAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArn">s3BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectory">subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3">DataAwsccDatasyncTaskTaskReportConfigDestinationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketAccessRoleArn`<sup>Required</sup> <a name="bucketAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.bucketAccessRoleArn"></a>

```typescript
public readonly bucketAccessRoleArn: string;
```

- *Type:* string

---

##### `s3BucketArn`<sup>Required</sup> <a name="s3BucketArn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.s3BucketArn"></a>

```typescript
public readonly s3BucketArn: string;
```

- *Type:* string

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncTaskTaskReportConfigDestinationS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationS3">DataAwsccDatasyncTaskTaskReportConfigDestinationS3</a>

---


### DataAwsccDatasyncTaskTaskReportConfigOutputReference <a name="DataAwsccDatasyncTaskTaskReportConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference">DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.objectVersionIds">objectVersionIds</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.outputType">outputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.overrides">overrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.reportLevel">reportLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfig">DataAwsccDatasyncTaskTaskReportConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.destination"></a>

```typescript
public readonly destination: DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference">DataAwsccDatasyncTaskTaskReportConfigDestinationOutputReference</a>

---

##### `objectVersionIds`<sup>Required</sup> <a name="objectVersionIds" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.objectVersionIds"></a>

```typescript
public readonly objectVersionIds: string;
```

- *Type:* string

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.outputType"></a>

```typescript
public readonly outputType: string;
```

- *Type:* string

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.overrides"></a>

```typescript
public readonly overrides: DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference</a>

---

##### `reportLevel`<sup>Required</sup> <a name="reportLevel" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.reportLevel"></a>

```typescript
public readonly reportLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncTaskTaskReportConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfig">DataAwsccDatasyncTaskTaskReportConfig</a>

---


### DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference <a name="DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevel">reportLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted">DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reportLevel`<sup>Required</sup> <a name="reportLevel" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.reportLevel"></a>

```typescript
public readonly reportLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted">DataAwsccDatasyncTaskTaskReportConfigOverridesDeleted</a>

---


### DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference <a name="DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.deleted">deleted</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.skipped">skipped</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.transferred">transferred</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.verified">verified</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverrides">DataAwsccDatasyncTaskTaskReportConfigOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.deleted"></a>

```typescript
public readonly deleted: DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesDeletedOutputReference</a>

---

##### `skipped`<sup>Required</sup> <a name="skipped" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.skipped"></a>

```typescript
public readonly skipped: DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference</a>

---

##### `transferred`<sup>Required</sup> <a name="transferred" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.transferred"></a>

```typescript
public readonly transferred: DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference</a>

---

##### `verified`<sup>Required</sup> <a name="verified" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.verified"></a>

```typescript
public readonly verified: DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference">DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncTaskTaskReportConfigOverrides;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverrides">DataAwsccDatasyncTaskTaskReportConfigOverrides</a>

---


### DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference <a name="DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevel">reportLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped">DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reportLevel`<sup>Required</sup> <a name="reportLevel" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.reportLevel"></a>

```typescript
public readonly reportLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkippedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped">DataAwsccDatasyncTaskTaskReportConfigOverridesSkipped</a>

---


### DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference <a name="DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevel">reportLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred">DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reportLevel`<sup>Required</sup> <a name="reportLevel" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.reportLevel"></a>

```typescript
public readonly reportLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferredOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred">DataAwsccDatasyncTaskTaskReportConfigOverridesTransferred</a>

---


### DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference <a name="DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncTask } from '@cdktn/provider-awscc'

new dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevel">reportLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerified">DataAwsccDatasyncTaskTaskReportConfigOverridesVerified</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reportLevel`<sup>Required</sup> <a name="reportLevel" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.reportLevel"></a>

```typescript
public readonly reportLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerifiedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncTaskTaskReportConfigOverridesVerified;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncTask.DataAwsccDatasyncTaskTaskReportConfigOverridesVerified">DataAwsccDatasyncTaskTaskReportConfigOverridesVerified</a>

---



