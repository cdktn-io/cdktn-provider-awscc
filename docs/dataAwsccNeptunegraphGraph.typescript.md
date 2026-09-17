# `dataAwsccNeptunegraphGraph` Submodule <a name="`dataAwsccNeptunegraphGraph` Submodule" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNeptunegraphGraph <a name="DataAwsccNeptunegraphGraph" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/neptunegraph_graph awscc_neptunegraph_graph}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.Initializer"></a>

```typescript
import { dataAwsccNeptunegraphGraph } from '@cdktn/provider-awscc'

new dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph(scope: Construct, id: string, config: DataAwsccNeptunegraphGraphConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig">DataAwsccNeptunegraphGraphConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig">DataAwsccNeptunegraphGraphConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNeptunegraphGraph resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.isConstruct"></a>

```typescript
import { dataAwsccNeptunegraphGraph } from '@cdktn/provider-awscc'

dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.isTerraformElement"></a>

```typescript
import { dataAwsccNeptunegraphGraph } from '@cdktn/provider-awscc'

dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.isTerraformDataSource"></a>

```typescript
import { dataAwsccNeptunegraphGraph } from '@cdktn/provider-awscc'

dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.generateConfigForImport"></a>

```typescript
import { dataAwsccNeptunegraphGraph } from '@cdktn/provider-awscc'

dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNeptunegraphGraph resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNeptunegraphGraph to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNeptunegraphGraph that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/neptunegraph_graph#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNeptunegraphGraph to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.deletionProtection">deletionProtection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.graphArn">graphArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.graphId">graphId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.graphName">graphName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.importTask">importTask</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference">DataAwsccNeptunegraphGraphImportTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.provisionedMemory">provisionedMemory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.publicConnectivity">publicConnectivity</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.replicaCount">replicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList">DataAwsccNeptunegraphGraphTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.vectorSearchConfiguration">vectorSearchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference">DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `graphArn`<sup>Required</sup> <a name="graphArn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.graphArn"></a>

```typescript
public readonly graphArn: string;
```

- *Type:* string

---

##### `graphId`<sup>Required</sup> <a name="graphId" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.graphId"></a>

```typescript
public readonly graphId: string;
```

- *Type:* string

---

##### `graphName`<sup>Required</sup> <a name="graphName" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.graphName"></a>

```typescript
public readonly graphName: string;
```

- *Type:* string

---

##### `importTask`<sup>Required</sup> <a name="importTask" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.importTask"></a>

```typescript
public readonly importTask: DataAwsccNeptunegraphGraphImportTaskOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference">DataAwsccNeptunegraphGraphImportTaskOutputReference</a>

---

##### `kmsKeyIdentifier`<sup>Required</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.kmsKeyIdentifier"></a>

```typescript
public readonly kmsKeyIdentifier: string;
```

- *Type:* string

---

##### `provisionedMemory`<sup>Required</sup> <a name="provisionedMemory" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.provisionedMemory"></a>

```typescript
public readonly provisionedMemory: number;
```

- *Type:* number

---

##### `publicConnectivity`<sup>Required</sup> <a name="publicConnectivity" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.publicConnectivity"></a>

```typescript
public readonly publicConnectivity: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.replicaCount"></a>

```typescript
public readonly replicaCount: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.tags"></a>

```typescript
public readonly tags: DataAwsccNeptunegraphGraphTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList">DataAwsccNeptunegraphGraphTagsList</a>

---

##### `vectorSearchConfiguration`<sup>Required</sup> <a name="vectorSearchConfiguration" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.vectorSearchConfiguration"></a>

```typescript
public readonly vectorSearchConfiguration: DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference">DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraph.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNeptunegraphGraphConfig <a name="DataAwsccNeptunegraphGraphConfig" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig.Initializer"></a>

```typescript
import { dataAwsccNeptunegraphGraph } from '@cdktn/provider-awscc'

const dataAwsccNeptunegraphGraphConfig: dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/data-sources/neptunegraph_graph#id DataAwsccNeptunegraphGraph#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNeptunegraphGraphImportTask <a name="DataAwsccNeptunegraphGraphImportTask" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTask"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTask.Initializer"></a>

```typescript
import { dataAwsccNeptunegraphGraph } from '@cdktn/provider-awscc'

const dataAwsccNeptunegraphGraphImportTask: dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTask = { ... }
```


### DataAwsccNeptunegraphGraphImportTaskImportOptions <a name="DataAwsccNeptunegraphGraphImportTaskImportOptions" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptions.Initializer"></a>

```typescript
import { dataAwsccNeptunegraphGraph } from '@cdktn/provider-awscc'

const dataAwsccNeptunegraphGraphImportTaskImportOptions: dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptions = { ... }
```


### DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptune <a name="DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptune" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptune"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptune.Initializer"></a>

```typescript
import { dataAwsccNeptunegraphGraph } from '@cdktn/provider-awscc'

const dataAwsccNeptunegraphGraphImportTaskImportOptionsNeptune: dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptune = { ... }
```


### DataAwsccNeptunegraphGraphTags <a name="DataAwsccNeptunegraphGraphTags" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTags.Initializer"></a>

```typescript
import { dataAwsccNeptunegraphGraph } from '@cdktn/provider-awscc'

