# `dataAwsccSsmResourceDataSync` Submodule <a name="`dataAwsccSsmResourceDataSync` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmResourceDataSync <a name="DataAwsccSsmResourceDataSync" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssm_resource_data_sync awscc_ssm_resource_data_sync}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer"></a>

```typescript
import { dataAwsccSsmResourceDataSync } from '@cdktn/provider-awscc'

new dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync(scope: Construct, id: string, config: DataAwsccSsmResourceDataSyncConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig">DataAwsccSsmResourceDataSyncConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig">DataAwsccSsmResourceDataSyncConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSsmResourceDataSync resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isConstruct"></a>

```typescript
import { dataAwsccSsmResourceDataSync } from '@cdktn/provider-awscc'

dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformElement"></a>

```typescript
import { dataAwsccSsmResourceDataSync } from '@cdktn/provider-awscc'

dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformDataSource"></a>

```typescript
import { dataAwsccSsmResourceDataSync } from '@cdktn/provider-awscc'

dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport"></a>

```typescript
import { dataAwsccSsmResourceDataSync } from '@cdktn/provider-awscc'

dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSsmResourceDataSync resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSsmResourceDataSync to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSsmResourceDataSync that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssm_resource_data_sync#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmResourceDataSync to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference">DataAwsccSsmResourceDataSyncS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncFormat">syncFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncName">syncName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncSource">syncSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference">DataAwsccSsmResourceDataSyncSyncSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncType">syncType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `bucketRegion`<sup>Required</sup> <a name="bucketRegion" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `s3Destination`<sup>Required</sup> <a name="s3Destination" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.s3Destination"></a>

```typescript
public readonly s3Destination: DataAwsccSsmResourceDataSyncS3DestinationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference">DataAwsccSsmResourceDataSyncS3DestinationOutputReference</a>

---

##### `syncFormat`<sup>Required</sup> <a name="syncFormat" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncFormat"></a>

```typescript
public readonly syncFormat: string;
```

- *Type:* string

---

##### `syncName`<sup>Required</sup> <a name="syncName" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncName"></a>

```typescript
public readonly syncName: string;
```

- *Type:* string

---

##### `syncSource`<sup>Required</sup> <a name="syncSource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncSource"></a>

```typescript
public readonly syncSource: DataAwsccSsmResourceDataSyncSyncSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference">DataAwsccSsmResourceDataSyncSyncSourceOutputReference</a>

---

##### `syncType`<sup>Required</sup> <a name="syncType" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.syncType"></a>

```typescript
public readonly syncType: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSync.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmResourceDataSyncConfig <a name="DataAwsccSsmResourceDataSyncConfig" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.Initializer"></a>

```typescript
import { dataAwsccSsmResourceDataSync } from '@cdktn/provider-awscc'

const dataAwsccSsmResourceDataSyncConfig: dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ssm_resource_data_sync#id DataAwsccSsmResourceDataSync#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsmResourceDataSyncS3Destination <a name="DataAwsccSsmResourceDataSyncS3Destination" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3Destination.Initializer"></a>

```typescript
import { dataAwsccSsmResourceDataSync } from '@cdktn/provider-awscc'

const dataAwsccSsmResourceDataSyncS3Destination: dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3Destination = { ... }
```


### DataAwsccSsmResourceDataSyncSyncSource <a name="DataAwsccSsmResourceDataSyncSyncSource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSource.Initializer"></a>

```typescript
import { dataAwsccSsmResourceDataSync } from '@cdktn/provider-awscc'

const dataAwsccSsmResourceDataSyncSyncSource: dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSource = { ... }
```


### DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource <a name="DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource.Initializer"></a>

```typescript
import { dataAwsccSsmResourceDataSync } from '@cdktn/provider-awscc'

const dataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource: dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsmResourceDataSyncS3DestinationOutputReference <a name="DataAwsccSsmResourceDataSyncS3DestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmResourceDataSync } from '@cdktn/provider-awscc'

new dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.syncFormat">syncFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3Destination">DataAwsccSsmResourceDataSyncS3Destination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `bucketRegion`<sup>Required</sup> <a name="bucketRegion" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `syncFormat`<sup>Required</sup> <a name="syncFormat" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.syncFormat"></a>

```typescript
public readonly syncFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3DestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmResourceDataSyncS3Destination;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncS3Destination">DataAwsccSsmResourceDataSyncS3Destination</a>

---


### DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference <a name="DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmResourceDataSync } from '@cdktn/provider-awscc'

new dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceType">organizationSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource">DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `organizationalUnits`<sup>Required</sup> <a name="organizationalUnits" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

---

##### `organizationSourceType`<sup>Required</sup> <a name="organizationSourceType" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceType"></a>

```typescript
public readonly organizationSourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource">DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSource</a>

---


### DataAwsccSsmResourceDataSyncSyncSourceOutputReference <a name="DataAwsccSsmResourceDataSyncSyncSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsccSsmResourceDataSync } from '@cdktn/provider-awscc'

new dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSource">awsOrganizationsSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference">DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegions">includeFutureRegions</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.sourceRegions">sourceRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSource">DataAwsccSsmResourceDataSyncSyncSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsOrganizationsSource`<sup>Required</sup> <a name="awsOrganizationsSource" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSource"></a>

```typescript
public readonly awsOrganizationsSource: DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference">DataAwsccSsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference</a>

---

##### `includeFutureRegions`<sup>Required</sup> <a name="includeFutureRegions" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegions"></a>

```typescript
public readonly includeFutureRegions: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sourceRegions`<sup>Required</sup> <a name="sourceRegions" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.sourceRegions"></a>

```typescript
public readonly sourceRegions: string[];
```

- *Type:* string[]

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSsmResourceDataSyncSyncSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmResourceDataSync.DataAwsccSsmResourceDataSyncSyncSource">DataAwsccSsmResourceDataSyncSyncSource</a>

---



