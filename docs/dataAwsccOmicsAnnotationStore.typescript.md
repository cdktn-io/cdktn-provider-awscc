# `dataAwsccOmicsAnnotationStore` Submodule <a name="`dataAwsccOmicsAnnotationStore` Submodule" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOmicsAnnotationStore <a name="DataAwsccOmicsAnnotationStore" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/omics_annotation_store awscc_omics_annotation_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer"></a>

```typescript
import { dataAwsccOmicsAnnotationStore } from '@cdktn/provider-awscc'

new dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore(scope: Construct, id: string, config: DataAwsccOmicsAnnotationStoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig">DataAwsccOmicsAnnotationStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig">DataAwsccOmicsAnnotationStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOmicsAnnotationStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isConstruct"></a>

```typescript
import { dataAwsccOmicsAnnotationStore } from '@cdktn/provider-awscc'

dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isTerraformElement"></a>

```typescript
import { dataAwsccOmicsAnnotationStore } from '@cdktn/provider-awscc'

dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isTerraformDataSource"></a>

```typescript
import { dataAwsccOmicsAnnotationStore } from '@cdktn/provider-awscc'

dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.generateConfigForImport"></a>

```typescript
import { dataAwsccOmicsAnnotationStore } from '@cdktn/provider-awscc'

dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccOmicsAnnotationStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccOmicsAnnotationStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccOmicsAnnotationStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/omics_annotation_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOmicsAnnotationStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.annotationStoreId">annotationStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.reference">reference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference">DataAwsccOmicsAnnotationStoreReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.sseConfig">sseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference">DataAwsccOmicsAnnotationStoreSseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.storeArn">storeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.storeFormat">storeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.storeOptions">storeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference">DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.storeSizeBytes">storeSizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `annotationStoreId`<sup>Required</sup> <a name="annotationStoreId" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.annotationStoreId"></a>

```typescript
public readonly annotationStoreId: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.reference"></a>

```typescript
public readonly reference: DataAwsccOmicsAnnotationStoreReferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference">DataAwsccOmicsAnnotationStoreReferenceOutputReference</a>

---

##### `sseConfig`<sup>Required</sup> <a name="sseConfig" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.sseConfig"></a>

```typescript
public readonly sseConfig: DataAwsccOmicsAnnotationStoreSseConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference">DataAwsccOmicsAnnotationStoreSseConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `storeArn`<sup>Required</sup> <a name="storeArn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.storeArn"></a>

```typescript
public readonly storeArn: string;
```

- *Type:* string

---

##### `storeFormat`<sup>Required</sup> <a name="storeFormat" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.storeFormat"></a>

```typescript
public readonly storeFormat: string;
```

- *Type:* string

---

##### `storeOptions`<sup>Required</sup> <a name="storeOptions" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.storeOptions"></a>

```typescript
public readonly storeOptions: DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference">DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference</a>

---

##### `storeSizeBytes`<sup>Required</sup> <a name="storeSizeBytes" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.storeSizeBytes"></a>

```typescript
public readonly storeSizeBytes: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStore.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOmicsAnnotationStoreConfig <a name="DataAwsccOmicsAnnotationStoreConfig" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.Initializer"></a>

```typescript
import { dataAwsccOmicsAnnotationStore } from '@cdktn/provider-awscc'

const dataAwsccOmicsAnnotationStoreConfig: dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/omics_annotation_store#id DataAwsccOmicsAnnotationStore#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOmicsAnnotationStoreReference <a name="DataAwsccOmicsAnnotationStoreReference" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReference.Initializer"></a>

```typescript
import { dataAwsccOmicsAnnotationStore } from '@cdktn/provider-awscc'

const dataAwsccOmicsAnnotationStoreReference: dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReference = { ... }
```


### DataAwsccOmicsAnnotationStoreSseConfig <a name="DataAwsccOmicsAnnotationStoreSseConfig" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfig.Initializer"></a>

```typescript
import { dataAwsccOmicsAnnotationStore } from '@cdktn/provider-awscc'

const dataAwsccOmicsAnnotationStoreSseConfig: dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfig = { ... }
```


### DataAwsccOmicsAnnotationStoreStoreOptions <a name="DataAwsccOmicsAnnotationStoreStoreOptions" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptions.Initializer"></a>

```typescript
import { dataAwsccOmicsAnnotationStore } from '@cdktn/provider-awscc'

const dataAwsccOmicsAnnotationStoreStoreOptions: dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptions = { ... }
```


### DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions <a name="DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions.Initializer"></a>

```typescript
import { dataAwsccOmicsAnnotationStore } from '@cdktn/provider-awscc'

const dataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions: dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOmicsAnnotationStoreReferenceOutputReference <a name="DataAwsccOmicsAnnotationStoreReferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.Initializer"></a>

```typescript
import { dataAwsccOmicsAnnotationStore } from '@cdktn/provider-awscc'

new dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.property.referenceArn">referenceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReference">DataAwsccOmicsAnnotationStoreReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `referenceArn`<sup>Required</sup> <a name="referenceArn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.property.referenceArn"></a>

```typescript
public readonly referenceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOmicsAnnotationStoreReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreReference">DataAwsccOmicsAnnotationStoreReference</a>

---


### DataAwsccOmicsAnnotationStoreSseConfigOutputReference <a name="DataAwsccOmicsAnnotationStoreSseConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccOmicsAnnotationStore } from '@cdktn/provider-awscc'

new dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.keyArn">keyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfig">DataAwsccOmicsAnnotationStoreSseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOmicsAnnotationStoreSseConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreSseConfig">DataAwsccOmicsAnnotationStoreSseConfig</a>

---


### DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference <a name="DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccOmicsAnnotationStore } from '@cdktn/provider-awscc'

new dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptions">tsvStoreOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference">DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptions">DataAwsccOmicsAnnotationStoreStoreOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tsvStoreOptions`<sup>Required</sup> <a name="tsvStoreOptions" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptions"></a>

```typescript
public readonly tsvStoreOptions: DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference">DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOmicsAnnotationStoreStoreOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptions">DataAwsccOmicsAnnotationStoreStoreOptions</a>

---


### DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference <a name="DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccOmicsAnnotationStore } from '@cdktn/provider-awscc'

new dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationType">annotationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeader">formatToHeader</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schema">schema</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions">DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotationType`<sup>Required</sup> <a name="annotationType" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationType"></a>

```typescript
public readonly annotationType: string;
```

- *Type:* string

---

##### `formatToHeader`<sup>Required</sup> <a name="formatToHeader" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeader"></a>

```typescript
public readonly formatToHeader: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schema"></a>

```typescript
public readonly schema: StringMapList;
```

- *Type:* cdktn.StringMapList

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsAnnotationStore.DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions">DataAwsccOmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

---



