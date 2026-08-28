# `dataAwsccGlueTableOptimizer` Submodule <a name="`dataAwsccGlueTableOptimizer` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueTableOptimizer <a name="DataAwsccGlueTableOptimizer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_table_optimizer awscc_glue_table_optimizer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.Initializer"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

new dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer(scope: Construct, id: string, config: DataAwsccGlueTableOptimizerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig">DataAwsccGlueTableOptimizerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig">DataAwsccGlueTableOptimizerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGlueTableOptimizer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isConstruct"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isTerraformElement"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isTerraformDataSource"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.generateConfigForImport"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccGlueTableOptimizer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGlueTableOptimizer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGlueTableOptimizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_table_optimizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueTableOptimizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.tableOptimizerConfiguration">tableOptimizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `tableOptimizerConfiguration`<sup>Required</sup> <a name="tableOptimizerConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.tableOptimizerConfiguration"></a>

```typescript
public readonly tableOptimizerConfiguration: DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueTableOptimizerConfig <a name="DataAwsccGlueTableOptimizerConfig" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.Initializer"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

const dataAwsccGlueTableOptimizerConfig: dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/glue_table_optimizer#id DataAwsccGlueTableOptimizer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueTableOptimizerTableOptimizerConfiguration <a name="DataAwsccGlueTableOptimizerTableOptimizerConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfiguration.Initializer"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

const dataAwsccGlueTableOptimizerTableOptimizerConfiguration: dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfiguration = { ... }
```


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration.Initializer"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

const dataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration: dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration = { ... }
```


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration.Initializer"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

const dataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration: dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration = { ... }
```


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration.Initializer"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

const dataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration: dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration = { ... }
```


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration.Initializer"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

const dataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration: dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration = { ... }
```


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration.Initializer"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

const dataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration: dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration = { ... }
```


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration.Initializer"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

const dataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration: dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration = { ... }
```


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration.Initializer"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

const dataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration: dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

new dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.deleteFileThreshold">deleteFileThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.minInputFiles">minInputFiles</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.strategy">strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteFileThreshold`<sup>Required</sup> <a name="deleteFileThreshold" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.deleteFileThreshold"></a>

```typescript
public readonly deleteFileThreshold: number;
```

- *Type:* number

---

##### `minInputFiles`<sup>Required</sup> <a name="minInputFiles" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.minInputFiles"></a>

```typescript
public readonly minInputFiles: number;
```

- *Type:* number

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.strategy"></a>

```typescript
public readonly strategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfiguration</a>

---


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

new dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.icebergConfiguration">icebergConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icebergConfiguration`<sup>Required</sup> <a name="icebergConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.icebergConfiguration"></a>

```typescript
public readonly icebergConfiguration: DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationIcebergConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfiguration</a>

---


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

new dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDays">orphanFileRetentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `orphanFileRetentionPeriodInDays`<sup>Required</sup> <a name="orphanFileRetentionPeriodInDays" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.orphanFileRetentionPeriodInDays"></a>

```typescript
public readonly orphanFileRetentionPeriodInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfiguration</a>

---


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

new dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfiguration">icebergConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icebergConfiguration`<sup>Required</sup> <a name="icebergConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.icebergConfiguration"></a>

```typescript
public readonly icebergConfiguration: DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationIcebergConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfiguration</a>

---


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

new dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.compactionConfiguration">compactionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfiguration">orphanFileDeletionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.retentionConfiguration">retentionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compactionConfiguration`<sup>Required</sup> <a name="compactionConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.compactionConfiguration"></a>

```typescript
public readonly compactionConfiguration: DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationCompactionConfigurationOutputReference</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `orphanFileDeletionConfiguration`<sup>Required</sup> <a name="orphanFileDeletionConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.orphanFileDeletionConfiguration"></a>

```typescript
public readonly orphanFileDeletionConfiguration: DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationOrphanFileDeletionConfigurationOutputReference</a>

---

##### `retentionConfiguration`<sup>Required</sup> <a name="retentionConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.retentionConfiguration"></a>

```typescript
public readonly retentionConfiguration: DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueTableOptimizerTableOptimizerConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfiguration</a>

---


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

new dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFiles">cleanExpiredFiles</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetain">numberOfSnapshotsToRetain</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDays">snapshotRetentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cleanExpiredFiles`<sup>Required</sup> <a name="cleanExpiredFiles" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.cleanExpiredFiles"></a>

```typescript
public readonly cleanExpiredFiles: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `numberOfSnapshotsToRetain`<sup>Required</sup> <a name="numberOfSnapshotsToRetain" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.numberOfSnapshotsToRetain"></a>

```typescript
public readonly numberOfSnapshotsToRetain: number;
```

- *Type:* number

---

##### `snapshotRetentionPeriodInDays`<sup>Required</sup> <a name="snapshotRetentionPeriodInDays" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.snapshotRetentionPeriodInDays"></a>

```typescript
public readonly snapshotRetentionPeriodInDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfiguration</a>

---


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

new dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfiguration">icebergConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icebergConfiguration`<sup>Required</sup> <a name="icebergConfiguration" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.icebergConfiguration"></a>

```typescript
public readonly icebergConfiguration: DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference">DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationIcebergConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationRetentionConfiguration</a>

---


### DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference <a name="DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueTableOptimizer } from '@cdktn/provider-awscc'

new dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.glueConnectionName">glueConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `glueConnectionName`<sup>Required</sup> <a name="glueConnectionName" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.glueConnectionName"></a>

```typescript
public readonly glueConnectionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueTableOptimizer.DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration">DataAwsccGlueTableOptimizerTableOptimizerConfigurationVpcConfiguration</a>

---



