# `dataAwsccEntityresolutionSchemaMapping` Submodule <a name="`dataAwsccEntityresolutionSchemaMapping` Submodule" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEntityresolutionSchemaMapping <a name="DataAwsccEntityresolutionSchemaMapping" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/entityresolution_schema_mapping awscc_entityresolution_schema_mapping}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionSchemaMapping } from '@cdktn/provider-awscc'

new dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping(scope: Construct, id: string, config: DataAwsccEntityresolutionSchemaMappingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig">DataAwsccEntityresolutionSchemaMappingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig">DataAwsccEntityresolutionSchemaMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEntityresolutionSchemaMapping resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isConstruct"></a>

```typescript
import { dataAwsccEntityresolutionSchemaMapping } from '@cdktn/provider-awscc'

dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isTerraformElement"></a>

```typescript
import { dataAwsccEntityresolutionSchemaMapping } from '@cdktn/provider-awscc'

dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isTerraformDataSource"></a>

```typescript
import { dataAwsccEntityresolutionSchemaMapping } from '@cdktn/provider-awscc'

dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.generateConfigForImport"></a>

```typescript
import { dataAwsccEntityresolutionSchemaMapping } from '@cdktn/provider-awscc'

dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEntityresolutionSchemaMapping resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEntityresolutionSchemaMapping to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEntityresolutionSchemaMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/entityresolution_schema_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEntityresolutionSchemaMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.hasWorkflows">hasWorkflows</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.mappedInputFields">mappedInputFields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList">DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.schemaArn">schemaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList">DataAwsccEntityresolutionSchemaMappingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hasWorkflows`<sup>Required</sup> <a name="hasWorkflows" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.hasWorkflows"></a>

```typescript
public readonly hasWorkflows: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `mappedInputFields`<sup>Required</sup> <a name="mappedInputFields" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.mappedInputFields"></a>

```typescript
public readonly mappedInputFields: DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList">DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList</a>

---

##### `schemaArn`<sup>Required</sup> <a name="schemaArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.schemaArn"></a>

```typescript
public readonly schemaArn: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.tags"></a>

```typescript
public readonly tags: DataAwsccEntityresolutionSchemaMappingTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList">DataAwsccEntityresolutionSchemaMappingTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMapping.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEntityresolutionSchemaMappingConfig <a name="DataAwsccEntityresolutionSchemaMappingConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionSchemaMapping } from '@cdktn/provider-awscc'

const dataAwsccEntityresolutionSchemaMappingConfig: dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/entityresolution_schema_mapping#id DataAwsccEntityresolutionSchemaMapping#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEntityresolutionSchemaMappingMappedInputFields <a name="DataAwsccEntityresolutionSchemaMappingMappedInputFields" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFields.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionSchemaMapping } from '@cdktn/provider-awscc'

const dataAwsccEntityresolutionSchemaMappingMappedInputFields: dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFields = { ... }
```


### DataAwsccEntityresolutionSchemaMappingTags <a name="DataAwsccEntityresolutionSchemaMappingTags" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTags.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionSchemaMapping } from '@cdktn/provider-awscc'

const dataAwsccEntityresolutionSchemaMappingTags: dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList <a name="DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionSchemaMapping } from '@cdktn/provider-awscc'

new dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.get"></a>

```typescript
public get(index: number): DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference <a name="DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionSchemaMapping } from '@cdktn/provider-awscc'

new dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashed">hashed</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKey">matchKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subType">subType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFields">DataAwsccEntityresolutionSchemaMappingMappedInputFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `hashed`<sup>Required</sup> <a name="hashed" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.hashed"></a>

```typescript
public readonly hashed: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `matchKey`<sup>Required</sup> <a name="matchKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.matchKey"></a>

```typescript
public readonly matchKey: string;
```

- *Type:* string

---

##### `subType`<sup>Required</sup> <a name="subType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.subType"></a>

```typescript
public readonly subType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEntityresolutionSchemaMappingMappedInputFields;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingMappedInputFields">DataAwsccEntityresolutionSchemaMappingMappedInputFields</a>

---


### DataAwsccEntityresolutionSchemaMappingTagsList <a name="DataAwsccEntityresolutionSchemaMappingTagsList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionSchemaMapping } from '@cdktn/provider-awscc'

new dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEntityresolutionSchemaMappingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEntityresolutionSchemaMappingTagsOutputReference <a name="DataAwsccEntityresolutionSchemaMappingTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEntityresolutionSchemaMapping } from '@cdktn/provider-awscc'

new dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTags">DataAwsccEntityresolutionSchemaMappingTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEntityresolutionSchemaMappingTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionSchemaMapping.DataAwsccEntityresolutionSchemaMappingTags">DataAwsccEntityresolutionSchemaMappingTags</a>

---