const dataAwsccNeptunegraphGraphTags: dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTags = { ... }
```


### DataAwsccNeptunegraphGraphVectorSearchConfiguration <a name="DataAwsccNeptunegraphGraphVectorSearchConfiguration" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfiguration.Initializer"></a>

```typescript
import { dataAwsccNeptunegraphGraph } from '@cdktn/provider-awscc'

const dataAwsccNeptunegraphGraphVectorSearchConfiguration: dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference <a name="DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer"></a>

```typescript
import { dataAwsccNeptunegraphGraph } from '@cdktn/provider-awscc'

new dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveDefaultVertexLabels">preserveDefaultVertexLabels</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveEdgeIds">preserveEdgeIds</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportKmsKeyId">s3ExportKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportPath">s3ExportPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptune">DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptune</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preserveDefaultVertexLabels`<sup>Required</sup> <a name="preserveDefaultVertexLabels" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveDefaultVertexLabels"></a>

```typescript
public readonly preserveDefaultVertexLabels: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `preserveEdgeIds`<sup>Required</sup> <a name="preserveEdgeIds" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveEdgeIds"></a>

```typescript
public readonly preserveEdgeIds: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `s3ExportKmsKeyId`<sup>Required</sup> <a name="s3ExportKmsKeyId" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportKmsKeyId"></a>

```typescript
public readonly s3ExportKmsKeyId: string;
```

- *Type:* string

---

##### `s3ExportPath`<sup>Required</sup> <a name="s3ExportPath" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportPath"></a>

```typescript
public readonly s3ExportPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptune;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptune">DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptune</a>

---


### DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference <a name="DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNeptunegraphGraph } from '@cdktn/provider-awscc'

new dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.property.neptune">neptune</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference">DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptions">DataAwsccNeptunegraphGraphImportTaskImportOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `neptune`<sup>Required</sup> <a name="neptune" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.property.neptune"></a>

```typescript
public readonly neptune: DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference">DataAwsccNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNeptunegraphGraphImportTaskImportOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptions">DataAwsccNeptunegraphGraphImportTaskImportOptions</a>

---


### DataAwsccNeptunegraphGraphImportTaskOutputReference <a name="DataAwsccNeptunegraphGraphImportTaskOutputReference" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.Initializer"></a>

```typescript
import { dataAwsccNeptunegraphGraph } from '@cdktn/provider-awscc'

new dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.blankNodeHandling">blankNodeHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.failOnError">failOnError</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.importOptions">importOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference">DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.maxProvisionedMemory">maxProvisionedMemory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.minProvisionedMemory">minProvisionedMemory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.parquetType">parquetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTask">DataAwsccNeptunegraphGraphImportTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blankNodeHandling`<sup>Required</sup> <a name="blankNodeHandling" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.blankNodeHandling"></a>

```typescript
public readonly blankNodeHandling: string;
```

- *Type:* string

---

##### `failOnError`<sup>Required</sup> <a name="failOnError" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.failOnError"></a>

```typescript
public readonly failOnError: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `importOptions`<sup>Required</sup> <a name="importOptions" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.importOptions"></a>

```typescript
public readonly importOptions: DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference">DataAwsccNeptunegraphGraphImportTaskImportOptionsOutputReference</a>

---

##### `maxProvisionedMemory`<sup>Required</sup> <a name="maxProvisionedMemory" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.maxProvisionedMemory"></a>

```typescript
public readonly maxProvisionedMemory: number;
```

- *Type:* number

---

##### `minProvisionedMemory`<sup>Required</sup> <a name="minProvisionedMemory" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.minProvisionedMemory"></a>

```typescript
public readonly minProvisionedMemory: number;
```

- *Type:* number

---

##### `parquetType`<sup>Required</sup> <a name="parquetType" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.parquetType"></a>

```typescript
public readonly parquetType: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNeptunegraphGraphImportTask;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphImportTask">DataAwsccNeptunegraphGraphImportTask</a>

---


### DataAwsccNeptunegraphGraphTagsList <a name="DataAwsccNeptunegraphGraphTagsList" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.Initializer"></a>

```typescript
import { dataAwsccNeptunegraphGraph } from '@cdktn/provider-awscc'

new dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.get"></a>

```typescript
public get(index: number): DataAwsccNeptunegraphGraphTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNeptunegraphGraphTagsOutputReference <a name="DataAwsccNeptunegraphGraphTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNeptunegraphGraph } from '@cdktn/provider-awscc'

new dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTags">DataAwsccNeptunegraphGraphTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNeptunegraphGraphTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphTags">DataAwsccNeptunegraphGraphTags</a>

---


### DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference <a name="DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccNeptunegraphGraph } from '@cdktn/provider-awscc'

new dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimension">vectorSearchDimension</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfiguration">DataAwsccNeptunegraphGraphVectorSearchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vectorSearchDimension`<sup>Required</sup> <a name="vectorSearchDimension" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimension"></a>

```typescript
public readonly vectorSearchDimension: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNeptunegraphGraphVectorSearchConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNeptunegraphGraph.DataAwsccNeptunegraphGraphVectorSearchConfiguration">DataAwsccNeptunegraphGraphVectorSearchConfiguration</a>

---



