# `dataAwsccIotanalyticsDatastore` Submodule <a name="`dataAwsccIotanalyticsDatastore` Submodule" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotanalyticsDatastore <a name="DataAwsccIotanalyticsDatastore" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotanalytics_datastore awscc_iotanalytics_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore(scope: Construct, id: string, config: DataAwsccIotanalyticsDatastoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig">DataAwsccIotanalyticsDatastoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig">DataAwsccIotanalyticsDatastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotanalyticsDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isConstruct"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isTerraformElement"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.generateConfigForImport"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotanalyticsDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotanalyticsDatastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotanalyticsDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotanalytics_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotanalyticsDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.datastoreId">datastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.datastoreName">datastoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.datastorePartitions">datastorePartitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference">DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.datastoreStorage">datastoreStorage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference">DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.fileFormatConfiguration">fileFormatConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference">DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.retentionPeriod">retentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference">DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList">DataAwsccIotanalyticsDatastoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `datastoreId`<sup>Required</sup> <a name="datastoreId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.datastoreId"></a>

```typescript
public readonly datastoreId: string;
```

- *Type:* string

---

##### `datastoreName`<sup>Required</sup> <a name="datastoreName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.datastoreName"></a>

```typescript
public readonly datastoreName: string;
```

- *Type:* string

---

##### `datastorePartitions`<sup>Required</sup> <a name="datastorePartitions" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.datastorePartitions"></a>

```typescript
public readonly datastorePartitions: DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference">DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference</a>

---

##### `datastoreStorage`<sup>Required</sup> <a name="datastoreStorage" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.datastoreStorage"></a>

```typescript
public readonly datastoreStorage: DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference">DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference</a>

---

##### `fileFormatConfiguration`<sup>Required</sup> <a name="fileFormatConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.fileFormatConfiguration"></a>

```typescript
public readonly fileFormatConfiguration: DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference">DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference</a>

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference">DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.tags"></a>

```typescript
public readonly tags: DataAwsccIotanalyticsDatastoreTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList">DataAwsccIotanalyticsDatastoreTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotanalyticsDatastoreConfig <a name="DataAwsccIotanalyticsDatastoreConfig" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsDatastoreConfig: dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotanalytics_datastore#id DataAwsccIotanalyticsDatastore#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotanalyticsDatastoreDatastorePartitions <a name="DataAwsccIotanalyticsDatastoreDatastorePartitions" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitions.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsDatastoreDatastorePartitions: dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitions = { ... }
```


### DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions <a name="DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions: dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions = { ... }
```


### DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition <a name="DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition: dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition = { ... }
```


### DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition <a name="DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition: dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition = { ... }
```


### DataAwsccIotanalyticsDatastoreDatastoreStorage <a name="DataAwsccIotanalyticsDatastoreDatastoreStorage" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorage.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsDatastoreDatastoreStorage: dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorage = { ... }
```


### DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3 <a name="DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3: dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3 = { ... }
```


### DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage <a name="DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage: dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage = { ... }
```


### DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage <a name="DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage: dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage = { ... }
```


### DataAwsccIotanalyticsDatastoreFileFormatConfiguration <a name="DataAwsccIotanalyticsDatastoreFileFormatConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfiguration.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsDatastoreFileFormatConfiguration: dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfiguration = { ... }
```


### DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration <a name="DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration: dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration = { ... }
```


### DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition <a name="DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition: dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition = { ... }
```


### DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns <a name="DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns: dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns = { ... }
```


### DataAwsccIotanalyticsDatastoreRetentionPeriod <a name="DataAwsccIotanalyticsDatastoreRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriod.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsDatastoreRetentionPeriod: dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriod = { ... }
```


### DataAwsccIotanalyticsDatastoreTags <a name="DataAwsccIotanalyticsDatastoreTags" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTags.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

const dataAwsccIotanalyticsDatastoreTags: dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference <a name="DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.property.partitions">partitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitions">DataAwsccIotanalyticsDatastoreDatastorePartitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partitions`<sup>Required</sup> <a name="partitions" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.property.partitions"></a>

```typescript
public readonly partitions: DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotanalyticsDatastoreDatastorePartitions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitions">DataAwsccIotanalyticsDatastoreDatastorePartitions</a>

---


### DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList <a name="DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.get"></a>

```typescript
public get(index: number): DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference <a name="DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.partition">partition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.timestampPartition">timestampPartition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.partition"></a>

```typescript
public readonly partition: DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference</a>

---

##### `timestampPartition`<sup>Required</sup> <a name="timestampPartition" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.timestampPartition"></a>

```typescript
public readonly timestampPartition: DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitions</a>

