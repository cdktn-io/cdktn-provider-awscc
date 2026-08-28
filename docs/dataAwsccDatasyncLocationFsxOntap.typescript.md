# `dataAwsccDatasyncLocationFsxOntap` Submodule <a name="`dataAwsccDatasyncLocationFsxOntap` Submodule" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatasyncLocationFsxOntap <a name="DataAwsccDatasyncLocationFsxOntap" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datasync_location_fsx_ontap awscc_datasync_location_fsx_ontap}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap(scope: Construct, id: string, config: DataAwsccDatasyncLocationFsxOntapConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig">DataAwsccDatasyncLocationFsxOntapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig">DataAwsccDatasyncLocationFsxOntapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatasyncLocationFsxOntap resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isConstruct"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isTerraformElement"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isTerraformDataSource"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.generateConfigForImport"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDatasyncLocationFsxOntap resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDatasyncLocationFsxOntap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDatasyncLocationFsxOntap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datasync_location_fsx_ontap#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatasyncLocationFsxOntap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.fsxFilesystemArn">fsxFilesystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.locationArn">locationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.locationUri">locationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.protocol">protocol</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.securityGroupArns">securityGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.storageVirtualMachineArn">storageVirtualMachineArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.subdirectory">subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList">DataAwsccDatasyncLocationFsxOntapTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `fsxFilesystemArn`<sup>Required</sup> <a name="fsxFilesystemArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.fsxFilesystemArn"></a>

```typescript
public readonly fsxFilesystemArn: string;
```

- *Type:* string

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.locationArn"></a>

```typescript
public readonly locationArn: string;
```

- *Type:* string

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.protocol"></a>

```typescript
public readonly protocol: DataAwsccDatasyncLocationFsxOntapProtocolOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolOutputReference</a>

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.securityGroupArns"></a>

```typescript
public readonly securityGroupArns: string[];
```

- *Type:* string[]

---

##### `storageVirtualMachineArn`<sup>Required</sup> <a name="storageVirtualMachineArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.storageVirtualMachineArn"></a>

```typescript
public readonly storageVirtualMachineArn: string;
```

- *Type:* string

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.tags"></a>

```typescript
public readonly tags: DataAwsccDatasyncLocationFsxOntapTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList">DataAwsccDatasyncLocationFsxOntapTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntap.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatasyncLocationFsxOntapConfig <a name="DataAwsccDatasyncLocationFsxOntapConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationFsxOntapConfig: dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/datasync_location_fsx_ontap#id DataAwsccDatasyncLocationFsxOntap#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatasyncLocationFsxOntapProtocol <a name="DataAwsccDatasyncLocationFsxOntapProtocol" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocol"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocol.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationFsxOntapProtocol: dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocol = { ... }
```


### DataAwsccDatasyncLocationFsxOntapProtocolNfs <a name="DataAwsccDatasyncLocationFsxOntapProtocolNfs" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfs.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationFsxOntapProtocolNfs: dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfs = { ... }
```


### DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions <a name="DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions: dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions = { ... }
```


### DataAwsccDatasyncLocationFsxOntapProtocolSmb <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmb" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmb.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationFsxOntapProtocolSmb: dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmb = { ... }
```


### DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig: dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig = { ... }
```


### DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig: dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig = { ... }
```


### DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig: dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig = { ... }
```


### DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions: dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions = { ... }
```


### DataAwsccDatasyncLocationFsxOntapTags <a name="DataAwsccDatasyncLocationFsxOntapTags" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTags.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationFsxOntapTags: dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference <a name="DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions">DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions">DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptions</a>

---


### DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference <a name="DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfs">DataAwsccDatasyncLocationFsxOntapProtocolNfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolNfsMountOptionsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationFsxOntapProtocolNfs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfs">DataAwsccDatasyncLocationFsxOntapProtocolNfs</a>

---


### DataAwsccDatasyncLocationFsxOntapProtocolOutputReference <a name="DataAwsccDatasyncLocationFsxOntapProtocolOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.smb">smb</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocol">DataAwsccDatasyncLocationFsxOntapProtocol</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.nfs"></a>

```typescript
public readonly nfs: DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolNfsOutputReference</a>

---

##### `smb`<sup>Required</sup> <a name="smb" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.smb"></a>

```typescript
public readonly smb: DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationFsxOntapProtocol;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocol">DataAwsccDatasyncLocationFsxOntapProtocol</a>

---


### DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig">DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfig</a>

---


### DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretAccessRoleArn">secretAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretAccessRoleArn`<sup>Required</sup> <a name="secretAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```typescript
public readonly secretAccessRoleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig">DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfig</a>

---


### DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig">DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig">DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfig</a>

---


### DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions">DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions">DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptions</a>

---


### DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference <a name="DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.managedSecretConfig">managedSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmb">DataAwsccDatasyncLocationFsxOntapProtocolSmb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cmkSecretConfig`<sup>Required</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.cmkSecretConfig"></a>

```typescript
public readonly cmkSecretConfig: DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbCmkSecretConfigOutputReference</a>

---

##### `customSecretConfig`<sup>Required</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.customSecretConfig"></a>

```typescript
public readonly customSecretConfig: DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbCustomSecretConfigOutputReference</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `managedSecretConfig`<sup>Required</sup> <a name="managedSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.managedSecretConfig"></a>

```typescript
public readonly managedSecretConfig: DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbManagedSecretConfigOutputReference</a>

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference">DataAwsccDatasyncLocationFsxOntapProtocolSmbMountOptionsOutputReference</a>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationFsxOntapProtocolSmb;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapProtocolSmb">DataAwsccDatasyncLocationFsxOntapProtocolSmb</a>

---


### DataAwsccDatasyncLocationFsxOntapTagsList <a name="DataAwsccDatasyncLocationFsxOntapTagsList" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDatasyncLocationFsxOntapTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatasyncLocationFsxOntapTagsOutputReference <a name="DataAwsccDatasyncLocationFsxOntapTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationFsxOntap } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTags">DataAwsccDatasyncLocationFsxOntapTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationFsxOntapTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationFsxOntap.DataAwsccDatasyncLocationFsxOntapTags">DataAwsccDatasyncLocationFsxOntapTags</a>

---



