# `dataAwsccGlueDatabase` Submodule <a name="`dataAwsccGlueDatabase` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueDatabase <a name="DataAwsccGlueDatabase" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/glue_database awscc_glue_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.Initializer"></a>

```typescript
import { dataAwsccGlueDatabase } from '@cdktn/provider-awscc'

new dataAwsccGlueDatabase.DataAwsccGlueDatabase(scope: Construct, id: string, config: DataAwsccGlueDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig">DataAwsccGlueDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig">DataAwsccGlueDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGlueDatabase resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.isConstruct"></a>

```typescript
import { dataAwsccGlueDatabase } from '@cdktn/provider-awscc'

dataAwsccGlueDatabase.DataAwsccGlueDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.isTerraformElement"></a>

```typescript
import { dataAwsccGlueDatabase } from '@cdktn/provider-awscc'

dataAwsccGlueDatabase.DataAwsccGlueDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.isTerraformDataSource"></a>

```typescript
import { dataAwsccGlueDatabase } from '@cdktn/provider-awscc'

dataAwsccGlueDatabase.DataAwsccGlueDatabase.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.generateConfigForImport"></a>

```typescript
import { dataAwsccGlueDatabase } from '@cdktn/provider-awscc'

dataAwsccGlueDatabase.DataAwsccGlueDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccGlueDatabase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccGlueDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccGlueDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/glue_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.databaseInput">databaseInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference">DataAwsccGlueDatabaseDatabaseInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Required</sup> <a name="databaseInput" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.databaseInput"></a>

```typescript
public readonly databaseInput: DataAwsccGlueDatabaseDatabaseInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference">DataAwsccGlueDatabaseDatabaseInputOutputReference</a>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueDatabaseConfig <a name="DataAwsccGlueDatabaseConfig" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig.Initializer"></a>

```typescript
import { dataAwsccGlueDatabase } from '@cdktn/provider-awscc'

const dataAwsccGlueDatabaseConfig: dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/glue_database#id DataAwsccGlueDatabase#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueDatabaseDatabaseInput <a name="DataAwsccGlueDatabaseDatabaseInput" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInput.Initializer"></a>

```typescript
import { dataAwsccGlueDatabase } from '@cdktn/provider-awscc'

const dataAwsccGlueDatabaseDatabaseInput: dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInput = { ... }
```


### DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissions <a name="DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissions" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissions.Initializer"></a>

```typescript
import { dataAwsccGlueDatabase } from '@cdktn/provider-awscc'

const dataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissions: dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissions = { ... }
```


### DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal <a name="DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal.Initializer"></a>

```typescript
import { dataAwsccGlueDatabase } from '@cdktn/provider-awscc'

const dataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal: dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal = { ... }
```


### DataAwsccGlueDatabaseDatabaseInputFederatedDatabase <a name="DataAwsccGlueDatabaseDatabaseInputFederatedDatabase" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabase.Initializer"></a>

```typescript
import { dataAwsccGlueDatabase } from '@cdktn/provider-awscc'

const dataAwsccGlueDatabaseDatabaseInputFederatedDatabase: dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabase = { ... }
```


### DataAwsccGlueDatabaseDatabaseInputTargetDatabase <a name="DataAwsccGlueDatabaseDatabaseInputTargetDatabase" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabase.Initializer"></a>

```typescript
import { dataAwsccGlueDatabase } from '@cdktn/provider-awscc'

const dataAwsccGlueDatabaseDatabaseInputTargetDatabase: dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabase = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList <a name="DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer"></a>

```typescript
import { dataAwsccGlueDatabase } from '@cdktn/provider-awscc'

new dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.get"></a>

```typescript
public get(index: number): DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference <a name="DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueDatabase } from '@cdktn/provider-awscc'

new dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference">DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissions">DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference">DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissions">DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissions</a>

---


### DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference <a name="DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueDatabase } from '@cdktn/provider-awscc'

new dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal">DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataLakePrincipalIdentifier`<sup>Required</sup> <a name="dataLakePrincipalIdentifier" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```typescript
public readonly dataLakePrincipalIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal">DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsPrincipal</a>

---


### DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference <a name="DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueDatabase } from '@cdktn/provider-awscc'

new dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabase">DataAwsccGlueDatabaseDatabaseInputFederatedDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueDatabaseDatabaseInputFederatedDatabase;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabase">DataAwsccGlueDatabaseDatabaseInputFederatedDatabase</a>

---


### DataAwsccGlueDatabaseDatabaseInputOutputReference <a name="DataAwsccGlueDatabaseDatabaseInputOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueDatabase } from '@cdktn/provider-awscc'

new dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.createTableDefaultPermissions">createTableDefaultPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList">DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.federatedDatabase">federatedDatabase</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference">DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.locationUri">locationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.targetDatabase">targetDatabase</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference">DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInput">DataAwsccGlueDatabaseDatabaseInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createTableDefaultPermissions`<sup>Required</sup> <a name="createTableDefaultPermissions" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.createTableDefaultPermissions"></a>

```typescript
public readonly createTableDefaultPermissions: DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList">DataAwsccGlueDatabaseDatabaseInputCreateTableDefaultPermissionsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `federatedDatabase`<sup>Required</sup> <a name="federatedDatabase" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.federatedDatabase"></a>

```typescript
public readonly federatedDatabase: DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference">DataAwsccGlueDatabaseDatabaseInputFederatedDatabaseOutputReference</a>

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `targetDatabase`<sup>Required</sup> <a name="targetDatabase" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.targetDatabase"></a>

```typescript
public readonly targetDatabase: DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference">DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueDatabaseDatabaseInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInput">DataAwsccGlueDatabaseDatabaseInput</a>

---


### DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference <a name="DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer"></a>

```typescript
import { dataAwsccGlueDatabase } from '@cdktn/provider-awscc'

new dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabase">DataAwsccGlueDatabaseDatabaseInputTargetDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccGlueDatabaseDatabaseInputTargetDatabase;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueDatabase.DataAwsccGlueDatabaseDatabaseInputTargetDatabase">DataAwsccGlueDatabaseDatabaseInputTargetDatabase</a>

---



