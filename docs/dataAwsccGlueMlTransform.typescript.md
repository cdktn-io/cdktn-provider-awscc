# `dataAwsccGlueMlTransform` Submodule <a name="`dataAwsccGlueMlTransform` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueMlTransform <a name="DataAwsccGlueMlTransform" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/glue_ml_transform awscc_glue_ml_transform}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

new dataAwsccGlueMlTransform.DataAwsccGlueMlTransform(scope: Construct, id: string, config: DataAwsccGlueMlTransformConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig">DataAwsccGlueMlTransformConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig">DataAwsccGlueMlTransformConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGlueMlTransform resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isConstruct"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isTerraformElement"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isTerraformDataSource"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.generateConfigForImport"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccGlueMlTransform resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGlueMlTransform to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGlueMlTransform that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/glue_ml_transform#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueMlTransform to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.glueVersion">glueVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.inputRecordTables">inputRecordTables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference">DataAwsccGlueMlTransformInputRecordTablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.numberOfWorkers">numberOfWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.transformEncryption">transformEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference">DataAwsccGlueMlTransformTransformEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.transformId">transformId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.transformParameters">transformParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference">DataAwsccGlueMlTransformTransformParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.workerType">workerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `glueVersion`<sup>Required</sup> <a name="glueVersion" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.glueVersion"></a>

```typescript
public readonly glueVersion: string;
```

- *Type:* string

---

##### `inputRecordTables`<sup>Required</sup> <a name="inputRecordTables" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.inputRecordTables"></a>

```typescript
public readonly inputRecordTables: DataAwsccGlueMlTransformInputRecordTablesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference">DataAwsccGlueMlTransformInputRecordTablesOutputReference</a>

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `numberOfWorkers`<sup>Required</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.numberOfWorkers"></a>

```typescript
public readonly numberOfWorkers: number;
```

- *Type:* number

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `transformEncryption`<sup>Required</sup> <a name="transformEncryption" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.transformEncryption"></a>

```typescript
public readonly transformEncryption: DataAwsccGlueMlTransformTransformEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference">DataAwsccGlueMlTransformTransformEncryptionOutputReference</a>

---

##### `transformId`<sup>Required</sup> <a name="transformId" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.transformId"></a>

```typescript
public readonly transformId: string;
```

- *Type:* string

---

##### `transformParameters`<sup>Required</sup> <a name="transformParameters" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.transformParameters"></a>

```typescript
public readonly transformParameters: DataAwsccGlueMlTransformTransformParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference">DataAwsccGlueMlTransformTransformParametersOutputReference</a>

---

##### `workerType`<sup>Required</sup> <a name="workerType" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.workerType"></a>

```typescript
public readonly workerType: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransform.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueMlTransformConfig <a name="DataAwsccGlueMlTransformConfig" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.Initializer"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

const dataAwsccGlueMlTransformConfig: dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/glue_ml_transform#id DataAwsccGlueMlTransform#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueMlTransformInputRecordTables <a name="DataAwsccGlueMlTransformInputRecordTables" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTables.Initializer"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

const dataAwsccGlueMlTransformInputRecordTables: dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTables = { ... }
```


### DataAwsccGlueMlTransformInputRecordTablesGlueTables <a name="DataAwsccGlueMlTransformInputRecordTablesGlueTables" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTables.Initializer"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

const dataAwsccGlueMlTransformInputRecordTablesGlueTables: dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTables = { ... }
```


### DataAwsccGlueMlTransformTransformEncryption <a name="DataAwsccGlueMlTransformTransformEncryption" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryption.Initializer"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

const dataAwsccGlueMlTransformTransformEncryption: dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryption = { ... }
```


### DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption <a name="DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption.Initializer"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

const dataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption: dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption = { ... }
```


### DataAwsccGlueMlTransformTransformParameters <a name="DataAwsccGlueMlTransformTransformParameters" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParameters.Initializer"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

const dataAwsccGlueMlTransformTransformParameters: dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParameters = { ... }
```


### DataAwsccGlueMlTransformTransformParametersFindMatchesParameters <a name="DataAwsccGlueMlTransformTransformParametersFindMatchesParameters" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParameters.Initializer"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

const dataAwsccGlueMlTransformTransformParametersFindMatchesParameters: dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParameters = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueMlTransformInputRecordTablesGlueTablesList <a name="DataAwsccGlueMlTransformInputRecordTablesGlueTablesList" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.Initializer"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

new dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.get"></a>

```typescript
public get(index: number): DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference <a name="DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

new dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTables">DataAwsccGlueMlTransformInputRecordTablesGlueTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueMlTransformInputRecordTablesGlueTables;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTables">DataAwsccGlueMlTransformInputRecordTablesGlueTables</a>

---


### DataAwsccGlueMlTransformInputRecordTablesOutputReference <a name="DataAwsccGlueMlTransformInputRecordTablesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

new dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.property.glueTables">glueTables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList">DataAwsccGlueMlTransformInputRecordTablesGlueTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTables">DataAwsccGlueMlTransformInputRecordTables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `glueTables`<sup>Required</sup> <a name="glueTables" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.property.glueTables"></a>

```typescript
public readonly glueTables: DataAwsccGlueMlTransformInputRecordTablesGlueTablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesGlueTablesList">DataAwsccGlueMlTransformInputRecordTablesGlueTablesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueMlTransformInputRecordTables;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformInputRecordTables">DataAwsccGlueMlTransformInputRecordTables</a>

---


### DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference <a name="DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

new dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionMode">mlUserDataEncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption">DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `mlUserDataEncryptionMode`<sup>Required</sup> <a name="mlUserDataEncryptionMode" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionMode"></a>

```typescript
public readonly mlUserDataEncryptionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption">DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryption</a>

---


### DataAwsccGlueMlTransformTransformEncryptionOutputReference <a name="DataAwsccGlueMlTransformTransformEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

new dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryption">mlUserDataEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference">DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationName">taskRunSecurityConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryption">DataAwsccGlueMlTransformTransformEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mlUserDataEncryption`<sup>Required</sup> <a name="mlUserDataEncryption" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryption"></a>

```typescript
public readonly mlUserDataEncryption: DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference">DataAwsccGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference</a>

---

##### `taskRunSecurityConfigurationName`<sup>Required</sup> <a name="taskRunSecurityConfigurationName" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationName"></a>

```typescript
public readonly taskRunSecurityConfigurationName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueMlTransformTransformEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformEncryption">DataAwsccGlueMlTransformTransformEncryption</a>

---


### DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference <a name="DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

new dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoff">accuracyCostTradeoff</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels">enforceProvidedLabels</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoff">precisionRecallTradeoff</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName">primaryKeyColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParameters">DataAwsccGlueMlTransformTransformParametersFindMatchesParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accuracyCostTradeoff`<sup>Required</sup> <a name="accuracyCostTradeoff" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoff"></a>

```typescript
public readonly accuracyCostTradeoff: number;
```

- *Type:* number

---

##### `enforceProvidedLabels`<sup>Required</sup> <a name="enforceProvidedLabels" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels"></a>

```typescript
public readonly enforceProvidedLabels: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `precisionRecallTradeoff`<sup>Required</sup> <a name="precisionRecallTradeoff" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoff"></a>

```typescript
public readonly precisionRecallTradeoff: number;
```

- *Type:* number

---

##### `primaryKeyColumnName`<sup>Required</sup> <a name="primaryKeyColumnName" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName"></a>

```typescript
public readonly primaryKeyColumnName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueMlTransformTransformParametersFindMatchesParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParameters">DataAwsccGlueMlTransformTransformParametersFindMatchesParameters</a>

---


### DataAwsccGlueMlTransformTransformParametersOutputReference <a name="DataAwsccGlueMlTransformTransformParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueMlTransform } from '@cdktn/provider-awscc'

new dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.findMatchesParameters">findMatchesParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference">DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.transformType">transformType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParameters">DataAwsccGlueMlTransformTransformParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `findMatchesParameters`<sup>Required</sup> <a name="findMatchesParameters" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.findMatchesParameters"></a>

```typescript
public readonly findMatchesParameters: DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference">DataAwsccGlueMlTransformTransformParametersFindMatchesParametersOutputReference</a>

---

##### `transformType`<sup>Required</sup> <a name="transformType" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.transformType"></a>

```typescript
public readonly transformType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueMlTransformTransformParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueMlTransform.DataAwsccGlueMlTransformTransformParameters">DataAwsccGlueMlTransformTransformParameters</a>

---



