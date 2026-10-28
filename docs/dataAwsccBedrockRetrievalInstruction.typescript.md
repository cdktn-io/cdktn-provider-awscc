# `dataAwsccBedrockRetrievalInstruction` Submodule <a name="`dataAwsccBedrockRetrievalInstruction` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockRetrievalInstruction <a name="DataAwsccBedrockRetrievalInstruction" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/bedrock_retrieval_instruction awscc_bedrock_retrieval_instruction}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer"></a>

```typescript
import { dataAwsccBedrockRetrievalInstruction } from '@cdktn/provider-awscc'

new dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction(scope: Construct, id: string, config: DataAwsccBedrockRetrievalInstructionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig">DataAwsccBedrockRetrievalInstructionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig">DataAwsccBedrockRetrievalInstructionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockRetrievalInstruction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isConstruct"></a>

```typescript
import { dataAwsccBedrockRetrievalInstruction } from '@cdktn/provider-awscc'

dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformElement"></a>

```typescript
import { dataAwsccBedrockRetrievalInstruction } from '@cdktn/provider-awscc'

dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformDataSource"></a>

```typescript
import { dataAwsccBedrockRetrievalInstruction } from '@cdktn/provider-awscc'

dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport"></a>

```typescript
import { dataAwsccBedrockRetrievalInstruction } from '@cdktn/provider-awscc'

dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBedrockRetrievalInstruction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockRetrievalInstruction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockRetrievalInstruction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/bedrock_retrieval_instruction#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockRetrievalInstruction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.customerEncryptionKeyArn">customerEncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.instruction">instruction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference">DataAwsccBedrockRetrievalInstructionInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.lastTransitionStatus">lastTransitionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.retrievalInstructionId">retrievalInstructionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList">DataAwsccBedrockRetrievalInstructionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `customerEncryptionKeyArn`<sup>Required</sup> <a name="customerEncryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.customerEncryptionKeyArn"></a>

```typescript
public readonly customerEncryptionKeyArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.instruction"></a>

```typescript
public readonly instruction: DataAwsccBedrockRetrievalInstructionInstructionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference">DataAwsccBedrockRetrievalInstructionInstructionOutputReference</a>

---

##### `lastTransitionStatus`<sup>Required</sup> <a name="lastTransitionStatus" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.lastTransitionStatus"></a>

```typescript
public readonly lastTransitionStatus: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retrievalInstructionId`<sup>Required</sup> <a name="retrievalInstructionId" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.retrievalInstructionId"></a>

```typescript
public readonly retrievalInstructionId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.tags"></a>

```typescript
public readonly tags: DataAwsccBedrockRetrievalInstructionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList">DataAwsccBedrockRetrievalInstructionTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstruction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockRetrievalInstructionConfig <a name="DataAwsccBedrockRetrievalInstructionConfig" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockRetrievalInstruction } from '@cdktn/provider-awscc'

const dataAwsccBedrockRetrievalInstructionConfig: dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/bedrock_retrieval_instruction#id DataAwsccBedrockRetrievalInstruction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockRetrievalInstructionInstruction <a name="DataAwsccBedrockRetrievalInstructionInstruction" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstruction.Initializer"></a>

```typescript
import { dataAwsccBedrockRetrievalInstruction } from '@cdktn/provider-awscc'

const dataAwsccBedrockRetrievalInstructionInstruction: dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstruction = { ... }
```


### DataAwsccBedrockRetrievalInstructionTags <a name="DataAwsccBedrockRetrievalInstructionTags" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTags.Initializer"></a>

```typescript
import { dataAwsccBedrockRetrievalInstruction } from '@cdktn/provider-awscc'

const dataAwsccBedrockRetrievalInstructionTags: dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockRetrievalInstructionInstructionOutputReference <a name="DataAwsccBedrockRetrievalInstructionInstructionOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockRetrievalInstruction } from '@cdktn/provider-awscc'

new dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.answerFormat">answerFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.answerPolicy">answerPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.persona">persona</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.retrievalGuidance">retrievalGuidance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstruction">DataAwsccBedrockRetrievalInstructionInstruction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `answerFormat`<sup>Required</sup> <a name="answerFormat" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.answerFormat"></a>

```typescript
public readonly answerFormat: string;
```

- *Type:* string

---

##### `answerPolicy`<sup>Required</sup> <a name="answerPolicy" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.answerPolicy"></a>

```typescript
public readonly answerPolicy: string;
```

- *Type:* string

---

##### `persona`<sup>Required</sup> <a name="persona" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.persona"></a>

```typescript
public readonly persona: string;
```

- *Type:* string

---

##### `retrievalGuidance`<sup>Required</sup> <a name="retrievalGuidance" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.retrievalGuidance"></a>

```typescript
public readonly retrievalGuidance: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstructionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockRetrievalInstructionInstruction;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionInstruction">DataAwsccBedrockRetrievalInstructionInstruction</a>

---


### DataAwsccBedrockRetrievalInstructionTagsList <a name="DataAwsccBedrockRetrievalInstructionTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer"></a>

```typescript
import { dataAwsccBedrockRetrievalInstruction } from '@cdktn/provider-awscc'

new dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockRetrievalInstructionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockRetrievalInstructionTagsOutputReference <a name="DataAwsccBedrockRetrievalInstructionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockRetrievalInstruction } from '@cdktn/provider-awscc'

new dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTags">DataAwsccBedrockRetrievalInstructionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockRetrievalInstructionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockRetrievalInstruction.DataAwsccBedrockRetrievalInstructionTags">DataAwsccBedrockRetrievalInstructionTags</a>

---



