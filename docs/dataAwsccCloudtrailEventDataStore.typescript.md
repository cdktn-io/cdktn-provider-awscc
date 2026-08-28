# `dataAwsccCloudtrailEventDataStore` Submodule <a name="`dataAwsccCloudtrailEventDataStore` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudtrailEventDataStore <a name="DataAwsccCloudtrailEventDataStore" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudtrail_event_data_store awscc_cloudtrail_event_data_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.Initializer"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

new dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore(scope: Construct, id: string, config: DataAwsccCloudtrailEventDataStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig">DataAwsccCloudtrailEventDataStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig">DataAwsccCloudtrailEventDataStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudtrailEventDataStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isConstruct"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isTerraformElement"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isTerraformDataSource"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.generateConfigForImport"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCloudtrailEventDataStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudtrailEventDataStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudtrailEventDataStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudtrail_event_data_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudtrailEventDataStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.advancedEventSelectors">advancedEventSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList">DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.billingMode">billingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.contextKeySelectors">contextKeySelectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList">DataAwsccCloudtrailEventDataStoreContextKeySelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.eventDataStoreArn">eventDataStoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.federationEnabled">federationEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.federationRoleArn">federationRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.ingestionEnabled">ingestionEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.insightsDestination">insightsDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.insightSelectors">insightSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList">DataAwsccCloudtrailEventDataStoreInsightSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.maxEventSize">maxEventSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.multiRegionEnabled">multiRegionEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.organizationEnabled">organizationEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.retentionPeriod">retentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList">DataAwsccCloudtrailEventDataStoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.updatedTimestamp">updatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `advancedEventSelectors`<sup>Required</sup> <a name="advancedEventSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.advancedEventSelectors"></a>

```typescript
public readonly advancedEventSelectors: DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList">DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList</a>

---

##### `billingMode`<sup>Required</sup> <a name="billingMode" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.billingMode"></a>

```typescript
public readonly billingMode: string;
```

- *Type:* string

---

##### `contextKeySelectors`<sup>Required</sup> <a name="contextKeySelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.contextKeySelectors"></a>

```typescript
public readonly contextKeySelectors: DataAwsccCloudtrailEventDataStoreContextKeySelectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList">DataAwsccCloudtrailEventDataStoreContextKeySelectorsList</a>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `eventDataStoreArn`<sup>Required</sup> <a name="eventDataStoreArn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.eventDataStoreArn"></a>

```typescript
public readonly eventDataStoreArn: string;
```

- *Type:* string

---

##### `federationEnabled`<sup>Required</sup> <a name="federationEnabled" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.federationEnabled"></a>

```typescript
public readonly federationEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `federationRoleArn`<sup>Required</sup> <a name="federationRoleArn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.federationRoleArn"></a>

```typescript
public readonly federationRoleArn: string;
```

- *Type:* string

---

##### `ingestionEnabled`<sup>Required</sup> <a name="ingestionEnabled" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.ingestionEnabled"></a>

```typescript
public readonly ingestionEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `insightsDestination`<sup>Required</sup> <a name="insightsDestination" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.insightsDestination"></a>

```typescript
public readonly insightsDestination: string;
```

- *Type:* string

---

##### `insightSelectors`<sup>Required</sup> <a name="insightSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.insightSelectors"></a>

```typescript
public readonly insightSelectors: DataAwsccCloudtrailEventDataStoreInsightSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList">DataAwsccCloudtrailEventDataStoreInsightSelectorsList</a>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `maxEventSize`<sup>Required</sup> <a name="maxEventSize" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.maxEventSize"></a>

```typescript
public readonly maxEventSize: string;
```

- *Type:* string

---

##### `multiRegionEnabled`<sup>Required</sup> <a name="multiRegionEnabled" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.multiRegionEnabled"></a>

```typescript
public readonly multiRegionEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `organizationEnabled`<sup>Required</sup> <a name="organizationEnabled" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.organizationEnabled"></a>

```typescript
public readonly organizationEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.tags"></a>

```typescript
public readonly tags: DataAwsccCloudtrailEventDataStoreTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList">DataAwsccCloudtrailEventDataStoreTagsList</a>

---

##### `terminationProtectionEnabled`<sup>Required</sup> <a name="terminationProtectionEnabled" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.updatedTimestamp"></a>

```typescript
public readonly updatedTimestamp: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors <a name="DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors.Initializer"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

const dataAwsccCloudtrailEventDataStoreAdvancedEventSelectors: dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors = { ... }
```


### DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors <a name="DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors.Initializer"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

const dataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors: dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors = { ... }
```


### DataAwsccCloudtrailEventDataStoreConfig <a name="DataAwsccCloudtrailEventDataStoreConfig" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.Initializer"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

const dataAwsccCloudtrailEventDataStoreConfig: dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudtrail_event_data_store#id DataAwsccCloudtrailEventDataStore#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudtrailEventDataStoreContextKeySelectors <a name="DataAwsccCloudtrailEventDataStoreContextKeySelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectors.Initializer"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

const dataAwsccCloudtrailEventDataStoreContextKeySelectors: dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectors = { ... }
```


### DataAwsccCloudtrailEventDataStoreInsightSelectors <a name="DataAwsccCloudtrailEventDataStoreInsightSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectors.Initializer"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

const dataAwsccCloudtrailEventDataStoreInsightSelectors: dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectors = { ... }
```


### DataAwsccCloudtrailEventDataStoreTags <a name="DataAwsccCloudtrailEventDataStoreTags" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTags.Initializer"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

const dataAwsccCloudtrailEventDataStoreTags: dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList <a name="DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

new dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.get"></a>

```typescript
public get(index: number): DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference <a name="DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

new dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith">endsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo">equalTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith">notEndsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals">notEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith">notStartsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith">startsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endsWith`<sup>Required</sup> <a name="endsWith" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith"></a>

```typescript
public readonly endsWith: string[];
```

- *Type:* string[]

---

##### `equalTo`<sup>Required</sup> <a name="equalTo" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo"></a>

```typescript
public readonly equalTo: string[];
```

- *Type:* string[]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `notEndsWith`<sup>Required</sup> <a name="notEndsWith" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith"></a>

```typescript
public readonly notEndsWith: string[];
```

- *Type:* string[]

---

##### `notEquals`<sup>Required</sup> <a name="notEquals" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals"></a>

```typescript
public readonly notEquals: string[];
```

- *Type:* string[]

---

##### `notStartsWith`<sup>Required</sup> <a name="notStartsWith" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith"></a>

```typescript
public readonly notStartsWith: string[];
```

- *Type:* string[]

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith"></a>

```typescript
public readonly startsWith: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors">DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectors</a>

---


### DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList <a name="DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

new dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.get"></a>

```typescript
public get(index: number): DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference <a name="DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

new dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fieldSelectors">fieldSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList">DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors">DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldSelectors`<sup>Required</sup> <a name="fieldSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.fieldSelectors"></a>

```typescript
public readonly fieldSelectors: DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList">DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsFieldSelectorsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors">DataAwsccCloudtrailEventDataStoreAdvancedEventSelectors</a>

---


### DataAwsccCloudtrailEventDataStoreContextKeySelectorsList <a name="DataAwsccCloudtrailEventDataStoreContextKeySelectorsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.Initializer"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

new dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.get"></a>

```typescript
public get(index: number): DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference <a name="DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

new dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.equalTo">equalTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectors">DataAwsccCloudtrailEventDataStoreContextKeySelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `equalTo`<sup>Required</sup> <a name="equalTo" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.equalTo"></a>

```typescript
public readonly equalTo: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudtrailEventDataStoreContextKeySelectors;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreContextKeySelectors">DataAwsccCloudtrailEventDataStoreContextKeySelectors</a>

---


### DataAwsccCloudtrailEventDataStoreInsightSelectorsList <a name="DataAwsccCloudtrailEventDataStoreInsightSelectorsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.Initializer"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

new dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.get"></a>

```typescript
public get(index: number): DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference <a name="DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

new dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.property.insightType">insightType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectors">DataAwsccCloudtrailEventDataStoreInsightSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `insightType`<sup>Required</sup> <a name="insightType" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.property.insightType"></a>

```typescript
public readonly insightType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudtrailEventDataStoreInsightSelectors;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreInsightSelectors">DataAwsccCloudtrailEventDataStoreInsightSelectors</a>

---


### DataAwsccCloudtrailEventDataStoreTagsList <a name="DataAwsccCloudtrailEventDataStoreTagsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.Initializer"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

new dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCloudtrailEventDataStoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudtrailEventDataStoreTagsOutputReference <a name="DataAwsccCloudtrailEventDataStoreTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudtrailEventDataStore } from '@cdktn/provider-awscc'

new dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTags">DataAwsccCloudtrailEventDataStoreTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudtrailEventDataStoreTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailEventDataStore.DataAwsccCloudtrailEventDataStoreTags">DataAwsccCloudtrailEventDataStoreTags</a>

---



