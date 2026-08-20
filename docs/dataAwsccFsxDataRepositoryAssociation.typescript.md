# `dataAwsccFsxDataRepositoryAssociation` Submodule <a name="`dataAwsccFsxDataRepositoryAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccFsxDataRepositoryAssociation <a name="DataAwsccFsxDataRepositoryAssociation" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/fsx_data_repository_association awscc_fsx_data_repository_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer"></a>

```typescript
import { dataAwsccFsxDataRepositoryAssociation } from '@cdktn/provider-awscc'

new dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation(scope: Construct, id: string, config: DataAwsccFsxDataRepositoryAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig">DataAwsccFsxDataRepositoryAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig">DataAwsccFsxDataRepositoryAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccFsxDataRepositoryAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isConstruct"></a>

```typescript
import { dataAwsccFsxDataRepositoryAssociation } from '@cdktn/provider-awscc'

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isTerraformElement"></a>

```typescript
import { dataAwsccFsxDataRepositoryAssociation } from '@cdktn/provider-awscc'

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsccFsxDataRepositoryAssociation } from '@cdktn/provider-awscc'

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.generateConfigForImport"></a>

```typescript
import { dataAwsccFsxDataRepositoryAssociation } from '@cdktn/provider-awscc'

dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccFsxDataRepositoryAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccFsxDataRepositoryAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccFsxDataRepositoryAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/fsx_data_repository_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccFsxDataRepositoryAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.batchImportMetaDataOnCreate">batchImportMetaDataOnCreate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.dataRepositoryPath">dataRepositoryPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.fileSystemPath">fileSystemPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.importedFileChunkSize">importedFileChunkSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference">DataAwsccFsxDataRepositoryAssociationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList">DataAwsccFsxDataRepositoryAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `batchImportMetaDataOnCreate`<sup>Required</sup> <a name="batchImportMetaDataOnCreate" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.batchImportMetaDataOnCreate"></a>

```typescript
public readonly batchImportMetaDataOnCreate: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dataRepositoryPath`<sup>Required</sup> <a name="dataRepositoryPath" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.dataRepositoryPath"></a>

```typescript
public readonly dataRepositoryPath: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `fileSystemPath`<sup>Required</sup> <a name="fileSystemPath" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.fileSystemPath"></a>

```typescript
public readonly fileSystemPath: string;
```

- *Type:* string

---

##### `importedFileChunkSize`<sup>Required</sup> <a name="importedFileChunkSize" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.importedFileChunkSize"></a>

```typescript
public readonly importedFileChunkSize: number;
```

- *Type:* number

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.s3"></a>

```typescript
public readonly s3: DataAwsccFsxDataRepositoryAssociationS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference">DataAwsccFsxDataRepositoryAssociationS3OutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.tags"></a>

```typescript
public readonly tags: DataAwsccFsxDataRepositoryAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList">DataAwsccFsxDataRepositoryAssociationTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccFsxDataRepositoryAssociationConfig <a name="DataAwsccFsxDataRepositoryAssociationConfig" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.Initializer"></a>

```typescript
import { dataAwsccFsxDataRepositoryAssociation } from '@cdktn/provider-awscc'

const dataAwsccFsxDataRepositoryAssociationConfig: dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/fsx_data_repository_association#id DataAwsccFsxDataRepositoryAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccFsxDataRepositoryAssociationS3 <a name="DataAwsccFsxDataRepositoryAssociationS3" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3.Initializer"></a>

```typescript
import { dataAwsccFsxDataRepositoryAssociation } from '@cdktn/provider-awscc'

const dataAwsccFsxDataRepositoryAssociationS3: dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3 = { ... }
```


### DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy <a name="DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy.Initializer"></a>

```typescript
import { dataAwsccFsxDataRepositoryAssociation } from '@cdktn/provider-awscc'

const dataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy: dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy = { ... }
```


### DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy <a name="DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy.Initializer"></a>

```typescript
import { dataAwsccFsxDataRepositoryAssociation } from '@cdktn/provider-awscc'

const dataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy: dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy = { ... }
```


### DataAwsccFsxDataRepositoryAssociationTags <a name="DataAwsccFsxDataRepositoryAssociationTags" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTags.Initializer"></a>

```typescript
import { dataAwsccFsxDataRepositoryAssociation } from '@cdktn/provider-awscc'

const dataAwsccFsxDataRepositoryAssociationTags: dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference <a name="DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxDataRepositoryAssociation } from '@cdktn/provider-awscc'

new dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy">DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy">DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicy</a>

---


### DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference <a name="DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxDataRepositoryAssociation } from '@cdktn/provider-awscc'

new dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy">DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy">DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicy</a>

---


### DataAwsccFsxDataRepositoryAssociationS3OutputReference <a name="DataAwsccFsxDataRepositoryAssociationS3OutputReference" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxDataRepositoryAssociation } from '@cdktn/provider-awscc'

new dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicy">autoExportPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference">DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicy">autoImportPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference">DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3">DataAwsccFsxDataRepositoryAssociationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoExportPolicy`<sup>Required</sup> <a name="autoExportPolicy" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicy"></a>

```typescript
public readonly autoExportPolicy: DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference">DataAwsccFsxDataRepositoryAssociationS3AutoExportPolicyOutputReference</a>

---

##### `autoImportPolicy`<sup>Required</sup> <a name="autoImportPolicy" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicy"></a>

```typescript
public readonly autoImportPolicy: DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference">DataAwsccFsxDataRepositoryAssociationS3AutoImportPolicyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxDataRepositoryAssociationS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationS3">DataAwsccFsxDataRepositoryAssociationS3</a>

---


### DataAwsccFsxDataRepositoryAssociationTagsList <a name="DataAwsccFsxDataRepositoryAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.Initializer"></a>

```typescript
import { dataAwsccFsxDataRepositoryAssociation } from '@cdktn/provider-awscc'

new dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccFsxDataRepositoryAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccFsxDataRepositoryAssociationTagsOutputReference <a name="DataAwsccFsxDataRepositoryAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccFsxDataRepositoryAssociation } from '@cdktn/provider-awscc'

new dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTags">DataAwsccFsxDataRepositoryAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccFsxDataRepositoryAssociationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccFsxDataRepositoryAssociation.DataAwsccFsxDataRepositoryAssociationTags">DataAwsccFsxDataRepositoryAssociationTags</a>

---