---


### DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference <a name="DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsPartition</a>

---


### DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference <a name="DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition">DataAwsccIotanalyticsDatastoreDatastorePartitionsPartitionsTimestampPartition</a>

---


### DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference <a name="DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3">DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3">DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3</a>

---


### DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference <a name="DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage">DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage">DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3Storage</a>

---


### DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference <a name="DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.customerManagedS3Storage">customerManagedS3Storage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference">DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage">DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedS3Storage`<sup>Required</sup> <a name="customerManagedS3Storage" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.customerManagedS3Storage"></a>

```typescript
public readonly customerManagedS3Storage: DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference">DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageCustomerManagedS3StorageOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage">DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorage</a>

---


### DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference <a name="DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.customerManagedS3">customerManagedS3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference">DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.iotSiteWiseMultiLayerStorage">iotSiteWiseMultiLayerStorage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference">DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.serviceManagedS3">serviceManagedS3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorage">DataAwsccIotanalyticsDatastoreDatastoreStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedS3`<sup>Required</sup> <a name="customerManagedS3" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.customerManagedS3"></a>

```typescript
public readonly customerManagedS3: DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference">DataAwsccIotanalyticsDatastoreDatastoreStorageCustomerManagedS3OutputReference</a>

---

##### `iotSiteWiseMultiLayerStorage`<sup>Required</sup> <a name="iotSiteWiseMultiLayerStorage" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.iotSiteWiseMultiLayerStorage"></a>

```typescript
public readonly iotSiteWiseMultiLayerStorage: DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference">DataAwsccIotanalyticsDatastoreDatastoreStorageIotSiteWiseMultiLayerStorageOutputReference</a>

---

##### `serviceManagedS3`<sup>Required</sup> <a name="serviceManagedS3" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.serviceManagedS3"></a>

```typescript
public readonly serviceManagedS3: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotanalyticsDatastoreDatastoreStorage;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreDatastoreStorage">DataAwsccIotanalyticsDatastoreDatastoreStorage</a>

---


### DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference <a name="DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.jsonConfiguration">jsonConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.parquetConfiguration">parquetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfiguration">DataAwsccIotanalyticsDatastoreFileFormatConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jsonConfiguration`<sup>Required</sup> <a name="jsonConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.jsonConfiguration"></a>

```typescript
public readonly jsonConfiguration: string;
```

- *Type:* string

---

##### `parquetConfiguration`<sup>Required</sup> <a name="parquetConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.parquetConfiguration"></a>

```typescript
public readonly parquetConfiguration: DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotanalyticsDatastoreFileFormatConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfiguration">DataAwsccIotanalyticsDatastoreFileFormatConfiguration</a>

---


### DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference <a name="DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.schemaDefinition">schemaDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaDefinition`<sup>Required</sup> <a name="schemaDefinition" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.schemaDefinition"></a>

```typescript
public readonly schemaDefinition: DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfiguration</a>

---


### DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList <a name="DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.get"></a>

```typescript
public get(index: number): DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference <a name="DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumns</a>

---


### DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference <a name="DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.columns"></a>

```typescript
public readonly columns: DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionColumnsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition">DataAwsccIotanalyticsDatastoreFileFormatConfigurationParquetConfigurationSchemaDefinition</a>

---


### DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference <a name="DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.numberOfDays">numberOfDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.unlimited">unlimited</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriod">DataAwsccIotanalyticsDatastoreRetentionPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberOfDays`<sup>Required</sup> <a name="numberOfDays" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.numberOfDays"></a>

```typescript
public readonly numberOfDays: number;
```

- *Type:* number

---

##### `unlimited`<sup>Required</sup> <a name="unlimited" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.unlimited"></a>

```typescript
public readonly unlimited: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotanalyticsDatastoreRetentionPeriod;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreRetentionPeriod">DataAwsccIotanalyticsDatastoreRetentionPeriod</a>

---


### DataAwsccIotanalyticsDatastoreTagsList <a name="DataAwsccIotanalyticsDatastoreTagsList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIotanalyticsDatastoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotanalyticsDatastoreTagsOutputReference <a name="DataAwsccIotanalyticsDatastoreTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotanalyticsDatastore } from '@cdktn/provider-awscc'

new dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTags">DataAwsccIotanalyticsDatastoreTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotanalyticsDatastoreTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDatastore.DataAwsccIotanalyticsDatastoreTags">DataAwsccIotanalyticsDatastoreTags</a>

---



